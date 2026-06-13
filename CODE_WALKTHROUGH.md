# Code Walkthrough

Ye file code ko easy language me explain karne ke liye hai. Isko read karne se project ka flow aur logic clear hoga.

**New Addition:** Theme context with localStorage implementation ab code walkthrough me add ho gaya!

---

## Full Flow

```txt
main.jsx
  -> App.jsx
    -> ThemeProvider (NEW!)
      -> Dashboard.jsx
        -> Layout.jsx
          -> BackgroundBlur
          -> Sidebar
          -> Navbar
          -> Dashboard content
```

Dashboard content me:

```txt
KPI cards
Revenue chart
User growth chart
Sales chart
Pie chart
Recent transactions table
Activity feed
Team members
Settings cards
```

---

## main.jsx

File:

```txt
src/main.jsx
```

Code:

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
```

**Update:** Ab `ThemeProvider` ke andar App wrap hai! Iska matlab poora app ko theme context mil jaata hai.

Meaning:

- HTML me `root` id wala div find hota hai
- React us div ke andar app render karta hai
- `ThemeProvider` app ko wrap karta hai (theme context available ho jaati hai)
- `App` component start hota hai

---

## ThemeContext.jsx (NEW!)

File:

```txt
src/context/ThemeContext.jsx
```

**Purpose:** Poore app me theme state manage karna aur localStorage se save/load karna.

**How it works:**

1. **On App Start:**

   ```javascript
   const savedTheme = localStorage.getItem("theme");
   if (savedTheme) {
     setCurrentTheme(savedTheme); // Save kiya hua theme load ho
   } else {
     // First time - system preference check karo
     const prefersDark = window.matchMedia(
       "(prefers-color-scheme: dark)",
     ).matches;
     setCurrentTheme(prefersDark ? "dark" : "light");
   }
   ```

2. **On Toggle:**

   ```javascript
   const toggleTheme = () => {
     setCurrentTheme((prevTheme) => {
       const newTheme = prevTheme === "light" ? "dark" : "light";
       localStorage.setItem("theme", newTheme); // Save in localStorage
       return newTheme;
     });
   };
   ```

3. **Apply Class:**
   ```javascript
   useEffect(() => {
     document.documentElement.classList.remove("light", "dark");
     document.documentElement.classList.add(currentTheme);
   }, [currentTheme]);
   ```

**localStorage kya hai:**
Browser ka storage jo data permanently save karta hai. Page refresh/close karke bhi data rehta hai.

**Used in Layout:**
Layout component theme changes detect karta hai aur smooth transition apply karta hai (400ms).

---

## App.jsx

File:

```txt
src/App.jsx
```

App me abhi sirf Dashboard render ho raha hai.

```jsx
function App() {
  return <Dashboard />;
}
```

Future me routing add karni ho to yahi se multiple pages handle ho sakte hain.

---

## Dashboard.jsx

File:

```txt
src/pages/Dashboard.jsx
```

Ye main page hai. Isme data import hota hai:

```jsx
import { kpiMetrics, revenueData, recentTransactions } from "../data/analytics";
```

Fir components ko data diya jata hai:

```jsx
<RevenueLineChart data={revenueData} />
<DataTable data={recentTransactions} columns={transactionColumns} />
```

Yaha important concept `props` hai.

Example:

```jsx
<KPICard title={metric.title} value={metric.value} />
```

Yaha parent component child ko data bhej raha hai.

---

## Layout.jsx

File:

```txt
src/components/layout/Layout.jsx
```

Layout ka kaam common structure banana hai.

```jsx
<BackgroundBlur />
<Sidebar />
<Navbar />
<motion.main>{children}</motion.main>
```

`children` ka matlab hai Layout ke andar jo page content hai.

Why useful:

- sidebar/navbar har page par same reh sakte hain
- page ka actual content alag ho sakta hai

---

## BackgroundBlur.jsx

File:

```txt
src/components/ui/BgBlur.jsx
```

Image import:

```jsx
import bgImage from "../../assets/img/bgimg.jpg";
```

Inline style:

```jsx
style={{
  backgroundImage: `url(${bgImage})`,
  filter: "blur(6px) saturate(1.12)",
}}
```

Why inline style:

- image JS import se aa rahi hai
- imported image ko `backgroundImage` me direct lagana easy hota hai

Layering:

```css
z-0  -> background
z-10 -> main content
```

---

## KPI Card Logic

File:

```txt
src/components/cards/KPICard.jsx
```

Props:

```jsx
const KPICard = ({ title, value, change, isPositive, icon, bgColor, borderColor }) => {
```

Ye values parent se aati hain.

Number extract:

```jsx
const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
```

Meaning:

- string me se sirf numbers nikalo
- example `"12.5L"` se `125` nikal sakta hai
- fir count animation me use hota hai

Count animation:

```jsx
const animatedValue = useCountUp(numericValue, 1500);
```

Icon:

```jsx
const Icon = LucideIcons[icon];
```

Yaha icon string se actual Lucide icon component milta hai.

Trend:

```jsx
isPositive ? text - emerald - 600 : text - red - 600;
```

Positive hai to green, negative hai to red.

---

## Recharts Logic

File:

```txt
src/components/charts/Charts.jsx
```

Recharts ka basic pattern:

```jsx
<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <XAxis />
    <YAxis />
    <Tooltip />
    <Line dataKey="revenue" />
  </LineChart>
</ResponsiveContainer>
```

Main parts:

```txt
ResponsiveContainer -> chart ko responsive banata hai
LineChart           -> chart type
XAxis / YAxis       -> chart ki axes
Tooltip             -> hover info
Legend              -> label
Line / Area / Bar   -> actual graph drawing
dataKey             -> data object se value choose karta hai
```

Example data:

```js
{ name: "Jan", revenue: 4000, target: 4500 }
```

If chart me:

```jsx
<Line dataKey="revenue" />
```

To Recharts `revenue` value ko line me plot karega.

---

## Line Chart

Used for revenue trend.

```jsx
<Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
```

Meaning:

- `type="monotone"` smooth line
- `dataKey="revenue"` revenue field plot karo
- `stroke` line color
- `strokeWidth` line thickness

Second line:

```jsx
<Line dataKey="target" stroke="#FACC15" />
```

Isse same chart me target line bhi aa jati hai.

---

## Area Chart

Used for user growth.

Area chart line jaisa hota hai, but line ke neeche color fill hota hai.

Gradient:

```jsx
<linearGradient id="colorUsers">
  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
</linearGradient>
```

Area:

```jsx
<Area dataKey="users" stroke="#3B82F6" fill="url(#colorUsers)" />
```

Meaning:

- users field plot karo
- line blue
- neeche gradient fill

---

## Bar Chart

Used for sales performance.

```jsx
<Bar dataKey="sales" fill="#3B82F6" radius={[8, 8, 0, 0]} />
<Bar dataKey="revenue" fill="#FACC15" radius={[8, 8, 0, 0]} />
```

Meaning:

- sales ka blue bar
- revenue ka yellow bar
- top corners rounded

---

## Pie Chart

Used for category distribution.

```jsx
<Pie data={data} dataKey="value" outerRadius={100}>
```

Meaning:

- `value` field se slice size decide hota hai
- `outerRadius` pie ka size hai

Slice colors:

```jsx
<Cell fill={COLORS[index % COLORS.length]} />
```

Ye har slice ko color deta hai.

---

## DataTable Logic

File:

```txt
src/components/tables/DataTable.jsx
```

State:

```jsx
const [sortConfig, setSortConfig] = useState(null);
const [currentPage, setCurrentPage] = useState(1);
```

Sorting:

```jsx
const handleSort = (key) => {
  setSortConfig({
    key,
    direction:
      sortConfig?.key === key && sortConfig?.direction === "asc"
        ? "desc"
        : "asc",
  });
};
```

Meaning:

- column click par key set hoti hai
- same column dubara click par asc/desc toggle hota hai

Actual sort:

```jsx
a[sortConfig.key];
```

Yaha dynamic property access ho raha hai.

Pagination:

```jsx
const itemsPerPage = 5;
const startIndex = (currentPage - 1) * itemsPerPage;
const paginatedData = sortedData.slice(startIndex, startIndex + itemsPerPage);
```

Meaning:

- ek page par 5 rows
- current page ke hisaab se rows cut hoti hain

---

## Navbar Dropdown Logic

File:

```txt
src/components/navbar/Navbar.jsx
```

Dropdown state:

```jsx
const notificationDropdown = useDropdown();
```

Button:

```jsx
onClick={notificationDropdown.toggle}
```

Dropdown only open tab render hota hai:

```jsx
{
  notificationDropdown.isOpen && <motion.div>...</motion.div>;
}
```

`AnimatePresence` close animation ko bhi smooth banata hai.

---

## Sidebar Logic

File:

```txt
src/components/sidebar/Sidebar.jsx
```

Active item:

```jsx
const [activeItem, setActiveItem] = useState(0);
```

Button click:

```jsx
onClick={() => setActiveItem(index)}
```

Mobile check:

```jsx
const { isMobile } = useResponsive();
```

Mobile par sidebar drawer ki tarah slide hota hai.

---

## Custom Hooks

File:

```txt
src/hooks/useHooks.js
```

### useResponsive

Window width check karta hai:

```jsx
setIsMobile(width < 768);
setIsTablet(width >= 768 && width < 1024);
setIsDesktop(width >= 1024);
```

Resize listener:

```jsx
window.addEventListener("resize", handleResize);
return () => window.removeEventListener("resize", handleResize);
```

Return wala cleanup hota hai.

### useSidebar

Mobile par sidebar close, desktop par open.

```jsx
if (isMobile) setIsSidebarOpen(false);
else setIsSidebarOpen(true);
```

### useCountUp

Number ko 0 se target tak animate karta hai.

```jsx
const steps = 60;
const increment = target / steps;
```

### useDropdown

Open/close/toggle functions return karta hai.

```jsx
return { isOpen, toggle, close, open };
```

### useClickOutside

Dropdown ke bahar click ho to close function call karta hai.

---

## Framer Motion Variants

File:

```txt
src/animations/motionVariants.js
```

Example:

```js
hidden: { opacity: 0, y: 20 }
visible: { opacity: 1, y: 0 }
```

Meaning:

- starting me invisible and thoda neeche
- visible state me normal position

Hover card:

```js
hover: {
  y: -8;
}
```

Card hover par 8px upar move hota hai.

---

## Styling Pattern

Current card style:

```css
bg-white/30 backdrop-blur-sm border border-slate-300/50 shadow-2xl rounded-xl
```

Readable table style:

```css
bg-white/60 backdrop-blur-xl border border-slate-300/50
```

Text:

```css
text-slate-950
text-slate-800
text-slate-700
```

---

## Common Mistakes

```txt
1. dataKey galat likha to chart blank ho sakta hai
2. map me key na do to React warning aati hai
3. z-index galat ho to background hide ho sakta hai
4. state update direct mutate nahi karni
5. mobile responsive classes check karna zaroori hai
```

---

## Short Summary

Project ka main pattern simple hai:

```txt
data file -> page -> component props -> UI
```

React me ye pattern bahut common hai. Is project ko samajhne ke baad dashboard type apps banana easy ho jata hai.

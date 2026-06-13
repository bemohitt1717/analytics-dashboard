# Design System Notes

Ye file simple notes ke liye hai, taki project ka color theme samajhne me easy rahe.

**Important Update:** Ab dashboard me **dark/light theme toggle** feature hai! localStorage se theme save rahta hai aur 400ms smooth transitions hote hain.

---

## Current Theme System

Dashboard ab dono modes me kaam karta hai:

**Light Mode (Default):**

- Soft background image
- White transparent cards
- Dark readable text
- Blue primary color

**Dark Mode (New!):**

- Dark slate background
- Dark semi-transparent cards
- Light readable text
- Yellow/Slate highlights

---

## Dark Mode Implementation

File:

```txt
src/context/ThemeContext.jsx
```

**How it works:**

1. localStorage me theme save hota hai
2. First time system preference check hota hai
3. `document.documentElement` class `"dark"` or `"light"` get karta hai
4. Tailwind `dark:` prefix automatically dark mode colors apply karta hai

**All components** me dark classes hain:

- `dark:bg-slate-900/80`
- `dark:border-slate-700/50`
- `dark:text-slate-100`
- `dark:hover:bg-slate-700/50`

---

## Light Mode - Colors

### Background

```txt
Image background: bgimg.jpg
Overlay: white 10%
```

Ye background pure page ke piche hai.

### Light Glass Surfaces

Cards aur panels mostly transparent white use kar rahe hain:

```css
bg-white/30
bg-white/60
bg-slate-100/30
bg-slate-100/50
backdrop-blur-sm
backdrop-blur-md
backdrop-blur-xl
```

### Text Colors - Light Mode

```css
text-black      -> card headings
text-slate-950  -> main page heading
text-slate-900  -> important small headings
text-slate-800  -> normal readable text
text-slate-700  -> secondary text
text-slate-500  -> less important text
```

---

## Dark Mode - Colors (New!)

### Dark Background

```css
dark:from-slate-950
dark:to-slate-900
dark:bg-slate-950/80
```

Dark mode me background dark slate gradient hota hai.

### Dark Glass Surfaces

Dark mode cards:

```css
dark:bg-slate-900/80
dark:border-slate-700/50
backdrop-blur-md
```

### Text Colors - Dark Mode

```css
dark:text-slate-100 -> headings and main text
dark:text-slate-200 -> normal readable text
dark:text-slate-300 -> secondary text
dark:text-slate-400 -> less important text
dark:text-slate-500 -> very subtle text
```

### Dark Mode Accents

Borders aur highlights dark mode me:

```css
dark:border-slate-700/50
dark:border-slate-600/50
dark:hover:bg-slate-700/50
dark:hover:text-slate-300
```

---

## Primary Color

Blue is the main action/highlight color (light mode) + Yellow highlights (dark mode).

```txt
Light Mode Blue:  #3B82F6
Dark Mode: Yellow for special elements
Tailwind: blue-500 / blue-600 / yellow-400
```

Used for:

- buttons and actions
- active sidebar items
- chart lines
- icons and links
- selected states

Classes:

```css
Light:  bg-blue-600 text-blue-600 border-blue-500/30
Dark:   dark:bg-blue-600 dark:text-yellow-400 dark:border-yellow-500
```

---

## Component Styling Pattern

Jab new component banate ho, ye pattern follow karo:

```jsx
className="
  bg-white/30 dark:bg-slate-900/80
  border border-slate-300/50 dark:border-slate-700/50
  text-slate-800 dark:text-slate-100
  hover:bg-slate-300/50 dark:hover:bg-slate-700/50
  backdrop-blur-md
  rounded-xl
  transition-colors duration-400
"
```

**Breakdown:**

- `transition-colors duration-400` -> smooth 400ms color change on theme toggle
- `dark:` prefix -> dark mode specific styles
- Same structure hmesha follow karo consistency ke liye

---

## Animation + Theme

File:

```txt
src/animations/motionVariants.js
```

**New variant:** `themeTransitionVariants`

Jab theme change hota hai:

- 400ms ease-in-out transition
- Smooth color change
- Ekdum se flashy nahi lagta

---

## Color Combinations (Reference)

bg-blue-600/20
hover:bg-blue-300/50

````

---

## Accent Colors

Ye colors charts, badges aur status ke liye use ho rahe hain.

```txt
Yellow:  #FACC15
Emerald: #10B981
Red:     #EF4444
Purple:  #8B5CF6
Slate:   #475569 / #94a3b8
````

Use:

```txt
Yellow  -> target line, pending status
Emerald -> success / positive growth
Red     -> failed / negative growth
Purple  -> fourth KPI card / pie chart slice
Slate   -> borders, chart grid, secondary text
```

---

## Borders

Current theme me borders dark nahi hain. Mostly light slate borders use hue hain.

```css
border border-slate-300/50
border-slate-300/30
border-slate-700/50
border-blue-500/30
```

Normal card ke liye:

```css
border border-slate-300/50
```

Active item ke liye:

```css
border border-blue-500/30
```

---

## Shadows

Project me mostly `shadow-2xl` use hua hai. Isse cards background se alag dikhte hain.

```css
shadow-2xl
```

Framer Motion hover shadow:

```js
boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)";
boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)";
```

Simple meaning:

- normal card me soft shadow
- hover par card thoda upar aur shadow strong

---

## Cards

Cards ka current style:

```css
bg-white/30 backdrop-blur-sm border border-slate-300/50 shadow-2xl rounded-xl
```

Charts ka card:

```css
bg-white/30 backdrop-blur-md border border-slate-300/50 shadow-2xl rounded-xl
```

Table ka card thoda zyada solid hai:

```css
bg-white/60 backdrop-blur-xl border border-slate-300/50 shadow-2xl rounded-xl
```

Reason:

- cards transparent hain taki background image visible rahe
- table me text zyada hota hai, isliye uska background thoda strong rakha hai

---

## Navbar

Navbar current style:

```css
bg-slate-100/30 backdrop-blur-sm border-b border-slate-300/50 shadow-2xl
```

Search box:

```css
bg-white border border-slate-700/50
```

Dropdown:

```css
bg-slate-100 backdrop-blur-lg border border-slate-300/50
```

Navbar ko fully white nahi rakha, warna background image completely hide ho jaati.

---

## Sidebar

Sidebar current style:

```css
bg-slate-100/50 backdrop-blur-sm border-r border-slate-300/50 shadow-2xl
```

Active menu:

```css
bg-blue-600/20 text-gray-800 border border-blue-500/30
```

Hover menu:

```css
hover:bg-blue-300/50
hover:text-black
```

Sidebar bhi transparent rakha hai taki background ka feel continue rahe.

---

## KPI Cards

KPI cards data se colors lete hain.

File:

```txt
src/data/analytics.js
```

Colors:

```js
from-blue-500/10 to-blue-600/10
from-yellow-500/10 to-yellow-600/10
from-emerald-500/10 to-emerald-600/10
from-purple-500/10 to-purple-600/10
```

Card base:

```css
bg-slate-100/30 bg-gradient-to-br backdrop-blur-xl
```

Positive change:

```css
text-emerald-600
```

Negative change:

```css
text-red-600
```

---

## Charts

Charts Recharts library se ban rahe hain.

Chart colors:

```txt
Revenue line: #3B82F6
Target line:  #FACC15
Grid:         #475569
Axis:         #94a3b8
```

Pie chart colors:

```js
["#3B82F6", "#FACC15", "#10B981", "#8B5CF6"];
```

Tooltip:

```css
bg-slate-100
border border-slate-500/50
```

Note:

Chart card light hai, but grid color slate rakha hai taki graph visible rahe.

---

## Status Badges

Badges abhi thode dark-style colors use karte hain, but light background par bhi readable hain.

```txt
Completed  -> Emerald
Pending    -> Yellow
Failed     -> Red
Processing -> Blue
```

Classes:

```css
bg-emerald-500/20 text-emerald-400 border-emerald-500/30
bg-yellow-500/20 text-yellow-400 border-yellow-500/30
bg-red-500/20 text-red-400 border-red-500/30
bg-blue-500/20 text-blue-400 border-blue-500/30
```

Future me agar aur light karna ho to text ko `emerald-700`, `yellow-700`, `red-700`, `blue-700` kar sakte hain.

---

## Buttons

Primary button:

```css
bg-blue-600 hover:bg-blue-700 text-white
```

Secondary light buttons:

```css
bg-gray-300/60 hover:bg-gray-100/60 text-black
bg-slate-300/60 hover:bg-slate-100 text-black
```

Toggle on:

```css
bg-blue-500
```

Toggle off:

```css
bg-slate-200
```

---

## Opacity Guide

Simple rule:

```txt
/10 -> very light overlay
/20 -> subtle active color
/30 -> glass card background
/50 -> border / hover / sidebar
/60 -> more readable card/table
```

Examples:

```css
bg-white/10      /* background overlay */
bg-white/30      /* glass card */
bg-white/60      /* stronger card */
border-slate-300/50
hover:bg-blue-300/50
```

---

## Quick Copy Classes

Glass card:

```css
bg-white/30 backdrop-blur-sm border border-slate-300/50 shadow-2xl rounded-xl p-6
```

Readable card/table:

```css
bg-white/60 backdrop-blur-xl border border-slate-300/50 shadow-2xl rounded-xl
```

Navbar:

```css
bg-slate-100/30 backdrop-blur-sm border-b border-slate-300/50 shadow-2xl
```

Sidebar:

```css
bg-slate-100/50 backdrop-blur-sm border-r border-slate-300/50 shadow-2xl
```

Main heading:

```css
text-slate-950 font-bold
```

Normal text:

```css
text-slate-800
```

Secondary text:

```css
text-slate-700
```

Primary button:

```css
bg-blue-600 hover:bg-blue-700 text-white border border-blue-500/50
```

---

## What Not To Do

Ab project light theme me hai, isliye ye avoid karna:

```css
bg-slate-950
bg-slate-900
text-white
border-slate-700/50
```

Ye classes tabhi use karo jab koi dark popup/card specifically banana ho.

Normal dashboard cards me light glass style hi use karna.

---

## Small Checklist

New component banate time ye check karna:

```txt
[ ] background image hide to nahi ho rahi?
[ ] card ka bg white/30 ya white/60 hai?
[ ] text dark hai?
[ ] border slate-300/50 hai?
[ ] action color blue hai?
[ ] success emerald aur error red hai?
[ ] mobile me text readable hai?
```

---

## Short Summary

Is dashboard ka theme ab dark nahi hai.
Current style light gradient background + glass cards hai.
Main colors white, slate, blue, yellow, emerald, red aur purple hain.
Text dark rakha hai kyuki background light hai.
Cards transparent rakhe hain taki piche wali image visible rahe.

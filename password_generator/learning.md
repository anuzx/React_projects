steps to setup tailwind using bun :
<br>
```
bun add -d tailwindcss postcss autoprefixer
```
<br>

```
bunx tailwindcss-cli init -p
```

```
bun add -d @tailwindcss/postcss
```

<br>
postcss.js file :

```
export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```
<br>

tailwind.config.js file:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

useCallback :
<br>
<h3>is a react hook that lets you cache a function definitoin between re-renders
<br>
useCallback(fn , dependencies)
</h3>
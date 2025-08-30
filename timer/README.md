# Timer Component

## Overview
Simple timer for countdowns or stopwatches, with start, pause, and reset functionality.

## Features
- Start, pause, reset controls
- Configurable duration
- Display formatted time

## Approach
1. **Interval Handling:** Use `setInterval` for updates.
2. **State:** Track remaining time.
3. **Control Logic:** Handle button actions.

## Usage
```jsx
<Timer duration={60} />
```

## File Structure
- `Timer.js` : Main logic
- `Timer.css` : Styles

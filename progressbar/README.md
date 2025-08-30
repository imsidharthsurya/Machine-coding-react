# Progress Bar

## Overview
Visual indicator for task or operation progress (e.g., uploads, loading).

## Features
- Animated progress
- Custom labels
- Color/status variants

## Approach
1. **Percent Calculation:** Accept value/total as props.
2. **Styling:** Smooth width transition.
3. **Labels:** Show text or icons for status.

## Usage
```jsx
<ProgressBar value={50} total={100} label="Loading..." />
```

## File Structure
- `ProgressBar.js` : Component logic
- `ProgressBar.css` : Styles

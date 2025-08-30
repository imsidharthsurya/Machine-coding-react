# Tab Component

## Overview
Displays content in tabbed sections for easy switching between views.

## Features
- Keyboard navigation
- Dynamic tab content
- Animated transitions

## Approach
1. **State:** Track active tab.
2. **Accessibility:** ARIA roles and keyboard support.
3. **Content:** Render children based on active tab.

## Usage
```jsx
<Tabs tabs={[{label: 'Tab 1', content: <Tab1/>}]} />
```

## File Structure
- `Tabs.js` : Main logic
- `Tabs.css` : Styles

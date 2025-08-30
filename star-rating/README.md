# Star Rating Component

## Overview
Allows users to rate items using clickable stars, with support for fractional ratings.

## Features
- Hover and select rating
- Custom max stars
- Read-only or interactive mode

## Approach
1. **Render Logic:** Array map for stars.
2. **Events:** Mouse hover and click listeners.
3. **Fractional Support:** Render partial stars.

## Usage
```jsx
<StarRating value={4.5} max={5} onChange={setRating} />
```

## File Structure
- `StarRating.js` : Logic
- `StarRating.css` : Styles

# Carousel Component

## Overview
A Carousel cycles through a series of images or content panels, ideal for displaying featured items, testimonials, or image galleries.

## Features
- Auto-play and manual navigation
- Looping and pause-on-hover
- Responsive design

## Approach
1. **State:** Track current slide index in state.
2. **Controls:** Next/Previous buttons and indicators.
3. **Performance:** Debounce transitions for smoothness.

## Usage
```jsx
<Carousel items={[<img src="1.jpg"/>, <img src="2.jpg"/>]} />
```

## File Structure
- `Carousel.js` : Main component
- `Carousel.css` : Styles

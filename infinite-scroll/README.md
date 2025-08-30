# Infinite Scroll

## Overview
Loads more data as the user scrolls, commonly used for timelines or feeds.

## Features
- Fetch-as-you-scroll
- Loader indicator
- Error handling

## Approach
1. **Intersection Observer:** Detect when user nears bottom.
2. **API Integration:** Fetch next batch of data.
3. **State:** Append new items to list.

## Usage
```jsx
<InfiniteScroll fetchData={fetchMoreItems} />
```

## File Structure
- `InfiniteScroll.js` : Logic
- `InfiniteScroll.css` : Styles

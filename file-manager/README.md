# File Manager

## Overview
A mini file manager UI for uploading, deleting, and organizing local files.

## Features
- Upload, rename, delete files
- Nested folder structure
- Drag-and-drop support

## Approach
1. **Tree Structure:** Use nested objects to represent folders/files.
2. **State:** Track selected and active files.
3. **Events:** Handle file operations using callbacks.

## Usage
```jsx
<FileManager initialFiles={[{name: 'file.txt', type: 'file'}]} />
```

## File Structure
- `FileManager.js` : Main logic
- `FileManager.css` : Styles
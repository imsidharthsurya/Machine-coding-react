# OTP Input

## Overview
A user-friendly input for One Time Passwords (OTP), typically used in authentication workflows.

## Features
- Auto-focus next input
- Paste entire OTP
- Restrict input to numbers

## Approach
1. **Input Array:** Render multiple input fields.
2. **Focus Management:** Automatically move cursor.
3. **Validation:** Aggregate and validate OTP.

## Usage
```jsx
<OtpInput length={6} onComplete={handleOtp} />
```

## File Structure
- `OtpInput.js` : Main logic
- `OtpInput.css` : Styles

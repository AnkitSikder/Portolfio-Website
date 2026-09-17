# Login Screen

## Purpose
The authentication gateway for the Jio-bp Incident Management System (IMS). It provides a secure method for all roles (RO, ASR, HO) to access the system and their respective dashboards.

## Role
Universal (All Users)

## Primary User Goal
To successfully authenticate and gain access to the IMS portal.

## Navigation
- Not applicable (Entry point)

## Information Architecture
- Branding / Value Proposition (Left side)
- Authentication Methods (Password / OTP)
- Login Form
- Help & Recovery links

## UI Components
- **Tabs:** Password Login / Mobile OTP Login
- **Inputs:** Username/Email/Phone, Password (with visibility toggle), Captcha, Mobile Number, OTP digits.
- **Buttons:** Log in, Send OTP, Resend OTP.
- **Visuals:** Left-side promotional graphic, Captcha image.

## Primary Actions
- Enter Credentials and submit (Password Login)
- Request and enter OTP (Mobile OTP Login)

## Secondary Actions
- Toggle Password Visibility
- Refresh Captcha
- Forgot Password
- Access Help

## Data Visualization
- None

## Interaction Patterns
- **Tab Switching:** Seamlessly switch between Password and OTP flows without page reload.
- **Auto-advance OTP:** Focus automatically moves to the next input field as digits are entered.
- **Validation:** Inline error messages (e.g., "Invalid credentials", "Invalid OTP").

## Responsive Behavior
- Layout stacks vertically on mobile devices, with the left branding panel likely hidden or minimized to prioritize the login form.

## Related Screens
- RO Dashboard
- ASR Dashboard
- HO Dashboard

## Screenshot Assets
- `screens/login/01-login-password.png`
- `screens/login/02-login-password-filled.png`
- `screens/login/03-login-password-error.png`
- `screens/login/04-login-otp.png`
- `screens/login/05-login-otp-verification.png`
- `screens/login/06-login-otp-entered.png`
- `screens/login/09-login-success.png`

## Video Assets
- `videos/login/login-flow.mp4`

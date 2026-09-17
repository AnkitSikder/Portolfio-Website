# Login Flow

The authentication flow for the Jio-bp Incident Management System ensures secure access for various employee roles.

## Key Screens
*   **01-login-password.png**: The initial login screen asking for username and password. Features the Jio-bp branding.
*   **02-login-password-filled.png**: The state with credentials and captcha filled.
*   **03-login-password-error.png**: Inline validation showing an error message for incorrect credentials, keeping the user in context.
*   **04-login-otp.png**: The alternative OTP login method, accessible via the tab switch.
*   **05-login-otp-verification.png**: The screen requesting the OTP after entering the mobile number.
*   **06-login-otp-entered.png**: OTP input UI using segmented input boxes for clarity.
*   **07-login-success.png**: The global loader indicating successful authentication before redirecting to the role-based dashboard.

## Core Interactions
*   **Tabbed Interface**: Users can seamlessly switch between Password and OTP login methods.
*   **Inline Validation**: Errors are displayed immediately below the respective input fields rather than in intrusive alerts.
*   **Security Measures**: Captcha integration on the password flow and segmented input on the OTP flow align with enterprise security standards.

## UI/UX Notes
*   Clean, minimalist design focused on getting the user authenticated quickly.
*   Use of the brand's primary color (Jio-bp green) for primary actions.

# backend_intern_assignment

### Project Description: User Login API with Email and OTP Authentication

#### Project Overview
The goal of this project is to develop a secure and efficient API system for user authentication using email and One-Time Password (OTP). This system will enable users to log in by providing their email address, receiving an OTP, and verifying the OTP to gain access.

#### Objectives
1. **User Authentication**: Create a seamless authentication process that uses email and OTP.
2. **Security**: Ensure the authentication process is secure and resilient against common threats such as brute-force attacks and unauthorized access.

#### Key Features
1. **Email Registration**:
   - Endpoint to register a new user with an email address.
   - Validate the email format and check for duplicates.

2. **OTP Generation and Sending**:
   - Endpoint to request an OTP.
   - Generate a secure OTP.
   - Send the OTP to the user's registered email address.

3. **OTP Verification**:
   - Endpoint to verify the OTP.
   - Authenticate the user if the OTP is valid and within the time limit.

4. **Session Management**:
   - Generate and manage user sessions upon successful OTP verification.
   - Provide secure session tokens for authenticated users.

5. **Security Measures**:
   - Implement rate limiting on OTP requests to prevent abuse.
   - Use secure algorithms for OTP generation and hashing.
   - Ensure encrypted communication between client and server.

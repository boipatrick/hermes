# Expo Troubleshooting Guide

## Issues Fixed:

1. **Missing Asset**: Fixed `image-1.png` reference to use existing `onboarding1.png`
2. **App Configuration**: Updated `app.json` with proper Expo configuration
3. **Scripts**: Added better npm scripts for different scenarios

## How to Run Your App:

### Option 1: Expo Go (Recommended for testing)
```bash
npm start
# or
expo start
```
Then scan the QR code with Expo Go app on your phone.

### Option 2: Development Build
```bash
npm run start-dev
# or
expo start --dev-client
```

### Option 3: Clear Cache and Start
```bash
npm run clear
# or
expo start --clear
```

## Common Issues and Solutions:

### 1. Metro Bundler Issues
- Clear cache: `expo start --clear`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

### 2. Firebase Issues
- Make sure you have the correct Firebase configuration
- For Expo Go, some Firebase features might not work (use development build)

### 3. Navigation Issues
- Ensure all screen components are properly exported
- Check that screen names match in navigation

### 4. Asset Issues
- Make sure all referenced assets exist in the assets folder
- Use correct file extensions

## Next Steps:

1. Try running `npm start` first
2. If that doesn't work, try `npm run clear`
3. For Firebase features, consider creating a development build
4. Make sure you have Expo Go installed on your device

## Development Build (if needed):
```bash
npx expo install --fix
eas build --profile development --platform android
# or
eas build --profile development --platform ios
``` 
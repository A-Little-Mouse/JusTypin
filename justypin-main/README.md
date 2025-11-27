# JusTypin

A modern, interactive typing speed test application to help you improve your typing skills.

## Features

- **Multiple Time Options**: Choose between 15, 30, 45, or 60 seconds tests
- **Real-time Statistics**: View your WPM (Words Per Minute) as you type
- **Performance Metrics**: Track mistakes, CPM (Characters Per Minute), and WPM
- **Visual Keyboard**: See which keys you're pressing in real-time
- **Random Text Generation**: Practice with different text each time

## How to Use

1. Open `index.html` in your web browser
2. Click on the time display to change the test duration (15s, 30s, 45s, or 60s)
3. Start typing in the yellow text area
4. Your statistics will update in real-time
5. When the time is up, a popup will show your final results
6. Press Tab to restart with new text, or use the navigation buttons

## Navigation

- **Home Button**: Completely refresh the page
- **Reset Button**: Reset the current test with new text
- **Results Button**: Show your current performance statistics

## Keyboard Shortcuts

- **Tab**: Refresh the typing test with new text
- **Escape**: Close the results popup

## Development

This project uses vanilla JavaScript, HTML, and CSS. No external libraries or frameworks are required.

### Project Structure

- `index.html`: Main HTML structure
- `SwifZ.css`: Styling for the application
- `typing-test.js`: Core typing test functionality
- `keyboard.js`: Virtual keyboard functionality
- `paragraph.js`: Text generation for typing tests
- `popup.js`: Results popup functionality
- `refresh.js`: Reset and refresh functionality

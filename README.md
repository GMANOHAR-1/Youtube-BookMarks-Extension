# YouTube Bookmark Extension

This Chrome extension allows users to bookmark YouTube videos at specific timestamps, making it easier to revisit and organize key moments in their favorite videos.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Development](#development)
 

## Overview

The **YouTube Bookmark Extension** enhances your YouTube experience by enabling you to bookmark timestamps in a video with a single click. Each bookmark includes a title, the video ID, and the exact timestamp, allowing you to jump back to that moment instantly.

This extension is built to be user-friendly, lightweight, and easy to use, providing seamless interaction with YouTube.

## Features

- **Bookmark Timestamps**: Bookmark any moment in a YouTube video by clicking a button.
- **View Bookmarks**: Display a list of all saved bookmarks for the current video.
- **Jump to Timestamp**: Click on any saved bookmark to directly jump to the specified timestamp.
- **Persistent Storage**: Bookmarks are stored locally and persist between sessions.
- **Remove Bookmarks**: Easily delete bookmarks you no longer need.
- **Responsive UI**: Optimized for both desktop and mobile versions of YouTube.

## Technologies Used

- **HTML/CSS**: Used to build the popup interface.
- **JavaScript (ES6)**: Core logic for capturing video ID, timestamps, and communicating with YouTube's DOM.
- **Chrome Extensions API**: Utilized to interact with the browser and store data.
- **Local Storage**: Bookmarks are stored in the browser's local storage.
- **React (Optional)**: You can use React for the popup interface to make it dynamic and scalable.
- **Webpack (Optional)**: Bundler for modularizing and managing the extension's assets (JavaScript, CSS).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GMANOHAR-1/youtube-bookmark-extension.git
2. Open Chrome and go to `chrome://extensions/`.

3. Enable **Developer mode** by toggling the switch in the upper right.

4. Click **Load unpacked** and select the folder where you cloned the repository.

5. The extension should now be visible in your Chrome extensions list and ready for use.

## Usage

1. Navigate to a YouTube video in your browser.

2. Click the YouTube Bookmark Extension icon in the Chrome toolbar.

3. Click the "Bookmark" button to save the current timestamp of the video.

4. View all your saved bookmarks in the popup, which shows the video title and timestamp.

5. Click on any bookmark to jump directly to that point in the video.

6. You can also remove any bookmark by clicking the "Remove" button next to it.

## Development

1. Clone the repository:
   ```bash
   git clone https://github.com/GMANOHAR-1/youtube-bookmark-extension.git
2. Follow the same steps as in the installation process to load the unpacked extension into Chrome.

3. Modify the source files (e.g., popup.js, content.js, background.js) to implement new features or fix bugs.

4. After making changes, reload the extension by returning to chrome://extensions/ and clicking the Reload button for the YouTube Bookmark Extension.

5. Test the updated extension on YouTube to ensure your changes work as expected.


## Folder Structure

The project is structured as follows:

```plaintext
📦youtube-bookmark-extension
 ┣ 📂public
 ┃ ┗ 📜manifest.json        # Chrome extension manifest file
 ┣ 📂src
 ┃ ┣ 📂components           # Optional: React components (if using React)
 ┃ ┣ 📜background.js        # Handles background processes like saving bookmarks
 ┃ ┣ 📜content.js           # Script injected into YouTube pages to interact with the DOM
 ┃ ┣ 📜popup.js             # Logic for the popup interface
 ┃ ┗ 📜popup.html           # HTML for the popup interface
 ┣ 📂styles
 ┃ ┗ 📜popup.css            # Styling for the popup



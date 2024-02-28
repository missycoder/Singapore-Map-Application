# Singapore Map Application

This web application displays a map of Singapore and allows users to toggle between various points of interest, such as HDB locations, malls, and nature spots. The data for these locations is loaded dynamically from JSON files and displayed as clickable markers on the map.

## Technologies Used

- **Leaflet**: A leading open-source JavaScript library for interactive maps, used to render the map and markers.
- **Axios**: A Promise-based HTTP client for making asynchronous requests, used for fetching JSON data.
- **HTML/CSS**: The web application's structure and styling are implemented using standard HTML and CSS.
- **JavaScript**: The application logic is written in JavaScript, allowing for dynamic interactions with the map and markers.

## Features

- **Interactive Map**: Users can zoom in/out and pan across the map of Singapore.
- **Location Layers**: Users can toggle between layers of HDB locations, malls, and nature spots using the layer control panel.
- **Clickable Markers**: Each location on the map is represented by a marker. Users can click on a marker to see more information about that location.
- **Dynamic Data Loading**: The application fetches location data from separate JSON files, allowing for easy updates or additions without modifying the code.

## Instructions for Use

1. **Prerequisites**: Ensure you have an internet connection and a web browser that supports JavaScript.
2. **Opening the Application**: Open the `index.html` file in a web browser. The application will load the map and display the default HDB locations.
3. **Interacting with the Map**: Use the mouse or touchscreen to pan and zoom on the map.
4. **Layer Controls**: To switch between location layers, use the layer control panel on the top right corner of the map. Click on the checkboxes to toggle the display of HDBs, malls, and nature spots.
5. **Viewing Location Details**: Click on any marker on the map to view details about that location.

## Contributors

This application was created by [missycoder] as part of a project or learning exercise. Contributions or improvements to the code are welcome.

## License

The code for this application is available under the MIT License. See the `LICENSE.md` file for details.

## Credits

- **Leaflet** is maintained by the community and licensed under BSD-2-Clause.
- **Axios** is maintained by the Axios team and licensed under MIT.

Please note that this application is for demonstration purposes only and may not accurately reflect real-time data or locations.

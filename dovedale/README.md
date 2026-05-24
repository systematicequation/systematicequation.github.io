# HonorWithin's Dovedale Livemap — Signaling Desk

A high-performance, alternative live map for the Dovedale Railway game on Roblox. This project is built as a complete single-file HTML client utilizing pure, lightweight HTML5, CSS3, and Leaflet JS vector capabilities.

## On Architecture & Security

This application is built with a strict emphasis on **minimizing external dependencies** to mitigate potential supply chain attacks:

1. **Single-File Architecture:** The entire web app resides within a single file (`index.html`). There are no Node/NPM compilation processes, Webpack bundling, or heavy build runtimes.
2. **Minimal External Dependencies:** The application relies on exactly **two** trusted resources loaded securely via CDNs: the Leaflet JS library and Google Fonts. There are no tracking scripts, third-party analytics, or background telemetry databases.
3. **No Hidden Network Requests:** Outside of the standard Leaflet map tile rendering and the secure WebSocket handshake to retrieve real-time Dovedale live data, the client remains completely local and private.

## AI Disclaimer

AI was used in the making of this hobby project. AI is not a replacement for experienced programmers. That being said, it should be O-K as it utilizes minimal dependencies and contacts no external servers except for Dovedale's Websocket backend.

* **Role of AI:** Generative AI was utilized during the development of this project. It served as a powerful tool to accelerate the writing of boilerplate code, streamline early UI mockups, and help translate standard geometric formulas.
* **Human Oversight & Auditing:** AI did not replace the role of a programmer. Every single block of generated code was carefully audited, scrutinized, rewritten, and tested by hand before integration. While I do not typically use AI tools in my workflow, leveraging them in this personal hobby project significantly reduced manual drafting time.
* **Disclaimer:** Because this is an independently maintained, single-file hobby project, the codebase has not been audited for production environments. The source is provided "as-is" primarily as an open-source educational resource under the MIT license. Though the code is open to read, it is consolidated into a single file and intended mainly for personal hosting, learning, and self-experimentation.
# Node.js Benchmarking App

This application benchmarks CPU, storage, and network performance using Node.js and the `benchmark` library.  It provides a comprehensive overview of system capabilities and is designed for cross-platform compatibility (Windows and Linux).

## Features

* **CPU Benchmark:** Tests both single-core and multi-core processing power.
* **Storage Benchmark:** Measures file read and write speeds.
* **Network Benchmark:**  Includes a download speed test and a ping test to assess network connectivity and latency.
* **Cross-Platform:** Works on both Windows and Linux.
* **Dockerized:**  Can be easily containerized for consistent execution across different environments.


## Prerequisites

* **Node.js and npm:** Make sure you have Node.js and npm installed.  (Tested with Node.js 18.x)
* **Docker (optional):** If you want to run the benchmarks in a Docker container.


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/FishysPop/RedFish
   
1. **Install dependencies:**
      ```bash
   npm install
    Usage

## Usage
  
 Running Locally
To run the benchmarks locally, use the following command:

Running in Development Mode
To run the benchmarks in development mode with automatic restarts on file changes, use:

Running in Docker
To run the benchmarks in a Docker container:

Build the Docker image:

Run the Docker container:

Output
The application will output system information, benchmark results for CPU and storage, and network performance metrics (download speed and ping results).

Example Output
License
This project is licensed under the ISC License - see the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

Acknowledgments
The benchmark library for providing a robust benchmarking framework.
The fast-speedtest-api library for network speed testing.
The Node.js community for continuous support and improvements.

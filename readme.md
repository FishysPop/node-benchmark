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
  
 **Running Locally**
1. **To run the benchmarks locally, use the following command:**
    ```bash
   npm start

 **Running in Development Mode**
1. To run the benchmarks in development mode with automatic restarts on file changes, use:
    ```bash
   npm run dev 

## Running in Docker
To run the benchmarks in a Docker container:
1. **Pull the Docker image:**
    ```bash
   docker pull fishypop/node-benchmark
2. **Run the Docker container:**
    ```bash
   docker run --rm fishypop/node-benchmark
   
## Output
The application will output system information, benchmark results for CPU and storage, and network performance metrics (download speed and ping results).

Example Output
```
System Information:
CPU Model: Intel(R) Core(TM) i7-9700K CPU @ 3.60GHz
Number of CPUs: 8
Total Memory: 32.00 GB
Free Memory: 16.00 GB

Storage Write Test x 200 ops/sec ±1.00% (80 runs sampled)
Storage Read Test x 300 ops/sec ±1.00% (90 runs sampled)
Single Core Test x 20 ops/sec ±1.00% (50 runs sampled)
Multi Core Test x 100 ops/sec ±1.00% (60 runs sampled)

Fastest is Multi Core Test

Download speed: 100.00 Mbps
Ping output:
Pinging 8.8.8.8 with 32 bytes of data:
Reply from 8.8.8.8: bytes=32 time=10ms TTL=118
Reply from 8.8.8.8: bytes=32 time=10ms TTL=118
Reply from 8.8.8.8: bytes=32 time=10ms TTL=118

Ping statistics for 8.8.8.8:
    Packets: Sent = 3, Received = 3, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 10ms, Maximum = 10ms, Average = 10ms 
```
License
This project is licensed under the ISC License - see the LICENSE file for details.

Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

Acknowledgments
The benchmark library for providing a robust benchmarking framework.
The fast-speedtest-api library for network speed testing.
The Node.js community for continuous support and improvements.
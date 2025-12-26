# Real-Time Wi-Fi Spectrum & Channel Utilization Visualizer

A full-stack real-time Wi-Fi monitoring system that scans nearby wireless networks on Windows, visualises signal strength and channel congestion, and recommends the best Wi-Fi channel for optimal performance.

## Features
- Real-time Wi-Fi scanning using Windows `netsh`
- Live dashboard with Socket.IO
- Channel utilisation bar chart
- Signal strength history line chart
- Best channel recommendation
- Stable real-time updates (no disappearing data)

## Tech Stack
- Frontend: React 18, Vite, Chart.js
- Backend: Node.js, Express, Socket.IO
- OS Integration: Windows `netsh wlan`
- Communication: WebSockets

##  Architecture
Wi-Fi Adapter → netsh → Node.js → Socket.IO → React Dashboard

## 📁 Project Structure
wifi-visualizer/
├── backend/
├── scanner/
└── frontend/


## How to Run Backend 

1. cd backend
2. node server.js

## How to Run Frontend 

cd frontend/wifi-visualizer
1. npm install
2.npm run dev

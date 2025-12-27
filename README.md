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
2. npm run dev
<img width="1885" height="853" alt="image" src="https://github.com/user-attachments/assets/ea3d053c-a617-4f69-81ad-859dc9cdcc43" />
<img width="1886" height="858" alt="image" src="https://github.com/user-attachments/assets/40307441-3187-4598-9c02-1a5d766f0e7d" />
<img width="1791" height="836" alt="image" src="https://github.com/user-attachments/assets/18885c79-a05e-441c-a6bf-06f18c5ae653" />
<img width="1885" height="737" alt="image" src="https://github.com/user-attachments/assets/0be90ffc-8d29-401e-8fa1-fb35e725d188" />
<img width="1877" height="321" alt="image" src="https://github.com/user-attachments/assets/39a18d50-7102-48f6-9476-fd50a29ceff8" />





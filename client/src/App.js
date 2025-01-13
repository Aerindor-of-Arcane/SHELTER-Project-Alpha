import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Proxy handles localhost:3001
        const formattedData = response.data.map((item) => ({
          ...item,
          timestamp: new Date(item.timestamp).toLocaleTimeString(),
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>AD5241: Data Visualization</h1>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <Line type="monotone" dataKey="resistance" stroke="#4caf50" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="timestamp" tick={{ fill: '#8884d8', fontSize: 12 }} />
            <YAxis tick={{ fill: '#8884d8', fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}
              labelStyle={{ fontWeight: 'bold' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
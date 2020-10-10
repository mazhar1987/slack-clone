import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
    return (
        <div className="App">
            {/* Header */}
            <Header />
            
            <div className="app-body">
            {/* Sidebar */}
            <Sidebar />
            
            {/* REACT Router -> chat screen */}
            </div>
        </div>
    );
}

export default App;

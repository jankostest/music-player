import { useState } from 'react';
import './index.css';
import { MusicPlayer } from './components/MusicPlayer';
import { BrowserRouter, Routes, Route } from 'react-router';
import { AllSongs } from './components/AllSongs';
import { Playlists } from './components/Playlists';
import { MusicProvider } from './contexts/MusicContext';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <div className="app">
          <Navbar />
          <main className="app-main">
            <div className="player-section">
              <MusicPlayer />
            </div>
            <div className="content-section">
              <Routes>
                <Route path="/" element={<AllSongs />} />
                <Route path="/playlists" element={<Playlists />} />
              </Routes>
            </div>
          </main>
        </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;

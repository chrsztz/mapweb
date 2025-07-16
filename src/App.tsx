import React from 'react'
import MapContainer from './components/Map/MapContainer'
import Sidebar from './components/Sidebar/Sidebar'

const App: React.FC = () => {
  return (
    <div className="h-screen flex bg-gray-50">
      {/* 左侧工具栏 */}
      <Sidebar />
      
      {/* 地图主容器 */}
      <main className="flex-1 relative">
        <MapContainer />
      </main>
    </div>
  )
}

export default App 
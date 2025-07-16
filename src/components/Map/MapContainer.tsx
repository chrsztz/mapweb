import React, { useEffect, useRef, useState } from 'react'
import { MapViewport, Trail } from '../../types'

interface MapContainerProps {
  trails?: Trail[];
  onTrailSelect?: (trail: Trail) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({ trails = [], onTrailSelect }) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<mapkit.Map | null>(null)
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const [mapError, setMapError] = useState<string | null>(null)

  // 初始化地图
  useEffect(() => {
    const initializeMap = () => {
      if (!mapRef.current || !window.mapkit) {
        console.error('MapKit JS 未加载或地图容器不存在')
        setMapError('地图加载失败：MapKit JS 未正确加载')
        return
      }

      try {
        // 初始化 MapKit JS
        window.mapkit.init({
          authorizationCallback: (done) => {
            // 注意：这里需要你的Apple MapKit JS认证令牌
            // 在生产环境中，这应该从你的服务器获取
            // 现在先用一个占位符，你需要替换为真实的JWT token
            done('eyJraWQiOiJGUTNQNzgyNTZGIiwidHlwIjoiSldUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiI4NzUyRlFTWjg2IiwiaWF0IjoxNzUyNjc1Njk3LCJleHAiOjE3NTMzNDAzOTl9.iQpXdbv4OcdY_x3_WHeu3gCNJa58nUHtxr-MlkqHe1l1RXRXPSYToeePK-H9zXdIs61TDVHnF_0vptBtPAcuyA')
          },
          language: 'zh-CN'
        })

        // 创建地图实例
        const map = new window.mapkit.Map(mapRef.current, {
          center: new window.mapkit.Coordinate(39.9042, 116.4074), // 北京坐标
          zoom: 10,
          mapType: window.mapkit.Map.MapTypes.Standard,
          showsCompass: window.mapkit.FeatureVisibility.Visible,
          showsMapTypeControl: true,
          showsZoomControl: true,
          showsUserLocationControl: true,
          showsPointsOfInterest: true,
          showsScale: window.mapkit.FeatureVisibility.Visible
        })

        mapInstanceRef.current = map
        setIsMapLoaded(true)
        setMapError(null)

        // 添加地图事件监听器
        map.addEventListener('click', (event: any) => {
          console.log('地图点击事件:', event)
        })

      } catch (error) {
        console.error('地图初始化失败:', error)
        setMapError('地图初始化失败')
      }
    }

    // 检查 MapKit JS 是否已加载
    if (window.mapkit) {
      initializeMap()
    } else {
      // 等待 MapKit JS 加载
      const checkMapKit = () => {
        if (window.mapkit) {
          initializeMap()
        } else {
          setTimeout(checkMapKit, 100)
        }
      }
      checkMapKit()
    }

    // 清理函数
    return () => {
      if (mapInstanceRef.current) {
        // 清理地图实例
        mapInstanceRef.current = null
      }
    }
  }, [])

  // 添加路线到地图
  useEffect(() => {
    if (!mapInstanceRef.current || !isMapLoaded || trails.length === 0) return

    const map = mapInstanceRef.current

    // 清除现有的注释和覆盖层
    // 注意：这里可能需要根据实际MapKit JS API调整
    
    trails.forEach((trail) => {
      // 添加起点标记
      const startMarker = new window.mapkit.MarkerAnnotation(
        new window.mapkit.Coordinate(trail.startPoint.latitude, trail.startPoint.longitude),
        {
          color: '#22c55e',
          title: `${trail.name} - 起点`,
          subtitle: `难度: ${trail.difficulty}`
        }
      )
      map.addAnnotation(startMarker)

      // 添加终点标记
      const endMarker = new window.mapkit.MarkerAnnotation(
        new window.mapkit.Coordinate(trail.endPoint.latitude, trail.endPoint.longitude),
        {
          color: '#ef4444',
          title: `${trail.name} - 终点`,
          subtitle: `距离: ${trail.length}km`
        }
      )
      map.addAnnotation(endMarker)

      // 添加路线路径
      if (trail.trailPoints.length > 1) {
        const coordinates = trail.trailPoints.map(point =>
          new window.mapkit.Coordinate(point.latitude, point.longitude)
        )
        
        const polyline = new window.mapkit.PolylineOverlay(coordinates, {
          style: {
            strokeColor: '#3b82f6',
            strokeWidth: 3,
            strokeOpacity: 0.8
          }
        })
        map.addOverlay(polyline)
      }
    })

  }, [trails, isMapLoaded])

  return (
    <div className="w-full h-full relative">
      {mapError && (
        <div className="absolute top-4 left-4 z-10 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-medium">地图加载错误</p>
          <p className="text-sm">{mapError}</p>
          <p className="text-xs mt-2">
            请确保已正确配置 Apple MapKit JS 认证令牌
          </p>
        </div>
      )}
      
      {!isMapLoaded && !mapError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-mountain-600 mx-auto mb-4"></div>
            <p className="text-gray-600">正在加载地图...</p>
          </div>
        </div>
      )}
      
      <div 
        ref={mapRef} 
        className="map-container"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

export default MapContainer 
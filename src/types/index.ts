// 路线相关类型
export interface TrailPoint {
  latitude: number;
  longitude: number;
  elevation?: number;
}

export interface Trail {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'moderate' | 'hard' | 'expert';
  length: number; // 距离（公里）
  elevationGain: number; // 海拔增益（米）
  estimatedTime: number; // 预计时间（小时）
  trailPoints: TrailPoint[];
  startPoint: TrailPoint;
  endPoint: TrailPoint;
  images?: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

// 地图相关类型
export interface MapViewport {
  center: TrailPoint;
  zoom: number;
}

export interface MapMarker {
  id: string;
  position: TrailPoint;
  type: 'start' | 'end' | 'waypoint' | 'poi';
  title: string;
  description?: string;
}

// 用户相关类型
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  favoriteTrails: string[];
  submittedTrails: string[];
}

// 搜索和筛选类型
export interface SearchFilters {
  difficulty?: Trail['difficulty'][];
  minLength?: number;
  maxLength?: number;
  minElevationGain?: number;
  maxElevationGain?: number;
  tags?: string[];
  region?: string;
}

// Apple MapKit JS 全局类型声明
declare global {
  interface Window {
    mapkit: typeof mapkit;
  }
  
  namespace mapkit {
    interface Map {
      element: HTMLElement;
      center: Coordinate;
      zoom: number;
      mapType: string;
      showsCompass: string;
      showsMapTypeControl: boolean;
      showsZoomControl: boolean;
      showsUserLocationControl: boolean;
      showsPointsOfInterest: boolean;
      showsScale: string;
      
      addEventListener(type: string, listener: (event: any) => void): void;
      removeEventListener(type: string, listener: (event: any) => void): void;
      addAnnotation(annotation: Annotation): void;
      removeAnnotation(annotation: Annotation): void;
      addOverlay(overlay: Overlay): void;
      removeOverlay(overlay: Overlay): void;
      setCenterAnimated(coordinate: Coordinate, animated?: boolean): void;
      setZoomAnimated(zoom: number, animated?: boolean): void;
    }
    
    interface Coordinate {
      latitude: number;
      longitude: number;
    }
    
    interface Annotation {
      coordinate: Coordinate;
      title?: string;
      subtitle?: string;
      color?: string;
      glyphText?: string;
    }
    
    interface Overlay {
      points: Coordinate[];
      style?: {
        strokeColor?: string;
        strokeWidth?: number;
        strokeOpacity?: number;
      };
    }
    
    function init(options: {
      authorizationCallback: (done: (jwt: string) => void) => void;
      language?: string;
    }): void;
    
    const Map: {
      new (element: HTMLElement, options?: any): Map;
    };
    
    const MarkerAnnotation: {
      new (coordinate: Coordinate, options?: any): Annotation;
    };
    
    const PolylineOverlay: {
      new (coordinates: Coordinate[], options?: any): Overlay;
    };
  }
} 
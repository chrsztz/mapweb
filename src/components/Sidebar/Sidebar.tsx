import React, { useState } from 'react'
import { 
  Mountain, 
  Plus, 
  Info, 
  Search, 
  List, 
  MapPin, 
  Filter,
  X
} from 'lucide-react'

const Sidebar: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null)

  const menuItems = [
    {
      id: 'submit',
      icon: Plus,
      label: '提交路线',
      description: '分享你的登山路线'
    },
    {
      id: 'search',
      icon: Search,
      label: '搜索路线',
      description: '查找附近的登山路线'
    },
    {
      id: 'trails',
      icon: List,
      label: '路线列表',
      description: '浏览所有可用路线'
    },
    {
      id: 'about',
      icon: Info,
      label: '关于网站',
      description: '了解更多信息'
    }
  ]

  const handleMenuClick = (itemId: string) => {
    setActivePanel(activePanel === itemId ? null : itemId)
  }

  const renderPanel = () => {
    switch (activePanel) {
      case 'submit':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">提交新路线</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  路线名称
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-500"
                  placeholder="输入路线名称"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  难度等级
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-500">
                  <option value="easy">简单</option>
                  <option value="moderate">中等</option>
                  <option value="hard">困难</option>
                  <option value="expert">专家级</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  路线描述
                </label>
                <textarea
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-500"
                  placeholder="描述这条路线的特色和注意事项"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                提交路线
              </button>
            </form>
          </div>
        )

      case 'search':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">搜索路线</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-mountain-500"
                  placeholder="搜索路线名称或地区"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">筛选条件</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Filter className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm text-gray-600">难度等级</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['简单', '中等', '困难', '专家级'].map((level) => (
                      <button
                        key={level}
                        className="px-3 py-1 text-xs border border-gray-300 rounded-full hover:bg-gray-100"
                      >
                        {level}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )

      case 'trails':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">热门路线</h3>
            <div className="space-y-3">
              {[
                { name: '香山红叶径', difficulty: '简单', length: '3.2km' },
                { name: '八达岭长城步道', difficulty: '中等', length: '5.1km' },
                { name: '妙峰山登顶路线', difficulty: '困难', length: '8.7km' }
              ].map((trail, index) => (
                <div key={index} className="card hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{trail.name}</h4>
                      <p className="text-sm text-gray-600">难度: {trail.difficulty}</p>
                      <p className="text-sm text-gray-600">距离: {trail.length}</p>
                    </div>
                    <MapPin className="w-5 h-5 text-mountain-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'about':
        return (
          <div className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">关于登山路线探索</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p>
                欢迎使用登山路线探索网站！我们致力于为户外爱好者提供最全面、最准确的登山路线信息。
              </p>
              <p>
                在这里你可以：
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>浏览各种难度的登山路线</li>
                <li>查看详细的路线信息和地图</li>
                <li>分享你的登山经验和路线</li>
                <li>与其他户外爱好者交流</li>
              </ul>
              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">联系我们</h4>
                <p>邮箱: info@trailexplorer.com</p>
                <p>技术支持: support@trailexplorer.com</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="flex">
      {/* 主侧边栏 */}
      <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-4">
        {/* Logo */}
        <div className="p-2 bg-mountain-600 rounded-lg">
          <Mountain className="w-6 h-6 text-white" />
        </div>
        
        {/* 菜单项 */}
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = activePanel === item.id
            
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`
                  p-3 rounded-lg transition-colors duration-200 group relative
                  ${isActive 
                    ? 'bg-mountain-100 text-mountain-700' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                
                {/* 工具提示 */}
                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                  {item.label}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* 展开的面板 */}
      {activePanel && (
        <div className="w-80 bg-white border-r border-gray-200 shadow-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {menuItems.find(item => item.id === activePanel)?.label}
            </h2>
            <button
              onClick={() => setActivePanel(null)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="h-full overflow-y-auto custom-scrollbar">
            {renderPanel()}
          </div>
        </div>
      )}
    </div>
  )
}

export default Sidebar 
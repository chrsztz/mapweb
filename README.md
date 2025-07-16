# 🏔️ 登山路线探索网站 (Mountain Trail Explorer)

一个基于React和Apple MapKit JS的登山路线信息网站，让户外爱好者能够发现、分享和探索最佳的登山路线。

## ✨ 功能特色

- 🗺️ **交互式地图**: 基于Apple MapKit JS的高质量地图显示
- 📍 **路线标记**: 清晰标识路线起点、终点和重要节点
- 🔍 **智能搜索**: 按地区、难度、类型筛选路线
- ➕ **路线提交**: 用户可以分享自己的登山路线
- 📱 **响应式设计**: 支持桌面和移动设备
- 🎨 **现代化UI**: 基于Tailwind CSS的美观界面

## 🛠️ 技术栈

### 前端核心
- **React 18** - 现代化前端框架
- **TypeScript** - 类型安全的JavaScript
- **Vite** - 快速构建工具
- **Tailwind CSS** - 实用优先的CSS框架

### 地图服务
- **Apple MapKit JS** - 苹果官方地图服务
- **自定义地图组件** - 封装MapKit功能

### UI组件
- **Lucide React** - 现代化图标库
- **响应式布局** - 适配各种屏幕尺寸

## 🚀 快速开始

### 环境要求

- Node.js 16+ 
- npm 或 yarn
- Apple Developer账号 (用于MapKit JS Token)

### 安装依赖

```bash
# 克隆项目
git clone <your-repository-url>
cd mapweb

# 安装依赖
npm install

# 或使用yarn
yarn install
```

### 配置Apple MapKit JS

1. 前往 [Apple Developer Portal](https://developer.apple.com/account)
2. 创建MapKit JS Key
3. 获取JWT Token
4. 在 `src/components/Map/MapContainer.tsx` 中替换 `YOUR_MAPKIT_JS_JWT_TOKEN_HERE`

```typescript
// 在MapContainer.tsx中
done('YOUR_ACTUAL_JWT_TOKEN_HERE')
```

### 运行项目

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview

# 代码检查
npm run lint
```

## 📁 项目结构

```
mapweb/
├── public/                 # 静态资源
├── src/
│   ├── components/         # React组件
│   │   ├── Map/           # 地图相关组件
│   │   │   └── MapContainer.tsx
│   │   └── Sidebar/       # 侧边栏组件
│   │       └── Sidebar.tsx
│   ├── types/             # TypeScript类型定义
│   │   └── index.ts
│   ├── App.tsx            # 主应用组件
│   ├── main.tsx           # 应用入口
│   └── index.css          # 全局样式
├── package.json           # 项目依赖
├── tailwind.config.js     # Tailwind配置
├── tsconfig.json          # TypeScript配置
├── vite.config.ts         # Vite配置
└── README.md             # 项目文档
```

## 🎨 设计系统

### 色彩主题
- **主色调**: Mountain Blue (`#0ea5e9` - `#0c4a6e`)
- **辅助色**: 灰度系统
- **语义色**: 成功绿、警告橙、错误红

### 组件样式
- **按钮**: 主要按钮、次要按钮
- **卡片**: 统一的阴影和圆角
- **表单**: 一致的输入框样式
- **图标**: Lucide React图标集

## 🗺️ 地图功能

### 当前功能
- 地图初始化和显示
- 路线标记（起点/终点）
- 路径绘制
- 地图控件（缩放、类型切换等）

### 计划功能
- GPX文件导入
- 离线地图支持
- 实时位置追踪
- 路线海拔图表

## 📋 开发路线图

### 第一阶段 (当前) ✅
- [x] 基础项目搭建
- [x] Apple MapKit JS集成
- [x] 基础地图显示
- [x] 左侧工具栏界面

### 第二阶段 (计划中)
- [ ] 路线数据存储
- [ ] 路线提交功能实现
- [ ] 搜索和筛选逻辑
- [ ] 路线详情页面

### 第三阶段 (未来)
- [ ] 用户系统
- [ ] 评论和评分
- [ ] 移动端优化
- [ ] PWA支持

## 🤝 贡献指南

欢迎为项目做出贡献！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## ⚠️ 注意事项

### Apple MapKit JS配置
- 需要有效的Apple Developer账号
- JWT Token需要正确配置
- 注意Token的过期时间和域名限制

### 开发环境
- 建议使用最新版本的Node.js
- 确保网络环境可以访问Apple的CDN
- 开发时建议使用HTTPS (MapKit JS要求)

## 📄 许可证

MIT License - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 联系方式

- 项目地址: [GitHub Repository](https://github.com/your-username/mapweb)
- 问题反馈: [Issues](https://github.com/your-username/mapweb/issues)
- 邮箱: your-email@example.com

---

**开始你的登山之旅！** 🏔️✨ 
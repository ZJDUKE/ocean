import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './MainLayout.css'

const navItems = [
  { icon: '📊', label: '工作台', path: '/' },
  { icon: '🗺️', label: '海洋矿产一张图', path: '/onemap' },
  { icon: '🔬', label: '矿产疑似位置详情', path: '/detail' },
]

export default function MainLayout({ children }) {
  const location = useLocation()
  const now = new Date()
  const timeStr = now.toLocaleString('zh-CN', { hour12: false })

  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-logo">
          <div className="logo-icon">⚓</div>
          <div><span>智慧海洋</span><small>矿产管理系统</small></div>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-label">导航菜单</div>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="main-area">
        <header className="top-header">
          <div className="header-left">
            <span className="breadcrumb">海洋矿产管理系统</span>
          </div>
          <div className="header-right">
            <span className="header-time">{timeStr}</span>
            <div className="user-info">
              <span>决策者 · 张海洋</span>
              <div className="avatar">张</div>
            </div>
          </div>
        </header>
        <main className="main-content">
          {children}
        </main>
      </div>
    </>
  )
}

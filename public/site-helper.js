// public/site-helper.js

(function () {
  'use strict';

  // 配置项目
  const config = {
    siteUrl: 'https://cni-game.com.cn',
    keyword: '爱游戏',
    debugMode: false
  };

  // 页面提示卡片数据
  const tipCards = [
    {
      id: 'tip-welcome',
      icon: '🎮',
      title: '欢迎来到爱游戏',
      content: '探索更多趣味游戏内容，尽在 ' + config.siteUrl,
      bgColor: '#e3f2fd'
    },
    {
      id: 'tip-keyword', 
      icon: '🏷️',
      title: '关键词：' + config.keyword,
      content: '使用关键词搜索，快速找到你感兴趣的主题。',
      bgColor: '#fff3e0'
    },
    {
      id: 'tip-access',
      icon: '🔗',
      title: '访问说明',
      content: '直接访问 ' + config.siteUrl + ' 获取最新资讯和游戏推荐。',
      bgColor: '#e8f5e9'
    }
  ];

  // 关键词徽章列表
  const badges = [
    { text: '爱游戏', color: '#1976d2' },
    { text: '热门推荐', color: '#388e3c' },
    { text: '新游上线', color: '#f57c00' },
    { text: '经典回顾', color: '#7b1fa2' },
    { text: '玩家社区', color: '#c62828' },
    { text: '攻略技巧', color: '#00838f' }
  ];

  // 创建提示卡片 DOM
  function createTipCard(card) {
    const wrapper = document.createElement('div');
    wrapper.className = 'tip-card';
    wrapper.id = card.id;
    wrapper.style.cssText = 'background:' + card.bgColor + ';border-radius:8px;padding:16px;margin:12px 0;box-shadow:0 2px 4px rgba(0,0,0,0.1)';

    const iconSpan = document.createElement('span');
    iconSpan.textContent = card.icon;
    iconSpan.style.cssText = 'font-size:28px;margin-right:10px;vertical-align:middle';

    const titleEl = document.createElement('h3');
    titleEl.textContent = card.title;
    titleEl.style.cssText = 'display:inline;margin:0;font-size:18px;vertical-align:middle';

    const contentEl = document.createElement('p');
    contentEl.textContent = card.content;
    contentEl.style.cssText = 'margin:10px 0 0;font-size:14px;color:#333';

    wrapper.appendChild(iconSpan);
    wrapper.appendChild(titleEl);
    wrapper.appendChild(contentEl);
    return wrapper;
  }

  // 创建关键词徽章 DOM
  function createBadge(badge) {
    const span = document.createElement('span');
    span.className = 'keyword-badge';
    span.textContent = badge.text;
    span.style.cssText = 'display:inline-block;background:' + badge.color + ';color:#fff;padding:6px 14px;border-radius:20px;font-size:13px;margin:4px 6px 4px 0;font-weight:500';
    return span;
  }

  // 渲染所有组件
  function renderComponents() {
    // 容器：页面提示卡片区域
    const tipContainer = document.getElementById('site-helper-tips');
    if (tipContainer) {
      tipCards.forEach(function (card) {
        tipContainer.appendChild(createTipCard(card));
      });
    }

    // 容器：关键词徽章区域
    const badgeContainer = document.getElementById('site-helper-badges');
    if (badgeContainer) {
      badges.forEach(function (badge) {
        badgeContainer.appendChild(createBadge(badge));
      });
    }

    // 容器：访问说明区域（如果存在）
    const accessContainer = document.getElementById('site-helper-access');
    if (accessContainer) {
      const accessPara = document.createElement('p');
      accessPara.textContent = '访问说明：请通过浏览器打开 ' + config.siteUrl + ' 体验完整功能。';
      accessPara.style.cssText = 'font-size:14px;color:#555;padding:8px 0';
      accessContainer.appendChild(accessPara);
    }
  }

  // 页面加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderComponents);
  } else {
    renderComponents();
  }

  // 暴露调试接口（仅在开发模式有用）
  if (config.debugMode) {
    window.__siteHelper = {
      config: config,
      tipCards: tipCards,
      badges: badges,
      render: renderComponents
    };
  }
})();
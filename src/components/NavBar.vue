<template>
  <!-- 导航栏容器 -->
  <div class="nav-wrapper">
    <n-menu
      v-model:value="activeMenuItem"
      mode="horizontal"
      :options="mainMenuItems"
      :collapsed="isMobileView || isMenuCollapsed"
      @update:value="handleMenuClick"
      :trigger="isMobileView ? 'click' : 'hover'"
    />
    
    <!-- 在移动端或窗口过小的时候显示 "更多" 按钮 -->
    <n-button
      v-if="isMobileView && !isMenuCollapsed"
      @click="toggleMenu"
      size="small"
      type="primary"
      style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%);"
    >
      更多
    </n-button>

    <!-- 更多菜单内容 -->
    <n-menu
      v-if="isMenuCollapsed"
      v-model:value="activeMenuItem"
      mode="vertical"
      :options="collapsedMenuItems"
      @update:value="handleMenuClick"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, h, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'

export default defineComponent({
  name: 'NavBar',
  setup() {
    const router = useRouter() // Vue Router 实例

    const activeMenuItem = ref<string | null>(null) // 当前选中的菜单项
    const isMobileView = ref(window.innerWidth < 768) // 判断是否为移动端视图
    const isMenuCollapsed = ref(false) // 控制更多菜单的展开与收起

    // 监听窗口大小变化
    window.addEventListener('resize', () => {
      isMobileView.value = window.innerWidth < 768
      // 如果视口变大，恢复到原始菜单显示状态
      if (!isMobileView.value) {
        isMenuCollapsed.value = false
      }
    })

    // 处理菜单点击
    const handleMenuClick = (key: string) => {
      if (key === 'login') {
        // 跳转到 /login 路由
        router.push('/login').catch((err) => {
          if (err.name !== 'NavigationDuplicated') {
            console.error('Navigation error:', err)
          }
        })
      } else if (key === 'home') {
        // 跳转到 no_to_see 路由
        router.push('/No_to_see').catch((err) => {
          if (err.name !== 'NavigationDuplicated') {
            console.error('Navigation error:', err)
          }
        })
      } else {
        console.log(`Menu item clicked: ${key}`)
      }
    }

    // 菜单配置
    const mainMenuItems: MenuOption[] = [
      {
        label: () =>
          h(
            'h1',
            {
              class: 'site-title',
              style: {
                marginTop: '15px',
                fontSize: '25px',
                background: 'linear-gradient(to right, #ff7e5f, #feb47b)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontFamily: '华文新魏',
              },
            },
            '郭嘉荣个人工作室'
          ),
        key: 'hear-the-wind-sing',
      },
      {
        label: '首页',
        key: 'home',
      },
      {
        label: '个人介绍',
        key: 'introduction',
      },
      {
        label: '个人参与的优秀项目',
        key: 'projects',
      },
      {
        label: '目前获奖奖项介绍',
        key: 'awards',
      },
      {
        label: 'ACACIA 金合欢科技',
        key: 'acacia',
      },
      {
        label: '登录',
        key: 'login',
      },
    ]

    // 可在 "更多" 按钮下显示的菜单项
    const collapsedMenuItems: MenuOption[] = [
      {
        label: '首页',
        key: 'home',
      },
      {
        label: '个人介绍',
        key: 'introduction',
      },
      {
        label: '个人参与的优秀项目',
        key: 'projects',
      },
      {
        label: '目前获奖奖项介绍',
        key: 'awards',
      },
      {
        label: 'ACACIA 金合欢科技',
        key: 'acacia',
      },
      {
        label: '登录',
        key: 'login',
      },
    ]

    // 切换更多菜单的显示状态
    const toggleMenu = () => {
      isMenuCollapsed.value = !isMenuCollapsed.value
    }

    return {
      activeMenuItem,
      mainMenuItems,
      collapsedMenuItems,
      isMobileView,
      isMenuCollapsed,
      handleMenuClick,
      toggleMenu,
    }
  },
})
</script>

<style scoped>
.nav-wrapper {
  width: 100%;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative; /* 使按钮浮动 */
}

.site-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin: 0;
  padding: 0 20px;
  line-height: 64px;
  justify-content: left;
}
</style>

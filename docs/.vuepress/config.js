import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
	  navbar: [
		  {
			  text: '首页',
			  link: '/',
		  },
	  ],
	  sidebar: [
		  {
			  title: '首页',
			  path: '/',
			  collapsable: false,
			  children: [
				  {title:'必读', path:'/'}
			  ]
		  },
	  ],
  }),
})

/*
 * Copyright 2022 Nightingale Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { md } from './plugins/md';
import plusResolve from './plugins/plusResolve';
const reactSvgPlugin = require('./plugins/svg');

const chunk2 = [
  '@codemirror/autocomplete',
  '@codemirror/highlight',
  '@codemirror/lint',
  '@codemirror/language',
  '@codemirror/state',
  '@codemirror/view',
  'codemirror-promql',
  '@codemirror/basic-setup',
];
const chunk3 = ['react-ace'];
const chunk1 = ['react', 'react-router-dom', 'react-dom', 'moment', '@ant-design/icons', 'umi-request', 'lodash', 'react-grid-layout', 'd3', 'ahooks', 'color'];
const antdChunk = ['antd'];

// https://vitejs.dev/config/
export default defineConfig({
  base: 'n9e',
  plugins: [md(), reactRefresh(), plusResolve(), reactSvgPlugin({ defaultExport: 'component' })],
  define: {},
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api/n9e-plus': {
        target: 'https://192.168.116.196:8081/',
        secure: false,
        changeOrigin: true,
      },
      '/api/n9e/proxy': {
        target: 'https://192.168.116.196:8081/',
        secure: false,
        changeOrigin: true,
      },
      '/api/n9e/datasource': {
        target: 'https://192.168.116.196:8081/',
        secure: false,
        changeOrigin: true,
      },
      '/api/n9e': {
        target: 'https://192.168.116.196:8081/',
        secure: false,
        changeOrigin: true,
      },
      '/api/fc-brain': {
        target: 'https://192.168.116.196:8081/',
        secure: false,
        changeOrigin: true,
      },
    },
  },
  build: {
    commonjsOptions: {
      ignoreTryCatch: false, // https://github.com/wbkd/react-flow/issues/1840
    },
    outDir: 'pub',
    chunkSizeWarningLimit: 650,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: chunk1,
          vendor1: chunk2,
          vendor2: chunk3,
          antdChunk: antdChunk,
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "/src/global.variable.less";`,
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#3d87ff',
          'primary-background': '#dfecff',
          'disabled-color': 'rgba(0, 0, 0, 0.5)',
          'tabs-ink-bar-color': 'linear-gradient(to right, #0019F4, #3d87ff )',
          'font-size-base': '12px',
          'menu-item-font-size': '14px',
          'radio-button-checked-bg': '#dfecff',
          'form-item-margin-bottom': '18px',
          'font-family': 'Monda-Regular,PingFangSC-Regular,microsoft yahei ui,microsoft yahei,simsun,"sans-serif"',
          'text-color': '#262626',
          'table-row-hover-bg': '#dfecff',
          'table-header-bg': '#f0f0f0',
          'select-selection-item-bg': '#dfecff',
          'select-selection-item-border-color': '#2f65bc',
          'menu-item-color': '#8C8C8C',
          'menu-inline-submenu-bg': '#f0f0f0',
          'menu-bg': '#f0f0f0',
          'checkbox-check-bg': '#fff',
          'checkbox-check-color': '#2f65bc',
          'checkbox-color': 'fade(@checkbox-check-color, 10)',
          'btn-padding-horizontal-base': '12px',
        },
      },
    },
  },
});

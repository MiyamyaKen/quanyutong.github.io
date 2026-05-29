# 个人主页 - 多语言版本

这是一个支持中文、日文、英文三种语言的个人主页。

## 功能特点

✨ **多语言支持**
- 🇨🇳 简体中文 (zh-CN)
- 🇯🇵 日本語 (ja)
- 🇬🇧 English (en)

## 使用方法

### 切换语言
1. 在导航栏右侧找到语言切换按钮
2. 点击对应的语言按钮即可切换
3. 语言选择会自动保存到浏览器本地存储

### 文件结构
```
miyamyaken.github.io/
├── index.html          # 主页面(包含data-i18n属性)
├── styles.css          # 样式文件(包含语言切换器样式)
├── script.js           # JavaScript逻辑(包含语言切换功能)
├── translations.js     # 翻译数据文件
└── README.md          # 说明文档
```

## 技术实现

### 1. 翻译数据 (translations.js)
包含三种语言的所有翻译文本,使用键值对结构:
```javascript
const translations = {
    'zh-CN': { 'nav.home': '首页', ... },
    'ja': { 'nav.home': 'ホーム', ... },
    'en': { 'nav.home': 'Home', ... }
};
```

### 2. HTML标记 (index.html)
使用`data-i18n`属性标记需要翻译的元素:
```html
<h1 data-i18n="hero.greeting">你好,我是</h1>
```

对于placeholder属性,使用`data-i18n-placeholder`:
```html
<input data-i18n-placeholder="contact.yourName" placeholder="您的姓名">
```

### 3. JavaScript逻辑 (script.js)
- `initLanguage()`: 初始化语言设置
- `setLanguage(lang)`: 切换语言并更新页面内容
- `updateActiveLanguageButton()`: 更新按钮激活状态
- 使用localStorage保存用户的语言选择

### 4. CSS样式 (styles.css)
- 语言切换按钮的样式
- 响应式设计,支持移动端
- 激活状态的视觉反馈

## 添加新语言

如果需要添加新语言,请按以下步骤操作:

1. 在`translations.js`中添加新语言的翻译数据
2. 在`index.html`导航栏中添加新的语言按钮
3. 更新`script.js`中的`langNames`对象

## 浏览器兼容性

- ✅ Chrome/Edge (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ 移动端浏览器

## 部署到GitHub Pages

1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源
4. 访问 `https://yourusername.github.io/repository-name`

## 本地开发

直接在浏览器中打开`index.html`文件即可预览。

或使用本地服务器:
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx http-server
```

然后访问 `http://localhost:8000`

## 更新翻译

要更新或修改翻译内容:
1. 编辑`translations.js`文件
2. 找到对应的语言和键
3. 修改翻译文本
4. 刷新浏览器查看效果

## 注意事项

- 所有需要翻译的文本都必须添加`data-i18n`属性
- 翻译键名要保持一致
- 语言代码遵循ISO 639-1标准
- 用户的语言选择会保存在浏览器localStorage中

## 作者

**权雨彤 (QUAN YUTONG)**
- 📧 Email: kensherl0818@gmail.com
- 💻 GitHub: [@MiyamyaKen](https://github.com/MiyamyaKen)
- 📷 Instagram: @kv_qx.1

## 许可证

© 2026 QUAN YUTONG. 保留所有权利.

---

Made with ❤️ and ☕

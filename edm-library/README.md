# Octoparse EDM Asset Library

这是一个无需构建工具的静态资产库。

EDM 库只使用 [`overview-classic.html`](overview-classic.html) 作为浏览入口。模板、组件、外部资源、使用示例和质量标准均在同一页内查看；原有分散页面会跳转到该索引页的对应档案。GitHub Pages 入口为 `https://outofbox-mp4.github.io/edm-asset-library/edm-library/`。

> 当 Agent 可以自动写文案、拼装 HTML 和发起任务时，人的价值不再是重复制作，而是定义策略、标准、质量门槛和反馈闭环。这个资产站用于把这些能力沉淀为可复用系统。

## 新增品牌模板

在 `assets/data.js` 的 `templates` 数组新增一条记录，并将最终 HTML 放在当前工作区的相应 `outputs/` 目录。

必填字段：`id`、`name`、`phase`、`audience`、`goal`、`tags`、`desc`、`file`、`subject`、`preheader`、`cta`、`status`。

模板标签只记录三个维度：`活动`、`阶段`、`人群`。例如 `['Black Friday', '早鸟价', '付费用户']`；请让标签与 `phase`、`audience` 字段一致。

## 新增外部资源

在同一文件的 `resources` 数组新增资源，并记录用途、类型、链接和检索日期对应的星标数。

## 新增内容组件

在 `assets/component-snippets.js` 增加组件名称、用途、带 `{{变量}}` 的邮件 HTML 片段和预览样例值。组件页会展示预览与可复制代码；代码入库前仍需完成 Mailchimp、Gmail、Outlook 和移动端测试。

## 入库门槛

1. 品牌 Logo 与色彩已确认。
2. CTA、UTM 与人群文案已替换。
3. 已完成移动端、Gmail、Outlook 与 Mailchimp 测试。
4. 主题行、Preheader、发送时机及最终表现已记录。

# Octoparse EDM Asset Library

这是一个无需构建工具的静态资产库。

EDM 库只使用 [`overview-classic.html`](overview-classic.html) 作为浏览入口。模板、组件、外部资源、使用示例、策略与 SOP、质量标准均在同一页内查看；原有分散页面会跳转到该索引页的对应档案。GitHub Pages 入口为 `https://outofbox-mp4.github.io/edm-asset-library/edm-library/`。

> 当 Agent 可以自动写文案、拼装 HTML 和发起任务时，人的价值不再是重复制作，而是定义策略、标准、质量门槛和反馈闭环。这个资产站用于把这些能力沉淀为可复用系统。

## 新增品牌模板

在 `assets/data.js` 的 `templates` 数组新增一条记录，并将最终 HTML 放在当前工作区的相应 `outputs/` 目录。

必填字段：`id`、`name`、`phase`、`audience`、`goal`、`tags`、`desc`、`file`、`subject`、`preheader`、`cta`、`status`。

模板标签只记录三个维度：`活动`、`阶段`、`人群`。例如 `['Black Friday', '早鸟价', '付费用户']`；请让标签与 `phase`、`audience` 字段一致。

模板页按活动筛选，标题自动显示为“阶段 · 适配人群”。同一人群若有多个版本，可在 `variant` 字段写一句简短区分说明，例如 `Standard 单档`；它会显示在标题下方。

### Mailchimp Saved 模板

`EN26黑五` 文件夹中的 20 份完整 HTML 导出存放于 `../outputs/mailchimp-en26-black-friday/`，索引元数据在 `assets/mailchimp-templates.js`。记录保留 Mailchimp 模板 ID、原始名称、活动阶段和适配人群。此批是 Saved 模板原件；发送前仍需复核优惠时效、链接、变量、退订信息和客户端显示。只有 HTML 中明确写出的主题行与 Preview 才录入对应字段。

## 新增外部资源

在同一文件的 `resources` 数组新增资源，并记录用途、类型、链接和检索日期对应的星标数。

## 新增内容组件

在 `assets/component-snippets.js` 增加组件名称、用途、来源模板路径、带 `{{变量}}` 的邮件 HTML 片段和预览样例值。组件页会展示预览、来源模板与可复制代码。目前收录首屏、活动提示、时间提示、产品说明、套餐对比和页脚等 11 个片段。示例价格与活动日期仅用于预览，代码入库前仍需替换变量并完成 Mailchimp、Gmail、Outlook 和移动端测试。

## 策略与 SOP

`assets/playbooks.js` 收录了生命周期邮件触发地图、发信基础检查和大促群发 SOP。它们根据内部历史文档重新整理为公开摘要，没有复制原文、私人联系人、账号信息、收件人名单、域名配置、活动成本、发送量或内部阈值。发信认证与测量方法附有官方参考链接；实际执行时应复核当前平台要求。

新增条目时，只记录可公开分享的策略原则与可验证的操作步骤。不要将内部文档全文、凭据、配置截图、名单导出或个人信息提交到公开仓库。

## 入库门槛

1. 品牌 Logo 与色彩已确认。
2. CTA、UTM 与人群文案已替换。
3. 已完成移动端、Gmail、Outlook 与 Mailchimp 测试。
4. 主题行、Preheader、发送时机及最终表现已记录。

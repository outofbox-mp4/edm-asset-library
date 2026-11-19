# Octoparse EDM Asset Library

这是一个无需构建工具的静态资产库。

> 当 Agent 可以自动写文案、拼装 HTML 和发起任务时，人的价值不再是重复制作，而是定义策略、标准、质量门槛和反馈闭环。这个资产站用于把这些能力沉淀为可复用系统。

## 新增品牌模板

在 `assets/data.js` 的 `templates` 数组新增一条记录，并将最终 HTML 放在当前工作区的相应 `outputs/` 目录。

必填字段：`id`、`name`、`phase`、`audience`、`goal`、`tags`、`desc`、`file`、`subject`、`preheader`、`cta`、`status`。

## 新增外部资源

在同一文件的 `resources` 数组新增资源，并记录用途、类型、链接和检索日期对应的星标数。

## 入库门槛

1. 品牌 Logo 与色彩已确认。
2. CTA、UTM 与人群文案已替换。
3. 已完成移动端、Gmail、Outlook 与 Mailchimp 测试。
4. 主题行、Preheader、发送时机及最终表现已记录。

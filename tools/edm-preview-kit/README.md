# 从活动背景生成多分层邮件

你只需提供活动背景和人群分层。Codex 会参考 [Colorlib](https://github.com/ColorlibHQ/email-templates) 和本库已有邮件，生成各分层的文案、HTML 和统一预览页；无需你先写邮件或填写配置。

例如，你可以直接说：

> 黑五活动即将开始。目标是让在期付费用户升级，让试用、免费和流失用户重新使用产品。请分别做邮件，先给我可切换的预览。优惠、时间和落地页信息在下面……

如果暂时没有最终价格、日期或链接，Codex 会在预览中明确标注待确认，不会编造。

## 会得到什么

- 每个人群一封独立邮件：包括 Subject、Preview text、正文和 CTA。
- 一个总预览页：切换人群，查看桌面与手机效果。
- 每封邮件的独立 HTML：确认后可用于 Mailchimp。
- 简短的设计说明：用了哪份既往模板或哪种 Colorlib 风格作为参考，以及各分层为何这样写。

**总预览页的 `index.html` 只用于审阅。导入 Mailchimp 时，使用 `emails/` 中对应人群的 HTML。**

## 需要告诉 Codex 的信息

活动目标、产品或功能、活动阶段、优惠与有效时间、落地页，以及每个人群的状态和希望他们采取的行动。可以用自然语言写，不需要按固定格式；[示例活动背景](brief.example.md)可供参考。

Codex 按 [制作流程](WORKFLOW.md)完成选风格、分层文案、HTML 制作和检查。仓库里的 `build-preview.mjs` 只负责把**已生成的邮件**组装成预览页，它不是让你提前准备内容的入口。

仓库示例展示了完整链条：[活动背景](brief.example.md) → [新用户邮件](examples/starter.html)与[付费用户邮件](examples/advanced.html) → [预览配置](campaign.example.json) → 总预览页。

## 自己运行已有示例（可选）

如果只是想看工具效果，电脑安装 Node.js 后，在仓库根目录运行：

```sh
node tools/edm-preview-kit/build-preview.mjs tools/edm-preview-kit/campaign.example.json
```

首次运行会生成 `tools/edm-preview-kit/dist/example-campaign/index.html`。如果双击后邮件正文为空白，可运行本地预览服务：

```sh
node tools/edm-preview-kit/serve-preview.mjs tools/edm-preview-kit/dist/example-campaign
```

打开命令显示的本机地址即可。重复生成会新建 `-v2`、`-v3`，不会覆盖旧预览。

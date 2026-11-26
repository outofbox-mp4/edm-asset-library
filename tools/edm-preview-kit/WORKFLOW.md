# Codex 制作流程：活动背景 → 分层邮件 → 预览

本文件供执行任务的 Codex 使用。用户提供活动背景和分层条件即可；不要让用户先制作邮件 HTML、填写 `campaign.json` 或手动运行脚本。

## 1. 理解活动

从用户信息整理活动目标、阶段（预热 / 开售 / 倒计时 / 常规）、优惠及有效时间、产品卖点、落地页和分层条件。为每个人群确定一个主要行动。若缺少最终价格、时间或链接，继续制作带清晰占位标记的预览，并在交付时列为待确认；不要自行编造或把预热预约写成可立即购买。

## 2. 选整体风格与内容结构

先看 [Colorlib Email Templates](https://github.com/ColorlibHQ/email-templates) 的合适活动版式，再看本库的 `outputs/mailchimp-en26-black-friday/`、`outputs/black-friday-early-bird/`、`outputs/black-friday-main-phase/` 和 `edm-library/assets/component-snippets.js`。Colorlib 用来参考整封邮件的视觉节奏；既往模板和组件用于品牌样式、结构及邮件兼容性。检查参考项目的许可后才复用其原代码或素材。

同一活动先定一套共同的网格、字级、颜色和 CTA 样式，再根据分层改变价值信息、套餐、价格和文案。不要把不同模板的颜色和模块机械拼接。预热、开售、倒计时分别使用与阶段一致的 CTA 和紧迫感文案。

## 3. 写分层内容

先形成内部对照表：人群状态、主要需求、核心价值、优惠或套餐、Subject、Preview text、主 CTA、落地页。再为每个人群撰写完整邮件。保持一封邮件一个主要行动；套餐、权益、价格与人群资格逐项核对。缺少经确认的优惠信息时，用明确的待确认占位，不输出看似真实的虚构数字。

## 4. 制作邮件 HTML

每个人群产出独立、可直接审阅的 HTML。采用邮件兼容的表格布局和内联样式，控制主内容宽度约 600px；使用可读的字体、替代文字、明确 CTA 和正常页脚。保留邮件平台所需的退订与地址变量。图片需有可访问的地址或随交付提供文件；检查小屏、图片关闭和纯文本阅读顺序。

在每份 HTML 中写入与配置一致的注释：

```html
<!-- Subject: Example subject -->
<!-- Preview: Example preview text -->
```

## 5. 自动组装预览

由 Codex 根据已写好的邮件创建活动 JSON，填入活动名、输出目录、图片文件和每个人群的 `id`、`label`、`segment`、`subject`、`preview`、`htmlFile`。然后在仓库根目录运行：

```sh
node tools/edm-preview-kit/build-preview.mjs path/to/campaign.json
```

生成器会复制独立邮件到 `emails/`，并创建统一的 `index.html`。输出目录存在时自动生成 `-v2`、`-v3`，不覆盖旧结果。

## 6. 检查并交付

逐个分层核对 Subject、Preview、正文、价格、时间、优惠资格和链接。打开总预览页，检查分层切换、桌面与手机宽度、图片和“Open HTML”；必要时使用 `serve-preview.mjs` 在本机服务预览。交付总预览页、每封独立 HTML 和一段简短的设计来源说明。说明任何尚待业务确认的占位项。`index.html` 只供审阅，不能作为 Mailchimp 邮件导入。

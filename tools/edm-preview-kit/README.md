# 多分层邮件预览工具

**用途：把同一次活动的多封邮件放到一个预览页，方便逐封检查。**例如黑五活动有 Standard、Pro、试用和免费用户四封邮件，就能在同一页切换查看。

预览页会显示每封邮件的适用人群、邮件标题（Subject）、收件箱预览文字（Preview text）和邮件正文，还能切换桌面、手机宽度。

> **发送邮件时用哪份文件？** `index.html` 只给团队审阅；导入 Mailchimp 的是 `emails/` 文件夹里对应人群的单封 HTML。

## 最简单的用法

把每个人群的最终邮件 HTML，以及对应的 Subject、Preview text 交给 Codex，然后说：

> 请用这个多分层邮件预览工具，把这些邮件做成一个可切换的预览页，并给我每封独立 HTML。

Codex 会填写活动清单并生成预览。你只需检查每个分层的桌面、手机效果。

## 自己运行示例

电脑需要安装 Node.js。在仓库文件夹运行：

```sh
node tools/edm-preview-kit/build-preview.mjs tools/edm-preview-kit/campaign.example.json
```

首次运行会得到 `tools/edm-preview-kit/dist/example-campaign/index.html`。如果直接双击后看不到邮件正文，再运行：

```sh
node tools/edm-preview-kit/serve-preview.mjs tools/edm-preview-kit/dist/example-campaign
```

打开命令显示的本机网页地址，就能看到示例。再次生成时会新建 `example-campaign-v2`，旧版本不会被覆盖；此时第二条命令中的目录也要改为 `example-campaign-v2`。

## 做自己的活动

1. **准备邮件：**每个人群各有一份最终 HTML。
2. **填写清单：**复制 [示例配置](campaign.example.json)，写上活动名称，以及每封邮件的人群、标题、预览文字和 HTML 文件位置。有本地图片时，也把图片列进去。
3. **生成预览：**把上面第一条命令中的 `campaign.example.json` 换成你的配置文件路径。
4. **检查并交付：**切换所有人群，检查桌面与手机效果；把预览页给团队审阅，把 `emails/` 中的单封 HTML 用于 Mailchimp。

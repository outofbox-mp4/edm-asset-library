# EDM 多分层预览生成器

为一次邮件活动生成统一的预览页。每个分层仍是一份独立 HTML；预览页提供分层切换、适用人群、Subject、Preview text、邮件正文预览、桌面/手机宽度切换和单封 HTML 入口。预览页本身不可导入 Mailchimp。

## 运行示例

需要 Node.js 18 或更新版本，无第三方依赖。在仓库根目录运行：

```sh
node tools/edm-preview-kit/build-preview.mjs tools/edm-preview-kit/campaign.example.json
```

打开命令输出的 `index.html`。若浏览器限制 `file://` 页面加载内嵌邮件，可用随附的本地服务器打开：

```sh
node tools/edm-preview-kit/serve-preview.mjs tools/edm-preview-kit/dist/example-campaign
```

浏览器打开命令输出的本机地址。单封邮件在 `emails/` 中。

## 用于新活动

1. 为每个分层准备最终邮件 HTML，并确定 Subject 与 Preview text。
2. 复制 `campaign.example.json` 到新活动目录，填写 `campaign`、`subtitle`、`variants`，有本地图片时列入 `sharedAssets`。`htmlFile`、`sharedAssets` 和 `outputDir` 均相对配置文件。
3. 运行 `node tools/edm-preview-kit/build-preview.mjs path/to/campaign.json`，逐一检查桌面、手机、图片和“Open HTML”。
4. 给邮件平台导入 `emails/` 中的单封 HTML，不要导入 `index.html`。

脚本检查必填字段、重复分层 ID、缺失输入、图片重名，以及 HTML 中存在的 `<!-- Subject: ... -->`、`<!-- Preview: ... -->` 注释与配置是否一致。它会在已有输出旁生成 `-v2`、`-v3`，不覆盖旧版本。建议把真实活动的配置和输出存放在对应活动目录；此处的 `dist/` 已被忽略，不提交一次性的生成结果。

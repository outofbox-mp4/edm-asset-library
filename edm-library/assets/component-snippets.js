window.EDM_COMPONENTS = [
  {
    id: 'hero',
    name: '首屏 Hero 与主 CTA',
    description: '用于活动或功能邮件的开头。替换标题、说明和落地页链接；一封邮件只保留一个主行动。',
    source: '../outputs/black-friday-early-bird/ai-assistant-basic-free-inactive.html',
    height: 290,
    sample: {
      '{{EYEBROW}}': 'BLACK FRIDAY · EARLY BIRD',
      '{{HEADLINE}}': 'Make data collection easier',
      '{{DESCRIPTION}}': 'Tell Octoparse AI Assistant what data you need. Find the right route, then review the results before export.',
      '{{CTA_TEXT}}': 'Explore AI Assistant',
      '{{CTA_URL}}': 'https://www.octoparse.com/'
    },
    html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#08070B;">
  <tr><td align="center" style="padding:38px 24px 42px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;max-width:600px;">
      <tr><td style="font-family:Arial,Helvetica,sans-serif;color:#1FF2CF;font-size:12px;font-weight:bold;letter-spacing:1px;padding-bottom:14px;">{{EYEBROW}}</td></tr>
      <tr><td style="font-family:Arial,Helvetica,sans-serif;color:#FFFFFF;font-size:32px;font-weight:bold;line-height:1.2;padding-bottom:16px;">{{HEADLINE}}</td></tr>
      <tr><td style="font-family:Arial,Helvetica,sans-serif;color:#E5E7E5;font-size:16px;line-height:1.55;padding-bottom:24px;">{{DESCRIPTION}}</td></tr>
      <tr><td><table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;"><tr><td bgcolor="#1FF2CF" style="background:#1FF2CF;padding:13px 20px;"><a href="{{CTA_URL}}" style="font-family:Arial,Helvetica,sans-serif;color:#08070B;font-size:15px;font-weight:bold;text-decoration:none;display:inline-block;">{{CTA_TEXT}}</a></td></tr></table></td></tr>
    </table>
  </td></tr>
</table>`
  },
  {
    id: 'pricing',
    name: '双套餐价格',
    description: '用于需要让用户比较两档方案的活动邮件。替换价格、套餐名、原价和链接；正式发送前确认价格有效期。',
    source: '../outputs/black-friday-early-bird/early-bird-standard-two-plans.html',
    height: 300,
    sample: {
      '{{SECTION_TITLE}}': 'Choose your Standard plan',
      '{{PLAN_1}}': 'Standard 3-Node Annual',
      '{{PRICE_1}}': '$599',
      '{{REGULAR_1}}': '$829',
      '{{PLAN_2}}': 'Standard 6-Node Annual',
      '{{PRICE_2}}': '$799',
      '{{REGULAR_2}}': '$1,199',
      '{{CTA_TEXT_1}}': 'View 3-Node',
      '{{CTA_TEXT_2}}': 'View 6-Node',
      '{{PLAN_URL_1}}': 'https://www.octoparse.com/',
      '{{PLAN_URL_2}}': 'https://www.octoparse.com/'
    },
    html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#D9FCEB;">
  <tr><td align="center" style="padding:26px 16px 30px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;max-width:600px;">
      <tr><td colspan="2" align="center" style="font-family:Arial,Helvetica,sans-serif;color:#08070B;font-size:21px;font-weight:bold;padding:0 8px 18px;">{{SECTION_TITLE}}</td></tr>
      <tr>
        <td width="50%" valign="top" style="width:50%;padding:8px;background:#FFFFFF;border-right:4px solid #D9FCEB;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;"><tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;color:#08070B;font-size:13px;font-weight:bold;padding:14px 4px 8px;">{{PLAN_1}}</td></tr><tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;color:#08070B;font-size:29px;font-weight:bold;padding:0 4px;">{{PRICE_1}}</td></tr><tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;color:#777777;font-size:12px;text-decoration:line-through;padding:5px 4px 14px;">Regular {{REGULAR_1}}</td></tr><tr><td align="center" style="padding:0 4px 14px;"><a href="{{PLAN_URL_1}}" style="display:inline-block;background:#08070B;color:#FFFFFF;padding:10px 12px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;text-decoration:none;">{{CTA_TEXT_1}}</a></td></tr></table>
        </td>
        <td width="50%" valign="top" style="width:50%;padding:8px;background:#FFFFFF;border-left:4px solid #D9FCEB;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;"><tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;color:#08070B;font-size:13px;font-weight:bold;padding:14px 4px 8px;">{{PLAN_2}}</td></tr><tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;color:#08070B;font-size:29px;font-weight:bold;padding:0 4px;">{{PRICE_2}}</td></tr><tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;color:#777777;font-size:12px;text-decoration:line-through;padding:5px 4px 14px;">Regular {{REGULAR_2}}</td></tr><tr><td align="center" style="padding:0 4px 14px;"><a href="{{PLAN_URL_2}}" style="display:inline-block;background:#08070B;color:#FFFFFF;padding:10px 12px;font-family:Arial,Helvetica,sans-serif;font-size:12px;font-weight:bold;text-decoration:none;">{{CTA_TEXT_2}}</a></td></tr></table>
        </td>
      </tr>
    </table>
  </td></tr>
</table>`
  },
  {
    id: 'offer',
    name: '轻量优惠提示',
    description: '放在功能价值之后，作为辅助信息。替换活动文案、优惠额度和活动页链接。',
    source: '../outputs/black-friday-main-phase/regular-free-ai-assistant.html',
    height: 150,
    sample: {
      '{{OFFER_LABEL}}': 'BLACK FRIDAY',
      '{{OFFER_TEXT}}': 'Save up to 45% when the offer opens',
      '{{OFFER_LINK_TEXT}}': 'View the offer',
      '{{OFFER_URL}}': 'https://www.octoparse.com/'
    },
    html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#F6F8F5;border-top:1px solid #DFE5DE;">
  <tr><td align="center" style="padding:18px 22px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;max-width:600px;">
      <tr><td style="font-family:Arial,Helvetica,sans-serif;color:#435D4C;font-size:11px;font-weight:bold;letter-spacing:1px;padding-bottom:5px;">{{OFFER_LABEL}}</td></tr>
      <tr><td style="font-family:Arial,Helvetica,sans-serif;color:#08070B;font-size:15px;line-height:1.5;">{{OFFER_TEXT}}. <a href="{{OFFER_URL}}" style="color:#24543B;text-decoration:underline;font-weight:bold;">{{OFFER_LINK_TEXT}}</a></td></tr>
    </table>
  </td></tr>
</table>`
  },
  {
    id: 'campaign-banner',
    name: '顶部活动图',
    description: '用于已有品牌与活动信息的横幅图。整张图可点击；替换图片地址、替代文字和活动页链接。',
    source: '../outputs/mailchimp-en26-black-friday/BF26activebscmo_stg1_en.html',
    height: 205,
    sample: {
      '{{BANNER_URL}}': 'https://mcusercontent.com/768948aaa867ebe350db36a6a/images/63005fe8-35de-6f25-0aaa-5cc616ca0630.png',
      '{{BANNER_ALT}}': 'Octoparse Black Friday campaign',
      '{{LANDING_URL}}': 'https://www.octoparse.com/black-friday-sale-2026'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#050307;">
  <tr><td align="center" style="padding:0;">
    <a href="{{LANDING_URL}}" target="_blank" style="display:block;text-decoration:none;"><img src="{{BANNER_URL}}" width="600" alt="{{BANNER_ALT}}" style="display:block;width:100%;max-width:600px;height:auto;border:0;outline:none;"></a>
  </td></tr>
</table>`
  },
  {
    id: 'segment-intro',
    name: '分层问候与价值说明',
    description: '用于按用户状态调整首段文案。保留 Mailchimp 姓名变量，也可替换为其他 ESP 的变量语法。',
    source: '../outputs/mailchimp-en26-black-friday/BF26free_stg1_en.html',
    height: 225,
    sample: {
      '{{SEGMENT_LABEL}}': 'WELCOME BACK',
      '{{HEADLINE}}': 'Your next data project can start here.',
      '{{FIRST_NAME}}': 'Alex',
      '{{VALUE_TEXT}}': 'Tell AI Assistant what you need. It helps you find a practical way to collect the data, then refine the results before export.'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#FFFFFF;">
  <tr><td style="padding:30px 28px;font-family:Arial,Helvetica,sans-serif;">
    <div style="color:#9A1670;font-size:12px;font-weight:bold;letter-spacing:1px;">{{SEGMENT_LABEL}}</div>
    <div style="padding-top:10px;color:#050307;font-size:27px;line-height:1.25;font-weight:bold;">{{HEADLINE}}</div>
    <div style="padding-top:14px;color:#45384A;font-size:15px;line-height:1.6;">Hi {{FIRST_NAME}},<br><br>{{VALUE_TEXT}}</div>
  </td></tr>
</table>`
  },
  {
    id: 'deadline',
    name: '优惠时段提示',
    description: '将活动开始、结束或截止时间独立成一条信息。预热期与正式开售期分别替换状态文案，避免误导。',
    source: '../outputs/black-friday-early-bird/early-bird-standard-two-plans.html',
    height: 125,
    sample: {
      '{{TIME_LABEL}}': 'EARLY BIRD · 36 HOURS ONLY',
      '{{TIME_TEXT}}': 'Ends Nov 19 at 12:00 PM EST'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#050307;">
  <tr><td align="center" style="padding:21px 24px;font-family:Arial,Helvetica,sans-serif;text-align:center;">
    <div style="color:#FFB6EB;font-size:11px;line-height:17px;font-weight:bold;letter-spacing:1px;">{{TIME_LABEL}}</div>
    <div style="padding-top:7px;color:#FFFFFF;font-size:15px;line-height:23px;font-weight:bold;">{{TIME_TEXT}}</div>
  </td></tr>
</table>`
  },
  {
    id: 'ai-request',
    name: 'AI Assistant 输入示例',
    description: '用一个具体请求解释产品如何开始工作。示例应对应目标人群的真实场景，不要把产品能力写得超过实际。',
    source: '../outputs/mailchimp-en26-black-friday/BF26早鸟free.html',
    height: 165,
    sample: {
      '{{EXAMPLE_LABEL}}': 'EXAMPLE REQUEST',
      '{{EXAMPLE_TEXT}}': 'Collect product names and prices from this website.'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#050307;">
  <tr><td style="padding:22px 24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#17131D;border:1px solid #51475A;">
      <tr><td style="padding:17px 19px;font-family:Arial,Helvetica,sans-serif;">
        <div style="color:#FFB6EB;font-size:11px;line-height:17px;font-weight:bold;letter-spacing:1px;">{{EXAMPLE_LABEL}}</div>
        <div style="padding-top:7px;color:#FFFFFF;font-size:16px;line-height:24px;">“{{EXAMPLE_TEXT}}”</div>
      </td></tr>
    </table>
  </td></tr>
</table>`
  },
  {
    id: 'three-steps',
    name: '产品使用三步',
    description: '适合介绍 AI Assistant 或新功能流程。采用纵向三行，窄屏也能保持标题与说明对齐。',
    source: '../outputs/mailchimp-en26-black-friday/BF26free_stg1_en.html',
    height: 280,
    sample: {
      '{{STEP_1_TITLE}}': 'Start with a URL',
      '{{STEP_1_TEXT}}': 'Add the page and fields you need.',
      '{{STEP_2_TITLE}}': 'Choose the best fit',
      '{{STEP_2_TEXT}}': 'Use a template, browser collection, or a cloud workflow.',
      '{{STEP_3_TITLE}}': 'Review before export',
      '{{STEP_3_TEXT}}': 'Adjust fields and preview the result.'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#FFFFFF;">
  <tr><td style="padding:22px 24px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
      <tr><td width="42" valign="top" style="padding:9px 8px 9px 0;color:#A91882;font-size:19px;font-weight:bold;">01</td><td style="padding:9px 0;border-bottom:1px solid #E6E3E7;"><div style="color:#050307;font-size:15px;font-weight:bold;line-height:22px;">{{STEP_1_TITLE}}</div><div style="color:#45384A;font-size:13px;line-height:20px;">{{STEP_1_TEXT}}</div></td></tr>
      <tr><td width="42" valign="top" style="padding:9px 8px 9px 0;color:#A91882;font-size:19px;font-weight:bold;">02</td><td style="padding:9px 0;border-bottom:1px solid #E6E3E7;"><div style="color:#050307;font-size:15px;font-weight:bold;line-height:22px;">{{STEP_2_TITLE}}</div><div style="color:#45384A;font-size:13px;line-height:20px;">{{STEP_2_TEXT}}</div></td></tr>
      <tr><td width="42" valign="top" style="padding:9px 8px 9px 0;color:#A91882;font-size:19px;font-weight:bold;">03</td><td style="padding:9px 0;"><div style="color:#050307;font-size:15px;font-weight:bold;line-height:22px;">{{STEP_3_TITLE}}</div><div style="color:#45384A;font-size:13px;line-height:20px;">{{STEP_3_TEXT}}</div></td></tr>
    </table>
  </td></tr>
</table>`
  },
  {
    id: 'single-plan',
    name: '单套餐推荐',
    description: '当人群只需一个明确的低门槛方案时使用。替换套餐、价格、权益和 CTA，不需要额外对比卡。',
    source: '../outputs/mailchimp-en26-black-friday/BF26free_stg1_en.html',
    height: 225,
    sample: {
      '{{PLAN_LABEL}}': 'A SIMPLE WAY TO CONTINUE',
      '{{PLAN_NAME}}': 'Basic',
      '{{PLAN_PRICE}}': '$19/month',
      '{{PLAN_BENEFIT}}': 'Includes 10,000 pay-per-result template rows each month.',
      '{{CTA_TEXT}}': 'Explore Basic',
      '{{PLAN_URL}}': 'https://www.octoparse.com/'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#D7FFE9;">
  <tr><td style="padding:24px 28px;font-family:Arial,Helvetica,sans-serif;">
    <div style="color:#006F61;font-size:11px;line-height:17px;font-weight:bold;letter-spacing:1px;">{{PLAN_LABEL}}</div>
    <div style="padding-top:6px;color:#050307;font-size:27px;line-height:34px;font-weight:bold;">{{PLAN_NAME}} <span style="color:#A91882;">{{PLAN_PRICE}}</span></div>
    <div style="padding-top:8px;color:#23362E;font-size:14px;line-height:22px;">{{PLAN_BENEFIT}}</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:15px;"><tr><td bgcolor="#050307" style="padding:11px 17px;background:#050307;"><a href="{{PLAN_URL}}" style="display:inline-block;color:#FFFFFF;font-size:14px;font-weight:bold;text-decoration:none;">{{CTA_TEXT}}</a></td></tr></table>
  </td></tr>
</table>`
  },
  {
    id: 'plan-benefits',
    name: '套餐权益清单',
    description: '接在价格区之后解释用户具体获得什么。权益应与所展示的套餐一致，发送前逐项核对。',
    source: '../outputs/black-friday-early-bird/early-bird-standard-two-plans.html',
    height: 180,
    sample: {
      '{{BENEFITS_TITLE}}': 'More included with Standard Annual',
      '{{BENEFIT_1}}': 'Extra cloud nodes for your workflow',
      '{{BENEFIT_2}}': 'Monthly balance benefits',
      '{{BENEFIT_3}}': 'Crawler Setup support'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#D7FFE9;">
  <tr><td style="padding:22px 26px;font-family:Arial,Helvetica,sans-serif;color:#050307;">
    <div style="font-size:17px;line-height:24px;font-weight:bold;padding-bottom:9px;">{{BENEFITS_TITLE}}</div>
    <div style="font-size:14px;line-height:23px;">• {{BENEFIT_1}}<br>• {{BENEFIT_2}}<br>• {{BENEFIT_3}}</div>
  </td></tr>
</table>`
  },
  {
    id: 'secondary-plan-note',
    name: '次级套餐文字引导',
    description: '主 CTA 之后用一句话提供其他合适方案，避免再加大型价格卡。替换方案内容与次级链接。',
    source: '../outputs/black-friday-main-phase/regular-free-ai-assistant.html',
    height: 145,
    sample: {
      '{{PLAN_NOTE}}': 'Need more capacity? Explore the plan that fits your next project.',
      '{{LINK_TEXT}}': 'Compare plans',
      '{{LINK_URL}}': 'https://www.octoparse.com/'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#050307;">
  <tr><td style="padding:20px 26px;font-family:Arial,Helvetica,sans-serif;">
    <div style="color:#E6DFEB;font-size:13px;line-height:21px;">{{PLAN_NOTE}}</div>
    <a href="{{LINK_URL}}" style="display:inline-block;padding-top:8px;color:#7FF7E3;font-size:13px;line-height:20px;text-decoration:underline;">{{LINK_TEXT}}</a>
  </td></tr>
</table>`
  },
  {
    id: 'footer',
    name: '合规页脚',
    description: 'Mailchimp 版本。保留退订、隐私说明和寄件主体地址；按实际受众与品牌信息替换。',
    source: '../outputs/black-friday-early-bird/early-bird-standard-two-plans.html',
    height: 185,
    sample: {
      '{{BRAND_NAME}}': 'Octoparse',
      '{{COMPANY_NAME}}': 'Octopus Data Inc.',
      '{{YEAR}}': '2026',
      '{{PRIVACY_URL}}': 'https://www.octoparse.com/privacy-policy'
    },
    html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#F6F8F5;">
  <tr><td align="center" style="padding:24px 22px 30px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;max-width:600px;">
      <tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;color:#5E6860;font-size:12px;line-height:1.6;padding-bottom:9px;">You are receiving this because you have subscribed to {{BRAND_NAME}} updates.<br>
        <a href="*|UNSUB|*" style="color:#24543B;text-decoration:underline;">Unsubscribe</a> · <a href="{{PRIVACY_URL}}" style="color:#24543B;text-decoration:underline;">Privacy Policy</a><br>
            © {{COMPANY_NAME}} {{YEAR}}. All rights reserved.</td></tr>
    </table>
  </td></tr>
</table>`
  }
];

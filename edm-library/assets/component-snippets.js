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
    name: '轻量活动提示',
    description: '放在价值内容之后，用一行文字提示优惠与活动入口；不会抢占主要信息。',
    source: '../outputs/mailchimp-en26-black-friday/BF26补发_stg1_en.html',
    height: 105,
    sample: {
      '{{OFFER_LABEL}}': 'BLACK FRIDAY EARLY BIRD',
      '{{OFFER_TEXT}}': 'Save up to 45% OFF · Opens Nov 18 ·',
      '{{OFFER_LINK_TEXT}}': 'View the offer',
      '{{OFFER_URL}}': 'https://www.octoparse.com/black-friday-sale-2026'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#FFF8E9;">
  <tr><td align="center" style="padding:16px 20px;text-align:center;font-family:Arial,Helvetica,sans-serif;color:#9A5A00;">
    <div style="font-size:12px;line-height:18px;letter-spacing:1px;font-weight:bold;">{{OFFER_LABEL}}</div>
    <div style="padding-top:3px;font-size:14px;line-height:21px;">{{OFFER_TEXT}} <a href="{{OFFER_URL}}" style="color:#9A5A00;text-decoration:underline;font-weight:bold;">{{OFFER_LINK_TEXT}}</a></div>
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
    id: 'offer-card',
    name: '黑金优惠卡',
    description: '文字和按钮组成的活动卡，可在不依赖横幅图片的情况下突出优惠信息。',
    source: '../outputs/mailchimp-en26-black-friday/BF26补发_stg1_en.html',
    height: 245,
    sample: {
      '{{BRAND_LABEL}}': 'OCTOPARSE BLACK FRIDAY',
      '{{OFFER_HEADLINE}}': 'UP TO 45% OFF',
      '{{OFFER_SUBTITLE}}': 'SUBSCRIBER EARLY BIRD · OPENS NOV 18',
      '{{OFFER_DETAIL}}': 'Available for 36 hours.',
      '{{CTA_TEXT}}': 'PREVIEW OFFER',
      '{{CTA_URL}}': 'https://www.octoparse.com/black-friday-sale-2026'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#FFFFFF;">
  <tr><td style="padding:20px;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#090806;border:1px solid #B88D39;">
      <tr><td align="center" style="padding:20px 16px 22px;text-align:center;">
        <div style="font-size:10px;line-height:15px;letter-spacing:2px;font-weight:bold;color:#E8C56A;">{{BRAND_LABEL}}</div>
        <div style="padding-top:4px;font-size:32px;line-height:38px;font-weight:bold;color:#F3CF79;">{{OFFER_HEADLINE}}</div>
        <div style="padding-top:4px;font-size:12px;line-height:18px;letter-spacing:.7px;font-weight:bold;color:#FFFFFF;">{{OFFER_SUBTITLE}}</div>
        <div style="padding-top:5px;font-size:13px;line-height:19px;color:#D9D2C3;">{{OFFER_DETAIL}}</div>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin:14px auto 0;"><tr><td bgcolor="#E6BD60" style="background:#E6BD60;padding:11px 18px;"><a href="{{CTA_URL}}" style="display:inline-block;font-size:13px;line-height:18px;font-weight:bold;color:#090806;text-decoration:none;">{{CTA_TEXT}}</a></td></tr></table>
      </td></tr>
    </table>
  </td></tr>
</table>`
  },
  {
    id: 'explainer',
    name: '插入说明',
    description: '在主要内容之间插入一项关键权益或产品信息，控制在标题、说明和补充句三层。',
    source: '../outputs/mailchimp-en26-black-friday/BF26补发_stg1_en.html',
    height: 195,
    sample: {
      '{{EXPLAINER_LABEL}}': 'A NEW BENEFIT FOR SUBSCRIBERS',
      '{{EXPLAINER_HEADLINE}}': '10,000 free pay-per-result template rows / month',
      '{{EXPLAINER_TEXT}}': 'More room to test and refine your collection plan.'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#D7FFE9;">
  <tr><td style="padding:28px 32px;font-family:Arial,Helvetica,sans-serif;">
    <div style="font-size:12px;line-height:18px;letter-spacing:1px;font-weight:bold;color:#006F61;">{{EXPLAINER_LABEL}}</div>
    <div style="padding-top:8px;font-size:22px;line-height:29px;font-weight:bold;color:#050307;">{{EXPLAINER_HEADLINE}}</div>
    <div style="padding-top:8px;font-size:15px;line-height:23px;color:#45384A;">{{EXPLAINER_TEXT}}</div>
  </td></tr>
</table>`
  },
  {
    id: 'featured-comparison',
    name: '主次套餐并列对比',
    description: '用一张大卡突出主推方案，再用两张小卡展示备选方案；价格和权益应逐项核对。',
    source: '../outputs/mailchimp-en26-black-friday/BF26常规pro.html',
    height: 395,
    sample: {
      '{{SECTION_LABEL}}': 'COMPARE ANNUAL PLANS',
      '{{FEATURED_PLAN}}': 'PRO ANNUAL',
      '{{FEATURED_PRICE}}': '$2,399',
      '{{FEATURED_REGULAR}}': '$2,999',
      '{{FEATURED_SAVINGS}}': '$600',
      '{{FEATURED_BENEFIT}}': '10 bonus cloud nodes for six months',
      '{{SECONDARY_PLAN_1}}': 'STANDARD 3-NODE ANNUAL',
      '{{SECONDARY_PRICE_1}}': '$699',
      '{{SECONDARY_REGULAR_1}}': '$829',
      '{{SECONDARY_SAVINGS_1}}': '$130',
      '{{SECONDARY_PLAN_2}}': 'STANDARD 6-NODE ANNUAL',
      '{{SECONDARY_PRICE_2}}': '$929',
      '{{SECONDARY_REGULAR_2}}': '$1,199',
      '{{SECONDARY_SAVINGS_2}}': '$270'
    },
    html: `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#08070B;">
  <tr><td style="padding:22px 18px 24px;font-family:Arial,Helvetica,sans-serif;">
    <div style="padding-bottom:12px;text-align:center;font-size:11px;line-height:17px;letter-spacing:1px;font-weight:bold;color:#1FF2CF;">{{SECTION_LABEL}}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;background:#D7FFE9;border:2px solid #1FF2CF;">
      <tr><td align="center" style="padding:20px 12px;text-align:center;color:#050307;">
        <div style="font-size:13px;line-height:19px;font-weight:bold;">{{FEATURED_PLAN}}</div>
        <div style="padding-top:6px;font-size:35px;line-height:41px;font-weight:bold;color:#C31991;">{{FEATURED_PRICE}}</div>
        <div style="padding-top:4px;font-size:13px;line-height:20px;"><span style="text-decoration:line-through;">Regular {{FEATURED_REGULAR}}</span> &nbsp;·&nbsp; <strong>Save {{FEATURED_SAVINGS}}</strong></div>
        <div style="padding-top:7px;font-size:11px;line-height:17px;">{{FEATURED_BENEFIT}}</div>
      </td></tr>
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;margin-top:9px;"><tr>
      <td width="49%" valign="top" align="center" style="width:49%;padding:14px 7px;background:#17131D;border:1px solid #51475A;text-align:center;color:#FFFFFF;">
        <div style="min-height:34px;font-size:11px;line-height:16px;font-weight:bold;">{{SECONDARY_PLAN_1}}</div><div style="padding-top:5px;font-size:24px;line-height:29px;font-weight:bold;color:#FFB6EB;">{{SECONDARY_PRICE_1}}</div><div style="font-size:10px;line-height:16px;color:#D5CDDA;">Listed {{SECONDARY_REGULAR_1}}</div><div style="font-size:11px;line-height:17px;">Save {{SECONDARY_SAVINGS_1}}</div>
      </td>
      <td width="2%" style="width:2%;font-size:1px;line-height:1px;">&nbsp;</td>
      <td width="49%" valign="top" align="center" style="width:49%;padding:14px 7px;background:#17131D;border:1px solid #51475A;text-align:center;color:#FFFFFF;">
        <div style="min-height:34px;font-size:11px;line-height:16px;font-weight:bold;">{{SECONDARY_PLAN_2}}</div><div style="padding-top:5px;font-size:24px;line-height:29px;font-weight:bold;color:#FFB6EB;">{{SECONDARY_PRICE_2}}</div><div style="font-size:10px;line-height:16px;color:#D5CDDA;">Listed {{SECONDARY_REGULAR_2}}</div><div style="font-size:11px;line-height:17px;">Save {{SECONDARY_SAVINGS_2}}</div>
      </td>
    </tr></table>
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

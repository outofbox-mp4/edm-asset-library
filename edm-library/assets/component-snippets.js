window.EDM_COMPONENTS = [
  {
    id: 'hero',
    name: '首屏 Hero 与主 CTA',
    description: '用于活动或功能邮件的开头。替换标题、说明和落地页链接；一封邮件只保留一个主行动。',
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
    id: 'footer',
    name: '合规页脚',
    description: 'Mailchimp 版本。保留退订、隐私说明和寄件主体地址；按实际受众与品牌信息替换。',
    height: 185,
    sample: {
      '{{BRAND_NAME}}': 'Octoparse',
      '{{PRIVACY_URL}}': 'https://www.octoparse.com/privacy-policy'
    },
    html: `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background:#F6F8F5;">
  <tr><td align="center" style="padding:24px 22px 30px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;max-width:600px;">
      <tr><td align="center" style="font-family:Arial,Helvetica,sans-serif;color:#5E6860;font-size:12px;line-height:1.6;padding-bottom:9px;">You are receiving this because you have subscribed to Octoparse updates.<br>
        <a href="*|UNSUB|*" style="color:#7FF7E3;text-decoration:underline;">Unsubscribe</a>· <a href="https://www.octoparse.com/privacy-policy" style="color:#7FF7E3;text-decoration:underline;">Privacy Policy</a><br>
            © Octopus Data Inc. 2026. All rights reserved.</td></tr>
    </table>
  </td></tr>
</table>`
  }
];

// Saved templates exported from Mailchimp > Email Templates > Saved > EN26黑五.
// Keep the source names and IDs so each HTML can be traced back to Mailchimp.
window.EDM_MAILCHIMP_TEMPLATES = [
  ['10054554','BF26activebscmo_stg1_en','预热期','在期 Basic 月付','Standard 两档升级','预约早鸟价','面向在期 Basic 月付用户的 Standard 年付升级预告','Reserve My Spot'],
  ['10054555','BF26activestdmo_qt_stg1_en','预热期','在期 Standard 月付 / 季付','Standard 年付','预约早鸟价','面向 Standard 月付或季付用户的年付转换预告','Reserve My Spot'],
  ['10054556','BF26activestdyr_stg1_en','预热期','在期 Standard 年付','Pro 升级','预约早鸟价','面向 Standard 年付用户的 Pro 升级预告','Reserve My Spot'],
  ['10054557','BF26activepromo_qt_stg1_en','预热期','在期 Pro 月付 / 季付','Pro 年付','预约早鸟价','面向 Pro 月付或季付用户的年付转换预告','Reserve My Spot'],
  ['10054558','BF26activeproyr_stg1_en','预热期','在期 Pro 年付','Enterprise 或 Pro 年付','预约早鸟价','面向 Pro 年付用户的 Enterprise 或续订方案预告','Reserve My Spot'],
  ['10054559','BF26trialing_stg1_en','预热期','试用中用户','Standard / Pro 套餐','预约早鸟价','面向试用中用户的套餐选择与早鸟预约','Explore Octoparse'],
  ['10054560','BF26longexp_ft_stg1_en','预热期','长期流失用户','AI Assistant 召回','功能激活','用 AI Assistant 降低长期流失用户的重新上手门槛','Explore More'],
  ['10054563','BF26free_stg1_en','预热期','免费用户','AI Assistant + Basic','功能激活','面向免费用户的 AI Assistant 使用价值与 Basic 方案','Explore More'],
  ['10054577','BF26trialexp_planexp_ft3m_stg1_en','预热期','试用到期 / 套餐到期 / 短期流失','AI Assistant + 多套餐','召回','面向近期到期和流失用户的 AI Assistant 与套餐选择','Explore More'],
  ['10054598','BF26早鸟std','早鸟价 36h','Standard 相关付费用户','Standard 两档','套餐升级','36 小时内的 Standard 3-Node 与 6-Node 年付优惠','Choose my Standard plan'],
  ['10054599','BF26早鸟pro','早鸟价 36h','Pro 相关付费用户','Pro + Standard','套餐升级','36 小时内的 Pro 与 Standard 年付选择','See all Early Bird plans'],
  ['10054600','BF26早鸟free','早鸟价 36h','免费用户','AI Assistant + Basic','功能激活','以 AI Assistant 免费使用和 Basic 月付为主的早鸟邮件','Try Octoparse'],
  ['10054602','BF26早鸟补发','早鸟价 36h','付费用户 · 补发','Pro + Standard','截止提醒','早鸟截止前的 Pro 与 Standard 套餐提醒','Lock in Early Bird price'],
  ['10054624','BF26早鸟trial','早鸟价 36h','试用用户','Pro + Standard','试用转付费','试用用户的 36 小时 Pro 与 Standard 套餐选择','See all Early Bird plans'],
  ['10054626','BF26常规std','正式活动','Standard 相关付费用户','Standard 年付','套餐升级','早鸟结束后的 Standard 年付优惠','Compare Standard annual plans'],
  ['10054628','BF26常规pro','正式活动','Pro 相关付费用户','Pro + Standard 年付','套餐升级','早鸟结束后的 Pro 与 Standard 年付优惠','Explore Pro Annual'],
  ['10054629','BF26常规free','正式活动','免费用户','AI Assistant + 套餐','功能激活','正式活动期的 AI Assistant 使用与套餐引导','Try AI Assistant'],
  ['10054630','BF26常规trial','正式活动','试用用户','Standard 年付','试用转付费','正式活动期的试用用户 Standard 套餐推荐','Compare my plan options']
].map(([mailchimpId,mailchimpName,phase,audience,variant,goal,desc,cta]) => ({
  id:`mailchimp-${mailchimpId}`,
  name:mailchimpName,
  mailchimpId,
  source:'Mailchimp · EN26黑五',
  campaign:'Black Friday',
  phase,audience,variant,goal,desc,cta,
  tags:['Black Friday',phase,audience],
  file:`../outputs/mailchimp-en26-black-friday/${mailchimpName}.html`,
  subject:({
    '10054626':'Early Bird ended. Standard Annual can still save you up to $270',
    '10054628':'Early Bird ended. Pro Annual is still $600 off',
    '10054629':'Need website data? Start with Octoparse AI Assistant',
    '10054630':'Still have website data to collect? Your Black Friday plan is here'
  })[mailchimpId]||'',
  preheader:({
    '10054626':'Keep more capacity for the year; quarterly offers are available too.',
    '10054628':'Compare annual plans: Standard from $699, or Pro for $2,399.',
    '10054629':'Tell Octoparse what you need; AI Assistant suggests a way to collect it.',
    '10054630':'Early Bird ended, but Standard Annual still starts at $699.'
  })[mailchimpId]||''
}));

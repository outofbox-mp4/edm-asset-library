(() => {
  const base = 'https://github.com/outofbox-mp4/ad-ai-toolkit/blob/main/';
  const groups = [
    {id:'schemas',name:'数据口径',icon:'∑',intro:'先统一字段与转化定义，再比较账户表现。',items:[
      ['funnel','漏斗指标与计算口径','从花费、点击、注册、试用到付费和 ROI，定义每一层的指标。','data-schemas/funnel-metrics.md',['Spend → Clicks → Registrations → Trials → Payments → Revenue → ROI','列出 CTR、CPC、各阶段转化率、CPA、AOV 与 ROI 的计算方式','提醒区分过程指标与最终业务目标']],
      ['google-fields','Google Ads 字段速查','整理广告后台常用字段与报告列，便于读取和对齐数据。','data-schemas/google-ads-fields.md',['按字段用途查找数据列','分析前确认转化动作与价值口径','为 Agent 读取报表提供字段参照']]
    ]},
    {id:'methodology',name:'判断方法',icon:'◇',intro:'定义问题如何拆解、与什么基线比较，以及何时可以下结论。',items:[
      ['roi','ROI 诊断框架','沿完整漏斗定位 ROI 下滑的断点，再判断可控范围与行动。','methodology/roi-diagnosis.md',['依次检查流量成本、注册质量、试用激活、付费与收入','使用可比周期和一致的归因口径','输出证据、缺失数据与下一步决策']],
      ['account','账户诊断框架','将账户表现、结构与转化路径放在同一分析框架中。','methodology/account-diagnosis.md',['先确认目标与数据范围','再拆账户和系列表现','最后给出可验证的调整方向']],
      ['search-terms','搜索词分析','按搜索意图和下游质量判断查询词价值与浪费。','methodology/search-term-analysis.md',['区分高意图词、信息词与无关词','结合花费、转化和深层行为','形成结构或否定词建议']],
      ['market','市场洞察','判断表现变化是否来自需求、竞争、地区或产品供给。','methodology/market-insight.md',['比较市场、语言、意图主题与人群匹配','识别仍可扩量的场景','提出下一步最小验证实验']]
    ]},
    {id:'sops',name:'排查 SOP',icon:'☷',intro:'出现异常时按固定顺序检查，保留每步证据。',items:[
      ['roi-drop','ROI 下滑检查清单','用于追踪回报下滑的漏斗来源。','sops/roi-drop-checklist.md',['核对统计口径与可比周期','定位成本、转化率或客单价变化','区分广告侧与业务侧原因']],
      ['cpa','CPA 异常检查清单','用于判断获客成本上升发生在哪一段。','sops/cpa-anomaly-checklist.md',['确认所用 CPA 目标','检查成本与转化率驱动因素','记录阈值、证据与行动']],
      ['traffic','流量质量检查清单','适用于点击和花费增长，但深层转化没有跟上的情形。','sops/traffic-quality-checklist.md',['点击前：版位、国家、设备、搜索词、受众和最终 URL','点击后：页面行为与注册路径','注册后：试用、付费和收入质量']],
      ['trial','试用下滑检查清单','用于追踪注册到试用的断点。','sops/trial-drop-checklist.md',['比较注册和试用的变化','检查人群质量与激活路径','标明数据缺口和责任边界']],
      ['payment','付费减弱检查清单','用于分析试用到付款和收入质量的变化。','sops/payment-weakening-checklist.md',['核对付费成熟期和归因','比较付款率、付费 CPA 与客单价','分离流量、产品和销售承接因素']],
      ['waste','搜索词浪费检查清单','发现高花费但低价值的查询主题。','sops/search-term-waste-checklist.md',['按意图主题聚合查询词','结合 Trial 与付款判断价值','输出可复查的控制建议']]
    ]},
    {id:'skills',name:'Agent 技能',icon:'⌘',intro:'把口径、方法和 SOP 封装成可重复调用的工作流。',items:[
      ['skill-roi','ROI 诊断','按主目标、漏斗断点和证据生成诊断。','skills/roi-diagnosis/SKILL.md',['输入可比周期的花费与漏斗数据','输出问题定位与建议','对缺失数据和不确定性做标注']],
      ['skill-audit','Google Ads 系列审计','检查账户内各系列表现及优化机会。','skills/google-ads-campaign-audit/SKILL.md',['按系列类型和目标分组','比较成本与深层转化','列出有证据支撑的优先动作']],
      ['skill-traffic','流量质量审计','审查 Display、Demand Gen、PMax 等系列的点击与受众质量。','skills/ad-traffic-quality-audit/SKILL.md',['先查广告侧流量来源','再核对页面与注册后表现','区分低质补量与真正有效增长']],
      ['skill-terms','搜索词异常诊断','解释查询词花费、CPC、CPA 与转化异常。','skills/search-term-anomaly-diagnosis/SKILL.md',['以查询意图聚类','检查浪费和高价值词','提出结构与控制建议']],
      ['skill-weekly','广告周复盘','将一周变化整理为业务判断和下一步行动。','skills/ad-weekly-review/SKILL.md',['对齐目标与上周基线','解释变化来源','记录负责人、动作与风险']],
      ['skill-structure','账户结构审计','检查账户结构是否支持清晰的投放与分析。','skills/ad-structure-audit/SKILL.md',['检查系列、广告组与目标划分','识别重叠与学习受限','提出结构调整顺序']],
      ['skill-experiment','广告实验设计','把优化想法写成可验证的实验。','skills/ad-experiment-design/SKILL.md',['写清业务决策与假设','定义对照、主指标和护栏','设置结束与停止规则']],
      ['skill-brief','广告创意 Brief','将受众洞察与广告目标转为可制作的创意需求。','skills/ad-creative-brief/SKILL.md',['明确受众、痛点和承诺','定义素材角度与版本','记录验证指标']],
      ['skill-search-assets','Search 文案资产','整理搜索广告标题、描述与信息结构。','skills/search-ad-assets/SKILL.md',['围绕意图与价值主张生成文案','检查字符与内容限制','保留测试假设']],
      ['skill-competitive','竞品广告情报','研究公开广告、SERP、渠道与价格承接。','skills/competitive-ad-intelligence/SKILL.md',['先确认公开证据和时间范围','比较广告信息与落地路径','输出可验证的策略机会']]
    ]},
    {id:'templates',name:'交付模板',icon:'▤',intro:'将分析结果整理成可复盘的报告、实验和决策记录。',items:[
      ['diagnosis-report','诊断报告模板','包含结论、漏斗拆解、证据、行动归属与数据限制。','templates/diagnosis-report-template.md',['一句话写清问题与可控边界','分段比较当前与基线数据','记录替代解释和缺失数据']],
      ['weekly-report','周报模板','围绕结果变化与行动计划完成每周复盘。','templates/weekly-report-template.md',['汇总核心 KPI 与变化','记录主要发现','明确下周动作']],
      ['experiment-brief','实验 Brief 模板','把实验假设、指标与停止条件写成同一份记录。','templates/experiment-brief-template.md',['写明要做的决策','约定主指标和护栏','说明周期与停止规则']],
      ['decision-record','决策记录模板','记录建议、证据、批准和后续复查点。','templates/decision-record-template.md',['保留决策背景','标注风险与审批','约定复盘时间']]
    ]},
    {id:'strategy',name:'品牌策略',icon:'◎',intro:'从公开信号研究品牌、渠道与市场分工。',items:[
      ['brand-template','品牌策略案例模板','为跨市场、跨渠道的品牌案例提供统一研究结构。','brand-strategy/templates/brand-strategy-case-template.md',['研究范围与数据来源','品牌和渠道角色','策略判断与限制']],
      ['dji-channel','DJI 海外渠道分工案例','从公开 Google Ads 信号观察官方直营与授权零售商的角色。','brand-strategy/smart-hardware/case-studies/dji-google-ads-channel-division.md',['比较不同市场的公开可见广告','分析官方与零售商承接路径','说明公开信号不能代表真实预算或全渠道销量']],
      ['dji-roas','DJI 官网投放回报边界案例','讨论大品牌跨渠道增长不能只用官网 ROAS 衡量。','brand-strategy/smart-hardware/case-studies/dji-google-ads-roas-limitations.md',['区分官网销售与渠道销售','说明单一回报指标的局限','提出更完整的观察框架']]
    ]},
    {id:'tools',name:'工具连接',icon:'⌁',intro:'连接广告平台或公开广告资料的操作文档。',items:[
      ['google-mcp','Google Ads MCP 接入','为已授权账户提供 Agent 读取和分析的连接说明。','tools/ad-mcp-tool/README.md',['账户 API 与 MCP 的授权边界','本机连接与配置示例','写操作前的审批要求']],
      ['google-public','Google Ads 公开广告库','使用公开广告资料开展竞品研究的工具说明。','tools/ad-mcp-tool/public-ad-library.md',['明确公开资料范围','检索广告和素材','记录来源及采集时间']],
      ['microsoft-mcp','Microsoft Ads MCP 接入','Microsoft Advertising API 与 Agent 连接实操。','tools/microsoft-ads-mcp/README.md',['准备授权与配置','建立本机 MCP 连接','区分只读分析与写操作']],
      ['microsoft-public','Microsoft Ads 公开广告库','Microsoft Ads 公开资料的使用说明。','tools/microsoft-ads-mcp/public-ad-library.md',['定位可公开查看的广告','保存证据与时间范围','用于竞品或渠道研究']]
    ]}
  ];
  const $ = s => document.querySelector(s);
  const escape = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const home = $('#archive-home'), detail = $('#archive-detail'), search = $('#archive-search');
  function index() {
    const term = search.value.trim().toLocaleLowerCase();
    let count = 0;
    $('#archive-groups').innerHTML = groups.map(g => {
      const list = g.items.filter(a => `${a[1]} ${a[2]} ${g.name} ${a[3]} ${a[4].join(' ')}`.toLocaleLowerCase().includes(term));
      count += list.length;
      if (!list.length) return '';
      return `<section class="group" id="${g.id}"><h2>${g.name} <small>${list.length}</small></h2><div class="rows"><a class="row" href="#${g.id}"><span class="glyph" aria-hidden="true">${g.icon}</span><span><strong>${g.name}</strong><span class="meta">${g.intro}</span></span><span class="arrow" aria-hidden="true">→</span></a></div></section>`;
    }).join('');
    $('#empty').classList.toggle('show', !count);
  }
  function section(id) {
    const g = groups.find(x => x.id === id);
    if (!g) return showIndex();
    const params = new URLSearchParams(location.hash.split('?')[1] || '');
    const selected = g.items.find(x => x[0] === params.get('id')) || g.items[0];
    const entry = a => `<button class="record-item${a===selected?' active':''}" type="button" data-id="${escape(a[0])}" aria-current="${a===selected?'true':'false'}"><b>${escape(a[1])}</b><small>${escape(a[2])}</small></button>`;
    home.hidden = true; detail.hidden = false;
    detail.innerHTML = `<a class="detail-back" href="#index">← 全部档案</a><div class="detail-header"><h1>${escape(g.name)}</h1><p>${escape(g.intro)}</p></div><input class="detail-search" type="search" placeholder="搜索${escape(g.name)}" aria-label="搜索${escape(g.name)}"><p class="record-count">共 ${g.items.length} 项</p><div class="record-layout"><div class="record-list">${g.items.map(entry).join('')}</div><article class="record-detail"></article></div>`;
    const list = $('.record-list'), filter = $('.detail-search');
    function render(a) {
      const source = base + a[3];
      $('.record-detail').innerHTML = `<span class="meta-label">${escape(g.name)} / 资产预览</span><h2>${escape(a[1])}</h2><p>${escape(a[2])}</p><div class="preview-note"><b>内容速览</b><ul class="preview-list">${a[4].map(x => `<li>${escape(x)}</li>`).join('')}</ul></div><div class="detail-actions"><a class="plain-button" href="${escape(source)}" target="_blank" rel="noopener noreferrer">查看 GitHub 原文件 ↗</a></div><span class="source-path">${escape(a[3])}</span>`;
      list.querySelectorAll('[data-id]').forEach(b => {const active=b.dataset.id===a[0];b.classList.toggle('active',active);b.setAttribute('aria-current',String(active));});
    }
    render(selected);
    list.addEventListener('click', e => {const button=e.target.closest('[data-id]');if(button)location.hash=`${g.id}?id=${encodeURIComponent(button.dataset.id)}`;});
    filter.addEventListener('input', () => {const q=filter.value.trim().toLocaleLowerCase();list.querySelectorAll('[data-id]').forEach(b=>{const a=g.items.find(x=>x[0]===b.dataset.id);b.hidden=!`${a[1]} ${a[2]} ${a[4].join(' ')}`.toLocaleLowerCase().includes(q)});});
    document.querySelectorAll('.sidebar a').forEach(a=>a.classList.toggle('active',a.hash===`#${g.id}`));
    window.scrollTo({top:0,behavior:'instant'});
  }
  function showIndex() {detail.hidden=true;home.hidden=false;document.querySelectorAll('.sidebar a').forEach(a=>a.classList.remove('active'));}
  function route() {const id=location.hash.slice(1).split('?')[0];if(groups.some(g=>g.id===id))section(id);else showIndex();}
  search.addEventListener('input',index);
  window.addEventListener('hashchange',route);
  index();route();
})();

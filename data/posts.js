/* ==========================================================================
   posts —— 文章数据
   --------------------------------------------------------------------------
   新增一篇文章 = 在数组最前面加一个对象。
   字段说明：
     id         唯一标识（英文短横线命名，用于生成 post.html?id=xxx 链接）
     title      标题
     date       发布日期，格式 YYYY-MM-DD（列表按此排序）
     tags       标签数组
     excerpt    摘要，显示在文章列表卡片上，建议 40-80 字
     cover      封面图路径，没有就留空字符串
     readingTime 预计阅读分钟数（手填即可）
     content    正文，用 HTML 片段。支持 <h2> <h3> <p> <ul> <ol> <blockquote>
                <pre><code> <img> <a> <strong> <em>
   ========================================================================== */

window.posts = [
{
    "id": "电磁振动能量采集-emveh-2024-2026-年创新方向综述与选题建议",
    "title": "电磁振动能量采集（EMVEH）2024–2026 年创新方向综述与选题建议",
    "date": "2026-09-20",
    "tags": [],
    "excerpt": "---",
    "cover": "",
    "readingTime": 5,
    "content": "<blockquote><p><strong>检索范围</strong>：2024–2026 年综述 + 代表性新论文 <strong>既有基础</strong>：QZS-EMEH + 磁负刚度 + 平面柔性弹簧 + Maxwell 磁链梯度模型 + PMU + 无线节点 <strong>整理日期</strong>：2026-09-20</p></blockquote>\n<hr>\n<h3>核心判断</h3>\n<p>EMVEH 的创新已经<strong>不再集中在「换个磁铁、换个弹簧」这种单点结构优化</strong>，而是明显向以下方向发展：</p>\n<blockquote><p><strong>低频化 · 宽频化 · 多方向 · 自适应 · 混合换能 · 功率密度提升 · 采能-感知一体化</strong></p></blockquote>\n<p>2025 年的平移式电磁能量采集综述也指出：目前一个核心问题仍然是<strong>如何在低频环境下进一步提高功率密度</strong>。</p>\n<hr>\n<h3>一、创新方向总览</h3>\n<p>| 近年创新方向 | 热度 | 主要解决的问题 | 典型方法 | 适合度 | |---|---|---|---|---| | 非线性 / 多稳态 | ★★★★★ | 窄带 | 双稳态、三稳态、磁非线性 | ★★★★★ | | 低频 / 超低频 | ★★★★★ | &lt; 10 Hz 难采 | QZS、摆式、滚动、旋转 | ★★★★★ | | 频率上转换 FUC | ★★★★★ | 低频速度太低 | 碰撞、拨动、磁耦合 | ★★★★☆ | | 宽频 / 自适应调谐 | ★★★★★ | 环境频率变化 | 被动调谐、变刚度、变质量 | ★★★★★ | | 多方向采集 | ★★★★☆ | 实际振动方向随机 | 2DOF/3DOF、摆式、空间磁结构 | ★★★★★ | | 提高功率密度 | ★★★★★ | EM 体积功率偏低 | 磁路、Halbach、背铁、线圈优化 | ★★★★★ | | EM + PE / TENG 混合 | ★★★★★ | 单一机制局限 | 电磁 + 压电 / 摩擦电 | ★★★★☆ | | 旋转式 / MMR | ★★★★ | 低频往复运动效率低 | 机械整流、单向旋转 | ★★★ | | 采能 + 传感一体化 | ★★★★★↑ | EH 只是「电源」 | Self-powered sensing | ★★★★★ | | 智能 / 自适应 EH | ★★★★☆↑ | 固定参数适应性差 | 控制、识别、能量感知 | ★★★★★ |</p>\n<p><strong>最后两项（采能+传感一体化、智能/自适应 EH）是未来几年最值得关注的方向。</strong></p>\n<hr>\n<h3>二、分方向述评</h3>\n<h4>1. 非线性、多稳态 —— 最成熟，但已经比较卷</h4>\n<p>传统线性模型：</p>\n<p>$$m\\ddot{x}+c\\dot{x}+kx=F(t)$$</p>\n<p>现在大量工作加入磁非线性：</p>\n<p>$$m\\ddot{x}+c\\dot{x}+k_1x+k_3x^3+k_5x^5=F(t)$$</p>\n<p>目标是实现：</p>\n<p>$$\\text{softening / hardening} \\rightarrow \\text{bistable} \\rightarrow \\text{tristable} \\rightarrow \\text{multistable}$$</p>\n<blockquote><p>典型工作：2025 年 <em>International Journal of Non-Linear Mechanics</em>，通过<strong>分段运动磁体 + 中央可调磁体</strong>形成双稳态和三稳态势阱，利用跨阱运动获得宽频大振幅响应。</p></blockquote>\n<p><strong>判断</strong>：如果只做「提出一种新的磁铁排布，使采集器具有双稳态」，<strong>创新性已经不算特别强</strong>。</p>\n<p>更值得做的是：</p>\n<ul>\n<li><strong>可调多稳态 / 自适应势阱</strong></li>\n<li><strong>多稳态 + QZS</strong></li>\n<li><strong>多稳态 + 随机振动</strong></li>\n</ul>\n<p>也就是让<strong>非线性特性能够根据环境变化</strong>。</p>\n<hr>\n<h4>2. 低频、超低频 —— 核心热点，与本研究最匹配</h4>\n<p>2025 年 <em>Advanced Materials Technologies</em> 的低频动能采集综述把低频问题作为核心挑战，重点归纳了：</p>\n<blockquote><p><strong>频率上转换、多稳态、旋转式、非共振式结构</strong></p></blockquote>\n<p>很多实际振动满足：</p>\n<p>$$f &lt; 10\\ \\text{Hz}$$</p>\n<p>例如：<strong>人体、车辆、桥梁、海洋</strong>等。</p>\n<p>而电磁感应：</p>\n<p>$$e=-N\\frac{d\\Phi}{dx}\\dot{x}$$</p>\n<p>低频意味着：</p>\n<p>$$\\dot{x}\\downarrow \\ \\Rightarrow\\ V\\downarrow$$</p>\n<p>所以最近很多创新其实都围绕同一个问题：</p>\n<blockquote><p><strong>怎样在低频输入下产生大的相对位移 / 速度？</strong></p></blockquote>\n<p>本研究已有的 <strong>QZS 就属于这一大方向</strong>。</p>\n<hr>\n<h4>3. 频率上转换（FUC）—— 近期非常热</h4>\n<p>2025 年 <em>Renewable &amp; Sustainable Energy Reviews</em> 专门出了 FUC 综述，系统总结了宽带、多方向以及不同上转换结构。</p>\n<p>基本思想 —— 输入频率不必等于发电机构的工作频率：</p>\n<p>$$2\\text{Hz input} \\rightarrow \\text{Mechanical conversion} \\rightarrow 30\\sim200\\text{Hz local vibration}$$</p>\n<p>常见机制：<strong>Impact、Plucking、Magnetic plucking、Snap-through、Rotational conversion</strong>。</p>\n<blockquote><p>典型工作：2024 年一项压电-电磁混合研究 $$\\text{低频直线振动} \\rightarrow \\text{偏心转子} \\rightarrow \\text{旋转}$$ 转子同时碰撞压电梁产生 FUC；在 <strong>4 Hz</strong> 下电磁部分最大功率达 <strong>26.4 mW</strong>。</p></blockquote>\n<h4>对本研究很有价值的组合</h4>\n<p>当前路线是：</p>\n<p>$$\\text{QZS} \\rightarrow \\text{大位移}$$</p>\n<p>下一步完全可以：</p>\n<p>$$\\text{QZS} \\rightarrow \\text{大位移} \\rightarrow \\text{Magnetic plucking / FUC} \\rightarrow \\text{高速电磁换能}$$</p>\n<p>即：</p>\n<p>$$\\text{Low frequency} \\xrightarrow{\\text{QZS}} \\text{Large displacement} \\xrightarrow{\\text{FUC}} \\text{High velocity} \\xrightarrow{\\text{EM}} \\text{Electricity}$$</p>\n<p><strong>这比单独再做一个 QZS 结构更有新意。</strong></p>\n<hr>\n<h4>4. 宽带 —— 正从「非线性宽带」走向「自适应调谐」</h4>\n<p>这个趋势非常重要。</p>\n<p><strong>过去</strong>：做 hardening / softening，把频响曲线弄宽。 <strong>现在</strong>：让采集器自己跟着环境频率变化。</p>\n<blockquote><p>典型工作：2024/2025 一项电磁采集器加入<strong>自由旋转质量块</strong>进行被动共振调谐，实验实现约 <strong>10 Hz 的被动调谐范围</strong>，报告带宽从 <strong>5 Hz 增加到 20 Hz</strong>。</p></blockquote>\n<p>明显趋势：</p>\n<p>$$\\text{Fixed VEH} \\rightarrow \\text{Broadband VEH} \\rightarrow \\boxed{\\text{Adaptive VEH}}$$</p>\n<h4>对 QZS 特别有价值</h4>\n<p>可以不再做固定的：</p>\n<p>$$k_p+k_n\\approx0$$</p>\n<p>而做：</p>\n<p>$$k_p+k_n(d_m)\\approx0$$</p>\n<p>其中 $d_m$ 是<strong>磁体距离</strong>。于是：</p>\n<blockquote><p><strong>激励改变 → 判断当前状态 → 改变磁距 → 恢复 QZS</strong></p></blockquote>\n<p>2026 年最新 QZS 综述也专门把 <strong>adjustable / load-adaptive QZS</strong> 作为重要发展方向，指出<strong>固定 QZS 在载荷变化后容易偏离最佳工作区域</strong>。</p>\n<hr>\n<h4>5. 多方向采集 —— 明显增多</h4>\n<p>因为实验室里是单轴：</p>\n<p>$$a_z(t)$$</p>\n<p>而实际车辆 / 铁路 / 机械是多轴：</p>\n<p>$$[a_x(t),\\, a_y(t),\\, a_z(t)]$$</p>\n<p><strong>完全不是一个问题。</strong></p>\n<blockquote><p>典型工作： - 2025 年 <em>Sensors</em>：双质量摆式电磁采集器，通过串/并联运动模式实现多方向、多频率采集和频率调节 - 2026 年：二维电磁采集器，L 型结构 + 四个平面线圈 + 弹簧磁体振子 + <strong>45° 安装</strong>实现两个正交方向采集；<strong>45° 配置相对单轴配置输出功率提高 173%</strong></p></blockquote>\n<p>所以：</p>\n<blockquote><p><strong>Multidirectional + Low-frequency</strong></p></blockquote>\n<p>已成为很明确的一条路线。</p>\n<h4>可升级方向</h4>\n<p>从 <strong>Multidirectional QZS-EMEH</strong> 出发：</p>\n<p>$$X/Y:\\ \\text{magnetic QZS}$$</p>\n<p>$$Z:\\ \\text{flexure + magnetic QZS}$$</p>\n<p>最终做成：</p>\n<blockquote><p><strong>3-DOF QZS electromagnetic energy harvester</strong></p></blockquote>\n<p><strong>这比继续优化单轴 QZS 有空间。</strong></p>\n<hr>\n<h4>6. 功率密度 —— 磁路设计重新受到重视</h4>\n<p>这是电磁式最「本行」的创新。2025 年平移式 EMEH 综述明确指出：</p>\n<blockquote><p><strong>high power density 仍然是核心挑战</strong></p></blockquote>\n<p>所以近年不少工作不再只研究动力学，而重新研究：</p>\n<blockquote><p><strong>磁铁排列、磁通集中、背铁、线圈形状、气隙、磁泄漏</strong></p></blockquote>\n<blockquote><p>典型工作：2025 年一项圆柱电磁振动采集器提出<strong>全封闭背铁磁路</strong>，仿真报告： - 磁通密度提升约 <strong>74%</strong> - 漏磁降低超过 <strong>99%</strong> - 实验得到 <strong>44.5 mW</strong> 最大功率、<strong>4.25 mW/cm³</strong> 功率密度（1 g 条件）</p></blockquote>\n<p><strong>Halbach</strong> 也是持续活跃的方向（2024 年已有专门综述）。</p>\n<h4>与本研究特别契合</h4>\n<p>原有结构已经有：</p>\n<blockquote><p><strong>radial flux guiding + symmetric magnetic circuit</strong></p></blockquote>\n<p>下一步完全可以系统研究：</p>\n<p>$$\\frac{d\\Phi}{dz}$$</p>\n<p>而不只是 $B$。因为：</p>\n<p>$$e=-N\\frac{d\\Phi}{dz}\\dot z$$</p>\n<p><strong>真正影响电磁输出的是磁链梯度。</strong></p>\n<p>所以可以做：</p>\n<blockquote><p><strong>Flux-gradient engineered EMEH</strong></p></blockquote>\n<p>优化目标直接设为：</p>\n<p>$$\\max\\left|\\frac{d\\Phi}{dz}\\right|$$</p>\n<p>同时约束：</p>\n<p>$$V,\\quad m,\\quad \\text{leakage},\\quad R_{coil}$$</p>\n<p><strong>这会比「换一个磁铁结构」严谨得多。</strong></p>\n<hr>\n<h4>7. Hybrid：EM + Piezo / TENG —— 仍然很热</h4>\n<p>近两年论文很多，尤其 <strong>EM+PE</strong> 与 <strong>EM+TENG</strong>。</p>\n<p>互补性很清晰：</p>\n<p>| 机制 | 输出特性 | |---|---| | 电磁 | 低电压 + 大电流 | | 压电 / 摩擦电 | 高电压 + 小电流 |</p>\n<blockquote><p>典型工作： - 2025 年 PE-EM 混合采集器：屈曲梁 + 双稳态叠加结构<strong>降低跨阱所需激励</strong>，进行了随机振动和实际骑行实验以及无线传感验证 - 2025 年输电线路 EM-TENG hybrid generator：宽频 + 多方向 + 混合 PMU + 无线传感系统，进行了 <strong>160 万次振动循环</strong>测试</p></blockquote>\n<p><strong>判断</strong>：现在 Hybrid 不能只是「我在弹簧上贴一片 PZT」。最好要做到：</p>\n<blockquote><p><strong>结构耦合 + 动力学耦合 + 电源管理耦合</strong></p></blockquote>\n<hr>\n<h4>8. 旋转式 / MMR —— 仍然是一大类</h4>\n<p>Mechanical Motion Rectifier：</p>\n<p>$$\\leftrightarrow \\quad\\rightarrow\\quad \\circlearrowright$$</p>\n<p>把往复振动变成单向旋转。</p>\n<blockquote><p>2024 年 <em>Energy</em> 有专门的 MMR-based EMVEH 综述，指出旋转式方案因功率输出和紧凑性受到持续关注，系统总结了运动转换机构、动力学和应用。</p></blockquote>\n<p>常见机构：<strong>rack-pinion、one-way clutch、ball screw、gear train、freewheel</strong>。</p>\n<p><strong>适用场景</strong>：海浪、车辆悬架、桥梁、人体运动 —— 这类大位移低频运动。</p>\n<p><strong>评估</strong>：对柔性结构路线<strong>不是第一优先</strong>，因为摩擦、齿隙、磨损都会进来。</p>\n<hr>\n<h4>9. 明确的新趋势：Energy Harvesting + Sensing</h4>\n<p><strong>这一点对本研究的长期价值最大。</strong></p>\n<p>现在的论文越来越不是到「我的 EH 输出 20 mW」就结束，而是：</p>\n<blockquote><p><strong>EH 本身既是发电器，也是传感器。</strong></p></blockquote>\n<blockquote><p>典型工作： - 2026 年 <em>IEEE Sensors Journal</em> 输电线路研究：<strong>EMG 负责供能 + TENG 负责振动感知 + 特征提取/模型反演振动参数 + 无线监测</strong>，对频率、加速度和振幅估计的 $R^2 &gt; 0.996$ - 2025 年 PE-EM 混合装置直接加入 <strong>motion recognition</strong>，不仅采人体超低频运动能量，还利用输出识别运动状态</p></blockquote>\n<p>趋势可概括为：</p>\n<p>$$\\boxed{\\text{Energy Harvester} \\rightarrow \\text{Energy + Sensor}}$$</p>\n<p>进一步：</p>\n<p>$$\\boxed{\\text{Energy + Sensor + Edge Intelligence}}$$</p>\n<hr>\n<h4>10. 真正的落点：「智能能量采集器」</h4>\n<p>把近三年文献放在一起，路线非常明显：</p>\n<pre><code>第一阶段   Linear resonant EMEH\n                ↓\n第二阶段   Nonlinear / Bistable / QZS\n                ↓\n第三阶段   Broadband + Low-frequency + Multidirectional\n                ↓\n第四阶段   Adaptive + Hybrid + Self-powered sensing\n                ↓\n  现在  →  Adaptive Energy Harvester\n           + Sensing\n           + Edge Processing\n           + Wireless</code></pre>\n<p>这也说明：<strong>iCE40、LoRa、BLE 可以和 EMEH 研究连起来，而不是三个独立的问题。</strong></p>\n<hr>\n<h3>三、建议重点关注四条路线</h3>\n<p>结合已具备的 <strong>QZS-EMEH + 磁负刚度 + 平面柔性弹簧 + Maxwell 磁链梯度模型 + PMU + 无线节点</strong>，再做普通 bistable 或简单换磁铁布局，<strong>边际价值已经比较低</strong>。</p>\n<h4>① Adaptive QZS-EMEH</h4>\n<p>$$\\text{Vibration} \\rightarrow \\text{frequency/amplitude identification} \\rightarrow \\text{QZS parameter tuning}$$</p>\n<p>做<strong>可调磁距 / 可调负刚度 / 负载自适应</strong>。</p>\n<h4>② Multidirectional QZS-EMEH</h4>\n<p>从现在的单轴 2–6 Hz 的 $Z$ 方向，发展成 $X+Y+Z$。</p>\n<p>解决真实车辆 / 铁路<strong>随机多方向</strong>振动。</p>\n<h4>③ QZS + Frequency Up-Conversion</h4>\n<p>$$2\\text{--}6\\text{Hz} \\rightarrow \\text{QZS amplification} \\rightarrow \\text{FUC} \\rightarrow \\text{high-speed EM}$$</p>\n<p><strong>结构创新潜力很大。</strong></p>\n<h4>④ Self-sensing Intelligent EMEH（最建议长期做）</h4>\n<p>$$\\boxed{\\text{EMEH} \\rightarrow \\text{Energy} + \\text{Vibration information}}$$</p>\n<p>利用线圈本身的 $V_{coil}(t)$，<strong>不额外放加速度计</strong>，通过线圈电压/电流反推：</p>\n<p>$$f,\\quad A,\\quad a,\\quad \\text{vibration state}$$</p>\n<p>然后让 <strong>iCE40 / MCU 做特征提取</strong>，<strong>只在检测到异常时</strong>通过 LoRa / BLE 发数据。</p>\n<p>最终系统形态：</p>\n<p>| 部件 | 承担职责 | |---|---| | 电磁换能器 | 供能 + 感知（二合一） | | FPGA / MCU | 边缘计算 | | LoRa | 低占空比远程通信 |</p>\n<blockquote><p><strong>一个电磁换能器同时承担供能与感知</strong> —— 从这轮 2024–2026 文献看，这比单纯追求「更宽频、更高输出」更有继续做成系列工作的空间。</p></blockquote>\n<hr>\n<h3>四、下一步</h3>\n<p>可进一步整理 <strong>2024–2026 年 20–30 篇 EMVEH 代表论文</strong>，按以下维度分类：</p>\n<blockquote><p><strong>QZS / 多稳态 / FUC / 多方向 / 自适应 / Hybrid / Self-sensing</strong></p></blockquote>\n<p>每条给出：</p>\n<p>| 字段 | 说明 | |---|---| | 题目 | — | | 期刊 | — | | 年份 | — | | 结构 | 换能机理与结构形式 | | 频率 | 工作频段 | | 加速度 | 激励条件 | | 功率 | 输出水平 | | 创新点 | 核心贡献 |</p>\n<p>整理完后即可直观看出，<strong>当前大家已经做到哪一步</strong>。</p>"
  },
  {
    "id": "test",
    "title": "test",
    "date": "2026-09-19",
    "tags": [],
    "excerpt": "111",
    "cover": "",
    "readingTime": 5,
    "content": "<h3>测试</h3>\n<p><img src=\"assets/posts/img-20260919-161553.jpg\" alt=\"OIP-C\" loading=\"lazy\"></p>"
  },
  {
    "id": "韦根论文逻辑",
    "title": "韦根论文逻辑",
    "date": "2026-09-19",
    "tags": [
      "韦根",
      "小论文"
    ],
    "excerpt": "I. Introduction II. Operating Principle and System Architect…",
    "cover": "",
    "readingTime": 5,
    "content": "<h3>I. Introduction</h3>\n<h3>II. Operating Principle and System Architecture</h3>\n<p>A. System Architecture B. Wiegand-Based Sensing Principle C. Dual-Use Wiegand Pulse</p>\n<h3>III. Wiegand-Based Rotational Sensing and Energy Harvesting</h3>\n<p>A. Wiegand Pulse Characteristics B. Rotational Speed–Pulse Frequency Relationship C. Pulse Energy and Harvested Power</p>\n<h3>IV. Ultra-Low-Power Rotational Speed Measurement Circuit</h3>\n<p>A. RPM Measurement Method B. Circuit Design C. Low-Power Operation D. Measurement Error Analysis</p>\n<h3>V. Self-Powered Wireless Sensing System</h3>\n<p>A. Energy Storage and Management B. Hysteretic Power Control C. BLE Communication D. System Energy Budget</p>\n<h3>VI. Experimental Results and Discussion</h3>\n<p>A. Experimental Setup B. RPM Measurement Performance C. Power Consumption D. Energy Harvesting Performance E. Self-Powered Wireless Operation F. Comparison With Existing Methods</p>\n<h3>VII. Conclusion</h3>"
  },
  {
    id: 'css-modern-layout',
    title: '现代 CSS 布局：Flexbox 与 Grid 该怎么选',
    date: '2026-09-05',
    tags: ['前端', 'CSS'],
    excerpt: 'Flexbox 是一维的，Grid 是二维的——这句话人人都说过，但真正决定选型的往往是另一个问题：内容的尺寸由谁决定。',
    cover: '',
    readingTime: 8,
    content: `
      <p>每次同事问我"这里该用 Flex 还是 Grid"，我都会先反问一个问题：<strong>是先有格子还是先有内容？</strong></p>

      <h2>判断标准不是维度，是控制权的方向</h2>
      <p>"一维用 Flex、二维用 Grid"这个说法没错，但它不解决实际选择困难。更实用的判断是按控制权划分：</p>
      <ul>
        <li><strong>内容决定尺寸 → 用 Flexbox。</strong>内容的多少决定容器怎么排，容器只是被动响应。</li>
        <li><strong>容器决定尺寸 → 用 Grid。</strong>你先定义好网格轨道，再把内容塞进去。</li>
      </ul>

      <h2>一个常见的选错场景</h2>
      <p>导航栏的 logo + 菜单 + 搜索框，很多人第一反应是写三个 Flex 子项。但如果菜单项数量会变、搜索框宽度要固定，用 Grid 更省事：</p>

      <pre><code>.header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1.5rem;
}</code></pre>

      <p>左中右三段结构一次说清，不需要给任何子元素写 <code>flex: 1</code>，也不会因为中间内容变长把右侧挤走。</p>

      <h2>两者混用才是常态</h2>
      <p>真实的页面几乎不会只用一种。外层用 Grid 划分页面骨架，每个区域内层用 Flexbox 排列内容，这是最舒服的组合：</p>

      <pre><code>.page {
  display: grid;
  grid-template-rows: auto 1fr auto;  /* 头 / 主体 / 脚 */
  min-height: 100dvh;                 /* 注意是 dvh 不是 vh */
}

.card__actions {
  display: flex;                      /* 卡片内部用 Flex */
  justify-content: flex-end;
  gap: 0.5rem;
}</code></pre>

      <h2>两个容易踩的坑</h2>
      <ol>
        <li><strong>移动端全屏高度用 100dvh。</strong>在 iOS Safari 上 <code>100vh</code> 会比可视区域高，因为地址栏的高度没被算进去，导致内容被裁掉。</li>
        <li><strong>Grid 的 fr 和 auto 别混着乱用。</strong><code>1fr auto 1fr</code> 中间自适应没问题；但 <code>auto 1fr auto</code> 里如果两侧内容很长，中间会被压到零宽，因为 auto 的优先级高于 fr。</li>
      </ol>

      <p>说到底，选择标准只有一个：<em>你想让容器控制内容，还是让内容控制容器。</em>想清楚这个，写起来就不会纠结。</p>
    `
  },

  {
    id: 'reading-notes-slow-thinking',
    title: '《思考，快与慢》读书笔记：系统 1 的十种错觉',
    date: '2026-08-28',
    tags: ['阅读', '认知'],
    excerpt: '卡尼曼把大脑分成快慢两套系统。真正让我不安的不是"人会犯错"，而是那些错误在发生时，我总会觉得自己非常理性。',
    cover: '',
    readingTime: 12,
    content: `
      <p>这本书买了三年，前两次都停在第五章。这次用每天早上半小时的固定时间读完，反而顺畅。可能是终于承认自己需要它。</p>

      <h2>不是两套系统，是一套系统的两种模式</h2>
      <p>书里把认知分成系统 1（快、自动、不费力）和系统 2（慢、受控、耗能）。但更准确的理解是：系统 1 一直在运行，系统 2 平时偷懒，只在遇到意外时才被叫醒。</p>
      <p>问题就在这——大部分错误的判断，系统 1 已经替你做完了，系统 2 甚至不知道有过一次决策。</p>

      <h2>几个我会反复犯的错觉</h2>

      <h3>1. 光环效应</h3>
      <p>先知道结论，再去找理由。读一篇观点合意的文章，我会觉得它的论证也很有力——其实我只是在核对立场。</p>

      <h3>2. 可得性偏差</h3>
      <p>最近频繁看到的事情，会被高估发生概率。这就是为什么刷完一天坏消息会觉得世界要完了。</p>

      <h3>3. 锚定效应</h3>
      <p>第一个看到的数字会成为参照。商品原价标 1999，现价 999，你会觉得便宜——即使这个商品本来就值 899。</p>

      <h3>4. 回归均值被误读成因果</h3>
      <p>表现极差的下一步通常变好，不是因为你干预了，而是因为它本来就该回归。这个错觉支撑了大量无效的管理动作。</p>

      <h2>最有用的一条建议</h2>
      <blockquote>在你做出重要判断前，先问自己：如果我现在知道这个判断是错的，我会怎么解释它？</blockquote>
      <p>这个方法书里没有直接写，但它是整本书的推论。强迫自己给反面留出解释空间，是少数能实际对抗系统 1 的操作。</p>

      <h2>读完之后的改变</h2>
      <p>说实话不大。我知道这些偏差的名字了，但下次遇到时仍然会中招。唯一的区别是，事后能更快意识到——这可能就是这本书能给的全部价值了。</p>
    `
  },

  {
    id: 'git-commit-convention',
    title: '团队协作里的 Git 提交规范，到底值不值得推',
    date: '2026-08-15',
    tags: ['工程实践', 'Git'],
    excerpt: '推行 Conventional Commits 三个月后，团队一半人觉得有用，另一半觉得是负担。这篇记录我们最后保留了什么、放弃了什么。',
    cover: '',
    readingTime: 7,
    content: `
      <p>年初我在团队里推了一次提交规范。三个月后复盘，结论比预想的复杂：规范本身没问题，但强推的方式错了。</p>

      <h2>最开始推的方案</h2>
      <p>标准的 Conventional Commits，配合 Commitlint 做 commit-msg 钩子校验：</p>
      <pre><code>feat(login): 支持手机号验证码登录
fix(cart): 修复优惠券重复计算
docs: 补充分支策略说明</code></pre>
      <p>理想很美好，能自动生成 CHANGELOG、能按类型筛选、能让 history 更好读。</p>

      <h2>三个月后的真实数据</h2>
      <ul>
        <li>提交信息格式合规率：<strong>从 100% 掉到 78%</strong>（有人开始用 <code>--no-verify</code> 跳过钩子）</li>
        <li>CHANGELOG 自动生成：<strong>保留了</strong>，但产品同学从来没看过</li>
        <li>代码审查效率：<strong>基本没变化</strong></li>
        <li>团队怨气：<strong>明显上升</strong>，主要来自被钩子打断流程的时刻</li>
      </ul>

      <h2>问题在哪</h2>
      <p>我们把规范当成了纪律问题，但它其实是沟通问题。<strong>当一条规则需要强制工具才能落地，说明它没解决大家的真实痛点。</strong></p>
      <p>真正被浪费的不是那几秒钟打字时间，而是：提交被拒绝、重写、再提交的过程打断了开发的心流。对刚 clone 项目的新人尤其劝退。</p>

      <h2>最后保留了什么</h2>
      <ol>
        <li><strong>取消 commit-msg 钩子的强制校验</strong>，改成 PR 模板里的一句提醒。</li>
        <li><strong>只强制一条规则</strong>：提交信息首行不超过 50 字，且描述"做了什么"而不是"改了哪个文件"。</li>
        <li><strong>保留类型前缀</strong>，但不校验格式——写 <code>feat:</code> 还是 <code>[功能]</code> 都行，只要团队看得懂。</li>
        <li><strong>CHANGELOG 只从 PR 标题生成</strong>，不再从 commit 抽取。</li>
      </ol>

      <h2>如果重来一次</h2>
      <p>我会先只推第二条规则，跑两个月看效果，再决定要不要加别的。规范应该是被需求推着长出来的，不是一次性设计出来的。</p>
    `
  },

  {
    id: 'web-performance-checklist',
    title: '静态站点性能优化：我常用的 12 项检查清单',
    date: '2026-07-30',
    tags: ['前端', '性能'],
    excerpt: '这份清单来自三个线上项目的调优记录。按投入产出比排序，前五项通常能拿到八成收益。',
    cover: '',
    readingTime: 9,
    content: `
      <p>每次上线前我会过一遍这份清单。它不追求完整，只收录实际改动过、且能看到量化收益的项。</p>

      <h2>第一梯队：改一处，收益立竿见影</h2>
      <ol>
        <li><strong>图片带宽高属性。</strong>没有显式尺寸的图片会造成布局偏移，直接拉高 CLS。顺便加上 <code>loading="lazy"</code>。</li>
        <li><strong>用现代图片格式。</strong>同样画质下 WebP 通常比 JPEG 小 25%–35%，AVIF 更小但编码慢，视场景取舍。</li>
        <li><strong>字体只加载用到的字重和字符集。</strong>中文站点尤其要注意，全量字体动辄几 MB。</li>
        <li><strong>关键 CSS 内联，其余异步加载。</strong>减少首屏的阻塞请求。</li>
        <li><strong>给静态资源加长缓存。</strong>文件名带内容哈希，配合一年期的 <code>Cache-Control</code>。</li>
      </ol>

      <h2>第二梯队：需要一点改造</h2>
      <ol start="6">
        <li><strong>预连接关键域名。</strong><code>&lt;link rel="preconnect"&gt;</code> 省掉 DNS 与 TLS 握手时间。</li>
        <li><strong>首屏图片加 <code>fetchpriority="high"</code>。</strong>明确告诉浏览器谁最重要。</li>
        <li><strong>去掉未使用的第三方脚本。</strong>一个埋点 SDK 常常比整个页面还重。</li>
        <li><strong>延迟加载非首屏组件。</strong>用原生 <code>IntersectionObserver</code> 就够，不必上库。</li>
      </ol>

      <h2>第三梯队：结构性优化</h2>
      <ol start="10">
        <li><strong>用 CDN 就近分发。</strong>静态资源交给 CDN，源站只处理动态请求。</li>
        <li><strong>开启 Brotli 压缩。</strong>比 gzip 通常再小 15%–20%。</li>
        <li><strong>定期跑 Lighthouse 并留存报告。</strong>不做基线对比的优化都是自我感觉良好。</li>
      </ol>

      <h2>一个提醒</h2>
      <p>不要一次性全做。每次改一项，记录改动前后的 LCP 与 CLS。否则你无法知道哪一项起了作用——也无法在出问题时定位是哪一项搞的。</p>
    `
  },

  {
    id: 'slow-productivity',
    title: '慢下来真的更高效吗：一份实验记录',
    date: '2026-07-18',
    tags: ['随笔', '效率'],
    excerpt: '我用六周时间对比了"任务清单驱动"和"时间块驱动"两种工作方式，记录了一些不太符合预期的结果。',
    cover: '',
    readingTime: 6,
    content: `
      <p>起因是发现自己每天都很忙，但周末回想起来想不起做了什么。于是做了个粗糙但认真的实验。</p>

      <h2>实验设计</h2>
      <ul>
        <li><strong>第 1–3 周：清单驱动。</strong>每天早上列 8–10 条待办，完成就划掉。</li>
        <li><strong>第 4–6 周：时间块驱动。</strong>只安排 3 个 90 分钟的时间块，每块只做一件事。</li>
        <li>两组都记录：完成任务数、主观疲惫度、晚上是否还能思考。</li>
      </ul>

      <h2>结果</h2>
      <p>完成任务数：清单组明显更高，平均每天 7.2 项；时间块组只有 3.1 项。</p>
      <p>但质量差异很大。清单组完成的大多是"回邮件""改文案"这类可中断的碎活；时间块组产生了三份能拿出去讨论的方案，这在实验之前三个月都没有出现。</p>
      <p>主观疲惫度：时间块组更高。连续 90 分钟不切窗口，对注意力是真实的消耗。</p>
      <p>晚上状态：时间块组更好。因为深度工作在一段时间内结束了，晚上不会有"还有六件事没做"的悬空感。</p>

      <h2>我最后的选择</h2>
      <p>两者混用，但按内容分配：</p>
      <ol>
        <li><strong>上午一个 90 分钟时间块</strong>，只做需要连续思考的事，不看消息。</li>
        <li><strong>下午用清单</strong>处理沟通和杂事，这些事本来就该被打断。</li>
        <li><strong>每天清单上限 5 条</strong>，写不下就说明今天安排不合理。</li>
      </ol>

      <h2>一个反直觉的发现</h2>
      <p>"慢"没有让我完成更多事，它让我完成了<em>更值钱</em>的事。这两件事在日程表上看不出区别，但季度回顾时差得很远。</p>
    `
  },

  {
    id: 'css-custom-properties',
    title: 'CSS 自定义属性：不只是变量，是运行时 API',
    date: '2026-07-02',
    tags: ['前端', 'CSS'],
    excerpt: '把 CSS 变量当成 Sass 变量来用，只发挥了它两成能力。它真正的价值在于能在运行时被 JavaScript 读写，并且遵循级联规则。',
    cover: '',
    readingTime: 8,
    content: `
      <p>很多人从 Sass 迁移到 CSS 自定义属性时，只是把 <code>$color</code> 换成了 <code>var(--color)</code>。这样能用，但浪费了它最有意思的部分。</p>

      <h2>关键差异：级联</h2>
      <p>Sass 变量在编译期就被替换掉了，作用域是静态的。CSS 自定义属性是运行时的，遵循级联——这意味着你可以在局部覆盖它：</p>
      <pre><code>.card {
  --accent: #2563eb;
  border-top: 3px solid var(--accent);
}

.card--danger {
  --accent: #dc2626;   /* 只改一个变量，整块样式跟着变 */
}</code></pre>
      <p>不需要为新变体重写任何其他规则。</p>

      <h2>配合 calc() 做派生值</h2>
      <p>变量可以参与计算，这让设计令牌体系变得很轻：</p>
      <pre><code>:root {
  --space-unit: 8px;
  --space-sm: calc(var(--space-unit) * 0.5);
  --space-md: var(--space-unit);
  --space-lg: calc(var(--space-unit) * 3);
}</code></pre>
      <p>注意 <code>calc()</code> 里运算符两侧<strong>必须有空格</strong>，<code>calc(8px*0.5)</code> 是无效的。</p>

      <h2>用 JS 读写变量</h2>
      <p>这是 Sass 做不到的部分。设置值要用 <code>setProperty</code>，读取时要 <code>getPropertyValue</code> 并 <code>trim()</code>：</p>
      <pre><code>const root = document.documentElement;

// 写入（不需要带 var()）
root.style.setProperty('--accent', '#10b981');

// 读取（会带前后空格，必须 trim）
const current = getComputedStyle(root)
  .getPropertyValue('--accent')
  .trim();</code></pre>

      <h2>一个实用场景：主题切换</h2>
      <p>把颜色全部定义成变量后，深色模式只需要覆盖一层：</p>
      <pre><code>:root {
  --bg: #ffffff;
  --text: #1f2937;
}

[data-theme="dark"] {
  --bg: #0f172a;
  --text: #e5e7eb;
}

body {
  background: var(--bg);
  color: var(--text);
}</code></pre>
      <p>切换主题时只改 <code>data-theme</code> 属性，加个 <code>transition</code> 就能平滑过渡，不需要重新计算任何东西。</p>

      <h2>注意点</h2>
      <ul>
        <li>自定义属性<strong>不会</strong>被压缩工具优化，别把超长字符串塞进去。</li>
        <li>在 <code>var()</code> 里做嵌套计算时要留意浏览器兼容，必要时提供回退值：<code>var(--x, 16px)</code>。</li>
        <li>变量名大小写敏感，<code>--Color</code> 和 <code>--color</code> 是两个东西。</li>
      </ul>
    `
  },

  {
    id: 'hello-world-is-hard',
    title: '最难写的永远是第一句话',
    date: '2026-06-20',
    tags: ['随笔'],
    excerpt: '开了三年博客，草稿箱里有 27 篇开头。这篇想聊聊写作启动成本这件事，以及我找到的一个笨办法。',
    cover: '',
    readingTime: 4,
    content: `
      <p>我的草稿箱里有 27 个文件，每个都只有标题和一两段开头。</p>

      <h2>开头难在哪</h2>
      <p>难在你还没开始写，就已经在预设它的读者。<em>别人会不会觉得这太浅？这个论点是不是早有人说过？我配写这个题目吗？</em></p>
      <p>这些问题的共同点：它们都关于"我"，而不是关于"这件事"。写作本该是把注意力放在事情上，但开头这一步总把你拉回到对自己的审视里。</p>

      <h2>一个笨办法</h2>
      <p>我现在会先写结尾。</p>
      <p>具体做法是：在动手前用一句话写下"我希望读者读完后知道什么"。这句话通常很长很啰嗦，写完就知道文章的主干在哪了。然后倒着往前找论据，最后才写开头。</p>
      <p>开头之所以难，是因为它同时要承担"抓住注意力"和"预告全文"两个任务。把它放到最后写，你已经在全文语境里了，写起来会轻松很多。</p>

      <h2>另一个原则</h2>
      <blockquote>初稿不用给任何人看，所以它可以很烂。</blockquote>
      <p>我过去的问题是把初稿当成品要求。现在的流程是：初稿写完不读，放一晚，第二天当成别人的文章来改。这个距离感很有用——你会更愿意删掉那些其实没必要的段落。</p>

      <p>这篇文章写了 20 分钟。前面 27 篇的开头，加起来大概花了三个小时。差别只在于这次我先想好了结尾。</p>
    `
  }
];

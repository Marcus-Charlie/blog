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
    "id": "final_draft_paper",
    "title": "final_draft_paper",
    "date": "2026-09-20",
    "tags": [],
    "excerpt": "@title: 基于韦根脉冲能量采集与纳功耗能量管理的自供电蓝牙转速监测系统 @title-en: A Self-Powered Bluetooth Rotat",
    "cover": "",
    "readingTime": 5,
    "content": "<p>@title: 基于韦根脉冲能量采集与纳功耗能量管理的自供电蓝牙转速监测系统 @title-en: A Self-Powered Bluetooth Rotational Speed Monitoring System with Wiegand Pulse Energy Harvesting and Nano-Power Energy Management @authors: 裴佳璇，叶挺聪 @affil: （杭州电子科技大学　电子信息学院，浙江　杭州　310018） @abstract-zh: 针对无线传感节点电池更换困难、寿命受限的问题，提出并实现一种基于韦根（Wiegand）脉冲能量采集的自供电蓝牙转速监测系统。系统利用韦根脉冲幅值与激励磁场变化速率无关的特性，以单只传感器同时完成转速感知与能量采集：径向充磁磁体随转轴每转触发 2 个脉冲，实测空载峰值 ±20 V、脉宽 26 μs。脉冲能量经 MB14F 全桥整流存入 0.01 F 储能电容后，由仅含两只 MOS 管与高阻分压网络的纳功耗迟滞开关实施能量门控：储能阶段高边开关关断，稳压器与无线模块被完全隔离，理论检测支路电流约 90 nA；储能电压达到上限阈值后高边开关导通、3.3 V 稳压输出建立，nRF52832 以 GPIOTE—PPI—TIMER 硬件事件链完成免 CPU 脉冲计数并经 iBeacon 广播上报。实测 0.01 F 储能在 5.0 V→3.7 V 迟滞窗口内可释放 56.55 mJ，样机完成一次\"2 s 计数＋3 包广播\"从储能端取用 50.18 mJ，裕量 6.37 mJ；按 η&lt;sub&gt;LDO&lt;/sub&gt; = 2V&lt;sub&gt;O&lt;/sub&gt;/(V&lt;sub&gt;H&lt;/sub&gt;+V&lt;sub&gt;L&lt;/sub&gt;) ≈ 75.9% 折算，3.3 V 负载侧理论可用能量为 42.9 mJ，据此给出负载功耗的工程约束与三条闭合路径。经 20 Hz 标准脉冲校验（2 s 计 40，广播字段 0x28）后，系统实测接收 240 r/min（0xF0）转速数据，验证了无电池条件下\"发电—储能—计数—上报\"链路的可行性。 @keywords-zh: 韦根传感器；能量采集；自供电；纳功耗能量管理；迟滞开关；低功耗蓝牙 @abstract-en: Battery-powered wireless sensor nodes suffer from limited lifetime and costly maintenance. This paper presents a self-powered Bluetooth rotational speed monitoring system based on Wiegand pulse energy harvesting. Because the Wiegand pulse amplitude is essentially independent of the field slew rate, a single sensor performs both speed sensing and energy harvesting: a radially magnetized magnet triggers two pulses per revolution, with a measured open-circuit peak of ±20 V and a pulse width of 26 μs. After an MB14F bridge rectifier, the pulse energy is accumulated in a 0.01 F capacitor and gated by a nano-power hysteretic switch built from only two MOSFETs and a high-impedance divider. During the charging phase the high-side switch is off, so the LDO and the radio are fully disconnected and only a sensing branch of about 90 nA (theoretical) remains; once the storage voltage reaches the upper threshold, the high-side PMOS turns on, the 3.3 V rail is established, and an nRF52832 counts the pulses through a GPIOTE–PPI–TIMER hardware event chain without CPU intervention and reports the speed by iBeacon advertising. Measurements show that the 0.01 F capacitor releases 56.55 mJ over the 5.0 V→3.7 V hysteresis window, whereas one \"2 s counting + three advertising events\" cycle draws 50.18 mJ from the storage node, leaving a margin of 6.37 mJ. Converting this to the 3.3 V rail with an LDO efficiency of 2V&lt;sub&gt;O&lt;/sub&gt;/(V&lt;sub&gt;H&lt;/sub&gt;+V&lt;sub&gt;L&lt;/sub&gt;) ≈ 75.9% leaves only 42.9 mJ available to the load, which quantitatively defines how far the present prototype must be optimized and suggests three paths to full closure. After validation with 20 Hz reference pulses (40 counts in 2 s, broadcast field 0x28), a shaft speed of 240 r/min (0xF0) was successfully received on a smartphone, confirming the feasibility of the battery-free \"harvest–store–count–report\" chain. @keywords-en: Wiegand sensor; energy harvesting; self-powered; nano-power energy management; hysteretic switch; Bluetooth Low Energy</p>\n<h3>0　引言</h3>\n<p>物联网的规模化部署使无线传感节点数量急剧增长，节点供电已成为制约系统寿命与维护成本的核心瓶颈：电池容量有限，海量节点的电池更换在经济与环境两方面均不可持续，从环境中采集能量为节点自供电因而受到持续关注[1]。在工业与交通装备中，带式输送机托辊、电机、泵类等大量旋转部件的运行状态需要长期在线监测，此类场景中节点分布范围广、数量大、安装位置分散，对\"免维护\"供电的需求尤为迫切[2]。</p>\n<p>面向旋转机械的环境能量采集已有多种实现形式。太阳能、风能等自然能源受环境条件制约明显；围绕旋转部件的振动能与旋转能采集多采用压电式或电磁式结构[3]，其共性局限在于输出强烈依赖激励的时间特性：压电结构偏离谐振频率时输出急剧衰减，电磁感应式输出幅值正比于转速，低频磁激励下输出功率小，难以在低转速、间歇运转工况下稳定为节点供电。</p>\n<p>韦根（Wiegand）传感器为上述矛盾提供了独特的突破口。韦根效应于 1974 年被发现[4-5]：经扭应力处理的 Vicalloy 磁性丝在外磁场极性翻转时发生大巴克豪森跳变，输出幅值数伏、宽度数十微秒的电压脉冲，且脉冲幅值与激励磁场的变化速率无关——即使激励磁体以极慢速度运动、乃至准静态翻转，脉冲依然产生。这一\"幅值—速率解耦\"特性使单只韦根传感器可同时承担转速感知与能量采集双重职能：文献已报道以单脉冲直接驱动无源霍尔传感器[6]、以 Buck 变换器对韦根脉冲进行数字化收集[7]、以韦根传感器构成无旋转磁体编码器[8]以及面向韦根源的系统级能量管理架构[9]。</p>\n<p>与振动、光照等连续型微能源不同，韦根源是典型的\"离散脉冲源\"：单个事件仅释放纳焦量级能量，事件间隔可达秒级。这决定了其能量管理电路不能沿用为连续源设计的方案——后者通常需要带隙基准、比较器偏置与控制逻辑的持续供电，静态电流常达微安至数十微安量级[9]，其自身消耗即可能超过采集所得。近年来面向微功率采集源的极简能量管理电路正沿着\"去基准源、去持续偏置\"的方向演进，例如仅由三只晶体管构成的 3T-EM 电路可在输入电流低至 0.4 μA 时正常工作[18]，印证了离散触发式架构在纳瓦级输入下的必要性。本文沿用这一思路，把能量门控简化为两只 MOS 管与高阻分压网络构成的迟滞开关。</p>\n<p>本文在上述工作基础上，设计并实现了一套完整的自供电蓝牙无线转速监测系统，主要工作包括：①实测表征韦根传感器在径向磁体旋转激励下的脉冲输出特性，并给出单脉冲能量的电容积分测量方法；②设计由无源整流、纳功耗 MOS 迟滞开关与后置稳压构成的能量管理模块，使储能阶段稳压器与无线模块完全断电；③利用 nRF52832 的 PPI 硬件事件链实现免 CPU 脉冲计数，经 iBeacon 广播将转速发送至手机；④明确区分储能端、稳压输出端与负载端三个能量测量口径，完成系统能量核算并给出能量闭合条件与工程约束。</p>\n<h3>1　系统总体设计</h3>\n<h4>1.1　设计思想与总体结构</h4>\n<p>系统的核心设计思想是\"一个传感器、两条链路\"：韦根传感器输出的单一脉冲同时被感知链路与供能链路共享。感知链路直接利用脉冲幅值大、边沿陡峭的特点触发计数事件；供能链路将脉冲的伏秒面积整流积蓄为储能电荷。如图 1 所示，系统由径向充磁激励磁体、韦根传感器、能量管理模块（整流、储能、迟滞开关、后置稳压）与 nRF52832 无线模块（PPI 计数、iBeacon 广播）四部分组成，转速数据经蓝牙广播发送至手机端 nRF Connect 软件显示。</p>\n<p>调度机制采用\"能量驱动\"而非时间驱动：迟滞开关监测储能电压，达到上限阈值时接通负载、降至下限阈值时断开，使无线模块仅在能量充足时突发工作。该调度完全由硬件实现，不消耗软件资源，也保证了断电前计数值通过广播完成一次\"落盘\"再复位，不会因断电丢失累积信息。与传统\"稳压器常电、负载由软件休眠\"的做法不同，本设计在储能阶段将稳压器与无线模块一并切断，使系统的本底损耗仅由检测支路、整流桥反向漏电与电容自放电决定。</p>\n<p>图1　系统总体结构框图</p>\n<h4>1.2　工作流程</h4>\n<p>系统一个完整工作周期为：①转轴旋转，径向磁体每转触发韦根传感器输出 2 个双向电压脉冲；②脉冲经全桥整流后向储能电容充电，此阶段高边开关关断，稳压器与无线模块无供电通路，仅检测支路（纳安级）耗能；③储能电压升至迟滞上限 V&lt;sub&gt;H&lt;/sub&gt; 时，高边开关导通，3.3 V 稳压输出建立，nRF52832 上电并以 PPI 方式对脉冲计数 2 s，将计数值换算为转速（r/min）写入 iBeacon 广播数据并发送；④负载消耗使储能电压降至下限 V&lt;sub&gt;L&lt;/sub&gt;，迟滞开关断开负载，nRF52832 失电复位，系统回到充电阶段循环。系统的能量供给与数据上报节奏均由能量积累状态决定：转速越高，脉冲能量积累越快，上报越密集；转速降低时上报自动稀疏，但系统仍可依靠储能缓冲持续工作。系统主要器件与关键参数如表 1 所示。</p>\n<p>表1　系统主要器件与关键参数</p>\n<p>| 单元 | 器件/参数 | 关键指标 | |------|----------|---------| | 韦根传感器 | UBITO 系列（SMD 封装） | Pin5/Pin6 差分输出；空载峰值 20 V、脉宽 26 μs | | 激励磁体 | 径向充磁永磁体 | 安装于转轴侧面；每转触发 2 个脉冲（m&lt;sub&gt;p&lt;/sub&gt;=2） | | 整流电路 | MB14F 全桥整流 | 正向压降 0.55 V，额定整流电流 1 A | | 迟滞开关 | BSS84P（P 沟道高边）＋BSS123N（N 沟道检测） | 理论阈值 5.07 V/3.73 V；检测支路理论约 90 nA【待补：以实测为准】 | | 后置稳压 | TPS79733（SC70-5） | 固定输出 3.3 V，静态电流 1.2 μA，最大输入电压 5.5 V | | 储能元件 | 电解电容 0.01 F | 迟滞窗口内可释放能量 56.55 mJ（5.0→3.7 V） | | 无线模块 | nRF52832（Cortex-M4，64 MHz） | 手册值：空闲 1.9 μA；0 dBm 发送 4.6 mA |</p>\n<h3>2　韦根转速感知与能量采集特性</h3>\n<h4>2.1　脉冲生成机理与转速关系</h4>\n<p>韦根传感器由扭应力处理的 Vicalloy 磁性丝与外部拾取线圈构成。丝材沿径向形成\"软壳—硬芯\"双磁层结构：近表面为低矫顽力软磁层，中心为高矫顽力硬磁芯，磁学非均匀性使丝材具有双稳态特性[11-12]。当外加轴向磁场克服壳层磁偏置时，软磁层发生大巴克豪森跳变，磁畴壁以约 500 m/s 的恒定速度传播[6]，丝材内部磁通回路瞬间重构，磁力线外溢并被拾取线圈转换为三角波电压脉冲；等效电路模型研究已趋于成熟[13]，跳变的磁通重构过程亦获得显微观测的直接证实[14]。</p>\n<p>由于跳变速度恒定且远快于外部磁场变化，脉冲幅值仅由丝材内部跳变过程决定，与激励磁场的频率和变化速率无关[6,13]。将磁体安装于转轴（图 2），磁体每掠过传感器一次即提供一次极性翻转激励；径向充磁磁体的靠近与离开分别触发正、负脉冲，故单磁体布置下每转产生 2 个脉冲，即每转脉冲数 m&lt;sub&gt;p&lt;/sub&gt; = 2，脉冲频率与转速满足：</p>\n<p>$$ f = m&lt;sub&gt;p&lt;/sub&gt;·n / 60　　(1)</p>\n<p>式中 n 为转速（r/min）。需要澄清的是，\"幅值—速率解耦\"并不意味着零转速下仍能输出转速信息：转速为零时不存在磁场极性翻转事件，因而没有脉冲可供计数。该特性的准确含义是：只要发生一次翻转（哪怕是极慢速掠过或准静态反转），脉冲即以满幅输出，因此转速测量的下限由\"单位时间内能否获得足够脉冲数\"这一统计平均时间决定，而非由幅值门限决定。这一点使韦根方案区别于霍尔（需恒定偏置电流）、电磁感应（幅值正比于转速）与压电谐振式传感，在低速与间歇运转工况下具有本质优势[6,8]。</p>\n<p>图2　激励磁体安装与韦根传感器</p>\n<h4>2.2　脉冲输出特性实测</h4>\n<p>实验实测的脉冲输出特性如图 3 所示：空载条件下脉冲为正负交替的双极性波形，峰值最高达 ±20 V（图 3(a)，5 V/格）；单脉冲持续时间实测 26 μs（图 3(b)，时基 25 μs/格，光标测量 Δt = 26.00 μs）。该结果与文献报道的大功率型韦根器件（脉宽约 25 μs、峰值约 20 V[9]）及 3000 匝拾取线圈下约 20 μs 的半高全宽[6]处于同一量级，相互印证。带载（整流后向储能电容充电）条件下，脉冲峰值稳定在约 7 V（图 3(c)，2 V/格，记录峰-峰值 8.68 V），表明低阻抗负载下源内阻分压使幅值显著回落，脉冲以电流形式向储能元件传递电荷。幅值随负载大幅下降这一事实，是后文强调\"必须实测单脉冲注入能量、而不能由空载幅值推算\"的直接依据。</p>\n<p>图3　韦根脉冲输出实测</p>\n<h4>2.3　单脉冲能量量级与测量方法</h4>\n<p>在等效电路模型（线圈电阻 R&lt;sub&gt;w&lt;/sub&gt;、电感 L&lt;sub&gt;w&lt;/sub&gt; 与三角波脉冲源串联[9,13]）下，单脉冲最大可提取能量为：</p>\n<p>$$ E&lt;sub&gt;w,max&lt;/sub&gt; = V&lt;sub&gt;w&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt;·T&lt;sub&gt;w&lt;/sub&gt; / (12·R&lt;sub&gt;w&lt;/sub&gt;)　　(2)</p>\n<p>已有文献报道的韦根源单脉冲能量均处于纳焦量级：约 3 nJ（集成磁导结构[10]）、8–29 nJ（优化收集电路[9]）、600 nJ（150 根丝束并联[6]）；且功率最优与能量最优对应不同负载——文献[10]实测同一器件在 11 kΩ 负载下瞬时功率最大（2.9 mW），在 3.6 kΩ 负载下单脉冲能量最大（47.1 nJ）。上述数据均为文献值，本文器件（UBITO 系列）的单脉冲能量尚需实测，不能直接引用。</p>\n<p>本文采用电容积分法标定实际可用的单脉冲注入能量 E&lt;sub&gt;p&lt;/sub&gt;：将韦根输出经整流桥接入已知容量 C&lt;sub&gt;test&lt;/sub&gt; 的低漏电电容（预置偏压 V&lt;sub&gt;1&lt;/sub&gt;），在恒定转速下连续注入 N（≥1000）个脉冲，记录电容电压升至 V&lt;sub&gt;2&lt;/sub&gt;，则</p>\n<p>$$ E&lt;sub&gt;p&lt;/sub&gt; ≈ [½·C&lt;sub&gt;test&lt;/sub&gt;·(V&lt;sub&gt;2&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt; − V&lt;sub&gt;1&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt;)] / N　　(3)</p>\n<p>改变预置偏压 V&lt;sub&gt;C&lt;/sub&gt; 重复实验，即可得到 E&lt;sub&gt;p&lt;/sub&gt;–V&lt;sub&gt;C&lt;/sub&gt; 关系曲线。由于源内阻 R&lt;sub&gt;w&lt;/sub&gt; 的分压作用随储能电压升高而加剧，预期 E&lt;sub&gt;p&lt;/sub&gt; 在高 V&lt;sub&gt;C&lt;/sub&gt; 区间下降，该曲线是选择与转速、储能电容相匹配的迟滞窗口的依据。【待补：以实测为准——需给出 C&lt;sub&gt;test&lt;/sub&gt;、N、V&lt;sub&gt;1&lt;/sub&gt;→V&lt;sub&gt;2&lt;/sub&gt; 与 E&lt;sub&gt;p&lt;/sub&gt;–V&lt;sub&gt;C&lt;/sub&gt; 曲线。】</p>\n<p>纳焦级的单脉冲能量预算决定了接收端电路必须以\"纳功耗、事件驱动\"为设计准则：任何持续型偏置电流都可能与采集功率同量级甚至更大，这正是本文能量管理电路设计的出发点。</p>\n<h3>3　能量管理电路设计</h3>\n<h4>3.1　整流与储能</h4>\n<p>韦根脉冲为双向交流信号，须先整流。与半波整流（输出低、损耗大）及带中心抽头的全波整流（绕制复杂）相比，桥式整流输出效率高、二极管反向电压低，故选用微小型全桥整流器 MB14F，其正向压降仅 0.55 V。有源同步整流与自振荡升压等方案可进一步提高提取量[9]，但需要额外供电与控制；本文选用无源方案，其优势在于无需任何主动偏置，而非\"零损耗\"。</p>\n<p>无源并不等于无漏电，储能阶段的实际损耗由三部分构成：整流桥的二极管反向漏电流 I&lt;sub&gt;rev&lt;/sub&gt;、储能电容的自放电 I&lt;sub&gt;cap&lt;/sub&gt; 与迟滞开关检测支路电流 I&lt;sub&gt;sense&lt;/sub&gt;。其中前两项常被低估：MB14F 在室温下的反向漏电流可达微安量级（高温下更大），铝电解电容的自放电同样处于微安量级，二者往往远大于第三项的纳安量级。因此，\"纳功耗\"设计必须同时约束这三条支路，仅把检测支路做到纳安级并不能保证系统自持。储能元件选用 0.01 F 电解电容，其在迟滞窗口内可释放的能量为</p>\n<p>$$ E&lt;sub&gt;C&lt;/sub&gt; = ½·C·(V&lt;sub&gt;H&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt; − V&lt;sub&gt;L&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt;) = ½ × 0.01 × (5.0&lt;sup&gt;2&lt;/sup&gt; − 3.7&lt;sup&gt;2&lt;/sup&gt;) ≈ 56.55 mJ　　(4)</p>\n<p>需要强调，E&lt;sub&gt;C&lt;/sub&gt; 是电容端\"可释放\"的能量，并非负载端可用能量；二者的换算关系由 3.2 节给出。整流与稳压电路如图 4(a) 所示。</p>\n<h4>3.2　后置稳压与能量转换效率</h4>\n<p>无线模块需要稳定的 3.3 V 供电。迟滞开关导通后，储能电压经 TPS797xx 系列超低功耗 LDO（SC70-5 封装，静态电流 1.2 μA，10 mA 负载下压差约 105 mV，最大输入电压 5.5 V）稳压输出。由于 LDO 仅在开关导通期间带电，其 1.2 μA 静态电流不再构成储能阶段的持续负担，这是本架构与\"LDO 常电\"方案的关键差别。同时必须指出：储能电压在充电阶段可能被充至 6 V（见 5.1 节），已超出 TPS79733 的 5.5 V 推荐输入上限，因此在新架构中以 V&lt;sub&gt;H&lt;/sub&gt; = 5.0 V 作为门控上限，并在储能端预留钳位/泄放支路，确保 LDO 输入不被过压。</p>\n<p>对从 V&lt;sub&gt;H&lt;/sub&gt; 放电至 V&lt;sub&gt;L&lt;/sub&gt; 的储能电容，释放电荷 Q = C(V&lt;sub&gt;H&lt;/sub&gt; − V&lt;sub&gt;L&lt;/sub&gt;)，LDO 输出同样多的电荷（忽略其静态电流），故负载侧获得的能量与转换效率为</p>\n<p>$$ E&lt;sub&gt;PMU,out&lt;/sub&gt; = V&lt;sub&gt;O&lt;/sub&gt;·C·(V&lt;sub&gt;H&lt;/sub&gt; − V&lt;sub&gt;L&lt;/sub&gt;)　　(5)</p>\n<p>$$ η&lt;sub&gt;LDO&lt;/sub&gt; = E&lt;sub&gt;PMU,out&lt;/sub&gt; / E&lt;sub&gt;C&lt;/sub&gt; = 2V&lt;sub&gt;O&lt;/sub&gt; / (V&lt;sub&gt;H&lt;/sub&gt; + V&lt;sub&gt;L&lt;/sub&gt;)　　(6)</p>\n<p>代入 V&lt;sub&gt;O&lt;/sub&gt; = 3.3 V、V&lt;sub&gt;H&lt;/sub&gt; = 5.0 V、V&lt;sub&gt;L&lt;/sub&gt; = 3.7 V 得 η&lt;sub&gt;LDO&lt;/sub&gt; ≈ 75.9%，E&lt;sub&gt;PMU,out&lt;/sub&gt; = 3.3 × 0.01 × 1.3 ≈ 42.9 mJ。需要说明的是，该效率高于\"储能电压等于 2 倍输出电压时效率 50%\"的粗略估计：后者只描述了某一瞬时工作点，而式(6)是整个放电区间的积分结果。作为对照，若负载允许在 3.7–5.0 V 宽压下直接由储能供电（省去 LDO），则可取用电容释放的全部 56.55 mJ，代价是负载必须具备宽压工作能力与相应的电压监测。本文以约 24% 的能量代价换取电压稳定与负载解耦，对电压窗口狭窄的 BLE 收发机更为稳妥。</p>\n<h4>3.3　纳功耗 MOS 迟滞开关</h4>\n<p>负载通断由迟滞开关硬件调度。若沿用\"纳功耗运放比较器＋常电 LDO\"的方案（图 4(b)，TLV8801 静态电流 320 nA，以 3.3 V 稳压输出为比较基准），则储能阶段仍存在约 1.5 μA 的常电电流（320 nA ＋ 1.2 μA），在 5 V 储能电压下相当于约 7.5 μW 持续损耗；作为对照，240 r/min 下单只韦根源每秒仅产生 8 个脉冲，即便按 600 nJ/脉冲的文献上限估算，其平均采集功率也不足 5 μW。也就是说，常电方案的本底损耗与采集功率同量级，系统将无法自持。这是本文改用 MOS 迟滞开关的根本原因。</p>\n<p>图4　电源管理电路：（a）MB14F 整流与 TPS79733 后置稳压；（b）迟滞比较器方案与本文 MOS 迟滞高边开关</p>\n<p>图5　迟滞电路实测波形（CH1：储能电压，5 V/格；CH2：输出，2 V/格）</p>\n<p>新电路原理与器件取值如表 2 与图 4(b) 所示：Q2 采用 P 沟道 MOS 管 BSS84P 作为高边开关，Q4 采用 N 沟道 MOS 管 BSS123N 作为阈值检测管，R4/R6 构成储能电压分压，R1 由开关输出（PMOUT）反馈至分压中点形成迟滞，R3 为 Q2 栅源上拉以保证可靠关断，R&lt;sub&gt;D&lt;/sub&gt; 为开关输出节点的放电电阻。设 Q4 的阈值电压为 V&lt;sub&gt;T&lt;/sub&gt;，则上、下阈值分别为</p>\n<p>$$ V&lt;sub&gt;H&lt;/sub&gt; = V&lt;sub&gt;T&lt;/sub&gt;·[1 + R4 / (R6 ∥ R1)]　　(7)</p>\n<p>$$ V&lt;sub&gt;L&lt;/sub&gt; = V&lt;sub&gt;T&lt;/sub&gt;·[1 + (R4 ∥ R1) / R6]　　(8)</p>\n<p>取 R4 = 43 MΩ、R6 = 15 MΩ、R1 = 120 MΩ、R3 = 47 MΩ、R&lt;sub&gt;D&lt;/sub&gt; = 1 MΩ，按 V&lt;sub&gt;T&lt;/sub&gt; = 1.2 V 计算得 R6∥R1 = 13.33 MΩ、R4∥R1 = 31.66 MΩ，故</p>\n<p>$$ V&lt;sub&gt;H&lt;/sub&gt; = 1.2 × (1 + 43 / 13.33) ≈ 5.07 V，　V&lt;sub&gt;L&lt;/sub&gt; = 1.2 × (1 + 31.66 / 15) ≈ 3.73 V　　(9)</p>\n<p>与设计目标 5.0 V/3.7 V 一致。储能阶段（Q2 关断）检测支路仅由 R4、R6 构成，其理论电流为 (V&lt;sub&gt;H&lt;/sub&gt; − V&lt;sub&gt;T&lt;/sub&gt;)/R4 ≈ 90 nA，对应功率约 0.46 μW；与前述 7.5 μW 的常电方案相比降低约一个数量级。</p>\n<p>表2　纳功耗迟滞开关器件取值与理论阈值</p>\n<p>| 器件 | 取值/型号 | 作用与说明 | |------|----------|-----------| | Q2 | BSS84P（P 沟道） | 高边开关，导通后向 LDO 供电 | | Q4 | BSS123N（N 沟道） | 阈值检测，V&lt;sub&gt;T&lt;/sub&gt; ≈ 1.2 V | | R4 | 43 MΩ | 上分压电阻，决定检测支路电流 | | R6 | 15 MΩ | 下分压电阻，决定 V&lt;sub&gt;L&lt;/sub&gt; | | R1 | 120 MΩ | 正反馈电阻，决定迟滞宽度 | | R3 | 47 MΩ | Q2 栅源上拉，保证可靠关断 | | R&lt;sub&gt;D&lt;/sub&gt; | 1 MΩ | 开关输出节点放电 | | V&lt;sub&gt;H&lt;/sub&gt;/V&lt;sub&gt;L&lt;/sub&gt; | 5.07 V/3.73 V（理论） | 目标 5.0 V/3.7 V【待补：以实测为准】 | | I&lt;sub&gt;sense&lt;/sub&gt; | ≈ 90 nA（理论） | 未含 MOS 漏电、桥漏电与电容自放电【待补：以实测为准】 |</p>\n<p>上述阈值与电流均为理论值，须由样机实测确认，原因有三：其一，MOS 管阈值电压 V&lt;sub&gt;T&lt;/sub&gt; 存在较大离散性（BSS123N 的 V&lt;sub&gt;GS(th)&lt;/sub&gt; 规格范围为 0.8–2.0 V），直接决定 V&lt;sub&gt;H&lt;/sub&gt;、V&lt;sub&gt;L&lt;/sub&gt; 的实际值；其二，V&lt;sub&gt;GS(th)&lt;/sub&gt; 具有约 −2 mV/℃ 的负温度系数，按 −40～+85 ℃ 的工业温区估算，阈值漂移可达零点几伏量级，需要通过实测标定或改用低温漂检测方式（如微功耗基准＋比较器）抑制；其三，实测电流还须叠加 MOS 管漏电流、整流桥反向漏电与电容自放电，其中后两项可能占主导（见 3.1 节）。因此，表 2 中的 I&lt;sub&gt;sense&lt;/sub&gt; 只应理解为检测支路的理论下限，系统等效漏电以实测为准。</p>\n<h3>4　低功耗无线检测与传输设计</h3>\n<h4>4.1　PPI 硬件事件链免 CPU 计数</h4>\n<p>nRF52832 内置可编程外设互连（PPI），可将一个外设的事件端点直接连接至另一个外设的任务端点，全程不经过 CPU。本文将韦根脉冲整形后接入 GPIOTE 输入引脚，由 GPIOTE 在有效边沿产生 EVENTS_IN 事件；该事件经 PPI 通道直接触发 TIMER1 的 TASKS_COUNT 任务，TIMER1 工作在 Counter 模式，每个事件使计数值加 1。计数过程完全由硬件完成，CPU 可保持空闲/睡眠，仅在计数窗口结束后唤醒读取计数值并组织广播，从体制上消除了轮询与中断服务开销。按 2 s 计数窗口与 m&lt;sub&gt;p&lt;/sub&gt; = 2 计算，即使转速达 10&lt;sup&gt;4&lt;/sup&gt; r/min 量级，计数值亦远小于 32 位计数器上限，不存在溢出风险。这种\"硬件事件计数＋掉电前上报\"的设计思路与文献报道的自供电韦根计数器一脉相承[15]。</p>\n<h4>4.2　iBeacon 广播与数据编码</h4>\n<p>无线传输采用 iBeacon 非连接广播模式：低功耗蓝牙仅使用 3 个广播信道，单次广播事件仅 0.6–1.2 ms，无需建立与维护连接[16]，特别适合单向、小数据量的遥测场景。转速信息以十六进制编码嵌入广播 UUID 字段发送，手机端 nRF Connect 扫描即可解析（图 7）；广播数据中同时包含 Major/Minor 字段与设备名（HDU），可用于节点标识。接收端实测 1 m 处 RSSI 为 −61 dBm，链路质量良好。</p>\n<h4>4.3　低功耗配置与实测口径</h4>\n<p>围绕 nRF52832 进行了四项低功耗配置：①协议栈低频时钟选用外部低速时钟源；②关闭 UART 日志、改用 RTT 调试输出，非调试期 RTT 不消耗电流；③GPIOTE 采用低精度事件模式，仅检测引脚电平变化；④精简广播负载、降低蓝牙吞吐。</p>\n<p>需要严格区分两类数据：芯片手册给出的空闲电流 1.9 μA 与 0 dBm 发送电流 4.6 mA，是在特定条件（指定 VDD、片内 DCDC 使能、HFCLK 起振等）下测得的芯片级指标；而本文 4.4 节引用的 25 mW（计数阶段平均）与 57.82 mW（1 ms 广播峰值）为青风 nRF52832EK 开发板整机实测值，包含底板稳压、指示与调试电路及 CPU 活动开销。二者不可混用，后者不代表芯片功耗下限，也不代表工程化模块的实际水平。此外，核心板与底板分离的设计使芯片可在脱离调试底板后由自供电模块独立供电运行。</p>\n<h4>4.4　能量核算、测量口径与闭合条件</h4>\n<p>负载工作分为计数与广播两个阶段。功率分析仪实测：计数阶段开发板平均功率 25 mW，1 ms 内最大广播功率 57.82 mW；每次更新执行 2 s 脉冲计数并分 3 个广播包发送，单次\"计数＋广播\"能耗为</p>\n<p>$$ E&lt;sub&gt;update&lt;/sub&gt; ≈ 25 mW × 2 s + E&lt;sub&gt;adv&lt;/sub&gt; ≈ 50.18 mJ　　(10)</p>\n<p>其中 E&lt;sub&gt;adv&lt;/sub&gt; 为 3 个广播包的发送能耗（约 0.1–0.2 mJ）。本次功率采样的电压/电流探头位于储能电容输出端（即能量管理模块的输入侧），因此 50.18 mJ 属于\"储能端\"口径。为避免结论被误读，本文明确定义三个能量口径：</p>\n<p>$$ E&lt;sub&gt;cap&lt;/sub&gt; = ½·C·(V&lt;sub&gt;H&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt; − V&lt;sub&gt;L&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt;) = 56.55 mJ（电容端可释放）　　(11)</p>\n<p>$$ E&lt;sub&gt;PMU,out&lt;/sub&gt; = V&lt;sub&gt;O&lt;/sub&gt;·C·(V&lt;sub&gt;H&lt;/sub&gt; − V&lt;sub&gt;L&lt;/sub&gt;) = 42.9 mJ（3.3 V 稳压输出端）　　(12)</p>\n<p>$$ E&lt;sub&gt;load&lt;/sub&gt; = 负载实际消耗（本文实测 50.18 mJ，采样点在储能端）　　(13)</p>\n<p>据此得到两点结论：其一，在储能端口径下 E&lt;sub&gt;load&lt;/sub&gt; = 50.18 mJ &lt; E&lt;sub&gt;cap&lt;/sub&gt; = 56.55 mJ，裕量 6.37 mJ（约 11%），\"充满即发、发完即断\"的循环在储能侧是自洽的；其二，在 3.3 V 负载口径下 E&lt;sub&gt;PMU,out&lt;/sub&gt; = 42.9 mJ &lt; 50.18 mJ，现有样机若完整工作于稳压输出端，单次更新尚不能闭合。这一矛盾直接给出了三条工程路径：①压缩负载能耗（以定制模块替代开发板、缩短计数窗口并以测周法解算），使 E&lt;sub&gt;load&lt;/sub&gt; 降至 42.9 mJ 以下；②提高储能上限 V&lt;sub&gt;H&lt;/sub&gt; 或增大 C，使 E&lt;sub&gt;PMU,out&lt;/sub&gt; 相应提高（须兼顾 3.2 节的 LDO 输入上限约束）；③让负载直接工作于 3.7–5.0 V 宽压区间、省去 LDO，可取用全部 56.55 mJ。系统实测能耗汇总如表 3 所示。</p>\n<p>表3　系统能耗核算汇总（三种口径）</p>\n<p>| 项目 | 数值 | 口径与说明 | |------|------|-----------| | E&lt;sub&gt;cap&lt;/sub&gt;（电容可释放） | 56.55 mJ | 0.01 F，5.0 V→3.7 V | | η&lt;sub&gt;LDO&lt;/sub&gt; | ≈ 75.9% | 2V&lt;sub&gt;O&lt;/sub&gt;/(V&lt;sub&gt;H&lt;/sub&gt;+V&lt;sub&gt;L&lt;/sub&gt;) | | E&lt;sub&gt;PMU,out&lt;/sub&gt;（3.3 V 侧可用） | 42.9 mJ | V&lt;sub&gt;O&lt;/sub&gt;·C·(V&lt;sub&gt;H&lt;/sub&gt;−V&lt;sub&gt;L&lt;/sub&gt;) | | E&lt;sub&gt;load&lt;/sub&gt;（样机实测） | 50.18 mJ | 计数＋3 包广播；采样点在储能端 | | 计数阶段平均功率 | 25 mW | nRF52832EK 开发板整机，2 s 计数窗 | | 广播峰值功率 | 57.82 mW（1 ms 内） | 0 dBm 发射 | | 检测支路电流 | ≈ 90 nA（理论）／1.5 μA（常电方案） | 新/旧 PMU 对比【待补：以实测为准】 | | 单脉冲能量 E&lt;sub&gt;p&lt;/sub&gt; | 待实测 | 电容积分法，见 2.3 节【待补：以实测为准】 |</p>\n<p>除单次更新的能量闭合外，系统能否长期自持还取决于采集功率与本底漏电的平衡。设单脉冲注入能量为 E&lt;sub&gt;p&lt;/sub&gt;，每转脉冲数为 m&lt;sub&gt;p&lt;/sub&gt;，储能电压为 V&lt;sub&gt;C&lt;/sub&gt;，等效漏电为 I&lt;sub&gt;leak&lt;/sub&gt;，则平均采集功率与自持条件为</p>\n<p>$$ P&lt;sub&gt;H&lt;/sub&gt; = E&lt;sub&gt;p&lt;/sub&gt;·m&lt;sub&gt;p&lt;/sub&gt;·n / 60 ≥ V&lt;sub&gt;C&lt;/sub&gt;·I&lt;sub&gt;leak&lt;/sub&gt;　　(14)</p>\n<p>即维持储能不下降的最低转速为</p>\n<p>$$ n&lt;sub&gt;min&lt;/sub&gt; = 60·V&lt;sub&gt;C&lt;/sub&gt;·I&lt;sub&gt;leak&lt;/sub&gt; / (m&lt;sub&gt;p&lt;/sub&gt;·E&lt;sub&gt;p&lt;/sub&gt;)　　(15)</p>\n<p>若还要求以周期 T&lt;sub&gt;u&lt;/sub&gt; 定期上报，则条件进一步收紧为 P&lt;sub&gt;H&lt;/sub&gt; ≥ V&lt;sub&gt;C&lt;/sub&gt;·I&lt;sub&gt;leak&lt;/sub&gt; + E&lt;sub&gt;update&lt;/sub&gt;/T&lt;sub&gt;u&lt;/sub&gt;。式(15)表明，n&lt;sub&gt;min&lt;/sub&gt; 与 I&lt;sub&gt;leak&lt;/sub&gt; 成正比、与 E&lt;sub&gt;p&lt;/sub&gt; 成反比：在纳焦级 E&lt;sub&gt;p&lt;/sub&gt; 下，只有把 I&lt;sub&gt;leak&lt;/sub&gt; 从微安级压到纳安级，自持转速才可能降到工程可接受的量级；这也解释了 3.3 节为何必须以纳功耗 MOS 开关替代常电方案。式中的 E&lt;sub&gt;p&lt;/sub&gt; 与 I&lt;sub&gt;leak&lt;/sub&gt; 均需实测代入，本文暂不给出具体数值。【待补：以实测为准——需给出 E&lt;sub&gt;p&lt;/sub&gt;、I&lt;sub&gt;leak&lt;/sub&gt; 与 n&lt;sub&gt;min&lt;/sub&gt;。】</p>\n<h3>5　实验结果与分析</h3>\n<h4>5.1　韦根脉冲与能量采集验证</h4>\n<p>如图 3 所示，空载脉冲峰值 ±20 V、脉宽 26 μs，与文献数据同量级[6,9]；带载后脉冲峰值约 7 V，脉冲以电流形式向储能电容持续充电，实测可将储能电容充至约 6 V。该结果一方面证明韦根脉冲能量足以驱动后续电路完成完整工作周期，另一方面也暴露出一个必须处理的问题：6 V 已超出 TPS79733 的 5.5 V 推荐输入上限。本文的解决办法是以 V&lt;sub&gt;H&lt;/sub&gt; = 5.0 V 作为迟滞门控上限（3.3 节），并在储能端设置钳位/泄放支路，使能量管理模块的输入电压被限制在安全范围内。</p>\n<h4>5.2　能量管理动作验证</h4>\n<p>已实现的样机采用 TLV8801 纳功耗运放构成迟滞比较器（图 4(b)，以 3.3 V 稳压输出为基准），其动作波形如图 5 所示：储能电压升至 5 V 时输出高电平、接通负载，负载消耗使电压降至 3.7 V 时输出翻低、断开负载，实测动作阈值与设计值一致，充放电周期稳定，迟滞窗口有效避免了比较器在阈值附近的反复抖动。该结果验证了\"能量驱动\"硬件调度的可行性。</p>\n<p>3.3 节提出的 MOS 迟滞开关给出了器件取值、阈值解析式（式(7)–(9)）与理论检测电流约 90 nA，其实测验证（V&lt;sub&gt;H&lt;/sub&gt;、V&lt;sub&gt;L&lt;/sub&gt; 实测值，储能阶段等效漏电 I&lt;sub&gt;leak&lt;/sub&gt;，以及新旧两种 PMU 在静置条件下的 V&lt;sub&gt;C&lt;/sub&gt;(t) 衰减对比）尚未完成，相关数值在文中均以【待补：以实测为准】标注。这是本文下一步工作的首要内容，也是判定最低自持转速的前提。【待补：以实测为准——需给出新 PMU 的 V&lt;sub&gt;H&lt;/sub&gt;/V&lt;sub&gt;L&lt;/sub&gt;、I&lt;sub&gt;leak&lt;/sub&gt; 与 V&lt;sub&gt;C&lt;/sub&gt;(t) 对比曲线。】</p>\n<p>此外，储能电容从 V&lt;sub&gt;L&lt;/sub&gt; 充至 V&lt;sub&gt;H&lt;/sub&gt; 所需的脉冲数与时间可由能量关系直接给出：N&lt;sub&gt;p&lt;/sub&gt; = ½C(V&lt;sub&gt;H&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt; − V&lt;sub&gt;L&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt;)/E&lt;sub&gt;p&lt;/sub&gt;，t&lt;sub&gt;ch&lt;/sub&gt; = N&lt;sub&gt;p&lt;/sub&gt;·60/(m&lt;sub&gt;p&lt;/sub&gt;·n)。该式同时构成储能电容的选型约束——在给定最低工作转速 n 与可接受上报间隔 t&lt;sub&gt;ch&lt;/sub&gt; 下，应有 C ≤ 2·E&lt;sub&gt;p&lt;/sub&gt;·m&lt;sub&gt;p&lt;/sub&gt;·n·t&lt;sub&gt;ch&lt;/sub&gt; / [60·(V&lt;sub&gt;H&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt; − V&lt;sub&gt;L&lt;/sub&gt;&lt;sup&gt;2&lt;/sup&gt;)]，即\"电容越大越安全\"的直觉并不成立，电容量必须与 E&lt;sub&gt;p&lt;/sub&gt; 和最低转速联合设计。240 r/min 下的实测充电时间尚待补测。【待补：以实测为准。】</p>\n<h4>5.3　无线传输功耗</h4>\n<p>功率分析仪实测结果如图 6 所示：计数阶段平均功率 25 mW；广播阶段呈现 3 个间隔的突发脉冲串，1 ms 内峰值功率 57.82 mW。据此核算的单次更新能耗 50.18 mJ（储能端口径）小于电容可释放能量 56.55 mJ，但大于 3.3 V 侧可用能量 42.9 mJ（表 3）。因此本样机只能说明\"储能侧能量收支自洽\"，尚不能宣称在稳压输出端实现完整闭合，工程化降耗路径已在 4.4 节给出。</p>\n<p>图6　nRF52832 功耗实测：（a）计数阶段平均功率；（b）iBeacon 广播突发功率（10 mW/格）</p>\n<h4>5.4　转速检测与无线接收验证</h4>\n<p>首先以信号发生器输出 20 Hz 标准脉冲校验计数链路：2 s 计数窗内计得 40 个脉冲，广播 UUID 中计数字段显示 0x28（= 40，十六进制），换算正确（图 7(a)）。随后将韦根传感器脉冲直接接入计数引脚，手机端成功接收到换算后的转速数据 240 r/min，UUID 字段显示 0xF0（= 240，图 7(b)）；按式(1)（m&lt;sub&gt;p&lt;/sub&gt; = 2）反算，240 r/min 对应 8 个脉冲/秒，2 s 窗口计 16 个脉冲，与窗口长度及每转脉冲数自洽。整个\"发电—储能—计数—广播—接收\"链路在无外部电源条件下稳定工作。</p>\n<p>图7　nRF Connect 接收验证：（a）20 Hz 标准脉冲校验（2 s 计数 40，0x28）；（b）韦根输入下接收 240 r/min（0xF0）</p>\n<h4>5.5　讨论与比较</h4>\n<p>表4　本方案与主流转速监测技术路线比较</p>\n<p>| 技术路线 | 输出/工作特性 | 低速输出保持能力 | 是否需外部供电/电池 | 能量与上报特征 | |---------|-------------|-----------------|-------------------|--------------| | 韦根自供电（本文） | 脉冲幅值与磁场变化速率无关[6,9] | 强：准静态翻转仍满幅输出 | 否 | 纳焦级/脉冲；能量驱动、间歇上报 | | 霍尔＋电池 | 需恒定偏置电流 | 强 | 是 | 连续供电，受电池寿命约束 | | 电磁感应（VR） | 幅值正比于转速 | 弱：低速输出消失 | 否 | 低速不可用 | | 压电/振动式 | 依赖谐振频率 | 弱：偏离谐振输出急剧衰减[3] | 否 | 窄带，转速适应性差 |</p>\n<p>在\"低速可用＋完全无源\"两个约束的交集上，韦根方案具有不可替代性；同类自供电状态监测系统多依赖电磁感应或振动采集，在低速工况下输出受限[17]。就能量管理而言，本文的 MOS 迟滞开关与近年来面向微功率源的极简能量管理电路（如三晶体管 3T-EM，可在 0.4 μA 输入电流下工作[18]）同属\"去基准源、去持续偏置\"的离散触发路线；二者的差别在于，3T-EM 面向连续型微源并追求最大功率跟踪，而本文面向离散脉冲源，只需在储能电压越限时完成一次开关动作，因而可以进一步压缩到两只 MOS 管与高阻分压网络。</p>\n<p>本方案的局限亦需明确：①能量闭合仅在储能端口径下成立，3.3 V 侧可用能量 42.9 mJ 低于样机实测 50.18 mJ，负载功耗必须进一步压缩才能真正自持；②MOS 阈值电压存在离散性与负温度系数，迟滞阈值需实测标定，工业温区下的漂移抑制方案有待验证；③能量输出对气隙与安装对称性敏感[10]，安装公差需谨慎设计；④单脉冲能量、等效漏电、充电时间与最低自持转速尚未实测，相关定量结论需补全；⑤长期温漂与可靠性数据尚缺乏，是工程化前必须补充的环节。</p>\n<h3>6　结论</h3>\n<p>本文设计并实现了基于韦根脉冲能量采集与纳功耗能量管理的自供电无线转速监测系统，完成了从器件表征、电路设计到整机验证的全流程工作，主要结论如下：</p>\n<p>（1）韦根传感器\"幅值—速率解耦\"的特性使其能以单只器件同时承担转速感知与能量采集：实测空载脉冲 ±20 V/26 μs，带载约 7 V，每转 2 脉冲，与文献报道的韦根源特性相互印证。该特性使转速测量下限取决于统计平均时间而非幅值门限，在低速与间歇运转工况下具有本质优势。</p>\n<p>（2）提出以两只 MOS 管与高阻分压网络构成纳功耗迟滞开关、并将稳压器后置的能量管理架构：储能阶段高边开关关断，LDO 与无线模块完全断电，检测支路理论电流约 90 nA，较\"常电 LDO＋纳功耗比较器\"方案的约 1.5 μA 降低约一个数量级；给出了阈值的解析设计式与 5.07 V/3.73 V 的理论取值。</p>\n<p>（3）明确了储能端、稳压输出端与负载端三个能量口径：0.01 F 储能在 5.0 V→3.7 V 窗口内可释放 56.55 mJ，按 η&lt;sub&gt;LDO&lt;/sub&gt; = 2V&lt;sub&gt;O&lt;/sub&gt;/(V&lt;sub&gt;H&lt;/sub&gt;+V&lt;sub&gt;L&lt;/sub&gt;) ≈ 75.9% 折算后 3.3 V 侧可用 42.9 mJ，而样机单次\"2 s 计数＋3 包广播\"实测从储能端取用 50.18 mJ。据此得出：储能侧收支自洽（裕量 6.37 mJ），但 3.3 V 侧尚未闭合，并给出压缩负载能耗、提高储能上限、负载宽压直供三条工程路径。</p>\n<p>（4）基于 nRF52832 的 GPIOTE—PPI—TIMER 硬件事件链实现免 CPU 脉冲计数，经 20 Hz 标准脉冲校验（2 s 计 40，0x28）后实测接收 240 r/min（0xF0）转速数据且数值自洽，验证了无电池条件下\"发电—储能—计数—上报\"链路的可行性。</p>\n<p>（5）后续工作按优先级推进：首先完成 MOS 迟滞开关样机的实测（V&lt;sub&gt;H&lt;/sub&gt;/V&lt;sub&gt;L&lt;/sub&gt;、储能阶段等效漏电、新旧 PMU 的 V&lt;sub&gt;C&lt;/sub&gt;(t) 衰减对比）与单脉冲能量标定，据此给出最低自持转速；随后以定制低功耗模块替代开发板、缩短计数窗口，使负载能耗降至 42.9 mJ 以下；并引入正交双传感器与相位解算扩展高速段量程，结合温漂标定与长时间连续运行试验完善工程化数据。</p>\n<h3>参考文献</h3>\n<p>[1] Ruan T, Chew Z J, Zhu M. Energy-aware approaches for energy harvesting powered wireless sensor nodes[J]. IEEE Sensors Journal, 2017, 17(7): 2165-2173.</p>\n<p>[2] 杜荣华, 朱胜亿, 魏克湘, 等. 交通环境能量采集及自供能交通设施健康状态监测研究进展[J]. 仪器仪表学报, 2022, 43(3): 3-23.</p>\n<p>[3] Halim M A, Rantz R, Zhang Q, et al. Electromagnetic energy harvesting from swing-arm motion using rotational eccentric mass structure[C]//Proc. International Conference on Solid-State Sensors, Actuators and Microsystems (TRANSDUCERS). Kaohsiung: IEEE, 2017: 1863-1866.</p>\n<p>[4] Wiegand J R, Velinsky M. Bistable magnetic device: U.S. Patent 3,820,090[P]. 1974-06-25.</p>\n<p>[5] Wigen P E. Wiegand wire: new material for magnetic based devices[J]. Electronics, 1975, 48: 100-105.</p>\n<p>[6] Takemura Y, Fujinaga N, Takebuchi A, et al. Batteryless Hall sensor operated by energy harvesting from a single Wiegand pulse[J]. IEEE Transactions on Magnetics, 2017, 53(11): 4002706.</p>\n<p>[7] Chotai J, Thakker M. Energy harvesting circuit for digitization of Wiegand pulse using buck converter in discontinuous conduction mode[C]//Proc. 5th International Conference on Energy, Power and Environment (ICEPE). Shillong: IEEE, 2023: 1-5.</p>\n<p>[8] Kowalewski P, Bragard M, Hüning F, et al. An inexpensive Wiegand-sensor-based rotary encoder without rotating magnets for use in electrical drives[J]. IEEE Transactions on Instrumentation and Measurement, 2023, 72: 7507610.</p>\n<p>[9] Saggini S, Ongaro F, Corradini L, et al. Low-power energy harvesting solutions for Wiegand transducers[J]. IEEE Journal of Emerging and Selected Topics in Power Electronics, 2015, 3(3): 766-779.</p>\n<p>[10] Chang C C, Chang J Y. Novel Wiegand-effect based energy harvesting device for linear magnetic positioning system[J]. Microsystem Technologies, 2020, 26: 3421-3426.</p>\n<p>[11] Abe S, Matsushita A. Induced pulse voltage in twisted Vicalloy wire with compound magnetic effect[J]. IEEE Transactions on Magnetics, 1995, 31(6): 3152-3154.</p>\n<p>[12] Vazquez M, Gomez-Polo C, Chen D X, et al. Magnetic bistability of amorphous wires and sensor applications[J]. IEEE Transactions on Magnetics, 1994, 30(2): 907-912.</p>\n<p>[13] Sun X, Yamada T, Takemura Y. Output characteristics and circuit modeling of Wiegand sensor[J]. Sensors, 2019, 19(13): 2991.</p>\n<p>[14] Huening F, Backes A. Direct observation of large Barkhausen jump in thin Vicalloy wires[J]. IEEE Magnetics Letters, 2020, 11: 1-4.</p>\n<p>[15] Chotai J, Thakker M, Takemura Y. Single-bit, self-powered digital counter using a Wiegand sensor for rotary applications[J]. Sensors, 2020, 20(14): 3840.</p>\n<p>[16] 张超峰. 基于CC2541的低功耗蓝牙模块的设计[J]. 科技风, 2020(18): 16-17.</p>\n<p>[17] 穆锦标, 穆继亮, 邹杰, 等. 低功耗自供电机械设备状态监测系统设计[J]. 中北大学学报(自然科学版), 2021, 42(4): 355-360.</p>\n<p>[18] Teng L, Wang H, Liu Y, Fu M, Liang J. A three-transistor energy management circuit for energy-harvesting-powered IoT devices[J]. IEEE Internet of Things Journal, 2023. DOI: 10.1109/JIOT.2023.3289091.</p>"
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

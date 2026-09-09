import * as OpenCC from 'opencc-js';

export const locales = ['zh-tw', 'zh-cn', 'en'] as const;
export type Locale = (typeof locales)[number];
const simplify = OpenCC.Converter({ from: 'tw', to: 'cn' });
export function translator(lang: Locale) {
  return (tw: string, en: string, cn?: string): string =>
    lang === 'en' ? en : lang === 'zh-cn' ? (cn ?? simplify(tw)) : tw;
}
export const routes = [
  '',
  'products',
  'products/space',
  'products/files',
  'products/shield',
  'solutions',
  'solutions/modern-work',
  'solutions/information-protection',
  'solutions/secure-office',
  'solutions/digital-workplace',
  'services',
  'resources',
  'resources/work-handoffs',
  'resources/information-lifecycle',
  'resources/access-review',
  'about',
  'contact',
  'privacy',
  'terms',
];
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const asset = (path: string) => base + '/assets/' + path;
export const href = (lang: Locale, path = '') =>
  base + '/' + lang + '/' + (path ? path.replace(/^\/|\/$/g, '') + '/' : '');
export function content(lang: Locale) {
  const t = translator(lang);
  const products = [
    {
      id: 'space',
      name: 'Eryndex Space',
      word: 'Space',
      concept: 'Structure',
      accent: 'coral',
      category: t('企業工作平台', 'Enterprise work platform'),
      line: t('讓工作形成秩序。', 'Give work a clearer structure.'),
      short: t('工作有脈絡，協作有方向。', 'Shared context. Clearer collaboration.'),
      desc: t(
        '把專案、任務與團隊知識放回同一個脈絡。從誰負責、做到哪裡，到下一步怎麼走，讓每個人都能掌握。',
        'Bring projects, tasks and team knowledge into one shared context. Make ownership, progress and the next step clear to everyone.',
      ),
      pain: t('交接不該從重新說明開始。', 'A handoff should not mean starting over.'),
      story: t(
        '當工作散在聊天訊息、個人筆記與會議裡，下一位接手的人往往看不到決策的原因。Space 讓討論、文件與任務跟著專案留下來，團隊可以接續工作，而不是重建記憶。',
        'When work lives across messages, personal notes and meetings, the next person misses the decisions behind it. Space keeps context with the project, so teams can continue the work instead of reconstructing it.',
      ),
      features: [
        [
          t('工作空間', 'Shared workspaces'),
          t(
            '依團隊與計畫組織協作範圍，讓資訊出現在需要它的人面前。',
            'Organize collaboration around teams and initiatives, with context where people need it.',
          ),
        ],
        [
          t('專案與任務', 'Projects and tasks'),
          t(
            '把目標拆成可執行的步驟，明確記錄負責人、期限與進度。',
            'Turn goals into actionable steps with owners, dates and visible progress.',
          ),
        ],
        [
          t('知識與文件', 'Knowledge and documentation'),
          t(
            '保留決策、作業方式與交接筆記，讓經驗成為可以延續的知識。',
            'Keep decisions, working practices and handoff notes accessible for the next person.',
          ),
        ],
        [
          t('輕量流程自動化', 'Lightweight automation'),
          t(
            '透過狀態與條件串接通知、指派與例行工作，同時保留人工判斷。',
            'Connect notifications, assignments and routine steps while keeping human judgment in the process.',
          ),
        ],
      ],
      example: t(
        '行銷專案、跨部門交接、新人入職與例行審核。',
        'Marketing projects, cross-team handoffs, onboarding and recurring reviews.',
      ),
      boundary: t(
        'Space 專注工作協作。需要檔案生命週期管理時，可搭配 Files；需要統一信任規則時，可搭配 Shield。',
        'Space focuses on collaborative work. Add Files for information lifecycle management or Shield for consistent access policies.',
      ),
    },
    {
      id: 'files',
      name: 'Eryndex Files',
      word: 'Files',
      concept: 'Layers',
      accent: 'cyan',
      category: t('企業檔案平台', 'Enterprise file platform'),
      line: t('讓重要資訊妥善保存。', 'Keep information worth keeping.'),
      short: t('每份資訊，都有可追溯的來處。', 'Every file, with a history.'),
      desc: t(
        '從整理、同步與分享，到版本、備份與還原，為企業資訊建立完整的保存方式。找到需要的資料，也找得回重要的過去。',
        'From organization and sharing to versions, backup and restore, give business information a dependable lifecycle. Find what you need today and recover what mattered yesterday.',
      ),
      pain: t('「最後一版」不該靠檔名判斷。', 'The latest version should not be a guessing game.'),
      story: t(
        '同一份文件寄了幾次、誰持有最新版本、誤刪後能否找回，都是日常工作的真實成本。Files 把檔案狀態、分享範圍與保存紀錄放在一起，讓資訊管理有跡可循。',
        'Repeated email attachments, uncertain versions and accidental deletion create everyday friction. Files brings file state, sharing scope and preservation history together in one traceable place.',
      ),
      features: [
        [
          t('組織與同步', 'Organization and sync'),
          t(
            '依專案、部門與資訊用途建立檔案結構，維持團隊存取的一致性。',
            'Organize files by project, team and purpose, keeping access consistent across the business.',
          ),
        ],
        [
          t('受控分享', 'Controlled sharing'),
          t(
            '為分享設定對象、權限與到期條件，讓協作範圍清楚可見。',
            'Define recipients, permissions and expiry so the scope of collaboration stays clear.',
          ),
        ],
        [
          t('版本紀錄', 'Version history'),
          t(
            '檢視修改時間與版本脈絡，在需要時回到合適的內容狀態。',
            'Review changes over time and return to the right version when needed.',
          ),
        ],
        [
          t('備份與還原', 'Backup and restore'),
          t(
            '依資訊重要性規劃保存與復原方式，讓誤刪或覆寫有處理路徑。',
            'Plan retention and recovery around information value, with a path back from deletion or overwrite.',
          ),
        ],
      ],
      example: t(
        '合約版本、部門共享資料、對外提案與長期保存文件。',
        'Contract versions, shared departmental files, proposals and long-lived records.',
      ),
      boundary: t(
        'Files 提供企業資訊保存能力，不只是雲端硬碟。Space 補上工作脈絡，Shield 補上身分與存取規則。',
        'Files is an information-preservation platform, not just storage. Space adds work context; Shield adds identity and access policy.',
      ),
    },
    {
      id: 'shield',
      name: 'Eryndex Shield',
      word: 'Shield',
      concept: 'Boundary',
      accent: 'mint',
      category: t('企業安全平台', 'Enterprise security platform'),
      line: t('讓信任有清楚的邊界。', 'Give trust a clear boundary.'),
      short: t('正確的人，在正確的條件下存取。', 'The right access, under the right conditions.'),
      desc: t(
        '把身分、裝置與存取政策放在同一套清楚的規則裡。讓每次授權有所依據，異常與變更也能追溯。',
        'Bring identities, devices and access policies into one clear framework. Make each authorization deliberate, with changes and exceptions that can be traced.',
      ),
      pain: t('權限不該隨著時間越留越多。', 'Access should not accumulate unnoticed.'),
      story: t(
        '人員異動、裝置更換與臨時授權，都可能讓企業看不清誰還能存取哪些資訊。Shield 讓身分、條件與決策留下可檢視的紀錄，協助團隊持續整理信任範圍。',
        'Role changes, new devices and temporary permissions can obscure who still has access. Shield makes identity, conditions and decisions reviewable so teams can keep their trust boundaries current.',
      ),
      features: [
        [
          t('身分與驗證', 'Identity and verification'),
          t(
            '以帳號與多因素驗證建立身分依據，讓存取不只依賴一組密碼。',
            'Establish identity through accounts and multifactor authentication, beyond a password alone.',
          ),
        ],
        [
          t('裝置與存取條件', 'Device-aware access'),
          t(
            '結合裝置狀態與存取情境，建立適合企業的授權條件。',
            'Use device state and access context to define conditions appropriate to the business.',
          ),
        ],
        [
          t('權限與政策', 'Permissions and policy'),
          t(
            '依角色與工作需要管理存取範圍，並定期檢視例外授權。',
            'Manage access by role and working needs, with regular review of exceptions.',
          ),
        ],
        [
          t('紀錄與風險可視性', 'Audit and risk visibility'),
          t(
            '查看驗證、存取與政策變更紀錄，讓異常有線索可循。',
            'Review authentication, access and policy changes to investigate unusual activity.',
          ),
        ],
      ],
      example: t(
        '人員到離職、遠端辦公、外部協作與定期權限檢視。',
        'Joiners and leavers, remote work, external collaboration and access reviews.',
      ),
      boundary: t(
        'Shield 管理信任與存取，不是防毒軟體。可獨立規劃，也能為 Space 與 Files 提供一致的存取原則。',
        'Shield manages trust and access; it is not antivirus software. Use it independently or extend consistent access policies to Space and Files.',
      ),
    },
  ];
  const solutions = [
    {
      id: 'modern-work',
      name: t('現代工作協作', 'Modern work'),
      eyebrow: t('協作與交接', 'Collaboration & handoffs'),
      ids: ['space', 'files'],
      title: t('讓交接接得上，讓團隊走得動。', 'Keep handoffs moving. Keep teams connected.'),
      desc: t(
        '當工作進度在一個地方、文件卻在另一個地方，團隊就得反覆確認。把任務脈絡與正確文件連起來，讓每次接手都有起點。',
        'When progress lives in one place and files in another, teams keep checking instead of moving. Connect task context with the right information so every handoff has a starting point.',
      ),
      roles: [
        t('Space 定義任務、負責人與下一步。', 'Space defines tasks, ownership and next steps.'),
        t(
          'Files 管理協作文件、分享與版本。',
          'Files manages shared documents, sharing and versions.',
        ),
      ],
      steps: [
        t('盤點一條常用的交接流程', 'Map one recurring handoff'),
        t('建立專案與共用文件結構', 'Set up projects and shared information'),
        t('以實際工作驗證交接方式', 'Validate the handoff in real work'),
      ],
      outcome: t(
        '交接時看得到背景、進度與文件，不再反覆追問同一件事。',
        'People can see context, progress and documents at handoff, with fewer repeated questions.',
      ),
    },
    {
      id: 'information-protection',
      name: t('資訊保護', 'Information protection'),
      eyebrow: t('保存與授權', 'Preservation & permissions'),
      ids: ['files', 'shield'],
      title: t('資訊保存得住，也分享得恰當。', 'Preserve information. Share it deliberately.'),
      desc: t(
        '企業需要的不只是把檔案放好，也要知道誰能取得、分享多久，以及出錯後如何回復。讓保存策略與存取條件一起被規劃。',
        'Businesses need more than organized files: who can access them, for how long, and how to recover. Plan preservation and access conditions together.',
      ),
      roles: [
        t('Files 提供版本、備份與還原。', 'Files provides versioning, backup and recovery.'),
        t(
          'Shield 管理身分、授權條件與稽核。',
          'Shield manages identity, access conditions and audit.',
        ),
      ],
      steps: [
        t('依重要性分類企業資料', 'Classify business information'),
        t('定義分享與保存規則', 'Define sharing and retention rules'),
        t('演練還原並定期檢視存取', 'Practice recovery and review access'),
      ],
      outcome: t(
        '分享對象、資訊版本與復原方式都有依據，降低日常處理的不確定性。',
        'Recipients, information versions and recovery paths become clear and reviewable.',
      ),
    },
    {
      id: 'secure-office',
      name: t('安心辦公', 'Secure office'),
      eyebrow: t('工作與信任', 'Work & trust'),
      ids: ['space', 'shield'],
      title: t(
        '工作方式更靈活，存取原則更清楚。',
        'Flexible ways to work. Clear conditions for access.',
      ),
      desc: t(
        '跨地點協作不應讓帳號與權限失去管理。把工作角色與身分、裝置條件連結，讓團隊在適當範圍內順利合作。',
        'Working across locations should not mean losing track of accounts and permissions. Connect working roles with identity and device conditions for deliberate collaboration.',
      ),
      roles: [
        t('Space 維持團隊工作脈絡。', 'Space keeps team context connected.'),
        t(
          'Shield 管理加入、異動與離開時的存取條件。',
          'Shield manages access as people join, change roles and leave.',
        ),
      ],
      steps: [
        t('整理角色與協作需求', 'Map roles and collaboration needs'),
        t('建立工作空間及驗證原則', 'Set up workspaces and verification'),
        t('驗證到離職與例外流程', 'Validate onboarding and exceptions'),
      ],
      outcome: t(
        '團隊持續協作，同時能清楚說明每個角色擁有哪些存取範圍。',
        'Teams keep collaborating while access boundaries remain clear for each role.',
      ),
    },
    {
      id: 'digital-workplace',
      name: t('完整數位工作環境', 'Complete digital workplace'),
      eyebrow: t('從局部到整體', 'From a first step to a connected whole'),
      ids: ['space', 'files', 'shield'],
      title: t(
        '從一個需要開始，長成完整的工作環境。',
        'Start with a need. Grow into a connected workplace.',
      ),
      desc: t(
        '先解決最迫切的問題，再逐步連結工作、資訊與信任。每套產品都能獨立發揮價值，組合順序依企業現況安排。',
        'Solve the immediate problem, then connect work, information and trust over time. Each product delivers independent value, with an adoption order that fits your business.',
      ),
      roles: [
        t('Space 組織日常工作。', 'Space organizes everyday work.'),
        t('Files 保存與流通企業資訊。', 'Files preserves and distributes information.'),
        t('Shield 管理信任與存取邊界。', 'Shield defines trust and access boundaries.'),
      ],
      steps: [
        t('找出最需要改善的工作場景', 'Find the most important working need'),
        t('導入一套產品並確認使用方式', 'Introduce one product and validate usage'),
        t('按成熟度連結其他產品', 'Connect other products when ready'),
      ],
      outcome: t(
        '企業能依自己的步調建立一致的工作環境，而不必一次更換所有系統。',
        'Build a coherent workplace at your own pace without replacing every system at once.',
      ),
    },
  ];
  const stages = [
    {
      title: t('導入你的環境', 'Introduce it to your environment'),
      desc: t(
        '先理解現況，再安排合適的第一步。',
        'Understand the environment before planning the first step.',
      ),
      items: [
        t('部署與初始設定', 'Deployment and initial setup'),
        t('帳號與組織架構', 'Accounts and organization'),
        t('資料遷移與驗證', 'Data migration and validation'),
        t('存取與安全設定', 'Access and security configuration'),
      ],
      deliver: t(
        '可確認的導入範圍、移轉計畫與驗收項目。',
        'An agreed scope, migration plan and acceptance criteria.',
      ),
    },
    {
      title: t('配合你的工作方式', 'Adapt it to the way you work'),
      desc: t(
        '把功能變成團隊用得上的流程。',
        'Turn capabilities into practices your team can use.',
      ),
      items: [
        t('工作流程與自動化', 'Workflows and automation'),
        t('既有系統整合', 'Existing system integration'),
        t('必要的客製調整', 'Targeted customization'),
        t('使用者與管理員訓練', 'User and administrator training'),
      ],
      deliver: t(
        '可操作的設定、使用指引與團隊交接。',
        'Working configuration, usage guidance and team handoff.',
      ),
    },
    {
      title: t('持續陪企業運作', 'Keep working alongside your business'),
      desc: t(
        '讓變更、問題與日常維運有人接續。',
        'Keep changes, questions and maintenance moving.',
      ),
      items: [
        t('技術支援與問題排查', 'Technical support and troubleshooting'),
        t('設定調整', 'Configuration changes'),
        t('維護與更新規劃', 'Maintenance and update planning'),
        t('持續優化', 'Ongoing improvement'),
      ],
      deliver: t(
        '清楚的支援範圍、問題處理與改善建議。',
        'Defined support scope, issue handling and improvement guidance.',
      ),
    },
  ];
  const articles = [
    {
      id: 'work-handoffs',
      tag: t('工作方式', 'Ways of working'),
      title: t('好的交接，從保留脈絡開始', 'Better handoffs start with context'),
      intro: t(
        '任務完成不代表交接完成。下一位接手的人，需要知道的不只是「做什麼」，還有「為什麼」。',
        'A finished task is not always a finished handoff. The next person needs to know not only what to do, but why.',
      ),
      sections: [
        [
          t('把決策放回工作裡', 'Keep decisions with the work'),
          t(
            '在任務或專案中記錄目標、限制與已做出的選擇。讓同事能看見判斷的背景，不必重新翻找對話或再開一次會議。',
            'Record goals, constraints and decisions in the task or project. Help colleagues see the reasoning without searching through messages or arranging another meeting.',
          ),
        ],
        [
          t('明確下一步的負責人', 'Name the next owner'),
          t(
            '交接內容應包含目前狀態、下一個動作、負責人與所需文件。若仍有待確認事項，也應列出由誰確認。',
            'Include the current state, next action, owner and supporting documents. If something is unresolved, name who will clarify it.',
          ),
        ],
        [
          t('用一次真實交接驗證', 'Validate with a real handoff'),
          t(
            '挑選一項例行工作，請接手者只依紀錄完成下一步。把仍需要口頭補充的資訊寫回流程，逐次改善。',
            'Choose a recurring task and ask the next owner to proceed using the recorded context. Add any missing verbal explanations back into the process.',
          ),
        ],
      ],
      related: 'space',
    },
    {
      id: 'information-lifecycle',
      tag: t('資訊管理', 'Information management'),
      title: t(
        '版本、備份與還原，各自解決什麼？',
        'Versions, backups and restore: what is each for?',
      ),
      intro: t(
        '保存資訊不只是一份副本。先理解不同機制的用途，才能規劃適合企業的保存方式。',
        'Preservation takes more than a copy. Understand what each mechanism does before choosing an approach for your business.',
      ),
      sections: [
        [
          t('版本：看見內容如何改變', 'Versions: understand change'),
          t(
            '版本紀錄協助比較不同時間的內容，處理誤改或協作差異。它著重單一文件的變更脈絡，不應被當成所有復原需求的替代方案。',
            'Version history helps compare content over time and address editing mistakes. It captures change in a document, but should not replace every other recovery mechanism.',
          ),
        ],
        [
          t('備份：規劃另一條復原路徑', 'Backup: plan a recovery path'),
          t(
            '備份規劃需要考慮資料範圍、保存時間與副本位置。先確認哪些資訊影響業務，再決定保存頻率與管理責任。',
            'Backup planning considers scope, retention and copy location. Identify the information that matters to operations before deciding frequency and ownership.',
          ),
        ],
        [
          t('還原：驗證能否回到可用狀態', 'Restore: verify usability'),
          t(
            '安排實際的還原檢查，確認內容是否完整、誰能執行，以及回復後如何銜接工作。能保存與能恢復，是需要分別驗證的事。',
            'Practice restoration to check completeness, ownership and how work resumes. Preservation and successful recovery need separate validation.',
          ),
        ],
      ],
      related: 'files',
    },
    {
      id: 'access-review',
      tag: t('信任與存取', 'Trust & access'),
      title: t('從角色出發，整理企業存取權限', 'Start with roles to review access'),
      intro: t(
        '人員與工作會改變，權限也應跟著被檢視。先建立可理解的角色，再整理例外。',
        'As people and work change, access needs review too. Begin with understandable roles, then examine exceptions.',
      ),
      sections: [
        [
          t('先問工作需要什麼', 'Begin with working needs'),
          t(
            '依角色列出必要的系統與資訊範圍。不要只沿用前一位同事的全部權限；以實際工作需求作為討論起點。',
            'List the systems and information each role needs. Rather than copying every permission from a predecessor, begin with the work itself.',
          ),
        ],
        [
          t('讓臨時授權有結束點', 'Give temporary access an endpoint'),
          t(
            '記錄例外權限的原因、負責人與檢視時間。專案結束或人員異動時，能找到需要重新確認的項目。',
            'Record the reason, owner and review date for exceptions. Make permissions easy to revisit when a project ends or responsibilities change.',
          ),
        ],
        [
          t('把檢視納入例行工作', 'Make review a regular practice'),
          t(
            '將到職、轉調、離職與定期檢視整理成流程，留下確認紀錄。規則需要有人維護，才能持續反映企業現況。',
            'Create a process for joining, role changes, leaving and scheduled reviews, with recorded decisions. Policies need owners to keep them aligned with the business.',
          ),
        ],
      ],
      related: 'shield',
    },
  ];
  return { t, products, solutions, stages, articles };
}

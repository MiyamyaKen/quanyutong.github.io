// 多语言翻译数据
const translations = {
    'zh-CN': {
        // 导航栏
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.resume': '个人简历',
        'nav.skills': '专业技能',
        'nav.hobbies': '兴趣爱好',
        'nav.journey': '人生经历',
        'nav.contact': '联系方式',
        
        // 首页
        'hero.greeting': '你好,我是',
        'hero.subtitle': '软件工程师 | 生活探索者 | 持续学习者',
        'hero.viewResume': '查看简历',
        'hero.contactMe': '联系我',
        
        // 关于我
        'about.title': '关于我',
        'about.intro1': '我是一名充满热情的软件工程师,目前在IBM工作。我热爱编程,享受解决复杂问题的过程,并致力于通过技术创造价值。',
        'about.intro2': '我相信持续学习和成长的重要性,不断探索新技术,提升自己的专业能力。在工作之余,我喜欢阅读、旅行和摄影,这些爱好让我的生活更加丰富多彩。',
        'about.years': '工作年限',
        'about.projects': '完成项目',
        'about.certifications': '技术认证',
        
        // 简历
        'resume.title': '个人简历',
        'resume.education': '教育背景',
        'resume.degree': '研究生学位',
        'resume.period': '2022 - 2024',
        'resume.major': '微观经济学专业',
        'resume.courses': '主修课程:微观经济理论、计量经济学、博弈论、产业组织理论',
        'resume.experience': '工作经历',
        'resume.ibm': 'IBM - 软件工程师',
        'resume.ibmPeriod': '2024年4月 - 至今',
        'resume.ibmDesc1': '参与企业级应用开发,使用Java和Spring Boot框架',
        'resume.ibmDesc2': '负责数据库设计和优化,提升系统性能',
        'resume.ibmDesc3': '参与敏捷开发流程,与团队协作完成项目交付',
        'resume.ibmDesc4': '编写技术文档,进行代码审查',
        'resume.achievements': '证书与成就',
        
        // 技能
        'skills.title': '专业技能',
        'skills.programming': '编程语言',
        'skills.frameworks': '框架与工具',
        'skills.softSkills': '软技能',
        'skills.teamwork': '团队协作',
        'skills.problemSolving': '问题解决',
        'skills.quickLearning': '快速学习',
        'skills.communication': '沟通能力',
        'skills.timeManagement': '时间管理',
        'skills.agile': '敏捷开发',
        'skills.documentation': '文档编写',
        'skills.codeReview': '代码审查',
        
        // 兴趣爱好
        'hobbies.title': '兴趣爱好',
        'hobbies.reading': '读书',
        'hobbies.readingDesc': '喜欢阅读各类书籍,通过阅读拓展视野,提升思维能力。',
        'hobbies.music': '听音乐',
        'hobbies.musicDesc': '喜欢听各种类型的音乐,音乐是我放松和获得灵感的源泉。',
        'hobbies.movies': '看电影',
        'hobbies.moviesDesc': '享受电影带来的视觉盛宴和情感体验,探索不同的故事世界。',
        'hobbies.pilates': '做普拉提',
        'hobbies.pilatesDesc': '通过普拉提锻炼身体,提升核心力量,保持健康和活力。',
        'hobbies.travel': '旅游',
        'hobbies.travelDesc': '热爱探索不同的城市和文化,体验多样的生活方式,开阔眼界。',
        'hobbies.food': '吃美食',
        'hobbies.foodDesc': '热爱品尝各地美食,享受美食带来的幸福感和满足感。',
        
        // 人生经历
        'journey.title': '人生经历',
        'journey.lanzhou': '兰州时光',
        'journey.lanzhouDesc': '在中国兰州成长,度过了充实的学生时代,为未来的学习和发展奠定了基础。',
        'journey.dalian': '大连外国语大学',
        'journey.dalianDesc': '开始学习日语,两年的语言学习为赴日留学做好了充分准备。',
        'journey.japan': '赴日留学',
        'journey.japanDesc': '前往日本城西大学交换留学,在现代政策学部学习经济学、法律、社会福祉等学科,开启了国际化的学习之旅。',
        'journey.bachelor': '本科毕业',
        'journey.bachelorDesc': '顺利完成本科学业,决定继续深造,追求更高的学术目标。',
        'journey.waseda': '早稻田大学',
        'journey.wasedaDesc': '进入早稻田大学社会科学研究科,专注于微观经济学的研究,提升学术能力和专业素养。',
        'journey.ibmJoin': '加入IBM',
        'journey.ibmJoinDesc': '研究生毕业后加入IBM,开始从事Web Application开发工作,将理论知识应用于实践。',
        'journey.career': '职业发展',
        'journey.careerDesc': '在IBM工作的第三年,持续提升技术能力,参与更多项目,为团队和公司创造价值。',
        
        // 联系方式
        'contact.title': '联系方式',
        'contact.email': '邮箱',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.instagram': 'Instagram',
        'contact.sendMessage': '发送消息',
        'contact.yourName': '您的姓名',
        'contact.yourEmail': '您的邮箱',
        'contact.yourMessage': '您的消息',
        'contact.send': '发送消息',
        
        // 页脚
        'footer.rights': '保留所有权利.',
        'footer.madeWith': '用 ❤️ 和 ☕ 制作',
        
        // 通知消息
        'notification.fillAll': '请填写所有字段',
        'notification.validEmail': '请输入有效的邮箱地址',
        'notification.success': '消息发送成功!我会尽快回复您。',
        'notification.easterEgg': '🎉 恭喜你发现了彩蛋!'
    },
    
    'ja': {
        // ナビゲーション
        'nav.home': 'ホーム',
        'nav.about': '私について',
        'nav.resume': '履歴書',
        'nav.skills': 'スキル',
        'nav.hobbies': '趣味',
        'nav.journey': '人生の歩み',
        'nav.contact': '連絡先',
        
        // ホーム
        'hero.greeting': 'こんにちは、私は',
        'hero.subtitle': 'ソフトウェアエンジニア | ライフエクスプローラー | 継続学習者',
        'hero.viewResume': '履歴書を見る',
        'hero.contactMe': 'お問い合わせ',
        
        // 私について
        'about.title': '私について',
        'about.intro1': '私は情熱的なソフトウェアエンジニアで、現在IBMで働いています。プログラミングが大好きで、複雑な問題を解決するプロセスを楽しみ、技術を通じて価値を創造することに専念しています。',
        'about.intro2': '継続的な学習と成長の重要性を信じており、常に新しい技術を探求し、専門能力を向上させています。仕事以外では、読書、旅行、写真撮影が好きで、これらの趣味が私の人生をより豊かにしています。',
        'about.years': '勤務年数',
        'about.projects': '完了プロジェクト',
        'about.certifications': '技術認定',
        
        // 履歴書
        'resume.title': '履歴書',
        'resume.education': '学歴',
        'resume.degree': '修士号',
        'resume.period': '2022年 - 2024年',
        'resume.major': 'ミクロ経済学専攻',
        'resume.courses': '主要科目:ミクロ経済理論、計量経済学、ゲーム理論、産業組織論',
        'resume.experience': '職歴',
        'resume.ibm': 'IBM - ソフトウェアエンジニア',
        'resume.ibmPeriod': '2024年4月 - 現在',
        'resume.ibmDesc1': 'JavaとSpring Bootフレームワークを使用したエンタープライズアプリケーション開発に参加',
        'resume.ibmDesc2': 'データベース設計と最適化を担当し、システムパフォーマンスを向上',
        'resume.ibmDesc3': 'アジャイル開発プロセスに参加し、チームと協力してプロジェクトを納品',
        'resume.ibmDesc4': '技術文書の作成とコードレビューを実施',
        'resume.achievements': '資格と実績',
        
        // スキル
        'skills.title': 'スキル',
        'skills.programming': 'プログラミング言語',
        'skills.frameworks': 'フレームワークとツール',
        'skills.softSkills': 'ソフトスキル',
        'skills.teamwork': 'チームワーク',
        'skills.problemSolving': '問題解決',
        'skills.quickLearning': '速習',
        'skills.communication': 'コミュニケーション',
        'skills.timeManagement': '時間管理',
        'skills.agile': 'アジャイル開発',
        'skills.documentation': 'ドキュメント作成',
        'skills.codeReview': 'コードレビュー',
        
        // 趣味
        'hobbies.title': '趣味',
        'hobbies.reading': '読書',
        'hobbies.readingDesc': '様々な本を読むのが好きで、読書を通じて視野を広げ、思考力を高めています。',
        'hobbies.music': '音楽鑑賞',
        'hobbies.musicDesc': '様々なジャンルの音楽を聴くのが好きで、音楽はリラックスとインスピレーションの源です。',
        'hobbies.movies': '映画鑑賞',
        'hobbies.moviesDesc': '映画がもたらす視覚的な饗宴と感情体験を楽しみ、異なる物語の世界を探索しています。',
        'hobbies.pilates': 'ピラティス',
        'hobbies.pilatesDesc': 'ピラティスで体を鍛え、コア筋力を向上させ、健康と活力を維持しています。',
        'hobbies.travel': '旅行',
        'hobbies.travelDesc': '異なる都市や文化を探索し、多様なライフスタイルを体験し、視野を広げることが大好きです。',
        'hobbies.food': 'グルメ',
        'hobbies.foodDesc': '各地の美食を味わい、食べ物がもたらす幸福感と満足感を楽しんでいます。',
        
        // 人生の歩み
        'journey.title': '人生の歩み',
        'journey.lanzhou': '蘭州での時間',
        'journey.lanzhouDesc': '中国の蘭州で成長し、充実した学生時代を過ごし、将来の学習と発展の基礎を築きました。',
        'journey.dalian': '大連外国語大学',
        'journey.dalianDesc': '日本語の学習を開始し、2年間の語学学習で日本留学の準備を整えました。',
        'journey.japan': '日本留学',
        'journey.japanDesc': '日本の城西大学に交換留学し、現代政策学部で経済学、法律、社会福祉などを学び、国際的な学習の旅を始めました。',
        'journey.bachelor': '学士号取得',
        'journey.bachelorDesc': '学部課程を無事修了し、さらなる学術目標を追求するため進学を決意しました。',
        'journey.waseda': '早稲田大学',
        'journey.wasedaDesc': '早稲田大学社会科学研究科に進学し、ミクロ経済学の研究に専念し、学術能力と専門性を向上させました。',
        'journey.ibmJoin': 'IBM入社',
        'journey.ibmJoinDesc': '修士課程修了後IBMに入社し、Webアプリケーション開発業務を開始し、理論知識を実践に応用しています。',
        'journey.career': 'キャリア開発',
        'journey.careerDesc': 'IBMでの3年目、技術力を継続的に向上させ、より多くのプロジェクトに参加し、チームと会社に価値を創造しています。',
        
        // 連絡先
        'contact.title': '連絡先',
        'contact.email': 'メール',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.instagram': 'Instagram',
        'contact.sendMessage': 'メッセージを送る',
        'contact.yourName': 'お名前',
        'contact.yourEmail': 'メールアドレス',
        'contact.yourMessage': 'メッセージ',
        'contact.send': '送信',
        
        // フッター
        'footer.rights': '全著作権所有。',
        'footer.madeWith': '❤️ と ☕ で作成',
        
        // 通知メッセージ
        'notification.fillAll': 'すべてのフィールドを入力してください',
        'notification.validEmail': '有効なメールアドレスを入力してください',
        'notification.success': 'メッセージが正常に送信されました！できるだけ早く返信いたします。',
        'notification.easterEgg': '🎉 イースターエッグを発見しました！'
    },
    
    'en': {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.resume': 'Resume',
        'nav.skills': 'Skills',
        'nav.hobbies': 'Hobbies',
        'nav.journey': 'Journey',
        'nav.contact': 'Contact',
        
        // Hero
        'hero.greeting': 'Hello, I am',
        'hero.subtitle': 'Software Engineer | Life Explorer | Continuous Learner',
        'hero.viewResume': 'View Resume',
        'hero.contactMe': 'Contact Me',
        
        // About
        'about.title': 'About Me',
        'about.intro1': 'I am a passionate software engineer currently working at IBM. I love programming, enjoy solving complex problems, and am dedicated to creating value through technology.',
        'about.intro2': 'I believe in the importance of continuous learning and growth, constantly exploring new technologies and improving my professional skills. Outside of work, I enjoy reading, traveling, and photography, which enrich my life.',
        'about.years': 'Years of Experience',
        'about.projects': 'Projects Completed',
        'about.certifications': 'Certifications',
        
        // Resume
        'resume.title': 'Resume',
        'resume.education': 'Education',
        'resume.degree': 'Master\'s Degree',
        'resume.period': '2022 - 2024',
        'resume.major': 'Microeconomics',
        'resume.courses': 'Main Courses: Microeconomic Theory, Econometrics, Game Theory, Industrial Organization',
        'resume.experience': 'Work Experience',
        'resume.ibm': 'IBM - Software Engineer',
        'resume.ibmPeriod': 'April 2024 - Present',
        'resume.ibmDesc1': 'Participated in enterprise application development using Java and Spring Boot framework',
        'resume.ibmDesc2': 'Responsible for database design and optimization to improve system performance',
        'resume.ibmDesc3': 'Participated in agile development process and collaborated with team to deliver projects',
        'resume.ibmDesc4': 'Wrote technical documentation and conducted code reviews',
        'resume.achievements': 'Certifications & Achievements',
        
        // Skills
        'skills.title': 'Skills',
        'skills.programming': 'Programming Languages',
        'skills.frameworks': 'Frameworks & Tools',
        'skills.softSkills': 'Soft Skills',
        'skills.teamwork': 'Teamwork',
        'skills.problemSolving': 'Problem Solving',
        'skills.quickLearning': 'Quick Learning',
        'skills.communication': 'Communication',
        'skills.timeManagement': 'Time Management',
        'skills.agile': 'Agile Development',
        'skills.documentation': 'Documentation',
        'skills.codeReview': 'Code Review',
        
        // Hobbies
        'hobbies.title': 'Hobbies',
        'hobbies.reading': 'Reading',
        'hobbies.readingDesc': 'I enjoy reading various books to expand my horizons and enhance my thinking abilities.',
        'hobbies.music': 'Music',
        'hobbies.musicDesc': 'I love listening to various types of music, which is my source of relaxation and inspiration.',
        'hobbies.movies': 'Movies',
        'hobbies.moviesDesc': 'I enjoy the visual feast and emotional experience that movies bring, exploring different story worlds.',
        'hobbies.pilates': 'Pilates',
        'hobbies.pilatesDesc': 'I exercise through Pilates to improve core strength and maintain health and vitality.',
        'hobbies.travel': 'Travel',
        'hobbies.travelDesc': 'I love exploring different cities and cultures, experiencing diverse lifestyles, and broadening my horizons.',
        'hobbies.food': 'Food',
        'hobbies.foodDesc': 'I love tasting local cuisines and enjoying the happiness and satisfaction that food brings.',
        
        // Journey
        'journey.title': 'My Journey',
        'journey.lanzhou': 'Lanzhou Years',
        'journey.lanzhouDesc': 'Grew up in Lanzhou, China, spent a fulfilling student life, laying the foundation for future learning and development.',
        'journey.dalian': 'Dalian University of Foreign Languages',
        'journey.dalianDesc': 'Started learning Japanese, two years of language study prepared me well for studying in Japan.',
        'journey.japan': 'Study in Japan',
        'journey.japanDesc': 'Went to Josai University in Japan as an exchange student, studying economics, law, and social welfare in the Faculty of Modern Policy Studies, beginning an international learning journey.',
        'journey.bachelor': 'Bachelor\'s Graduation',
        'journey.bachelorDesc': 'Successfully completed undergraduate studies and decided to pursue further education for higher academic goals.',
        'journey.waseda': 'Waseda University',
        'journey.wasedaDesc': 'Entered the Graduate School of Social Sciences at Waseda University, focusing on microeconomics research, improving academic ability and professional quality.',
        'journey.ibmJoin': 'Joined IBM',
        'journey.ibmJoinDesc': 'After graduating from graduate school, joined IBM and started working on Web Application development, applying theoretical knowledge to practice.',
        'journey.career': 'Career Development',
        'journey.careerDesc': 'In my third year at IBM, continuously improving technical skills, participating in more projects, and creating value for the team and company.',
        
        // Contact
        'contact.title': 'Contact',
        'contact.email': 'Email',
        'contact.linkedin': 'LinkedIn',
        'contact.github': 'GitHub',
        'contact.instagram': 'Instagram',
        'contact.sendMessage': 'Send Message',
        'contact.yourName': 'Your Name',
        'contact.yourEmail': 'Your Email',
        'contact.yourMessage': 'Your Message',
        'contact.send': 'Send Message',
        
        // Footer
        'footer.rights': 'All rights reserved.',
        'footer.madeWith': 'Made with ❤️ and ☕',
        
        // Notifications
        'notification.fillAll': 'Please fill in all fields',
        'notification.validEmail': 'Please enter a valid email address',
        'notification.success': 'Message sent successfully! I will reply to you as soon as possible.',
        'notification.easterEgg': '🎉 Congratulations on finding the easter egg!'
    }
};

// Made with Bob

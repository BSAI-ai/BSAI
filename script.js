const supportedLanguages = ["en", "ja", "ne", "hi", "de", "fr", "es", "zh"];
const defaultLanguage = "en";
const savedLanguageKey = "bsai-language";

const translations = {
  en: {
    "meta.title": "BSAI | Modern AI Tools",
    "nav.aria": "Primary navigation",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "nav.tools": "Tools",
    "nav.workflow": "Workflow",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.language": "Language",
    "nav.selectLanguage": "Select language",
    "nav.getStarted": "Get Started",
    "hero.eyebrow": "AI productivity suite",
    "hero.title": "BSAI helps you write, apply, summarize, and communicate faster.",
    "hero.copy": "A clean collection of everyday AI tools for students, job seekers, professionals, and growing teams.",
    "hero.primaryCta": "Explore Tools",
    "hero.secondaryCta": "See How It Works",
    "hero.statsAria": "BSAI highlights",
    "hero.statTools": "core AI tools",
    "hero.statSupport": "writing support",
    "hero.statFast": "Fast",
    "hero.statWorkflow": "mobile workflow",
    "hero.chatPreviewAria": "AI chat preview",
    "chatPreview.user": "Draft a professional follow-up email after an interview.",
    "chatPreview.ai": "Absolutely. Here is a polished version with a warm tone, clear gratitude, and a confident closing.",
    "chatPreview.placeholder": "Ask BSAI anything...",
    "chatPreview.send": "Send",
    "chatPreview.sendAria": "Send preview message",
    "tools.eyebrow": "Featured tools",
    "tools.title": "Everything you need to move from idea to finished text.",
    "tools.chat.title": "AI Chat",
    "tools.chat.body": "Ask questions, brainstorm ideas, rewrite drafts, and get practical answers in seconds.",
    "tools.resume.title": "Resume Builder",
    "tools.resume.body": "Create clear, job-ready resumes with strong bullet points and professional formatting.",
    "tools.cover.title": "Cover Letter Generator",
    "tools.cover.body": "Generate tailored cover letters that connect your experience to the role.",
    "tools.email.title": "Email Writer",
    "tools.email.body": "Write polished emails for work, sales, support, applications, and everyday communication.",
    "tools.summary.title": "Text Summarizer",
    "tools.summary.body": "Turn long articles, notes, documents, and reports into concise summaries.",
    "workflow.eyebrow": "Simple workflow",
    "workflow.title": "Choose a tool, add context, and refine the result.",
    "workflow.copy": "BSAI is designed for focused work. Each tool keeps the interface direct, responsive, and easy to use on desktop or mobile.",
    "workflow.tabsAria": "Tool examples",
    "demo.chat.tab": "Chat",
    "demo.resume.tab": "Resume",
    "demo.summary.tab": "Summary",
    "demo.chat.title": "AI Chat",
    "demo.chat.body": "Ask BSAI to plan, explain, rewrite, or generate content with a clear and professional tone.",
    "demo.chat.output": "\"Give me three strong LinkedIn headline options for a junior web developer.\"",
    "demo.resume.title": "Resume Builder",
    "demo.resume.body": "Turn experience, skills, and job goals into a clean resume draft with sharper bullet points.",
    "demo.resume.output": "\"Create a resume summary for a customer support specialist moving into operations.\"",
    "demo.summary.title": "Text Summarizer",
    "demo.summary.body": "Paste long text and get the main points, action items, and short summaries for quick review.",
    "demo.summary.output": "\"Summarize this project brief into five bullets and one decision list.\"",
    "pricing.eyebrow": "Start focused",
    "pricing.title": "Launch with the homepage now. Add each tool page next.",
    "pricing.cta": "Request Access",
    "footer.copy": "Modern AI tools for everyday productivity."
  },
  ja: {
    "meta.title": "BSAI | モダンAIツール",
    "nav.aria": "メインナビゲーション",
    "nav.openMenu": "メニューを開く",
    "nav.closeMenu": "メニューを閉じる",
    "nav.tools": "ツール",
    "nav.workflow": "ワークフロー",
    "nav.pricing": "料金",
    "nav.contact": "お問い合わせ",
    "nav.language": "言語",
    "nav.selectLanguage": "言語を選択",
    "nav.getStarted": "はじめる",
    "hero.eyebrow": "AI生産性スイート",
    "hero.title": "BSAIで、書く・応募する・要約する・伝えるをもっと速く。",
    "hero.copy": "学生、求職者、プロフェッショナル、成長中のチームのための日常AIツール集です。",
    "hero.primaryCta": "ツールを見る",
    "hero.secondaryCta": "使い方を見る",
    "hero.statsAria": "BSAIの特徴",
    "hero.statTools": "主要AIツール",
    "hero.statSupport": "ライティング支援",
    "hero.statFast": "高速",
    "hero.statWorkflow": "モバイルワークフロー",
    "hero.chatPreviewAria": "AIチャットのプレビュー",
    "chatPreview.user": "面接後の丁寧なフォローアップメールを作成して。",
    "chatPreview.ai": "もちろんです。温かみ、感謝、前向きな締めくくりを含めた文章を用意します。",
    "chatPreview.placeholder": "BSAIに何でも質問...",
    "chatPreview.send": "送信",
    "chatPreview.sendAria": "プレビューメッセージを送信",
    "tools.eyebrow": "注目ツール",
    "tools.title": "アイデアから完成した文章まで、必要なものをひとつに。",
    "tools.chat.title": "AIチャット",
    "tools.chat.body": "質問、アイデア出し、書き換え、実用的な回答をすばやく得られます。",
    "tools.resume.title": "履歴書ビルダー",
    "tools.resume.body": "力強い箇条書きとプロらしい構成で、応募に使える履歴書を作成します。",
    "tools.cover.title": "カバーレター生成",
    "tools.cover.body": "経験と職務内容を結びつけた、応募先に合わせたカバーレターを作成します。",
    "tools.email.title": "メール作成",
    "tools.email.body": "仕事、営業、サポート、応募、日常連絡に使える洗練されたメールを書けます。",
    "tools.summary.title": "文章要約",
    "tools.summary.body": "長い記事、メモ、資料、レポートを簡潔な要約に変換します。",
    "workflow.eyebrow": "シンプルな流れ",
    "workflow.title": "ツールを選び、文脈を加え、結果を整える。",
    "workflow.copy": "BSAIは集中して作業できるよう設計されています。各ツールはデスクトップでもモバイルでも使いやすく、直感的です。",
    "workflow.tabsAria": "ツール例",
    "demo.chat.tab": "チャット",
    "demo.resume.tab": "履歴書",
    "demo.summary.tab": "要約",
    "demo.chat.title": "AIチャット",
    "demo.chat.body": "BSAIに計画、説明、書き換え、文章作成を依頼できます。",
    "demo.chat.output": "「ジュニアWeb開発者向けのLinkedIn見出しを3つ提案して。」",
    "demo.resume.title": "履歴書ビルダー",
    "demo.resume.body": "経験、スキル、目標から、より伝わる履歴書の下書きを作成します。",
    "demo.resume.output": "「オペレーション職を目指すカスタマーサポート担当者の職務要約を作って。」",
    "demo.summary.title": "文章要約",
    "demo.summary.body": "長文を貼り付けると、要点、対応事項、短いまとめを確認できます。",
    "demo.summary.output": "「このプロジェクト概要を5つの箇条書きと決定事項リストに要約して。」",
    "pricing.eyebrow": "まずは集中",
    "pricing.title": "まずホームページを公開し、次に各ツールページを追加しましょう。",
    "pricing.cta": "アクセスを依頼",
    "footer.copy": "日常の生産性を高めるモダンAIツール。"
  },
  ne: {
    "meta.title": "BSAI | आधुनिक AI उपकरणहरू",
    "nav.aria": "मुख्य नेभिगेसन",
    "nav.openMenu": "मेनु खोल्नुहोस्",
    "nav.closeMenu": "मेनु बन्द गर्नुहोस्",
    "nav.tools": "उपकरणहरू",
    "nav.workflow": "कार्यप्रवाह",
    "nav.pricing": "मूल्य",
    "nav.contact": "सम्पर्क",
    "nav.language": "भाषा",
    "nav.selectLanguage": "भाषा छान्नुहोस्",
    "nav.getStarted": "सुरु गर्नुहोस्",
    "hero.eyebrow": "AI उत्पादकता सुइट",
    "hero.title": "BSAI ले लेख्न, आवेदन दिन, सारांश बनाउन र संवाद गर्न छिटो बनाउँछ।",
    "hero.copy": "विद्यार्थी, रोजगार खोज्ने, पेशेवर र बढ्दो टोलीका लागि दैनिक AI उपकरणहरूको सफा संग्रह।",
    "hero.primaryCta": "उपकरणहरू हेर्नुहोस्",
    "hero.secondaryCta": "कसरी काम गर्छ हेर्नुहोस्",
    "hero.statsAria": "BSAI का विशेषताहरू",
    "hero.statTools": "मुख्य AI उपकरणहरू",
    "hero.statSupport": "लेखन सहयोग",
    "hero.statFast": "छिटो",
    "hero.statWorkflow": "मोबाइल कार्यप्रवाह",
    "hero.chatPreviewAria": "AI च्याट पूर्वावलोकन",
    "chatPreview.user": "अन्तर्वार्तापछि पठाउने पेशेवर फलो-अप इमेल तयार गर्नुहोस्।",
    "chatPreview.ai": "पक्कै। न्यानो शैली, स्पष्ट धन्यवाद र आत्मविश्वासी अन्त्यसहित polished संस्करण यहाँ छ।",
    "chatPreview.placeholder": "BSAI लाई जे पनि सोध्नुहोस्...",
    "chatPreview.send": "पठाउनुहोस्",
    "chatPreview.sendAria": "पूर्वावलोकन सन्देश पठाउनुहोस्",
    "tools.eyebrow": "विशेष उपकरणहरू",
    "tools.title": "विचारदेखि तयार पाठसम्म चाहिने सबै कुरा।",
    "tools.chat.title": "AI च्याट",
    "tools.chat.body": "प्रश्न सोध्नुहोस्, विचार निकाल्नुहोस्, ड्राफ्ट फेरि लेख्नुहोस् र छिटो उपयोगी उत्तर पाउनुहोस्।",
    "tools.resume.title": "रिजुमे बिल्डर",
    "tools.resume.body": "बलिया बुलेट पोइन्ट र पेशेवर ढाँचासहित कामका लागि तयार रिजुमे बनाउनुहोस्।",
    "tools.cover.title": "कभर लेटर जेनेरेटर",
    "tools.cover.body": "तपाईंको अनुभवलाई भूमिकासँग जोड्ने अनुकूल कभर लेटर बनाउनुहोस्।",
    "tools.email.title": "इमेल राइटर",
    "tools.email.body": "काम, बिक्री, सपोर्ट, आवेदन र दैनिक संवादका लागि polished इमेल लेख्नुहोस्।",
    "tools.summary.title": "टेक्स्ट समराइजर",
    "tools.summary.body": "लामो लेख, नोट, कागजात र रिपोर्टलाई छोटो सारांशमा बदल्नुहोस्।",
    "workflow.eyebrow": "सरल कार्यप्रवाह",
    "workflow.title": "उपकरण छान्नुहोस्, सन्दर्भ थप्नुहोस् र नतिजा सुधार्नुहोस्।",
    "workflow.copy": "BSAI केन्द्रित कामका लागि डिजाइन गरिएको छ। प्रत्येक उपकरण डेस्कटप वा मोबाइलमा प्रत्यक्ष, responsive र सजिलो छ।",
    "workflow.tabsAria": "उपकरण उदाहरणहरू",
    "demo.chat.tab": "च्याट",
    "demo.resume.tab": "रिजुमे",
    "demo.summary.tab": "सारांश",
    "demo.chat.title": "AI च्याट",
    "demo.chat.body": "BSAI लाई योजना बनाउन, व्याख्या गर्न, फेरि लेख्न वा पेशेवर शैलीमा सामग्री बनाउन लगाउनुहोस्।",
    "demo.chat.output": "“जुनियर वेब डेभलपरका लागि तीन बलिया LinkedIn headline विकल्प देऊ।”",
    "demo.resume.title": "रिजुमे बिल्डर",
    "demo.resume.body": "अनुभव, सीप र लक्ष्यलाई सफा रिजुमे ड्राफ्टमा बदल्नुहोस्।",
    "demo.resume.output": "“अपरेसनतर्फ जान चाहने customer support specialist का लागि resume summary बनाऊ।”",
    "demo.summary.title": "टेक्स्ट समराइजर",
    "demo.summary.body": "लामो पाठ टाँस्नुहोस् र मुख्य बुँदा, action items र छोटो सारांश पाउनुहोस्।",
    "demo.summary.output": "“यो project brief लाई पाँच बुलेट र decision list मा सारांश बनाऊ।”",
    "pricing.eyebrow": "केन्द्रित रूपमा सुरु गर्नुहोस्",
    "pricing.title": "पहिले homepage सुरु गर्नुहोस्। त्यसपछि प्रत्येक tool page थप्नुहोस्।",
    "pricing.cta": "Access माग्नुहोस्",
    "footer.copy": "दैनिक उत्पादकताका लागि आधुनिक AI उपकरणहरू।"
  },
  hi: {
    "meta.title": "BSAI | आधुनिक AI टूल्स",
    "nav.aria": "मुख्य नेविगेशन",
    "nav.openMenu": "मेनू खोलें",
    "nav.closeMenu": "मेनू बंद करें",
    "nav.tools": "टूल्स",
    "nav.workflow": "वर्कफ्लो",
    "nav.pricing": "प्राइसिंग",
    "nav.contact": "संपर्क",
    "nav.language": "भाषा",
    "nav.selectLanguage": "भाषा चुनें",
    "nav.getStarted": "शुरू करें",
    "hero.eyebrow": "AI उत्पादकता सूट",
    "hero.title": "BSAI आपको लिखने, आवेदन करने, सारांश बनाने और संवाद करने में तेज बनाता है।",
    "hero.copy": "छात्रों, नौकरी खोजने वालों, पेशेवरों और बढ़ती टीमों के लिए रोजमर्रा के AI टूल्स का साफ संग्रह।",
    "hero.primaryCta": "टूल्स देखें",
    "hero.secondaryCta": "कैसे काम करता है",
    "hero.statsAria": "BSAI की खूबियां",
    "hero.statTools": "मुख्य AI टूल्स",
    "hero.statSupport": "लेखन सहायता",
    "hero.statFast": "तेज",
    "hero.statWorkflow": "मोबाइल वर्कफ्लो",
    "hero.chatPreviewAria": "AI चैट पूर्वावलोकन",
    "chatPreview.user": "इंटरव्यू के बाद एक पेशेवर follow-up email लिखें।",
    "chatPreview.ai": "बिल्कुल। यहां गर्मजोशी, स्पष्ट आभार और आत्मविश्वासी closing वाला polished version है।",
    "chatPreview.placeholder": "BSAI से कुछ भी पूछें...",
    "chatPreview.send": "भेजें",
    "chatPreview.sendAria": "पूर्वावलोकन संदेश भेजें",
    "tools.eyebrow": "फीचर्ड टूल्स",
    "tools.title": "आइडिया से तैयार टेक्स्ट तक, सब कुछ एक जगह।",
    "tools.chat.title": "AI चैट",
    "tools.chat.body": "प्रश्न पूछें, विचार बनाएं, ड्राफ्ट rewrite करें और सेकंडों में practical answers पाएं।",
    "tools.resume.title": "रिज्यूमे बिल्डर",
    "tools.resume.body": "मजबूत bullet points और professional formatting के साथ job-ready resumes बनाएं।",
    "tools.cover.title": "कवर लेटर जनरेटर",
    "tools.cover.body": "अपने अनुभव को role से जोड़ने वाले tailored cover letters बनाएं।",
    "tools.email.title": "ईमेल राइटर",
    "tools.email.body": "काम, sales, support, applications और daily communication के लिए polished emails लिखें।",
    "tools.summary.title": "टेक्स्ट समराइजर",
    "tools.summary.body": "लंबे articles, notes, documents और reports को concise summaries में बदलें।",
    "workflow.eyebrow": "सरल वर्कफ्लो",
    "workflow.title": "टूल चुनें, context जोड़ें, और result refine करें।",
    "workflow.copy": "BSAI focused work के लिए बनाया गया है। हर टूल desktop और mobile पर सीधा, responsive और आसान है।",
    "workflow.tabsAria": "टूल उदाहरण",
    "demo.chat.tab": "चैट",
    "demo.resume.tab": "रिज्यूमे",
    "demo.summary.tab": "सारांश",
    "demo.chat.title": "AI चैट",
    "demo.chat.body": "BSAI से plan, explain, rewrite या professional tone में content generate करवाएं।",
    "demo.chat.output": "“Junior web developer के लिए तीन strong LinkedIn headline options दें।”",
    "demo.resume.title": "रिज्यूमे बिल्डर",
    "demo.resume.body": "Experience, skills और job goals को साफ resume draft में बदलें।",
    "demo.resume.output": "“Operations में जाना चाहने वाले customer support specialist के लिए resume summary बनाएं।”",
    "demo.summary.title": "टेक्स्ट समराइजर",
    "demo.summary.body": "लंबा text paste करें और main points, action items और short summaries पाएं।",
    "demo.summary.output": "“इस project brief को five bullets और decision list में summarize करें।”",
    "pricing.eyebrow": "फोकस से शुरू करें",
    "pricing.title": "अभी homepage launch करें। आगे हर tool page जोड़ें।",
    "pricing.cta": "Access मांगें",
    "footer.copy": "रोजमर्रा की productivity के लिए आधुनिक AI tools।"
  },
  de: {
    "meta.title": "BSAI | Moderne KI-Tools",
    "nav.aria": "Hauptnavigation",
    "nav.openMenu": "Menü öffnen",
    "nav.closeMenu": "Menü schließen",
    "nav.tools": "Tools",
    "nav.workflow": "Workflow",
    "nav.pricing": "Preise",
    "nav.contact": "Kontakt",
    "nav.language": "Sprache",
    "nav.selectLanguage": "Sprache auswählen",
    "nav.getStarted": "Loslegen",
    "hero.eyebrow": "KI-Produktivitätssuite",
    "hero.title": "BSAI hilft dir, schneller zu schreiben, dich zu bewerben, zusammenzufassen und zu kommunizieren.",
    "hero.copy": "Eine klare Sammlung alltäglicher KI-Tools für Studierende, Jobsuchende, Profis und wachsende Teams.",
    "hero.primaryCta": "Tools ansehen",
    "hero.secondaryCta": "So funktioniert es",
    "hero.statsAria": "BSAI Highlights",
    "hero.statTools": "zentrale KI-Tools",
    "hero.statSupport": "Schreibunterstützung",
    "hero.statFast": "Schneller",
    "hero.statWorkflow": "mobiler Workflow",
    "hero.chatPreviewAria": "KI-Chat-Vorschau",
    "chatPreview.user": "Entwirf eine professionelle Follow-up-E-Mail nach einem Interview.",
    "chatPreview.ai": "Natürlich. Hier ist eine geschliffene Version mit warmem Ton, klarer Dankbarkeit und sicherem Abschluss.",
    "chatPreview.placeholder": "Frag BSAI alles...",
    "chatPreview.send": "Senden",
    "chatPreview.sendAria": "Vorschaunachricht senden",
    "tools.eyebrow": "Ausgewählte Tools",
    "tools.title": "Alles, was du brauchst, um aus Ideen fertige Texte zu machen.",
    "tools.chat.title": "KI-Chat",
    "tools.chat.body": "Stelle Fragen, sammle Ideen, formuliere Entwürfe um und erhalte praktische Antworten in Sekunden.",
    "tools.resume.title": "Lebenslauf-Builder",
    "tools.resume.body": "Erstelle klare, bewerbungsbereite Lebensläufe mit starken Stichpunkten und professionellem Format.",
    "tools.cover.title": "Anschreiben-Generator",
    "tools.cover.body": "Erzeuge passende Anschreiben, die deine Erfahrung mit der Stelle verbinden.",
    "tools.email.title": "E-Mail-Writer",
    "tools.email.body": "Schreibe professionelle E-Mails für Arbeit, Vertrieb, Support, Bewerbungen und Alltag.",
    "tools.summary.title": "Text-Zusammenfasser",
    "tools.summary.body": "Verwandle lange Artikel, Notizen, Dokumente und Berichte in kurze Zusammenfassungen.",
    "workflow.eyebrow": "Einfacher Workflow",
    "workflow.title": "Tool wählen, Kontext hinzufügen und Ergebnis verfeinern.",
    "workflow.copy": "BSAI ist für fokussiertes Arbeiten gedacht. Jedes Tool bleibt direkt, responsiv und auf Desktop wie Mobilgerät einfach nutzbar.",
    "workflow.tabsAria": "Tool-Beispiele",
    "demo.chat.tab": "Chat",
    "demo.resume.tab": "Lebenslauf",
    "demo.summary.tab": "Zusammenfassung",
    "demo.chat.title": "KI-Chat",
    "demo.chat.body": "Bitte BSAI, Inhalte zu planen, zu erklären, umzuschreiben oder in professionellem Ton zu erstellen.",
    "demo.chat.output": "„Gib mir drei starke LinkedIn-Überschriften für einen Junior-Webentwickler.“",
    "demo.resume.title": "Lebenslauf-Builder",
    "demo.resume.body": "Mache aus Erfahrung, Skills und Zielen einen klaren Lebenslaufentwurf mit stärkeren Stichpunkten.",
    "demo.resume.output": "„Erstelle eine Kurzbeschreibung für einen Customer-Support-Specialist, der in Operations wechseln möchte.“",
    "demo.summary.title": "Text-Zusammenfasser",
    "demo.summary.body": "Füge langen Text ein und erhalte Hauptpunkte, Aufgaben und kurze Zusammenfassungen.",
    "demo.summary.output": "„Fasse dieses Projektbriefing in fünf Stichpunkten und einer Entscheidungsliste zusammen.“",
    "pricing.eyebrow": "Fokussiert starten",
    "pricing.title": "Starte jetzt mit der Homepage. Ergänze als Nächstes jede Tool-Seite.",
    "pricing.cta": "Zugang anfragen",
    "footer.copy": "Moderne KI-Tools für alltägliche Produktivität."
  },
  fr: {
    "meta.title": "BSAI | Outils IA modernes",
    "nav.aria": "Navigation principale",
    "nav.openMenu": "Ouvrir le menu",
    "nav.closeMenu": "Fermer le menu",
    "nav.tools": "Outils",
    "nav.workflow": "Flux de travail",
    "nav.pricing": "Tarifs",
    "nav.contact": "Contact",
    "nav.language": "Langue",
    "nav.selectLanguage": "Choisir la langue",
    "nav.getStarted": "Commencer",
    "hero.eyebrow": "Suite de productivité IA",
    "hero.title": "BSAI vous aide à écrire, postuler, résumer et communiquer plus vite.",
    "hero.copy": "Une collection claire d’outils IA du quotidien pour étudiants, candidats, professionnels et équipes en croissance.",
    "hero.primaryCta": "Explorer les outils",
    "hero.secondaryCta": "Voir le fonctionnement",
    "hero.statsAria": "Points forts de BSAI",
    "hero.statTools": "outils IA clés",
    "hero.statSupport": "aide à l’écriture",
    "hero.statFast": "Rapide",
    "hero.statWorkflow": "flux mobile",
    "hero.chatPreviewAria": "Aperçu du chat IA",
    "chatPreview.user": "Rédige un e-mail professionnel de suivi après un entretien.",
    "chatPreview.ai": "Bien sûr. Voici une version soignée avec un ton chaleureux, une gratitude claire et une conclusion assurée.",
    "chatPreview.placeholder": "Demandez tout à BSAI...",
    "chatPreview.send": "Envoyer",
    "chatPreview.sendAria": "Envoyer le message d’aperçu",
    "tools.eyebrow": "Outils à la une",
    "tools.title": "Tout ce qu’il faut pour passer d’une idée à un texte finalisé.",
    "tools.chat.title": "Chat IA",
    "tools.chat.body": "Posez des questions, trouvez des idées, réécrivez des brouillons et obtenez des réponses utiles en quelques secondes.",
    "tools.resume.title": "Créateur de CV",
    "tools.resume.body": "Créez des CV clairs et prêts à envoyer avec des points forts et une mise en forme professionnelle.",
    "tools.cover.title": "Générateur de lettre de motivation",
    "tools.cover.body": "Générez des lettres adaptées qui relient votre expérience au poste.",
    "tools.email.title": "Rédacteur d’e-mails",
    "tools.email.body": "Rédigez des e-mails soignés pour le travail, la vente, le support, les candidatures et le quotidien.",
    "tools.summary.title": "Résumeur de texte",
    "tools.summary.body": "Transformez articles, notes, documents et rapports longs en résumés concis.",
    "workflow.eyebrow": "Flux simple",
    "workflow.title": "Choisissez un outil, ajoutez le contexte, puis affinez le résultat.",
    "workflow.copy": "BSAI est conçu pour le travail concentré. Chaque outil reste direct, responsive et facile à utiliser sur ordinateur comme sur mobile.",
    "workflow.tabsAria": "Exemples d’outils",
    "demo.chat.tab": "Chat",
    "demo.resume.tab": "CV",
    "demo.summary.tab": "Résumé",
    "demo.chat.title": "Chat IA",
    "demo.chat.body": "Demandez à BSAI de planifier, expliquer, réécrire ou générer du contenu avec un ton professionnel.",
    "demo.chat.output": "« Donne-moi trois bons titres LinkedIn pour un développeur web junior. »",
    "demo.resume.title": "Créateur de CV",
    "demo.resume.body": "Transformez expérience, compétences et objectifs en brouillon de CV clair avec des formulations plus fortes.",
    "demo.resume.output": "« Crée un résumé de CV pour un spécialiste support client qui souhaite évoluer vers les opérations. »",
    "demo.summary.title": "Résumeur de texte",
    "demo.summary.body": "Collez un long texte et obtenez les points clés, les actions à suivre et un résumé court.",
    "demo.summary.output": "« Résume ce brief projet en cinq points et une liste de décisions. »",
    "pricing.eyebrow": "Démarrer simplement",
    "pricing.title": "Lancez la page d’accueil maintenant. Ajoutez ensuite chaque page d’outil.",
    "pricing.cta": "Demander l’accès",
    "footer.copy": "Des outils IA modernes pour la productivité quotidienne."
  },
  es: {
    "meta.title": "BSAI | Herramientas de IA modernas",
    "nav.aria": "Navegación principal",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",
    "nav.tools": "Herramientas",
    "nav.workflow": "Flujo",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "nav.language": "Idioma",
    "nav.selectLanguage": "Seleccionar idioma",
    "nav.getStarted": "Empezar",
    "hero.eyebrow": "Suite de productividad con IA",
    "hero.title": "BSAI te ayuda a escribir, postularte, resumir y comunicarte más rápido.",
    "hero.copy": "Una colección limpia de herramientas de IA para estudiantes, candidatos, profesionales y equipos en crecimiento.",
    "hero.primaryCta": "Explorar herramientas",
    "hero.secondaryCta": "Ver cómo funciona",
    "hero.statsAria": "Aspectos destacados de BSAI",
    "hero.statTools": "herramientas principales de IA",
    "hero.statSupport": "ayuda de escritura",
    "hero.statFast": "Rápido",
    "hero.statWorkflow": "flujo móvil",
    "hero.chatPreviewAria": "Vista previa del chat de IA",
    "chatPreview.user": "Redacta un correo profesional de seguimiento después de una entrevista.",
    "chatPreview.ai": "Claro. Aquí tienes una versión pulida con tono cálido, agradecimiento claro y cierre seguro.",
    "chatPreview.placeholder": "Pregunta a BSAI lo que quieras...",
    "chatPreview.send": "Enviar",
    "chatPreview.sendAria": "Enviar mensaje de vista previa",
    "tools.eyebrow": "Herramientas destacadas",
    "tools.title": "Todo lo que necesitas para pasar de una idea a un texto terminado.",
    "tools.chat.title": "Chat de IA",
    "tools.chat.body": "Haz preguntas, genera ideas, reescribe borradores y recibe respuestas prácticas en segundos.",
    "tools.resume.title": "Creador de currículums",
    "tools.resume.body": "Crea currículums claros y listos para postularte con viñetas fuertes y formato profesional.",
    "tools.cover.title": "Generador de cartas de presentación",
    "tools.cover.body": "Genera cartas personalizadas que conectan tu experiencia con el puesto.",
    "tools.email.title": "Redactor de correos",
    "tools.email.body": "Escribe correos pulidos para trabajo, ventas, soporte, postulaciones y comunicación diaria.",
    "tools.summary.title": "Resumidor de texto",
    "tools.summary.body": "Convierte artículos, notas, documentos e informes largos en resúmenes concisos.",
    "workflow.eyebrow": "Flujo simple",
    "workflow.title": "Elige una herramienta, agrega contexto y mejora el resultado.",
    "workflow.copy": "BSAI está diseñado para trabajar con foco. Cada herramienta mantiene una interfaz directa, responsive y fácil en escritorio o móvil.",
    "workflow.tabsAria": "Ejemplos de herramientas",
    "demo.chat.tab": "Chat",
    "demo.resume.tab": "Currículum",
    "demo.summary.tab": "Resumen",
    "demo.chat.title": "Chat de IA",
    "demo.chat.body": "Pide a BSAI que planifique, explique, reescriba o genere contenido con tono profesional.",
    "demo.chat.output": "“Dame tres opciones sólidas de titular de LinkedIn para un desarrollador web junior.”",
    "demo.resume.title": "Creador de currículums",
    "demo.resume.body": "Convierte experiencia, habilidades y metas en un borrador de currículum claro.",
    "demo.resume.output": "“Crea un resumen de currículum para un especialista de soporte al cliente que quiere pasar a operaciones.”",
    "demo.summary.title": "Resumidor de texto",
    "demo.summary.body": "Pega texto largo y obtén puntos principales, acciones y resúmenes breves.",
    "demo.summary.output": "“Resume este brief de proyecto en cinco viñetas y una lista de decisiones.”",
    "pricing.eyebrow": "Empieza con foco",
    "pricing.title": "Lanza la homepage ahora. Agrega después cada página de herramienta.",
    "pricing.cta": "Solicitar acceso",
    "footer.copy": "Herramientas modernas de IA para la productividad diaria."
  },
  zh: {
    "meta.title": "BSAI | 现代 AI 工具",
    "nav.aria": "主导航",
    "nav.openMenu": "打开菜单",
    "nav.closeMenu": "关闭菜单",
    "nav.tools": "工具",
    "nav.workflow": "流程",
    "nav.pricing": "价格",
    "nav.contact": "联系",
    "nav.language": "语言",
    "nav.selectLanguage": "选择语言",
    "nav.getStarted": "开始使用",
    "hero.eyebrow": "AI 生产力套件",
    "hero.title": "BSAI 帮你更快完成写作、求职、总结和沟通。",
    "hero.copy": "为学生、求职者、专业人士和成长团队打造的日常 AI 工具集合。",
    "hero.primaryCta": "查看工具",
    "hero.secondaryCta": "了解流程",
    "hero.statsAria": "BSAI 亮点",
    "hero.statTools": "核心 AI 工具",
    "hero.statSupport": "写作支持",
    "hero.statFast": "快速",
    "hero.statWorkflow": "移动端流程",
    "hero.chatPreviewAria": "AI 聊天预览",
    "chatPreview.user": "帮我写一封面试后的专业跟进邮件。",
    "chatPreview.ai": "当然。这里是一版语气友好、感谢清晰、结尾自信的 polished 文案。",
    "chatPreview.placeholder": "向 BSAI 提问...",
    "chatPreview.send": "发送",
    "chatPreview.sendAria": "发送预览消息",
    "tools.eyebrow": "精选工具",
    "tools.title": "从想法到成稿所需的一切。",
    "tools.chat.title": "AI 聊天",
    "tools.chat.body": "提问、头脑风暴、改写草稿，并在几秒内获得实用回答。",
    "tools.resume.title": "简历生成器",
    "tools.resume.body": "用有力要点和专业排版创建清晰、可投递的简历。",
    "tools.cover.title": "求职信生成器",
    "tools.cover.body": "生成贴合岗位、能连接你的经验和职位需求的求职信。",
    "tools.email.title": "邮件撰写器",
    "tools.email.body": "为工作、销售、支持、申请和日常沟通撰写专业邮件。",
    "tools.summary.title": "文本摘要器",
    "tools.summary.body": "把长文章、笔记、文档和报告转成简洁摘要。",
    "workflow.eyebrow": "简单流程",
    "workflow.title": "选择工具，添加背景，再优化结果。",
    "workflow.copy": "BSAI 专为专注工作设计。每个工具都保持直接、响应式，并适合桌面和移动端使用。",
    "workflow.tabsAria": "工具示例",
    "demo.chat.tab": "聊天",
    "demo.resume.tab": "简历",
    "demo.summary.tab": "摘要",
    "demo.chat.title": "AI 聊天",
    "demo.chat.body": "让 BSAI 规划、解释、改写，或用专业语气生成内容。",
    "demo.chat.output": "“给我三个适合初级网页开发者的 LinkedIn 标题。”",
    "demo.resume.title": "简历生成器",
    "demo.resume.body": "把经验、技能和求职目标转成清晰的简历草稿。",
    "demo.resume.output": "“为想转向运营岗位的客服专员写一段简历概要。”",
    "demo.summary.title": "文本摘要器",
    "demo.summary.body": "粘贴长文本，获取要点、行动项和简短摘要。",
    "demo.summary.output": "“把这份项目简介总结成五个要点和一个决策清单。”",
    "pricing.eyebrow": "专注开始",
    "pricing.title": "先上线主页。接下来再添加每个工具页面。",
    "pricing.cta": "申请访问",
    "footer.copy": "服务日常生产力的现代 AI 工具。"
  }
};

let currentLanguage = defaultLanguage;

function getLanguageBundle(language) {
  return translations[language] || translations[defaultLanguage];
}

function t(key, language = currentLanguage) {
  const bundle = getLanguageBundle(language);
  return bundle[key] || translations[defaultLanguage][key] || key;
}

function normalizeLanguage(language) {
  const baseLanguage = String(language || "").toLowerCase().split("-")[0];
  return supportedLanguages.includes(baseLanguage) ? baseLanguage : null;
}

function detectBrowserLanguage() {
  const candidates = [navigator.language, ...(navigator.languages || [])];
  return candidates.map(normalizeLanguage).find(Boolean) || defaultLanguage;
}

function getInitialLanguage() {
  return normalizeLanguage(localStorage.getItem(savedLanguageKey)) || detectBrowserLanguage();
}

function translateDocument(language) {
  currentLanguage = normalizeLanguage(language) || defaultLanguage;
  document.documentElement.lang = currentLanguage;
  document.title = t("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });

  updateMenuLabel();
  renderDemo(getActiveDemo());
}

function getActiveDemo() {
  return document.querySelector(".demo-tab.active")?.dataset.example || "chat";
}

function renderDemo(exampleKey) {
  const demoWindow = document.querySelector("[data-demo-window]");

  if (!demoWindow) {
    return;
  }

  demoWindow.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = t(`demo.${exampleKey}.title`);

  const body = document.createElement("p");
  body.textContent = t(`demo.${exampleKey}.body`);

  const output = document.createElement("div");
  output.className = "demo-output";
  output.textContent = t(`demo.${exampleKey}.output`);

  demoWindow.append(heading, body, output);
}

function updateMenuLabel() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector("[data-nav-links]");

  if (!menuToggle || !navLinks) {
    return;
  }

  const isOpen = navLinks.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", t(isOpen ? "nav.closeMenu" : "nav.openMenu"));
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("[data-nav-links]");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    updateMenuLabel();
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navLinks.classList.remove("open");
      updateMenuLabel();
    }
  });
}

const toolCards = document.querySelectorAll(".tool-card");

toolCards.forEach((card) => {
  card.addEventListener("click", () => {
    toolCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});

const demoTabs = document.querySelectorAll(".demo-tab");

demoTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    demoTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderDemo(tab.dataset.example);
  });
});

const languageSelect = document.querySelector("#languageSelect");
const initialLanguage = getInitialLanguage();

if (languageSelect) {
  languageSelect.value = initialLanguage;
  languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = normalizeLanguage(event.target.value) || defaultLanguage;
    localStorage.setItem(savedLanguageKey, selectedLanguage);
    translateDocument(selectedLanguage);
  });
}

translateDocument(initialLanguage);

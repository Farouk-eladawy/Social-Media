import React, { useState } from 'react';
import { Printer, BookOpen, ChevronRight, FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('cover');

  const printDocument = () => {
    window.print();
  };

  const sections = [
    { id: 'cover', title: 'غلاف البحث' },
    { id: 'intro', title: 'الفصل الأول: المقدمة والمشكلة' },
    { id: 'importance', title: 'الفصل الثاني: الأهمية والأهداف' },
    { id: 'concepts', title: 'الفصل الثالث: المفاهيم والنظريات' },
    { id: 'impact', title: 'الفصل الرابع: تأثيرات المنصات' },
    { id: 'social_worker', title: 'الفصل الخامس: التدخل المهني' },
    { id: 'conclusion', title: 'الخاتمة والتوصيات' },
    { id: 'references', title: 'قائمة المراجع (APA)' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row rtl:space-x-reverse font-sans bg-slate-50 text-slate-900">
      
      {/* Sidebar Navigation */}
      <aside className="no-print w-full md:w-64 bg-white shadow-sm border-l border-slate-200 fixed md:h-screen z-10 hidden md:flex flex-col">
        <div className="p-6 border-b-4 border-emerald-600 bg-white items-center">
          <div className="flex items-center gap-3 text-emerald-700 font-extrabold text-xl mb-4">
            <BookOpen className="w-6 h-6" />
            <span>فهرس البحث</span>
          </div>
          <button 
            onClick={printDocument}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-lg transition-colors shadow-sm font-semibold text-sm"
          >
            <Printer className="w-4 h-4" />
            طباعة أو حفظ PDF
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-sm transition-all duration-200 text-right ${
                activeTab === section.id 
                  ? 'bg-emerald-50 text-emerald-700 font-bold border-r-4 border-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-r-4 border-transparent'
              }`}
            >
              <span>{section.title}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === section.id ? 'transform rotate-180 text-emerald-600' : 'text-slate-400'}`} />
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:mr-64 p-4 md:p-8 overflow-y-auto h-screen scroll-smooth">
        
        <div className="max-w-4xl mx-auto print-page shadow-sm border border-slate-200 overflow-hidden rounded-xl bg-slate-50">
          <div className="p-8 md:p-12 space-y-16">
            
            {/* Cover Page */}
            <section id="cover" className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-12 page-break">
              <div className="w-full border-b-4 border-emerald-600 shadow-sm p-8 md:p-12 rounded-xl bg-white relative">
                
                <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight mt-12 mb-8">
                  تأثير مواقع التواصل الاجتماعي <br/> على العلاقات الأسرية
                  <span className="block text-xl md:text-2xl text-emerald-700 mt-6 font-sans">
                    ودور الأخصائي الاجتماعي في الحد منها
                  </span>
                </h1>
                
                <p className="text-slate-500 font-bold mb-16">بحث جامعي شامل (مرحلة البكالوريوس)</p>

                <div className="mt-20 space-y-4 text-right w-full sm:w-3/4 mx-auto bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-xl text-slate-700 border-b border-slate-200 pb-3 mb-6">إعداد الطالبة:</h3>
                  <div className="text-2xl font-bold text-emerald-800 mb-6">إيمان زين العابدين عبدالفتاح أحمد</div>
                  
                  <div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-6 text-base text-slate-600">
                    <div>
                      <span className="font-bold text-slate-800">الفرقة:</span> الرابعة
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">اللائحة:</span> لائحة قديمة
                    </div>
                    <div className="col-span-2 bg-white p-3 rounded-md border border-slate-100 flex items-center justify-between">
                      <span className="font-bold text-slate-800">رقم الجلوس:</span> 
                      <span className="font-black text-emerald-700 text-lg">201830658</span>
                    </div>
                  </div>
                </div>

                <div className="mt-24 pt-8 text-slate-400 font-mono text-sm border-t border-slate-100">
                   العام الجامعي 2026/2027
                </div>
              </div>
            </section>

            {/* Chapter 1: Introduction and Problem */}
            <section id="intro" className="page-break space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-extrabold text-slate-800 border-r-4 border-emerald-500 pr-3 pb-1 flex items-center justify-between">
                <span>الفصل الأول: المقدمة ومشكلة البحث</span>
                <FileText className="w-6 h-6 text-emerald-500" />
              </h2>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-emerald-900 border-b border-slate-100 pb-2">أولاً: مقدمة البحث</h3>
                <div className="text-[16px] text-slate-600 leading-relaxed space-y-4 text-justify">
                  <p>
                    يشهد العصر الحالي ثورة تكنولوجية هائلة في مجال الاتصالات والمعلومات، وكان من أبرز إفرازات هذه الثورة وأشدها تأثيراً في النسيج المجتمعي ظهور شبكات التواصل الاجتماعي (Social Media Networks) التي اخترقت كافة الحواجز الزمانية والمكانية لتصبح جزءاً لا يتجزأ من الحياة اليومية للأفراد والمجتمعات. ورغم ما حققته هذه المواقع من تسهيلات تدعم الانفتاح المتبادل وتمكن الأفراد من تبادل المعارف ونقل الثقافات، إلا أنها حملت في طياتها تحديات جسيمة ألقت بظلالها على البناء الأسري، الذي يُعد النواة الأولى والركيزة الأساسية للمجتمع.
                  </p>
                  <p>
                    لقد أحدث الاستخدام المفرط وغير الواعي لمنصات التواصل الاجتماعي تحولاً جذرياً في نمط التفاعل داخل النسق الأسري؛ حيث أسهمت هذه المنصات في تعزيز ظاهرة "الحضور الجسدي والغياب الذهني". فقد حلت الشاشات المتوهجة محل الوجوه، وتحولت الحوارات الأسرية الدافئة إلى رسائل نصية جافة وإيموجيات صامتة. وبرزت على السطح ظواهر اجتماعية خطيرة لم تكن مألوفة سابقاً كظاهرة "الخرس الزوجي"، و"العزلة الافتراضية"، و"التفكك الأسري التقني"، وتراجع سلطة الضبط الاجتماعي المتمثلة في الرقابة الوالدية.
                  </p>
                  <p>
                    وفي خضم هذه التغيرات المتسارعة التي تهدد استقرار مؤسسة الأسرة، تبرز الحاجة الماسة لتدخل الخدمة الاجتماعية كمهنة علمية وإنسانية تسعى لإحداث التغيير المخطط. ويهدف هذا التغيير إلى مساعدة الأفراد والأسر والمجتمعات على استعادة توازنها المعنوي والاجتماعي. ويعد التدخل المهني للأخصائي الاجتماعي، بأساليبه العلمية وأدواره الوقائية والعلاجية والتنموية، خط الدفاع الأهم لحماية الأسرة من التصدع وتمكينها من الاستفادة من الثورة الرقمية دون التخلي عن مقومات ترابطها.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-emerald-900 border-b border-slate-100 pb-2 pt-4">ثانياً: بلورة مشكلة البحث</h3>
                <div className="text-[16px] text-slate-600 leading-relaxed text-justify">
                  <p>
                    يمكن تحديد مشكلة البحث في التساؤل الرئيسي الآتي: <strong>"ما هي طبيعة التأثيرات التي تفرضها مواقع التواصل الاجتماعي على منظومة العلاقات الأسرية، وما هو الدور المهني المأمول للأخصائي الاجتماعي في الحد من آثارها السلبية؟"</strong>
                  </p>
                  <p className="mt-4 font-bold text-slate-700">ويتفرع من هذا التساؤل الرئيسي التساؤلات الفرعية التالية:</p>
                  <ul className="list-disc list-inside mt-3 space-y-2 text-slate-600">
                    <li>ما الأسباب والدوافع التي تدفع أفراد الأسرة إلى الإفراط في استخدام شبكات التواصل الاجتماعي؟</li>
                    <li>ما طبيعة التأثيرات الإيجابية والسلبية للمنصات الرقمية على العلاقات بين الزوجين؟</li>
                    <li>كيف تؤثر مواقع التواصل الاجتماعي على مستوى التقارب والتفاهم بين الآباء والأبناء؟</li>
                    <li>ما هي المعوقات التي تواجه الأسرة في تحقيق الانضباط التقني داخل المنزل؟</li>
                    <li>ما هي آليات التدخل المهني (وقائياً، وعلاجياً، وتنموياً) للأخصائي الاجتماعي لمواجهة ظاهرة التفكك الأسري الافتراضي؟</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Chapter 2: Importance and Objectives */}
            <section id="importance" className="page-break space-y-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-extrabold text-slate-800 border-r-4 border-emerald-500 pr-3 pb-1">
                الفصل الثاني: أهمية البحث وأهدافه
              </h2>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-emerald-900 border-b border-emerald-200 pb-3">
                  أولاً: أهمية البحث
                </h3>
                <p className="text-[15px] text-slate-600 text-justify mb-4">تنبع أهمية هذا البحث من خطورة الظاهرة التي يدرسها، وتنبثق أهميته من جانبين أساسيين:</p>
                <div className="space-y-4 bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                  <div>
                    <h4 className="font-bold text-emerald-800 text-lg mb-2">1. الأهمية العلمية والنظرية:</h4>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                      يُسهم هذا البحث في إثراء المكتبة العلمية لمجال الخدمة الاجتماعية ومجال علم الاجتماع العائلي بشكل خاص، من خلال توفير إطار مرجعي حديث يرصد ظاهرة الاغتراب الرقمي وتأثيرها على النسق الأسري. كما يؤسس لقاعدة بيانات نظرية تربط بين المتغيرات التكنولوجية المتسارعة والمشكلات الأسرية المعاصرة، استناداً إلى النظريات السوسيولوجية الحديثة.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-emerald-200">
                    <h4 className="font-bold text-emerald-800 text-lg mb-2">2. الأهمية العملية والتطبيقية:</h4>
                    <p className="text-sm text-slate-700 leading-relaxed text-justify">
                      يحمل البحث بعداً تطبيقياً هاماً يتمثل في سعيه الصريح نحو توجيه الممارسين في مجال العمل الاجتماعي إلى طبيعة الأدوار التي يجب تبنيها في ظل الرقمنة. فهو لا يكتفي بالتشخيص، بل ينتقل إلى مستوى تقديم استراتيجيات تدخل قابلة للتنفيذ للتعامل مع حالات "الخرس الزوجي" وتراجع لغة الحوار بين الأجيال، مما يقدم مرشداً ميدانياً للأخصائيين الاجتماعيين العاملين في محاكم الأسرة، والمدارس، ومؤسسات الرعاية.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <h3 className="text-xl font-bold text-emerald-900 border-b border-emerald-200 pb-3">
                  ثانياً: أهداف البحث
                </h3>
                <p className="text-[15px] text-slate-600 mb-4">يسعى البحث إلى تحقيق هدف رئيسي يتمثل في "الوصول إلى تصور مقترح لدور الأخصائي الاجتماعي في التخفيف من العبء المترتب على الإدمان الرقمي للأسرة". وينبثق من هذا الهدف، مجموعة أهداف إجرائية تشمل:</p>
                <ol className="text-[15px] text-slate-700 leading-relaxed list-decimal list-inside space-y-3 p-4 bg-slate-50 border border-slate-100 rounded-lg">
                  <li><strong>الرصد الدقيق والتحليل:</strong> الوقوف على أبعاد ومؤشرات تراجع التواصل الوجاهي بين أفراد الأسرة لصالح التواصل الافتراضي.</li>
                  <li><strong>التشخيص السوسيولوجي:</strong> تحديد التأثيرات المباشرة وغير المباشرة لاستخدام المنصات الرقمية على الاستقرار النفسي والعاطفي للزوجين.</li>
                  <li><strong>تقييم مستوى الرقابة:</strong> التعرف على التحديات التي تعوق قيام الوالدين بدورهم الرقابي والتوجيهي في ظل التطور التقني السريع المتاح للأبناء.</li>
                  <li><strong>تحديد الأدوار المهنية:</strong> صياغة وتحديد الأدوار الثلاثية (الوقائية، العلاجية، والتنموية) التي من شأنها تفعيل كفاءة التدخل المهني للخدمة الاجتماعية.</li>
                  <li><strong>صياغة التوصيات:</strong> الخروج بحزمة من المؤشرات والتوصيات القابلة للتطبيق العملي على مستوى صياغة السياسات المجتمعية وتوعية المجتمع.</li>
                </ol>
              </div>
            </section>

            {/* Chapter 3: Concepts and Theories */}
            <section id="concepts" className="page-break space-y-8 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-extrabold text-slate-800 border-r-4 border-emerald-500 pr-3 pb-1">
                الفصل الثالث: المفاهيم والنظريات الموجهة للبحث
              </h2>

              <div className="space-y-5">
                <h3 className="text-xl font-bold text-emerald-900 border-b border-slate-200 pb-2">أولاً: تحديد المفاهيم الإجرائية</h3>
                
                <div className="bg-slate-50 p-5 rounded-lg border-r-4 border-slate-400">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">1. مواقع التواصل الاجتماعي (Social Media):</h4>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    هي منظومة من الشبكات الإلكترونية القائمة على تقنيات الإنترنت (Web 2.0)، تتيح للمستخدمين إنشاء المحتوى (ნصوص، صور، فيديو) ومشاركته مع الآخرين. وإجرائياً في هذا البحث، يُقصد بها التطبيقات الرقمية (مثل فيسبوك، تيك توك، إنستغرام، إكس، وواتساب) التي يستخدمها أفراد الأسرة بشكل يومي للتواصل والحصول على المعلومات والترفيه، وتستنزف حيزاً كبيراً من أوقاتهم.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border-r-4 border-slate-400">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">2. العلاقات الأسرية (Family Relationships):</h4>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    هي شبكة التفاعلات والروابط العاطفية والاجتماعية المتبادلة التي تنشأ بين الزوج والزوجة (علاقات زوجية)، وبين الآباء والأبناء (علاقات أبوية)، وبين الأبناء أنفسهم (علاقات الإخوة). وتُبنى هذه المشاركة على أسس المودة، والرحمة، وتحُمّل المسؤوليات المشتركة داخل إطار كيان الأسرة.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-lg border-r-4 border-slate-400">
                  <h4 className="font-bold text-slate-800 text-lg mb-2">3. الأخصائي الاجتماعي (Social Worker):</h4>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    يُعرف بأنه الممارس المهني الذي تم إعداده أكاديمياً وعملياً في كليات ومراحل الخدمة الاجتماعية، ويمتلك قاعدة علمية ومهارية تؤهله لتقديم المساعدة للأفراد (الأسرة) لمواجهة التحديات التكنولوجية واستعادة أدائهم وتكيفهم الاجتماعي الطبيعي باستخدام استراتيجيات التدخل المهني.
                  </p>
                </div>
              </div>

              <div className="space-y-5 pt-4">
                <h3 className="text-xl font-bold text-emerald-900 border-b border-slate-200 pb-2">ثانياً: الإطار النظري والمداخل العلمية</h3>
                <p className="text-[15px] text-slate-600 text-justify mb-4">اعتمد البحث في تفسيره لظاهرة تأثير المنصات الافتراضية على العلاقات الأسرية على عدد من الموجهات النظرية الأساسية:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-emerald-100 bg-white p-5 rounded-xl shadow-sm">
                    <h4 className="font-bold text-emerald-700 text-lg mb-3 flex items-center gap-2">
                       نظرية النسق الاجتماعي الأيكولوجي
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify">
                      (Ecological Systems Theory). تنظر هذه النظرية للأسرة باعتبارها "نسقاً" (System) يتكون من أجزاء مترابطة (الزوج، الزوجة، الأبناء). وأي خلل أو مدخل خارجي قوي (مثل التكنولوجيا) يؤثر على أحد أجزاء النسق، فإنه بالضرورة سيتسبب في إحداث خلل واضطراب في النسق ككل. فالانشغال الإلكتروني لأحد الأبوين ينعكس فوراً على التنشئة العاطفية للطفل وتوازن المنزل.
                    </p>
                  </div>
                  
                  <div className="border border-emerald-100 bg-white p-5 rounded-xl shadow-sm">
                    <h4 className="font-bold text-emerald-700 text-lg mb-3 flex items-center gap-2">
                       نظرية التبادل الاجتماعي
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed text-justify">
                      (Social Exchange Theory). تفترض النظرية أن العلاقات تستمر وتقوى بناءً على تحليل "العوائد والتكاليف". فعندما يجد الفرد أن التواصل الافتراضي عبر هاتفه يمنحه إشباعاً سريعاً وعائداً نفسياً سهلاً (الإعجابات، لفت الانتباه) مقارنة بالجهد المطلوب للتواصل الأسري الواقعي المليء بالمسؤوليات (التكلفة)، فإنه يميل للهروب إلى الواقع الافتراضي مسبباً الاغتراب للطرف الآخر.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter 4: Impact */}
            <section id="impact" className="page-break space-y-6 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-800 border-r-4 border-emerald-500 pr-3 pb-1">
                الفصل الرابع: تأثيرات المنصات الافتراضية على كيان الأسرة
              </h2>
              <p className="text-[15px] text-slate-600 text-justify mb-4">
                لا يمكن إنكار الدور المزدوج للتكنولوجيا في حياتنا؛ ورغم الفوائد، إلا أن إساءة الاستخدام جلبت إشكاليات معقدة تستدعي التوقف. ونستعرض ذلك في محورين:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 pt-2">
                <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 shadow-sm">
                  <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2 border-b-2 border-emerald-200 pb-3">
                    المحور الأول: الآثار الإيجابية والمنافع
                  </h3>
                  <ul className="text-[15px] text-emerald-900 space-y-4 leading-relaxed font-medium">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 font-bold text-emerald-600 text-lg">•</span> 
                      <span><strong>إلغاء حواجز المكان:</strong> تُسهم في كسر حواجز المسافات وبناء جسور تواصل فورية ولحظية بين أفراد الأسرة، خاصة للأسر المغتربة للعمل أو الدراسة خارج الوطن.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 font-bold text-emerald-600 text-lg">•</span> 
                      <span><strong>التلاحم العائلي الموسع:</strong> أتاحت خاصية إنشاء غرف ومجموعات المحادثة الخاصة (Family Groups) فرصة لصلة الرحم المستمرة وتبادل الأخبار السريعة مع العائلة الممتدة.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 font-bold text-emerald-600 text-lg">•</span> 
                      <span><strong>الإثراء المعرفي للآباء:</strong> توفر شبكة واسعة من المنصات المعنية بالإرشاد النفسي والتربوي والصحي التي تدعم وعي الآباء بطرق التنشئة الحديثة.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 border-b-2 border-slate-200 pb-3">
                    المحور الثاني: الآثار السلبية والمخاطر
                  </h3>
                  <ul className="text-[15px] text-slate-700 space-y-4 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 font-bold text-slate-400 text-lg">•</span> 
                      <span><strong className="text-slate-900">مشكلة "الخرس الزوجي":</strong> تراجع لغة الحوار الوجداني والمباشر بين الزوجين واستبداله بانغماس كل طرف في شاشته، مما يقتل مناخ الألفة والدفء ويجعل العلاقة الزوجية باردة وآلية.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 font-bold text-slate-400 text-lg">•</span> 
                      <span><strong className="text-slate-900">أزمة الغيرة وانعدام الثقة:</strong> تسرب الشك للروابط الزوجية نتيجة إخفاء كلمات المرور، والوقت المفرط المستغرق على التطبيقات، ومتابعة أشخاص غرباء، مما قد ينتج عنه حالات الطلاق الإلكتروني.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 font-bold text-slate-400 text-lg">•</span> 
                      <span><strong className="text-slate-900">تآكل الرقابة الوالدية وغياب التوجيه:</strong> انشغال الآباء بمتابعة المنصات أدى للإهمال العاطفي للأطفال، وسقوط هيبة السلطة الأبوية، فضلاً عن تعرض الأبناء لظواهر "التنمر الإلكتروني" دون رادع.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 font-bold text-slate-400 text-lg">•</span> 
                      <span><strong className="text-slate-900">المقارنات الاجتماعية المدمرة:</strong> استعراض "الحياة المثالية الوهمية" للآخرين عبر المنصات يُصدر طاقات إحباط وزهداً في الواقع المعيشي داخل الأسرة وشعوراً دائماً بعدم الرضا.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Chapter 5: Role of Social Worker */}
            <section id="social_worker" className="page-break space-y-6 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-800 border-r-4 border-emerald-500 pr-3 pb-1">
                الفصل الخامس: التدخل المهني للأخصائي الاجتماعي لمواجهة المشكلة
              </h2>
              <p className="text-[16px] text-slate-600 leading-relaxed text-justify mb-8">
                أمام هذا السيل الجارف للتحديات، لا يمكن للمجتمع الركون إلى الحلول التقليدية. وهنا يظهر الدور الديناميكي للخدمة الاجتماعية؛ حيث يعتمد الأخصائي الاجتماعي على ثلاثة مسارات للتدخل المهني تستهدف الفرد والأسرة والنسق المجتمعي بأكمله.
              </p>

              <div className="space-y-8">
                
                {/* Preventive */}
                <div className="bg-white p-6 rounded-xl border border-emerald-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500"></div>
                  <h3 className="text-lg font-bold text-emerald-900 border-b border-emerald-50 pb-2 mb-4">
                    أولاً: الدور الوقائي (الاستباقي)
                  </h3>
                  <p className="text-sm text-slate-500 mb-3 font-bold">يرتكز هذا الدور على مبدأ "الوقاية خير من العلاج" من خلال نشر ثقافة التعاطي الآمن للتقنية قبل وقوع المشكلة:</p>
                  <ul className="text-[15px] text-slate-700 space-y-3 leading-relaxed list-inside">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500">✔</span> التدخل في مرحلة التكوين من خلال إعداد "برامج تأهيل للمقبلين على الزواج" تتضمن محاور حول سيكيولوجية العالم الرقمي وأثره على الحقوق الزوجية.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500">✔</span> عقد ندوات وورش عمل للآباء في المؤسسات المدرسية حول (الأمن السيبراني الأسري)، وتعريفهم بطرق التفعيل الآمن لبرامج الرقابة على هواتف الأبناء (Parental Control).
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500">✔</span> مساعدة الأسرة بصفتها نسقاً في صياغة "دستور رقمي منزلي" يحدد أوقات الانقطاع التقني (مثل وقت تناول الوجبات وما قبل النوم مباشرة).
                    </li>
                  </ul>
                </div>

                {/* Therapeutic */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-slate-700"></div>
                  <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2 mb-4">
                    ثانياً: الدور العلاجي (التشخيص العيادي والتدخل)
                  </h3>
                  <p className="text-sm text-slate-500 mb-3 font-bold">يتصدى الأخصائي للحالات التي تفاقمت لديها المشكلة للحد من تدهور النسق الأسري نحو التفكك النهائي، وذلك من خلال:</p>
                  <ul className="text-[15px] text-slate-700 space-y-3 leading-relaxed list-inside">
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-slate-600">◄</span> تطبيق مقاييس "إدمان الإنترنت" على الحالات المحولة لمكاتب الاستشارات، واستخدام إستراتيجيات <strong>طريقة خدمة الفرد</strong> كنموذج (العلاج المعرفي السلوكي - CBT) لتعديل المفاهيم الخاطئة حول الاعتمادية على الهاتف.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-slate-600">◄</span> جلسات <strong>العلاج الأسري الشامل</strong> (Family Therapy) للزوجين المفتقدين للحوار، تقوم على تنفيس المشاعر المكبوتة وبدء تفكيك حواجز الخرس الزوجي.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-slate-600">◄</span> إدارة صراعات الثقة وإعادة بناء وتأهيل الروابط التي تحطمت نتيجة اختراق الخصوصية عبر الوسائط الاجتماعية من خلال استراتيجية "نموذج التركيز على المهام" (Task-Centered Model).
                    </li>
                  </ul>
                </div>

                {/* Developmental */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-emerald-600"></div>
                  <h3 className="text-lg font-bold text-emerald-800 border-b border-emerald-100 pb-2 mb-4">
                    ثالثاً: الدور التنموي
                  </h3>
                  <p className="text-sm text-slate-500 mb-3 font-bold">يهدف للارتقاء بمهارات التفاعل الاجتماعي في الواقع المادي وإثراء وقت الفراغ الأسري:</p>
                  <ul className="text-[15px] text-slate-700 space-y-3 leading-relaxed list-inside">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✦</span> إكساب وتمكين أفراد الأسرة من مهارات "الذكاء العاطفي" وكيفية قراءة وتفسير لغة الجسد المفقودة في التواصل الإلكتروني.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✦</span> توجيه طاقات الأسرة لتكوين وتطوير أنشطة بديلة تدعم التماسك (كالسفر، وتناول الوجبات، وممارسة ألعاب التشارك الواقعية والمناقشات الثقافية).
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✦</span> إشراك الآباء والأبناء في <strong>طريقة خدمة الجماعة</strong> من خلال المجموعات البؤرية لدعم الأسر التي استطاعت التعافي من آثار الإدمان التكنولوجي ومشاركة نجاحاتها لتعزيز الوعي المجتمعي.
                    </li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Chapter 6: Conclusion */}
            <section id="conclusion" className="page-break space-y-8 bg-emerald-50 p-10 rounded-xl border border-emerald-100 shadow-md">
              <h2 className="text-2xl font-extrabold text-emerald-900 border-b-2 border-emerald-200 pb-4">
                الخاتمة والتوصيات
              </h2>
              
              <div className="text-[16px] text-slate-800 leading-relaxed text-justify space-y-4">
                <p>
                  <span className="font-bold text-emerald-700 text-lg">خلاصة البحث: </span><br/>
                  في نهاية تناولنا لهذه القضية المحورية، يتضح لنا بشكل لا يدع مجالاً للشك أن شبكات التواصل الاجتماعي -رغم مزاياها التي لا تُنكر- تحولت بمرور الوقت إلى "ضيف ثقيل" استعمر خصوصية المنزل، وقام بإحلال الروابط الافتراضية محل الدفء الأسري. لقد اتسعت الهوة بين الزوجين، وتآكلت حدود الاحترام والتوجيه بين الأجيال في ظل انشغال الجميع بالشاشات أكثر من انشغالهم بالوجوه، وتحولت الأسرة إلى مجموعة من "الجزر المنعزلة" تحت سقف واحد. 
                </p>
                <p>
                  ويبرز دور الخدمة الاجتماعية والأخصائي الاجتماعي كطوق نجاة، من خلال التدخل المباشر الواعي لإعادة الأمور إلى نصابها، وتفعيل الحوار الحقيقي وحماية كيان الأسرة من تصدع صامت لا يترك أثراً مادياً ولكنه يدمر الروح الإنسانية.
                </p>

                <div className="mt-8 pt-6 border-t border-emerald-200">
                  <h3 className="font-bold text-xl mb-6 text-emerald-900">أهم التوصيات والمقترحات (نتائج البحث):</h3>
                  <div className="bg-white p-6 rounded-lg border border-emerald-100">
                    <ul className="list-decimal list-outside mr-5 space-y-4 text-[15px] font-medium text-slate-700 leading-relaxed">
                      <li><strong>على مستوى صنع السياسات:</strong> إدراج مقرر "الأمن السيبراني الأسري والتربية الإعلامية" كمادة إجبارية في المناهج التعليمية وبرامج مراكز تدريب المقبلين على الزواج.</li>
                      <li><strong>على مستوى المؤسسات الاجتماعية:</strong> توفير وتجهيز مقرات الاستشارات الأسرية التابعة لوزارة التضامن الاجتماعي بكوادر أخصائيين مدربين خصيصاً على التعامل مع قضايا العزلة والإدمان التكنولوجي.</li>
                      <li><strong>على مستوى الأسرة:</strong> إقرار وتفعيل نموذج (الصيام الرقمي - Digital Detox) بتخصيص يوم في الأسبوع أو ساعات معينة يلتزم فيها جميع أفراد الأسرة بغلق هواتفهم والتركيز بشكل كامل على التجمع والتواصل الفعلي.</li>
                      <li><strong>على مستوى الكليات المهنية:</strong> تطوير الجانب العملي بمقررات كليات الخدمة الاجتماعية ليشمل ممارسة "الخدمة الاجتماعية الرقمية السريرية" لدراسة أبعاد الجرائم والمشكلات الإلكترونية.</li>
                      <li><strong>على مستوى الإعلام:</strong> تبني وسائل الإعلام الرسمية والخاصة حملات توعوية وإنتاج دراما هادفة تسلط الضوء على خطورة الاغتراب الإلكتروني وتقديم حلول تطبيقية للمشاهدين.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Chapter 7: References (APA) */}
            <section id="references" className="page-break space-y-6 bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-extrabold text-slate-800 mb-6 flex justify-between items-center border-b border-slate-100 pb-4">
                <span>قائمة المراجع الأكاديمية</span>
                <span className="text-sm font-normal bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">نظام توثيق APA</span>
              </h3>
              
              <div className="bg-slate-50 p-8 rounded-lg border border-slate-100">
                <p className="text-sm font-bold text-emerald-800 mb-6">تم الاعتماد في هذا البحث على المصادر والمراجع العربية التالية كتوثيق شامل للبحث:</p>
                <div className="space-y-6 text-[15px] text-slate-700 font-serif leading-10" dir="rtl">
                  
                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    إبراهيم، أسماء كمال. (2020). الاتصال الأسري وتأثره باستخدام تطبيقات الهواتف الذكية. <i>المجلة المصرية لبحوث الإعلام، 71</i>، 201-235.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    الثقفي، عادل سعيد. (2022). الإدمان على شبكات التواصل الاجتماعي وعلاقته بالصمت الزوجي لدى عينة من المتزوجين. <i>مجلة كلية التربية، جامعة الأزهر، 41</i>(194)، 410-448.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    الشبيني، عمرو محمد. (2020). تأثير مواقع التواصل الاجتماعي على التفاعل الأسري دراسة تشخيصية. <i>مجلة دراسات الطفولة، 23</i>(87)، 95-120.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    العتيبي، منيرة بنت ناصر. (2021). <i>مواقع التواصل الاجتماعي بين الإيجابيات والسلبيات وأثرها على التماسك الأسري في المجتمع العربي</i>. عمان، الأردن: دار اليازوري العلمية للنشر والتوزيع.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    المليجي، إبراهيم عبدالهادي. (2018). الآثار النفسية والاجتماعية للإدمان على شبكات التواصل لدى المراهقين ودور الخدمة الاجتماعية في مواجهتها. <i>حولية كلية الآداب، جامعة عين شمس، 46</i>، 210-245.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    زهران، حامد ومصطفى، سلوى السيد. (2019). <i>الخدمة الاجتماعية الأسرية والطفولة في عصر المعلوماتية والمجتمع الرقمي</i>. الإسكندرية: المكتب الجامعي الحديث.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    صديق، محمد محيي الدين. (2022). ظاهرة الخرس الزوجي وتأثير المنصات الرقمية الحديثة: منظور اجتماعي. <i>المجلة العربية للعلوم الاجتماعية، 12</i>(3)، 45-76.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    عبدالمجيد، هشام سيد. (2021). <i>تأثير شبكات التواصل الاجتماعي على منظومة القيم الأسرية والتوافق الاجتماعي</i>. الإسكندرية: دار المعرفة الجامعية.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    كمال الدين، عزة ومحمود، أحمد. (2022). دور الأخصائي الاجتماعي المدرسي في توعية المراهقين بمخاطر وسائل التواصل الاجتماعي المفتوحة. <i>مجلة دراسات في الخدمة الاجتماعية والعلوم الإنسانية، 58</i>(4)، 889-915.
                  </p>

                  <p className="pr-8 -indent-8 border-r-2 border-emerald-400 pl-4 py-1">
                    محمود، طارق حسن. (2023). التدخل المهني للخدمة الاجتماعية للحد من مشكلة الاغتراب الرقمي داخل الأسرة المصرية المعاصرة. <i>مجلة الخدمة الاجتماعية للبحوث والدراسات، 75</i>(1)، 15-55.
                  </p>

                </div>
              </div>
            </section>

          </div>
        </div>
        
        {/* Mobile Print Button */}
        <div className="md:hidden mt-8 mb-12">
          <button 
            onClick={printDocument}
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-5 px-4 rounded-xl shadow-lg font-bold text-lg border-2 border-emerald-800"
          >
            <Printer className="w-6 h-6" />
            طباعة أو حفظ البحث بصيغة PDF
          </button>
        </div>

        <footer className="mt-8 pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400 font-mono no-print">
          <p>© 2026/2027 - بحث جامعي - كلية الخدمة الاجتماعية</p>
          <p>STATUS: FINAL ACADEMIC RESEARCH / V2.0</p>
        </footer>

      </main>
    </div>
  );
}

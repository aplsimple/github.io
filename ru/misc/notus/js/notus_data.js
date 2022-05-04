//"домашний сайт"  
  var MY_SITE = "https://aplsimple.github.io/ru";

//скрыть опции ("род.падеж", "контроль")
    var OPTS_HIDDEN=false;

//язык интерфейса
  var RUS_LANGUAGE = true;

  var masid =
   {"tohome":["Домой","Home","Возвращу на\n"+MY_SITE,"Go home"],
    "flagcont":["Перевод","Translate","Переключу на греческий/русский","Switch to Greek/Russian"],
    "nav1":["Печать","Print","Напечатаю записку","Print the note"],
    "nav2":["Записка.pdf","PDF note","Создам записку в формате PDF","Make PDF note"],
    "nav3":["Записка.html","HTML note","Создам записку в формате HTML","Make HTML note"],
    "helpme":["Помощь","Help","Подскажу, если что непонятно","Show help for you"],
    "quol1":["","","Листаю типы записок","List the notes"],
    "quor1":["","","Листаю типы записок","List the notes"],
    "quol2":["","","Листаю типы записок","List the notes"],
    "quor2":["","","Листаю типы записок","List the notes"],
    "cb1":["","","Переведу имена в родительный падеж","Get the genitive case"],
    "lb1":["Род.падеж","Gen.case","Переведу имена в родительный падеж","Get the genitive case"],
    "cb2":["","","Проверю имена на ошибки","Check errors of spelling"],
    "lb2":["Контроль","Check spelling","Проверю имена на ошибки","Check errors of spelling"],
   };

//максимальное число имен в записке
    var MAXNAMES = 15;

//число прогонов строк в начале записки
    var BLANKLINES  = 7;
    var BLANKLINES2 = 4;

//отступ слева
    var LEFTMARGIN = 10;

//размер шрифта в записке для печати
    var PRINT_FONTSIZE = "5em";

//гарнитура шрифта в записке для печати и почты
    var PRINT_FONTFACE = "Times";

//размеры окна (ширина, высота) для печати
    var PRINT_WIDTH = 520;
    var PRINT_HEIGHT = 850;

    var MAXERRLEN = 160;

    var PDF_FONTSIZE = 24;
    var PDF_LEFT = 55;
    var MRGN1   = [PDF_LEFT, 150, 0, 0];
    var MRGN2   = [PDF_LEFT, 11.1, 0, 0];
    
    var MRGN01  = [PDF_LEFT, 50, 0, 0];
    var MRGN02  = [PDF_LEFT, 73, 0, 0];
    
    var MRGN001 = [PDF_LEFT, 32, 0, 0];
    var MRGN002 = [PDF_LEFT, 8, 0, 0];

    var MRGADD_RU = [0,   0,   80, 130, 80];
    var MRGADD_GR = [130, 90, -10, 100, 60];

    var SEL_HEAD1 = 'и м е н а';
    var SEL_HEAD2 = 'з в а н и я';

//псевдонимы канонических имен
    var pseudoNames = {
    'анжела':'ангелина',
    'фёдор':'федор',
    'семён':'семен',
    'пётр':'петр',
    'леша':'алексей',
    'лёша':'алексей',
    'сережа':'сергей',
    'серёжа':'сергей',
    'ваня':'иван',
    'саша':'александр'};

//канонические имена
    var greekNames = {
'аввакум':'Ἀββακούμ',
'август':'Αὐγούστου',
'августа':'Αὐγούστας',
'августин':'Αὐγουστίνου',
'авдей':'᾽Αβδαίου',
'авель':'Ἄβελ',
'аверкий':'᾽Αβερκίου',
'аверьян':'Ἀβεριανοῦ',
'авксентий':'Αὐξεντίου',
'авраамия':'Αβραάμιος',
'автоном':'Αὐτονόμου',
'агап':'Ἀγαπίου',
'агата':'Ἀγαθῆς',
'агафии':'Αγάθη',
'агафия':'Αγάθη',
'агафодор':'Ἀγαθοδόρου',
'агафон':'Ἀγάθωνος',
'агафья':'Ἀγαθῆς',
'аггей':'Ἀγγαίου',
'аглаида':'Αγλαΐδα',
'аглая':'Ἀγλαΐας',
'агнесса':'Ἀγνέσσας',
'агния':'Ἀγνῆς',
'аграфена':'᾽Αγριππίνης',
'агрипина':'Αγριππινα',
'агриппина':'Ἀγριππίνης',
'ада':'Άδας',
'адам':'Ἀδᾶμ',
'аделаида':'Ἀδελαΐδας',
'адриан':'Ἀδριανοῦ',
'аза':'Άζας',
'азарий':'Ἀζαρίου',
'акилина':'Ἀκυλίνης',
'аким':'Ἰωακεῖμ',
'акулина':'Ἀκυλίνης',
'алевтина':'Βαλεντίνης',
'александр':'Ἀλεξάνδρου',
'александра':'Ἀλεξάνδρας',
'алексей':'Ἀλεξίου',
'алексий':'Ἀλεξίου',
'алёна':'Αλιόνα',
'алина':'Ἀλίνας',
'алипий':'Ἀλυπίου',
'алипия':'Ἀλυπίας',
'алиса':'᾽Αλίκης',
'алла':'Ἄλλας',
'альберт':'Αλμπέρτ',
'альбина':'Ἀλμπίνας',
'амвросий':'᾽Αμβροσίου',
'амос':'᾽Αμῶς',
'амфилохий':'Ἀμφιλοχίου',
'ананий':'᾽Ανανίου',
'анастасий':'᾽Αναστασίου',
'анастасия':'᾽Αναστασίας',
'анатолий':'᾽Ανατολίου',
'ангелина':'᾽Αγγελίνας',
'ангелины':'Αγγελίνα',
'андраник':'Ανδρανίκ',
'андрей':'᾽Ανδρέου',
'андриян':'᾽Ανδριανοῦ',
'андрон':'᾽Ανδρονίκου',
'андроник':'᾽Ανδρονίκου',
'анжелика':'Ἀγγελικῆς',
'аникей':'᾽Ανικίου',
'аникита':'᾽Ανικήτου',
'анисим':'᾽Ονησίμου',
'анисия':'᾽Ανυσίας',
'анисья':'᾽Ανυσίας',
'анна':'῎Αννας',
'антип':'᾽Αντίπα',
'антон':'᾽Αντωνίου',
'антонида':'᾽Αντωνίνας',
'антоний':'᾽Αντωνίου',
'антонин':'᾽Αντωνίνου',
'антонина':'᾽Αντωνίνας',
'антония':'᾽Αντωνίας',
'анфиса':'᾽Ανθῆς',
'аполлинарии':'Απολλινάρια',
'аполлинарий':'᾽Απολλιναρίου',
'аполлинария':'᾽Απολλιναρίας',
'аполлон':'᾽Απόλλωνος',
'арефа':'Αρέθας',
'арефий':'᾽Αρέφα',
'ариадна':'᾽Αριάδνας',
'аристарх':'᾽Αριστάρχου',
'аристидис':'Αριστείδης',
'аркадий':'᾽Αρκαδίου',
'арсений':'᾽Αρσενίου',
'артем':'᾽Αρτεμίου',
'артемий':'᾽Αρτεμίου',
'артур':'Ἀρτεμίου',
'аруса':'Ἀρούσας',
'архелая':'Αρχελαΐα',
'архип':'᾽Αρχίππου',
'аскольд':'᾽Ασκόλδου',
'асон':'Άσον',
'ася':'Άσια',
'афанасий':'᾽Αθανασίου',
'афиноген':'᾽Αθηνογένους',
'бажен':'Μπαζέν',
'беатриса':'Βεατρικῆς',
'берта':'Μπέρτας',
'богдан':'Μπογντάνου',
'болеслав':'Μπολεσλάβου',
'борис':'Μπόρις',
'борислав':'Μπορισλάβου ',
'борислава':'Μπορισλάβας',
'боян':'Μπογιάνου',
'бронислав':'Μπρονισλάβου ',
'бронислава':'Μπρονισλάβας',
'будимир':'Μπουδιμήρου',
'вадим':'Βαδήμου',
'валентин':'Βαλεντίνου',
'валентина':'Βαλεντίνας',
'валериан':'Βαλεριανός',
'валерий':'Βαλερίου',
'валерия':'Βαλερίας',
'валерьян':'Βαλεριανοῦ',
'ванда':'Βάνδας',
'варвара':'Βαρβάρας',
'варлаам':'Βαρλαάμ',
'варнава':'Βαρνάβα',
'варфоломей':'Βαρθολομαίου',
'василий':'Βασιλείου',
'василики':'Βασιλικῆς',
'василина':'Βασιλικῆς',
'василиса':'Βασιλίσσης',
'василисса':'Βασίλισσα',
'васса':'Βάσσας',
'вахтанг':'Βαχτάνγκ',
'вацлав':'Βατσλάβου',
'велимир':'Βελιμήρου',
'венедикт':'Βενεδίκτου',
'вениамин':'Βενιαμίν',
'вера':'Πιστέως',
'вероника':'Βερονίκης',
'викентий':'Βικεντίου',
'виктор':'Βίκτωρος',
'викторин':'Βικτορίνου',
'викторина':'Βικτορίνας',
'виктория':'Βικτωρίας',
'виолетта':'Βιολέτα',
'виргиния':'Βιργινίας',
'виринея':'Βιρινέας',
'виссарион':'Βησσαρίωνος',
'виталий':'Βιταλίου',
'влада':'Βλαδισλάβας',
'владилен':'Βλαδιλένου',
'владилена':'Βλαδιλένας',
'владимир':'Βλαδιμήρου',
'владислав':'Βλαδισλάβου ',
'владислава':'Βλαδισλάβας',
'владлен':'Βλαδλένου',
'владлена':'Βλαδλένας',
'влас':'Βλασίου',
'власий':'Βλασίου',
'власта':'Βλάστας',
'вонифатий':'Βονιφατίου',
'всеволод':'Βσέβολοντ',
'всемил':'Βσεμίλου',
'всеслав':'Βσεσλάβου ',
'всеслава':'Βσεσλάβας',
'вышеслав':'Βισεσλάβου',
'вячеслав':'Βιατσεσλάβου',
'гавриил':'Γαβριήλ',
'галактион':'Γαλακτίωνος',
'галина':'Γαλήνης',
'галя':'Γαλήνης',
'ганна':'Ἄννης',
'гедеон':'Γεδεών',
'геннадий':'Γενναδίου',
'генриетта':'Γενριέττας',
'георгий':'Γεωργίου',
'георгия':'Γεωργίας',
'герасим':'Γερασίμου',
'гервасий':'Γερβασίου',
'герман':'Γερμανοῦ',
'гермоген':'Ερμογένης',
'геронтия':'Γεροντία',
'глафира':'Γλαφύρας',
'глеб':'Γκλέμπ',
'гликерия':'Γλυκερία',
'гликерья':'Γλυκερία',
'гордей':'Γορδίου',
'горислава':'Γορισλάβου',
'гостомысл':'Γοστομίσλου',
'грант':'Γκραντ',
'гремислав':'Γρεμισλάβου',
'григорий':'Γρηγορίου',
'гурий':'Γουρίου',
'давид':'Δαβίδ',
'давыд':'Δαβίδ',
'дамиан':'Δαμιανοῦ',
'даниил':'Δανιήλ',
'данила':'Δανιήλ',
'дария':'Δαρείας',
'дарья':'Δαρείας',
'дементий':'Δομετίου',
'демид':'Διαμίδου',
'демьян':'Δαμιανοῦ',
'денис':'Διονυσίου',
'диана':'Διάννας',
'димитрий':'Δημητρίου',
'дина':'Δίνας',
'дионисий':'Διονυσίου',
'дмитрий':'Δημητρίου',
'добромысл':'Ντομπρομίσλου',
'доброслав':'Ντομπροσλάβου',
'доминика':'Δομινίκης',
'домна':'Δόμνας',
'дорофей':'Δωροθέου',
'дорофея':'Δωροθέας',
'ева':'Εὔας',
'еввулы':'Εὐβούλας',
'евгений':'Εὐγενίου',
'евгения':'Εὐγενίας',
'евграф':'Εὐγράφου',
'евдоким':'Εὐδοκίμου',
'евдокия':'Εὐδοκίας',
'евлампий':'Εὐλαμπίου',
'евлампия':'Εὐλαμπίας',
'евлогий':'Εὐλογίου',
'евсевий':'Εὐσεβίου',
'евсевия':'Εὐσεβίας',
'евстафий':'Εὐσταθίου',
'евстигней':'Εὐσιγνίου',
'евстолия':'Εὐστολίας',
'евфимия':'Εὐθυμίας',
'егор':'Γεωργίου',
'екатерина':'Αἰκατερίνης',
'елена':'῾Ελένης',
'елизавета':'᾽Ελισάβετ',
'елизар':'᾽Ελεάζαρ',
'еликонида':'Ελικονίδα',
'елисавета':'Ἐλισάβετ',
'елисей':'᾽Ελισσαίου',
'емельян':'Αἰμιλιανοῦ',
'емилия':'Αἰμιλίας',
'епифан':'᾽Επιφανίου',
'епифаний':'᾽Επιφανίου',
'епраксия':'Εὐπραξίας',
'еремей':'᾽Ιερεμίου',
'ермил':'᾽Ερμύλου',
'ермолай':'᾽Ερμολάου',
'еротиида':'᾽Ερωτηΐδας',
'ерофей':'᾽Ιεροθέου',
'ефим':'Εὐθυμίου',
'ефимий':'Εὐθυμίου',
'ефимия':'Ευθυμία',
'ефрем':'᾽Εφραίμ',
'ефросиния':'Εὐφροσύνης',
'ефросинья':'Εὐφροσύνης',
'жанна':'᾽Ιωάννας',
'захар':'Ζαχαρίου',
'захарий':'Ζαχαρίας',
'захария':'Ζαχαρίου',
'зинаида':'Ζηναΐδας',
'зиновий':'Ζηνοβίου',
'злата':'Χρυσῆς',
'зосим':'Ζωσιμᾶ',
'зосима':'Ζωσιμᾶ',
'зоя':'Ζωῆς',
'иакинф':'῾Υακίνθου',
'иаков':'Ἰακώβου',
'иван':'᾽Ιωάννου',
'игнат':'Ἰγνατίου',
'игнатий':'᾽Ιγνατίου',
'игнатия':'Ἰγνατίας',
'игорь':'᾽Ιγκόρ',
'иероним':'Ἰερονύμου',
'изабелла':'᾽Ισαβέλλας',
'измаил':'᾽Ισμαήλ',
'изольда':'᾽Ισόλδας',
'изот':'Ζωτικοῦ',
'изяслав':'᾽Ιζιασλάβου',
'иларион':'᾽Ιλαρίωνος',
'илия':'᾽Ηλιοῦ',
'илья':'᾽Ηλιοῦ',
'инга':'῎Ινγκας',
'инесса':'᾽Ινέσσας',
'инна':'῎Ιννας',
'иннокентий':'᾽Ιννοκεντίου',
'иоанн':'᾽Ιωάννου',
'иоанна':'᾽Ιωάννας',
'иоанникий':'᾽Ιωαννικίου',
'иоасаф':'᾽Ιωάσαφ',
'иов':'Ἰώβ',
'иосиф':'᾽Ιωσήφ',
'ипат':'῾Υπατίου',
'ипатий':'῾Υπατίου',
'иполита':'Ιππόλυτος',
'ипполит':'᾽Ιππολύτου',
'ираида':'Ραΐδος',
'ираклий':'῾Ηρακλέως',
'ирина':'Εἰρήνης',
'ириней':'Εἰριναίου',
'исай':'᾽Ησαΐου',
'исидор':'᾽Ισιδώρου',
'исидора':'Ἰσιδώρας',
'иулиания':'Ιουλιανή',
'иулия':'Ἰουλίας',
'ия':'Εὐδοκίας',
'казимир':'Καζιμίρου',
'казимира':'Καζιμήρας',
'калерия':'Βαλερίας',
'калин':'Κάλιν',
'калинник':'Καλλινίκου',
'каллистрат':'Καλλιστράτου',
'капитолина':'Καπιτωλίνας',
'капитон':'Καπίτωνος',
'карен':'Καρέν',
'кариена':'Καριένα',
'карина':'Καρίνας',
'карл':'Καρόλου',
'каролина':'Καρολίνας',
'карп':'Κάρπου',
'касьян':'Κασσιανού',
'ким':'Κίμωνος',
'киприан':'Κυπριανός',
'киприян':'Κυπριανοῦ',
'кир':'Κύρου',
'кира':'Κύρας',
'кириена':'Καριένα',
'кирилл':'Κύριλλου',
'кирилла':'Κυρίλλου',
'клавдий':'Κλαυδίου',
'клавдия':'Κλαυδίας',
'клара':'Κλάρας',
'кларисса':'Λαρίσσης',
'клементий':'Κλήμεντος',
'клементина':'Κλημεντίνας',
'клеопа':'Κλεόπα',
'клеопатра':'Κλεοπάτρας',
'клим':'Κλήμεντος',
'климент':'Κλήμεντος',
'кондрат':'Κοδράτου',
'кондратий':'Κοδράτου',
'конкордия':'Κονκορδίας',
'конон':'Κόνωνος',
'константин':'Κωνσταντίνου',
'корней':'Κορνηλίου',
'корнил':'Κορνηλίου',
'корнилий':'Κορνηλίου',
'кристина':'Χριστίνας',
'ксения':'Ξένης',
'кузьма':'Κοσμᾶ',
'кутоний':'Κουτόνιι',
'лавр':'Λαύρου',
'лаврентий':'Λαυρεντίου',
'лада':'Λάδας',
'ладимир':'Λαδιμίρου',
'ладислав':'Λαδισλάβου',
'лазарь':'Λαζάρου',
'лариса':'Λαρίσης',
'лев':'Λέωντος',
'леокадия':'Λεοκαρίας',
'леон':'Λέωντος',
'леонид':'Λεωνίδου',
'леонтий':'Λεοντίου',
'леся':'Ἀλεξάνδρας',
'лиана':'Λιάνας',
'ливия':'Λιβία',
'лидия':'Λυδίας',
'лика':'Λίκα',
'лилиана':'Λιλιάνας',
'лилия':'Λείας',
'лия':'Λείας',
'лонгин':'Λογγίνου',
'лоре':'Λόρε',
'луиза':'Λουίσας',
'лука':'Λουκᾶ',
'лукерья':'Γλυκερἰας',
'лукьян':'Λουκιανοῦ',
'лучезар':'Λουτσεζάρου',
'любава':'Λιουμπάβας',
'любим':'Λιουμπίμου',
'любовь':'᾽Αγάπης',
'любомила':'Λιουμπομίλας',
'любомир':'Λιουμπομήρου',
'любомира':'Λιουμπομήρας',
'любосмысл':'Λιουμποσμίσλου',
'людмила':'Λιουντμίλας',
'мавра':'Μαύρας',
'магдалина':'Μαγδαλήνης',
'майя':'Μάγια',
'макар':'Μακαρίου',
'максим':'Μαξίμου',
'максимильян':'Μαξιμιλιανοῦ',
'мальвина':'Μαλβίνας',
'манефа':'Μανέφα',
'мануил':'Ἐμμανουήλ',
'маргарита':'Μαργαρίτας',
'маргариты':'Μαργαρίτα',
'мариан':'Μαριάνου',
'марианна':'Μαριάννας',
'мариетта':'Μαριέττας',
'марина':'Μαρίνας',
'марионилла':'Μαριονίλλα',
'марис':'Μαρίου',
'мария':'Μαρίας',
'марк':'Μάρκου',
'маркелл':'Μάρκελλος',
'маркиан':'Μαρκιανοῦ',
'марта':'Μάρτας',
'мартин':'Μαρτίνου',
'мартын':'Μαρτίνου',
'мартьян':'Μαρτινιανού',
'марфа':'Μάρθας',
'матвей':'Ματθαίου',
'матрена':'Ματρόνας',
'матрона':'Ματρώνας',
'матфей':'Ματθαίου',
'мелания':'Μελανία',
'меланья':'Μελάνης',
'мелитриса':'Μελετρίσας',
'мефодий':'Μεθοδίου',
'мечислав':'Μετσισλάβ',
'миан':'Δαμιανοῦ',
'милан':'Μιλάνου',
'милана':'Μιλάνας',
'милен':'Μιλένου',
'милена':'Μιλένας',
'милий':'Μηλίου',
'милица':'Μιλίτσας',
'милован':'Μιλοβάνου',
'мина':'Μηνᾶ',
'мир':'Μύρωνος',
'мирон':'Μύρωνος',
'миропия':'Μυροπίας',
'мирослав':'Μιροσλάβου',
'мирослава':'Μιροσλάβας',
'мирра':'Μύρρας',
'митрофан':'Μητροφάνους',
'михаил':'Μιχαήλ',
'михей':'Μιχαίου',
'млада':'Μλάντας',
'модест':'Μοδέστου',
'моисей':'Μωϋσέως',
'мокей':'Μωκίου',
'мстислав':'Μστισλάβου',
'мстислава':'Μστισλάβας',
'муза':'Μούσας',
'надежда':'᾽Ελπίδος',
'назар':'Ναζαρίου',
'нарина':'Ναρίνα',
'наркис':'Ναρκίσσου',
'наталия':'Ναταλίας',
'наталья':'Ναταλίας',
'натан':'Ναθαναήλ',
'наум':'Ναούμ',
'нектарий':'Νεκταρίου',
'неонила':'Νεονήλας',
'неофит':'Νεοφίτου',
'нестор':'Νέστωρα',
'ника':'Νίκης',
'никандр':'Νικάνδρου',
'никанор':'Νικάνωρος',
'никита':'Νικήτα',
'никифор':'Νικηφόρου',
'никодим':'Νικοδήμου',
'николай':'Νικολάου',
'никон':'Νίκωνος',
'нил':'Νείλος',
'нина':'Νίνης',
'нинель':'Νινέλ',
'нифон':'Νήφων',
'нифонт':'Νήφωνος',
'нона':'Νόννας',
'нонна':'Νόννας',
'оксана':'Ξένης',
'октябрина':'᾽Οκτωβρίνας',
'олег':'᾽Ολέγκ',
'олесь':'Ἀλεξάνδρου',
'олеся':'Ἀλεξάνδρας',
'олимпиада':'᾽Ολυμπιάδας',
'олимпий':'᾽Αλυπίου',
'ольга':'῎Ολγας',
'ониси':'Ονησι',
'онисим':'᾽Ονησίμου',
'онуфрий':'᾽Ονουφρίου',
'орест':'᾽Ορέστη',
'орфей':'Ορφέας',
'осип':'᾽Ιωσήφ',
'остап':'Εὐσταθίου',
'остромир':'᾽Οστρομίρου',
'павел':'Παύλου',
'паисий':'Παϊσίου',
'паисия':'Παϊσίας',
'панайот':'Παναγιώτου',
'панкрат':'Παγκρατίου',
'панкратий':'Παγκρατίου',
'пантелеимон':'Παντελεήμονος',
'пантелеймон':'Παντελεήμονος',
'панфил':'Παμφίλου',
'парамон':'Παραμόνου',
'параскева':'Παρασκευῆς',
'парфен':'Παρθενίου',
'парфена':'Παρθένα',
'парфений':'Παρθενίου',
'парфения':'Παρθενία',
'пахом':'Παχωμίου',
'пахомий':'Παχωμίου',
'пелагея':'Πελαγίας',
'петр':'Πέτρου',
'пимен':'Ποιμένος',
'питирим':'Πιτηρίμου',
'платон':'Πλάτωνος',
'поликарп':'Πολυκάρπου',
'поликсена':'Πολυξένης',
'полина':'᾽Απολλιναρίας',
'порфирий':'Πορφυρίου',
'потап':'Παταπίου',
'прасковья':'Παρασκευῆς',
'пров':'Πρόβου',
'прокл':'Πρόκλου',
'прокопий':'Προκόπιος',
'прокофий':'Προκοπίου',
'прохор':'Προχόρου',
'пульхерия':'Πουλχερίας',
'рада':'Ράδας',
'радим':'Ραντίμου',
'радислав':'Ραντισλάβ',
'радмила':'Ραντμίλας',
'радован':'Ραντοβάνου',
'раиса':'Ραΐδος',
'ратибор':'Ρατιμπόρ',
'ратмир':'Ρατμίρ',
'рафаил':'Ραφαήλ',
'регина':'Ρεγίνας',
'рената':'Ρενάτας',
'римма':'Ρήμμας',
'рогнеда':'Ρογνέντας',
'родион':'Ροδίωνος',
'роза':'Ρόζας',
'розалия':'Ροζαλίας',
'розина':'Ροζίνας',
'роман':'Ρωμανοῦ',
'ростислав':'Ροστισλαβ',
'ростислава':'Ροστισλάβας',
'руслан':'Ρουσλάνου',
'рустик':'Ρούστικ',
'руфин':'Ρουφίνου',
'рюрик':'Ριούρικ',
'савва':'Σάββα',
'савватий':'Σαββατίου',
'савелий':'Σαβελίου',
'саломея':'Σαλώμης',
'самсон':'Σαμψῶν',
'самуил':'Σαμουῆλ',
'сарматия':'Σαρματίας',
'светлана':'Φωτεινῆς',
'светозар':'Σβετοζάρου',
'святополк':'Σβιατοπόλκου',
'святослав':'Σβιατοσλάβου',
'севастьян':'Σεβαστιανοῦ',
'селиван':'Σιλβάνου',
'селиверст':'Σιλβέστρου',
'семен':'Συμεῶν',
'серафим':'Σεραφείμ',
'серафима':'Σεραφίμας',
'сергей':'Σεργίου',
'сергий':'Σεργίου',
'сергия':'Σεργίας',
'сигизмунд':'Σιγκιζμούντ',
'сидор':'Ισιδώρου',
'сила':'Σίλα',
'силантий':'Σιλαντίου',
'силуан':'Σιλουανοῦ',
'силуана':'Σιλουάνας',
'сильва':'Σίλβας',
'сильвестр':'Σιλβέστρου',
'сильвия':'Σιλβίας',
'симон':'Σίμωνος',
'сократ':'Σωκράτου',
'соломия':'Σολομία',
'соломон':'Σολομώντος',
'соломония':'Σολομονίας',
'софия':'Σοφίας',
'софон':'Σοφονίου',
'софрон':'Σωφρονίου',
'софья':'Σοφίας',
'спартак':'Σπαρτάκου',
'спиридон':'Σπυρίδωνος',
'станимир':'Στανιμίρου',
'станислав':'Στανισλάβου',
'станислава':'Στανισλάβας',
'стела':'Στυλιανῆς',
'степан':'Στεφάνου',
'степанида':'Στεφανίδας',
'стефан':'Στεφάνου',
'стефанида':'Στεφανίδας',
'стефаниды':'Στεφανίδα',
'стоян':'Στογιάνου',
'стратоник':'Στρατόνικος',
'сусанна':'Σουζάνας',
'тавифа':'Ταβιθά',
'таисия':'Ταϊσίας',
'тамара':'Ταμάρας',
'тарас':'Ταρασίου',
'татьяна':'Τατιανῆς',
'твердислав':'Τβερντισλάβου',
'творимир':'Τβοριμίρου',
'теофил':'Θεόφιλος',
'терентий':'Τερεντίου',
'тимофей':'Τιμοθέου',
'тимур':'Τιμοθέου',
'тит':'Τίτου',
'тихон':'Τύχωνος',
'трифон':'Τρύφωνος',
'трофим':'Τροφίμου',
'ульян':'᾽Ιουλιανοῦ',
'ульяна':'᾽Ιουλιανῆς',
'устин':'᾽Ιουστίνου',
'фаддей':'Θαδδαίου',
'фадей':'Θαδδαίου',
'фаина':'Φαεινῆς',
'фатина':'Φωτεινῆς',
'феврония':'Φεβρονίας',
'федор':'Θεοδώρου',
'федосий':'Θεοδοσίου',
'федосья':'Θεοδοσίας',
'федот':'Θεοδότου',
'фекла':'Θέκλης',
'феликс':'Φέλιξ',
'фелицата':'Φελιτσιτάτας',
'феогност':'Θεογνώστου',
'феодор':'Θεοδώρου',
'феодора':'Θεοδώρας',
'феодосий':'Θεοδοσίου',
'феодосия':'Θεοδοσίας',
'феодосья':'Θεοδοσία',
'феодот':'Θεοδότου',
'феоктист':'Θεοκτίστου',
'феофан':'Θεοφάνους',
'феофил':'Θεόφιλος',
'ферапонт':'Θεράποντος',
'фива':'Φοίβη',
'филарет':'Φιλαρέτου',
'филимон':'Φιλήμωνος',
'филипп':'Φιλίππου',
'филофей':'Φιλόθεος',
'фирс':'Φύρσου',
'флор':'Φλώρου',
'флора':'Φλώρας',
'флорентин':'Φλωρεντίνου',
'флорентина':'Φλωρεντίνας',
'фока':'Φωκᾶ',
'фома':'Θωμᾶ',
'фортунат':'Φορτουνάτου',
'фотий':'Φωτίου',
'фотиния':'Φωτεινῆς',
'фрол':'Φλώρου',
'харитина':'Χαριτίνης',
'харитины':'Χαριτίνη',
'харитон':'Χαρίτωνος',
'харлампий':'Χαραλάμπους',
'хиония':'Χιονία',
'хота':'Χοτα',
'христина':'Χριστίνης',
'христофор':'Χριστοφόρου',
'чеслав':'Τσεσλάβου',
'шушанна':'Σουσάννα',
'эвелина':'᾽Εβελίνας',
'эдуард':'᾽Εδουάρδου',
'элеонора':'᾽Ελεονώρας',
'эльвира':'᾽Ελβίρας',
'эмилия':'Αἰμιλίας',
'эмиль':'Αἰμιλίου',
'эмма':'Ἔμμας',
'эммануил':'᾽Εμμανουήλ',
'эраст':'᾽Εράστου',
'эрнест':'᾽Ερνέστου',
'ювеналий':'᾽Ιουβεναλίου',
'юдифьи':'Ιουδήθ',
'юкке':'Γιούκκε',
'юлиан':'᾽Ιουλιανοῦ',
'юлий':'᾽Ιουλίου',
'юлия':'᾽Ιουλίας',
'юрий':'Γεωργίου',
'яков':'᾽Ιακώβου',
'якуб':'᾽Ιακώβου',
'ян':'᾽Ιωάννου',
'яна':'Ἰωάννας',
'янина':'Γιάνινα',
'янис':'Ἰωάννου',
'янна':'᾽Ιωάννας',
'януарий':'᾽Ιανουαρίου',
'ярополк':'Γιαροπόλκου',
'ярослав':'Γιαροσλάβου',
'ярослава':'Γιαροσλάβας'
};
var greekTitles = {
'архидиакон':'ἀρχιδιακόνου',
'архиепископ':'ἀρχιερέως',
'архимандрит':'ἱερομονάχου',
'болящая':'ἀσθενούσης',
'болящий':'ἀσθενούς',
'диакон':'διακόνου',
'епископ':'ἀρχιερέως',
'игумен':'ἱερομονάχου',
'игумения':'ἡγουμένης',
'иерей':'ἱερέως',
'иеродиакон':'ἱεροδιακόνου',
'иеромонах':'ἱερομονάχου',
'митрополит':'ἀρχιερέως',
'младенец':'νηπίου',
'монах':'μοναχοῦ',
'монахиня':'μοναχῆς',
'патриарх':'ἀρχιερέως',
'послушник':'δοκίμου μοναχοῦ',
'послушница':'δοκίμου μοναχῆς',
'протодиакон':'διακόνου',
'протоиерей':'ἰερέως',
'священник':'ἰερέως',
'со чадами':'και τέκνων'};


//типы записок по-русски
  var MAX_TYPES_ID = 4;
  var rusNotes = {
    0:'О здравии',
    1:'О упокоении',
    2:'Молебен Всецарице',
    3:'Сорокоуст',
    4:'Молебен Богородице'
    };

//типы записок по-гречески
  var greNotes = {
    0:'Υπέρ Υγείας',
    1:'Υπέρ Αναπαύσεως',
    2:'Παράκληση στην Παναγία Παντάνασσα',
    3:'Σαρανταλείτουργο',
    4:'Παράκληση στην Παναγία'
    };

//преобразование в род.падеж
function intoGenCase(n){
if (!rusMode || !document.getElementById("cb1").checked)
  return n;
switch (n) {
  case 'болящая':  return 'болящей';
  case 'болящий':  return 'болящего';
  case 'младенец': return 'младенца';
  case 'павел':    return 'павла';
}
var n1 = n.substring(0,n.length-1);
var n2 = n.substring(n.length-2,n.length);
if (n2=='ка' || n2=='га' || n2=='ша' || n2=='ща' || n2=='ча') //анжелика, ольга
  return n1+'и';
var c = n[n.length-1];
switch (c)
  {
  case 'ь':
    {
    if (n=='любовь' || n=='нинель')
      n = n1+'и';
    else
      n = n1+'я'; //игорь, лазарь, эмиль, олесь, авель
    break;
    }
  case 'й': //николай, андрей
    {
    n = n1+'я';
    break;
    }
  case 'а': //марфа, анна
    {
    n = n1+'ы';
    break;
    }
  case 'я':  //мария, валерия
    {
    n = n1+'и';
    break;
    }
  default:
    {
    if ('цкнгвпрлджчсмтбшщфхз'.indexOf(c)>=0)
      n = n+'а';
    }
  }
return n;
}

//преобразование из род.падежа
function fromGenCase(n){
switch (n) {
  case 'болящей':  return 'болящая';
  case 'болящего': return 'болящий';
  case 'младенца': return 'младенец';
  case 'павла':    return 'павел';
}
var n1 = n.substring(0,n.length-1);
var n2 = n.substring(n.length-2,n.length);
if (n2=='ки' || n2=='ги' || n2=='ши' || n2=='щи' || n2=='чи') //анжелика, ольга
  return n1+'а';
if (n2=='ви' || n2=='ли') //любовь, нинель
  return n1+'ь';
if (n2=='ля' || n2=='ря' || n2=='ся') //игорь, лазарь, эмиль, олесь, авель
  return n1+'ь';
var c = n[n.length-1];
switch (c)
  {
  case 'я': //николай, андрей, харлампий и т.д.
    {
    n = n1+'й';
    break;
    }
  case 'ы': //марфа, анна, савва
    {
    n = n1+'а';
    break;
    }
  case 'и':  //мария, валерия
    {
    n = n1+'я';
    break;
    }
  case 'а':
    {
    if ('цкнгвпрлджчсмтбшщфхз'.indexOf(n2[0])>=0)
      n = n1;
    }
  }
return n;
}

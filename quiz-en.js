/* ============================================================
   ENERGY STORAGE SYSTEM TESTING — QUESTION BANK (English)
   ============================================================
   HOW TO UPDATE THE BANK:
   - Edit THIS file (quiz-en.js), save, then reopen exam-en.html.
   - You do NOT need to touch exam-en.html.
   -
   - Each question is an object. Three types are supported:
   -
   -   single:    { id, chapter, type:'single', q, opts:[...], ans:'B', exp }
   -   truefalse: { id, chapter, type:'truefalse', q, ans:true, exp }
   -   multi:     { id, chapter, type:'multi', q, opts:[...], ans:['A','C'], exp }
   -
   - - ans letters map to opts order: A = 1st option, B = 2nd, ...
   - - truefalse has NO opts (True/False shown automatically); ans is true or false.
   - - chapter must match one of the CHAPTERS ids below.
   ============================================================ */

const CHAPTERS = [
  { id: 1, title: "Energy Storage System Testing" }
  // To add more chapters later, append here, e.g. { id: 2, title: "..." },
  // then set each question's "chapter" field to the matching id.
];

const QUESTIONS = [
  { id:"Q01", chapter:1, type:"single",
    q:"According to DL/T 1194-2012, a BESS consists of a storage battery and a _____.",
    opts:["supercapacitor","shunt voltage-type converter","flywheel","uninterruptible power supply (UPS)"],
    ans:"B",
    exp:"A BESS is an energy storage system consisting of a battery and a shunt (parallel) voltage-type converter (DL/T 1194-2012, 6.22)." },

  { id:"Q02", chapter:1, type:"single",
    q:"The first-level pipeline of the liquid-cooling system adopts which scheme?",
    opts:["top-in bottom-out","bottom-in bottom-out","top-in top-out","side-in side-out"],
    ans:"B",
    exp:"The first-level pipeline uses a 'bottom-in bottom-out' scheme to ensure uniform PACK flow; pipes are wrapped with insulation foam to prevent condensation." },

  { id:"Q03", chapter:1, type:"single",
    q:"The fire suppression system of an electrochemical storage cabin consists of how many main parts?",
    opts:["two","three","four","five"],
    ans:"C",
    exp:"Four parts: fire main engine; cabin-level combustible detector / smoke / temperature sensors; sound-light alarm + intake/exhaust system; water spray system." },

  { id:"Q04", chapter:1, type:"single",
    q:"What is the main function of the Local Controller (LC)?",
    opts:["AC/DC power conversion","monitor local device status and execute strategy-based actions, plus record data","accept external grid dispatch","acquire cell temperature only"],
    ans:"B",
    exp:"The LC monitors local device status, performs actions according to strategy, and records data." },

  { id:"Q05", chapter:1, type:"truefalse",
    q:"A DC cabin integrates the PCS inside the cabin.",
    ans:false,
    exp:"False. A DC cabin has the PCS external; an AC cabin integrates the PCS (and an optional transformer) inside." },

  { id:"Q06", chapter:1, type:"truefalse",
    q:"An AC cabin can independently realize energy storage, conversion and release.",
    ans:true,
    exp:"True. An AC cabin integrates the battery array, BMS, auxiliary systems, PCS and an optional transformer, so it can independently store/convert/release energy." },

  { id:"Q07", chapter:1, type:"truefalse",
    q:"The EMS is responsible for charge/discharge control and accepts external dispatch.",
    ans:true,
    exp:"True. The EMS handles system charge/discharge control, accepts external scheduling, and interacts with local controllers." },

  { id:"Q08", chapter:1, type:"multi",
    q:"Which of the following are typical components of a battery cabin?",
    opts:["Cells / modules / racks","BMS and high-voltage box (BDU)","Distribution cabinet and bus cabinet","Liquid cooling / air conditioner and fire protection system"],
    ans:["A","B","C","D"],
    exp:"A battery cabin contains modules, AC, battery racks/wiring, fire protection, BDU, racks, cells, BMS, cooling machine, and distribution/bus cabinets." },
  { id:"Q09", chapter:1, type:"single",
    q:"In the BMS three-level architecture, which level acquires Pack cell voltage/current/temperature and performs thermal management and passive balancing?",
    opts:["BAU","BCU","BMU","PCS"],
    ans:"C",
    exp:"BMU acquires Pack cell data and provides thermal management and passive balancing." },

  { id:"Q10", chapter:1, type:"single",
    q:"What is the BCU voltage acquisition range?",
    opts:["0–50V","9–32V","50V–1500V","0–1500V"],
    ans:"C",
    exp:"BCU voltage acquisition is 50V–1500V (±0.5%); 9–32V is its working voltage — do not confuse them." },

  { id:"Q11", chapter:1, type:"single",
    q:"When severe over-voltage, under-voltage, over-current (short circuit) or leakage (insulation) occurs, which level controls the cluster breaking?",
    opts:["BMU","BCU","BAU","EMS"],
    ans:"B",
    exp:"The BCU controls the breaking of the battery cluster under such abnormal faults." },

  { id:"Q12", chapter:1, type:"single",
    q:"Which level performs numerical calculation, performance analysis and alarm processing on data uploaded by BMU and BCU?",
    opts:["BMU","BCU","BAU","PCS"],
    ans:"C",
    exp:"The BAU performs calculation / analysis / alarm / record storage and linkage control with PCS and EMS." },

  { id:"Q13", chapter:1, type:"single",
    q:"What is the BMU balancing current?",
    opts:["10mA","50mA","100mA","500mA"],
    ans:"C",
    exp:"The BMU uses passive balancing with a current of 100mA." },

  { id:"Q14", chapter:1, type:"single",
    q:"How many cells does a BMU manage?",
    opts:["24","36","52","100"],
    ans:"C",
    exp:"A BMU manages 52 cells (voltage balancing range 0–5V, passive balancing current 100mA)." },

  { id:"Q15", chapter:1, type:"truefalse",
    q:"The BMU uses active balancing.",
    ans:false,
    exp:"False. The BMU uses passive balancing (100mA)." },

  { id:"Q16", chapter:1, type:"truefalse",
    q:"The BCU controls cluster breaking when serious over-voltage, under-voltage, over-current or leakage occurs.",
    ans:true,
    exp:"True." },

  { id:"Q17", chapter:1, type:"truefalse",
    q:"The BAU performs linkage control with PCS and EMS.",
    ans:true,
    exp:"True. The BAU links with PCS, EMS, etc." },
  { id:"Q18", chapter:1, type:"single",
    q:"What is the core power device inside the PCS for AC/DC conversion?",
    opts:["IGBT","relay","fuse","contactor"],
    ans:"A",
    exp:"The IGBT is the core power switching device implementing AC/DC conversion inside the PCS." },

  { id:"Q19", chapter:1, type:"single",
    q:"A liquid-cooled cabin has a rated energy of 3354 kWh. At the 0.5P rate, what is the maximum operating power?",
    opts:["838.5 kW","1677 kW","3354 kW","6717 kW"],
    ans:"B",
    exp:"0.5P = 3354 × 0.5 = 1677 kW." },

  { id:"Q20", chapter:1, type:"single",
    q:"A 1P rate means the system can fully discharge the rated energy in _____.",
    opts:["0.5 hour","1 hour","2 hours","4 hours"],
    ans:"B",
    exp:"1P means fully discharging the rated energy in 1 hour; 0.5P takes 2 hours." },

  { id:"Q21", chapter:1, type:"single",
    q:"What is the purpose of anti-islanding protection?",
    opts:["improve efficiency","stop feeding power to the grid when the grid is down","balance cells","limit charge current"],
    ans:"B",
    exp:"Anti-islanding protection makes the PCS stop feeding the grid when it is de-energized, protecting maintenance personnel." },

  { id:"Q22", chapter:1, type:"truefalse",
    q:"The PCS can regulate both active and reactive power.",
    ans:true,
    exp:"True. The PCS can rapidly regulate active and reactive power exchange with the AC system." },

  { id:"Q23", chapter:1, type:"truefalse",
    q:"In off-grid mode, the PCS uses V/f control to maintain voltage amplitude and frequency.",
    ans:true,
    exp:"True. Off-grid V/f control keeps voltage amplitude (V) and frequency (F) constant." },

  { id:"Q24", chapter:1, type:"multi",
    q:"Which of the following are PCS control functions?",
    opts:["Grid-connected constant-power charge/discharge","Grid-connected constant voltage","Current-limiting charge","Off-grid V/f control","Reactive power regulation"],
    ans:["A","B","C","D","E"],
    exp:"All are PCS control functions (anti-islanding protection is also listed under control in the course)." },

  { id:"Q25", chapter:1, type:"multi",
    q:"Which of the following are PCS protection functions?",
    opts:["Battery polarity reverse protection","DC over-voltage/over-current protection","Grid over/under-voltage protection","Grid over/under-frequency protection","IGBT module over-current/over-temperature protection"],
    ans:["A","B","C","D","E"],
    exp:"All are PCS protection functions (plus grid over-current protection)." },
  { id:"Q26", chapter:1, type:"single",
    q:"The insulation resistance test is based on which law?",
    opts:["Kirchhoff's law","Ohm's law","Joule's law","Lenz's law"],
    ans:"B",
    exp:"Apply a voltage → measure current → calculate R = U/I using Ohm's law." },

  { id:"Q27", chapter:1, type:"single",
    q:"In a withstand voltage test, pass/fail is judged by _____.",
    opts:["the insulation resistance value","comparing leakage current with a judgment current","the ground resistance","the temperature rise"],
    ans:"B",
    exp:"If leakage current < judgment value → pass; if greater → cut off the voltage and alarm (breakdown)." },

  { id:"Q28", chapter:1, type:"single",
    q:"What does the ground continuity test mainly measure?",
    opts:["insulation resistance","leakage current","ground resistance","contact voltage"],
    ans:"C",
    exp:"Inject a current, measure voltage/current, and calculate the ground resistance; criterion is an upper limit." },

  { id:"Q29", chapter:1, type:"single",
    q:"What is the maximum current of the short-circuit test machine?",
    opts:["1200 A","6000 A","12000 A","200 kN"],
    ans:"C",
    exp:"Short-circuit tester: 0–100 mΩ, 0–12000 A. 200 kN is the pressure of the needling/extrusion tester." },

  { id:"Q30", chapter:1, type:"single",
    q:"What is the pressure range of the needling/extrusion test machine?",
    opts:["0–100 kN","0–200 kN","0–1000 kN","0–12000 A"],
    ans:"B",
    exp:"Needling/extrusion tester: speed 0.05–100 mm/s, pressure 0–200 kN." },

  { id:"Q31", chapter:1, type:"truefalse",
    q:"In a withstand voltage test, if the leakage current is greater than the judgment current, the device passes.",
    ans:false,
    exp:"False. It fails — the test voltage is cut off and a sound-light alarm is issued." },

  { id:"Q32", chapter:1, type:"truefalse",
    q:"Insulation resistance is calculated by applying a voltage, measuring the resulting current, and using Ohm's law.",
    ans:true,
    exp:"True." },

  { id:"Q33", chapter:1, type:"truefalse",
    q:"The pass criterion of the ground continuity test is a resistance upper limit (the lower the ground resistance, the better).",
    ans:true,
    exp:"True. A lower ground resistance means fault current can be safely discharged." },

  { id:"Q34", chapter:1, type:"multi",
    q:"Which of the following are the three electrical safety (dielectric) tests?",
    opts:["Insulation resistance test","Withstand voltage test","Ground continuity test","Vibration test","Drop test"],
    ans:["A","B","C"],
    exp:"The three safety tests are insulation resistance, withstand voltage and ground continuity; vibration/drop are mechanical safety tests." },
  { id:"Q35", chapter:1, type:"single",
    q:"The V-model evolved from which development model?",
    opts:["Waterfall model","Rapid Application Development (RAD) model","Spiral model","Agile model"],
    ans:"B",
    exp:"The V-model evolved from the RAD (Rapid Application Development) model." },

  { id:"Q36", chapter:1, type:"single",
    q:"In performance testing, at least how many full charge/discharge cycles must be performed using the PCS?",
    opts:["1","2","3","5"],
    ans:"C",
    exp:"At least 3 complete charge/discharge cycles are required." },

  { id:"Q37", chapter:1, type:"single",
    q:"The Japanese 'Fire Service Hazard 303' standard corresponds to which test?",
    opts:["vibration test","3-meter drop test","needling test","fire test"],
    ans:"B",
    exp:"Japanese 'Fire Service Hazard 303' corresponds to a 3-meter drop test." },

  { id:"Q38", chapter:1, type:"truefalse",
    q:"Energy storage system tests can be classified by test object, test type and test stage.",
    ans:true,
    exp:"True — three classification dimensions." },

  { id:"Q39", chapter:1, type:"truefalse",
    q:"The right side of the V-model includes unit, integration, system and acceptance testing.",
    ans:true,
    exp:"True." },

  { id:"Q40", chapter:1, type:"multi",
    q:"Which of the following are cell-level electrical safety tests?",
    opts:["Overcharge","Overdischarge","Short circuit","Thermal runaway","Heating"],
    ans:["A","B","C","D"],
    exp:"Cell electrical safety: overcharge, overdischarge, short circuit, thermal runaway. Heating is an environmental safety test." },

  { id:"Q41", chapter:1, type:"multi",
    q:"Which of the following are cell-level mechanical safety tests?",
    opts:["Vibration","Drop","Extrusion","Needling","Heating"],
    ans:["A","B","C","D"],
    exp:"Cell mechanical safety: vibration, drop, extrusion, needling. Heating is environmental." },

  { id:"Q42", chapter:1, type:"multi",
    q:"Which of the following are typical DI (digital input) signals?",
    opts:["AC power-on","Mains switch closed","Door access","Emergency stop","Fire alarm"],
    ans:["A","B","C","D","E"],
    exp:"DI includes AC power-on, mains switch, door access, ATS signal, isolation switch, fuse, SPD, water immersion, emergency stop, fire, etc." },

  { id:"Q43", chapter:1, type:"multi",
    q:"Which of the following are typical DO (digital output) signals?",
    opts:["DC power-on","DC fault","Total power cut-off","Stop BMS","Stop PCS"],
    ans:["A","B","C","D","E"],
    exp:"DO includes DC power-on, DC fault, total power cut-off, UPS cut-off, stop BMS, stop PCS, etc." },
  { id:"Q44", chapter:1, type:"single",
    q:"Which standard is the evaluation method for thermal runaway fire spread in battery energy storage systems?",
    opts:["UL 1973","UL 9540","UL 9540A","UL 1642"],
    ans:"C",
    exp:"UL 9540A evaluates thermal runaway fire spread (UL 9540 is the system safety standard)." },

  { id:"Q45", chapter:1, type:"single",
    q:"What is the maximum DC voltage covered by IEC 63056?",
    opts:["1000 V","1200 V","1500 V","3000 V"],
    ans:"C",
    exp:"IEC 63056 applies to secondary lithium batteries for power storage with a maximum DC voltage of 1500 V." },

  { id:"Q46", chapter:1, type:"single",
    q:"GB/T 36276 is a national standard for which market?",
    opts:["EU","Japan","North America","China"],
    ans:"D",
    exp:"GB/T 36276 is the Chinese national standard test for energy storage batteries." },

  { id:"Q47", chapter:1, type:"truefalse",
    q:"UL 9540 is the world's first safety standard for energy storage systems.",
    ans:true,
    exp:"True." },

  { id:"Q48", chapter:1, type:"truefalse",
    q:"UN38.3 is the international transport safety test standard for secondary lithium batteries.",
    ans:true,
    exp:"True." },

  { id:"Q49", chapter:1, type:"multi",
    q:"Energy storage certification is mainly divided into which markets?",
    opts:["CN (China)","JP (Japan)","NA (North America)","EU (Europe)"],
    ans:["A","B","C","D"],
    exp:"Four markets: CN, JP, NA, EU." },

  { id:"Q50", chapter:1, type:"multi",
    q:"Which of the following are common North American (NA) energy storage certification standards?",
    opts:["UL 1973","UL 9540","UL 9540A","UL 1642","IEC 62619"],
    ans:["A","B","C","D"],
    exp:"NA uses UL 1973 / 9540 / 9540A / 1642; IEC 62619 belongs to EU." }

];

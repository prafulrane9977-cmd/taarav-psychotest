// =====================================
// PAGE SWITCHING
// =====================================
const GOOGLE_SHEET_URL =
"https://script.google.com/macros/s/AKfycby7QZZoVYvYYLLZMJ20j8hoMKOLYcDBWNzDYqY7cLo5HRFPF0gxc_3wt4xKbIIG2JWr/exec";
window.onbeforeunload = function()
{
    return "Assessment is running. Leaving this page may lose your progress.";
};
let totalTime = 45 * 60;   // 45 minutes = 2700 seconds

let timerInterval;

function showPage(pageId)
{
    let pages = document.getElementsByClassName("page");

    for(let i=0;i<pages.length;i++)
    {
        pages[i].style.display = "none";
    }

    document.getElementById(pageId).style.display = "block";

    window.scrollTo(0,0);
}


// =====================================
// REGISTRATION PAGE
// =====================================

function goToInstructions()
{
    let studentName = document.getElementById("studentName").value.trim();
    let studentClass = document.getElementById("studentClass").value;
    let mobileNumber = document.getElementById("mobileNumber").value.trim();
    let schoolName = document.getElementById("schoolName").value.trim();

    if(studentName === "")
    {
        alert("Student Name missing");
        return;
    }

    if(studentClass === "")
    {
        alert("Class missing");
        return;
    }

    if(mobileNumber === "")
    {
        alert("Mobile Number missing");
        return;
    }

    if(schoolName === "")
    {
        alert("School Name missing");
        return;
    }

    showPage("instructionPage");
}


// =====================================
// CONSENT CHECKBOX MONITOR
// =====================================

setInterval(function(){

    let c1 = document.getElementById("c1")?.checked;
    let c2 = document.getElementById("c2")?.checked;
    let c3 = document.getElementById("c3")?.checked;
    let c4 = document.getElementById("c4")?.checked;

    let startBtn = document.getElementById("startBtn");

    if(!startBtn) return;

    if(c1 && c2 && c3 && c4)
    {
        startBtn.disabled = false;
    }
    else
    {
        startBtn.disabled = true;
    }

},500);


// =====================================
// QUESTION BANK (TEMP)
// =====================================

let class8Questions = [

{
question:"A number is multiplied by 6 and then 18 is added. Result is 72. Find the number.",
options:["7","8","9","10"],
answer:2,
category:"Numerical Ability"
},

{
question:"The value of 48 ÷ 6 + 7 × 3 is:",
options:["27","29","31","33"],
answer:1,
category:"Numerical Ability"
},

{
question:"If 3/5 of a number is 24, the number is:",
options:["30","36","40","45"],
answer:2,
category:"Numerical Ability"
},

{
question:"The square of 15 minus square of 9 is:",
options:["124","132","144","156"],
answer:2,
category:"Numerical Ability"
},

{
question:"A student scored 42 out of 60. What is the percentage?",
options:["60%","65%","70%","75%"],
answer:2,
category:"Numerical Ability"
},

{
question:"Find the missing number: 4, 9, 16, 25, ?",
options:["30","36","40","49"],
answer:1,
category:"Numerical Ability"
},

{
question:"The LCM of 12 and 18 is:",
options:["24","36","48","54"],
answer:1,
category:"Numerical Ability"
},

{
question:"If perimeter of a square is 64 cm, its area is:",
options:["128 cm²","196 cm²","256 cm²","512 cm²"],
answer:2,
category:"Numerical Ability"
},

{
question:"Find the odd one out.",
options:["Mercury","Venus","Earth","Moon"],
answer:3,
category:"Logical Reasoning"
},

{
question:"If BOOK is coded as CPPL, then PAGE is coded as:",
options:["QBHF","QBGF","QAHF","PBGF"],
answer:0,
category:"Logical Reasoning"
},

{
question:"Complete the series: 3, 7, 15, 31, ?",
options:["47","55","63","65"],
answer:2,
category:"Logical Reasoning"
},

{
question:"Which number does not belong?",
options:["16","25","36","45"],
answer:3,
category:"Logical Reasoning"
},

{
question:"A is taller than B. C is taller than A. D is shorter than B. Who is tallest?",
options:["A","B","C","D"],
answer:2,
category:"Logical Reasoning"
},

{
question:"If all birds have wings and sparrow is a bird, which is definitely true?",
options:["All wings are birds","Sparrow has wings","Sparrow cannot fly","All birds are sparrows"],
answer:1,
category:"Logical Reasoning"
},

{
question:"Evaporation is faster when:",
options:["Temperature is low","Surface area is small","Wind speed is high","Humidity is high"],
answer:2,
category:"Conceptual Understanding"
},

{
question:"Why are leaves generally green?",
options:["Due to oxygen","Due to chlorophyll","Due to sunlight only","Due to water"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"Force can change:",
options:["Only color","Only mass","Shape or motion","Only temperature"],
answer:2,
category:"Conceptual Understanding"
},

{
question:"When a moving ball slows down on ground, the force responsible is:",
options:["Gravity","Friction","Magnetism","Electricity"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"If two angles of a triangle are 50° and 60°, the third angle is:",
options:["60°","70°","80°","90°"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"Which is both a physical and chemical process in daily life?",
options:["Cutting paper","Burning candle","Melting ice","Breaking glass"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"Sound cannot travel through:",
options:["Air","Water","Steel","Vacuum"],
answer:3,
category:"Conceptual Understanding"
},

{
question:"If radius of a circle becomes half, its area becomes:",
options:["Half","One-fourth","Double","Four times"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"Which gas is released by plants during photosynthesis?",
options:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],
answer:1,
category:"Retention"
},

{
question:"How many bones are there in an adult human body?",
options:["206","208","210","212"],
answer:0,
category:"Retention"
},

{
question:"Which planet has the largest number of known moons among these?",
options:["Earth","Mars","Jupiter","Mercury"],
answer:2,
category:"Retention"
},

{
question:"The chemical formula of common salt is:",
options:["H2O","CO2","NaCl","O2"],
answer:2,
category:"Retention"
},

{
question:"The process by which plants lose water through leaves is called:",
options:["Respiration","Transpiration","Photosynthesis","Digestion"],
answer:1,
category:"Retention"
},

{
question:"A car travels 150 km in 3 hours. What is its speed?",
options:["40 km/h","45 km/h","50 km/h","60 km/h"],
answer:2,
category:"Problem Solving"
},

{
question:"A ₹800 item is sold after 15% discount. Selling price is:",
options:["₹640","₹660","₹680","₹700"],
answer:2,
category:"Problem Solving"
},

{
question:"A tank is 3/4 full. If full capacity is 240 litres, water in tank is:",
options:["160 L","170 L","180 L","190 L"],
answer:2,
category:"Problem Solving"
},

{
question:"Riya buys 7 pens at ₹15 each and 3 notebooks at ₹40 each. Total cost is:",
options:["₹205","₹215","₹225","₹235"],
answer:2,
category:"Problem Solving"
},

{
question:"Length of rectangle is 14 cm and breadth is 9 cm. Its perimeter is:",
options:["23 cm","46 cm","126 cm","52 cm"],
answer:1,
category:"Problem Solving"
},

{
question:"A bus starts at 7:35 AM and reaches at 10:10 AM. Journey time is:",
options:["2 h 25 min","2 h 30 min","2 h 35 min","2 h 45 min"],
answer:2,
category:"Problem Solving"
},

{
question:"Choose the synonym of 'Rapid'.",
options:["Slow","Fast","Weak","Late"],
answer:1,
category:"Verbal Ability"
},

{
question:"Choose the antonym of 'Generous'.",
options:["Kind","Helpful","Selfish","Polite"],
answer:2,
category:"Verbal Ability"
},

{
question:"Choose the correct sentence.",
options:["She have a book.","She has a book.","She having a book.","She had has a book."],
answer:1,
category:"Verbal Ability"
},

{
question:"Choose the correctly spelled word.",
options:["Necessary","Necesary","Neccessary","Necessery"],
answer:0,
category:"Verbal Ability"
},

{
question:"Complete the sentence: Neither Ravi nor Mohan _____ present.",
options:["are","were","is","have"],
answer:2,
category:"Verbal Ability"
},

{
question:"What is 16 × 12?",
options:["172","182","192","202"],
answer:2,
category:"Learning Speed"
},

{
question:"Find next number: 6, 12, 24, 48, ?",
options:["72","84","96","108"],
answer:2,
category:"Learning Speed"
},

{
question:"38 + 47 = ?",
options:["75","85","95","105"],
answer:1,
category:"Learning Speed"
},

{
question:"Which is the smallest number?",
options:["0.75","0.705","0.57","0.507"],
answer:3,
category:"Learning Speed"
},

{
question:"Which spelling is correct?",
options:["Seperate","Separate","Seprate","Separete"],
answer:1,
category:"Attention to Detail"
},

{
question:"Find the different number.",
options:["9846","9846","9864","9846"],
answer:2,
category:"Attention to Detail"
},

{
question:"Which pair is exactly same?",
options:["AaB12c","AaB21c","AaB12c","ABa12c"],
answer:2,
category:"Attention to Detail"
},

{
question:"How many times does letter 'S' appear in 'SUCCESSFUL'?",
options:["2","3","4","5"],
answer:2,
category:"Attention to Detail"
},

{
question:"If all squares are rectangles and all rectangles have four sides, then squares have:",
options:["Three sides","Four sides","Five sides","Cannot say"],
answer:1,
category:"Analytical Thinking"
},

{
question:"A clock shows 6:00. Angle between hour and minute hand is:",
options:["90°","120°","180°","360°"],
answer:2,
category:"Analytical Thinking"
},

{
question:"If 4 notebooks cost ₹60, cost of 10 notebooks is:",
options:["₹120","₹140","₹150","₹160"],
answer:2,
category:"Analytical Thinking"
},

{
question:"Find next number: 1, 4, 9, 16, 25, ?",
options:["30","35","36","49"],
answer:2,
category:"Analytical Thinking"
}

];
let class9Questions = [

{
question:"Simplify: 18 × 7 - 96 ÷ 8 + 15",
options:["119","125","129","135"],
answer:2,
category:"Numerical Ability"
},

{
question:"If 5x - 12 = 63, then x is:",
options:["13","14","15","16"],
answer:2,
category:"Numerical Ability"
},

{
question:"The square root of 625 plus cube of 3 is:",
options:["42","48","52","58"],
answer:2,
category:"Numerical Ability"
},

{
question:"42% of 750 is:",
options:["305","315","325","335"],
answer:1,
category:"Numerical Ability"
},

{
question:"A number is decreased by 18 and then multiplied by 4 to get 128. The number is:",
options:["48","50","52","54"],
answer:1,
category:"Numerical Ability"
},

{
question:"The HCF and LCM of two numbers are 6 and 180. If one number is 30, the other is:",
options:["24","30","36","42"],
answer:2,
category:"Numerical Ability"
},

{
question:"The value of 2⁴ + 3³ - 5² is:",
options:["16","18","20","22"],
answer:1,
category:"Numerical Ability"
},

{
question:"If area of a square is 169 cm², its perimeter is:",
options:["48 cm","50 cm","52 cm","54 cm"],
answer:2,
category:"Numerical Ability"
},

{
question:"If DELHI is coded as EFMJH, then INDIA is coded as:",
options:["JOEJB","JOEKB","JODJB","JNEJB"],
answer:0,
category:"Logical Reasoning"
},

{
question:"Find the next number: 5, 11, 23, 47, ?",
options:["89","93","95","97"],
answer:2,
category:"Logical Reasoning"
},

{
question:"P is taller than Q. R is shorter than Q. S is taller than P. Who is tallest?",
options:["P","Q","R","S"],
answer:3,
category:"Logical Reasoning"
},

{
question:"Find the odd one out:",
options:["Cube","Sphere","Cylinder","Triangle"],
answer:3,
category:"Logical Reasoning"
},

{
question:"If North becomes East, East becomes South, then West becomes:",
options:["North","South","East","West"],
answer:0,
category:"Logical Reasoning"
},

{
question:"Which number replaces ?: 4, 9, 19, 39, 79, ?",
options:["149","159","169","179"],
answer:1,
category:"Logical Reasoning"
},

{
question:"If force is applied opposite to the direction of motion, speed generally:",
options:["Increases","Decreases","Becomes infinite","Does not change"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"Which statement best explains chemical change?",
options:["Only shape changes","New substance is formed","Only size changes","State changes temporarily"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"An object has mass 60 g and volume 20 cm³. Its density is:",
options:["2 g/cm³","3 g/cm³","4 g/cm³","5 g/cm³"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"Mitochondria are called powerhouse because they:",
options:["Store water","Produce energy","Control heredity","Make proteins"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"If 4x - 7 = 25, then x is:",
options:["6","7","8","9"],
answer:2,
category:"Conceptual Understanding"
},

{
question:"A car moving with changing speed is an example of:",
options:["Uniform motion","Non-uniform motion","Rest","Balanced force"],
answer:1,
category:"Conceptual Understanding"
},

{
question:"Each interior angle of a rectangle is:",
options:["45°","60°","90°","120°"],
answer:2,
category:"Conceptual Understanding"
},

{
question:"Photosynthesis mainly converts:",
options:["Light energy into chemical energy","Heat into sound","Oxygen into nitrogen","Water into acid"],
answer:0,
category:"Conceptual Understanding"
},

{
question:"The chemical symbol of Potassium is:",
options:["P","Po","K","Pt"],
answer:2,
category:"Retention"
},

{
question:"Normal human body cells contain how many pairs of chromosomes?",
options:["22","23","24","46"],
answer:1,
category:"Retention"
},

{
question:"The Red Planet is called so because of:",
options:["Water","Iron oxide dust","Large oceans","Thick clouds"],
answer:1,
category:"Retention"
},

{
question:"The formula of methane is:",
options:["CH₄","CO₂","C₂H₆","H₂O"],
answer:0,
category:"Retention"
},

{
question:"The scientist associated with gravity after observing falling objects is:",
options:["Newton","Darwin","Mendel","Rutherford"],
answer:0,
category:"Retention"
},

{
question:"A shopkeeper buys an item for ₹960 and sells it for ₹1200. Profit percentage is:",
options:["20%","22%","25%","30%"],
answer:2,
category:"Problem Solving"
},

{
question:"A train covers 270 km in 4.5 hours. Its speed is:",
options:["50 km/h","55 km/h","60 km/h","65 km/h"],
answer:2,
category:"Problem Solving"
},

{
question:"A student scored 84 out of 120. Percentage is:",
options:["65%","70%","75%","80%"],
answer:1,
category:"Problem Solving"
},

{
question:"Area of a rectangle is 156 cm² and length is 13 cm. Breadth is:",
options:["10 cm","11 cm","12 cm","13 cm"],
answer:2,
category:"Problem Solving"
},

{
question:"Sum of two consecutive odd numbers is 56. The numbers are:",
options:["25 and 31","27 and 29","23 and 33","21 and 35"],
answer:1,
category:"Problem Solving"
},

{
question:"A tank has 720 L water. 2/5 is used. Water left is:",
options:["288 L","360 L","432 L","480 L"],
answer:2,
category:"Problem Solving"
},

{
question:"Choose the synonym of 'Reluctant'.",
options:["Unwilling","Excited","Confident","Careless"],
answer:0,
category:"Verbal Ability"
},

{
question:"Choose the antonym of 'Expand'.",
options:["Increase","Extend","Contract","Develop"],
answer:2,
category:"Verbal Ability"
},

{
question:"Identify the grammatically correct sentence.",
options:["Each of the students have a book.","Each of the students has a book.","Each students has a book.","Each student have a book."],
answer:1,
category:"Verbal Ability"
},

{
question:"Choose the correctly spelled word.",
options:["Privilege","Priviledge","Privelege","Privilage"],
answer:0,
category:"Verbal Ability"
},

{
question:"Complete: If he had arrived earlier, he _____ the bus.",
options:["will catch","would catch","would have caught","catches"],
answer:2,
category:"Verbal Ability"
},

{
question:"What is 24 × 16?",
options:["364","374","384","394"],
answer:2,
category:"Learning Speed"
},

{
question:"Find next number: 7, 14, 28, 56, ?",
options:["98","104","112","120"],
answer:2,
category:"Learning Speed"
},

{
question:"Which is the largest decimal?",
options:["0.809","0.89","0.8099","0.88"],
answer:1,
category:"Learning Speed"
},

{
question:"If 15% of a number is 45, the number is:",
options:["250","280","300","320"],
answer:2,
category:"Learning Speed"
},

{
question:"Which spelling is correct?",
options:["Maintenance","Maintainance","Maintenence","Maintinance"],
answer:0,
category:"Attention to Detail"
},

{
question:"Find the different code.",
options:["A7B9C2","A7B9C2","A7B8C2","A7B9C2"],
answer:2,
category:"Attention to Detail"
},

{
question:"Which pair is exactly same?",
options:["mN45pq","mN54pq","mn45pq","mN45pq"],
answer:3,
category:"Attention to Detail"
},

{
question:"How many letters are there in 'RESPONSIBILITY'?",
options:["12","13","14","15"],
answer:2,
category:"Attention to Detail"
},

{
question:"If all planets revolve around the Sun and Earth is a planet, then Earth:",
options:["Does not revolve","Revolves around the Sun","Is the Sun","Is not a planet"],
answer:1,
category:"Analytical Thinking"
},

{
question:"In a class of 40 students, 25 like Maths, 18 like Science, and 8 like both. How many like only Maths?",
options:["15","17","18","25"],
answer:1,
category:"Analytical Thinking"
},

{
question:"If 2 = 6, 3 = 12, 4 = 20, then 6 = ?",
options:["36","40","42","48"],
answer:2,
category:"Analytical Thinking"
},

{
question:"A clock gains 3 minutes every hour. After 8 hours, it will be ahead by:",
options:["18 minutes","21 minutes","24 minutes","30 minutes"],
answer:2,
category:"Analytical Thinking"
}

];
let class10Questions = [{
question:"If x + 1/x = 5, then x² + 1/x² = ?",
options:["21","23","25","27"],
answer:1,
category:"Numerical Ability"
},

{
question:"The sum of three consecutive odd numbers is 105. The largest number is:",
options:["33","35","37","39"],
answer:2,
category:"Numerical Ability"
},

{
question:"If 2^a × 2^b = 256 and a - b = 2, then a + b =:",
options:["6","8","10","12"],
answer:1,
category:"Numerical Ability"
},

{
question:"A number when divided by 7 leaves remainder 5. What will be the remainder when twice the number is divided by 7?",
options:["2","3","4","5"],
answer:1,
category:"Numerical Ability"
},

{
question:"If 40% of a number is equal to 2/5 of 300, the number is:",
options:["250","280","300","320"],
answer:2,
category:"Numerical Ability"
},

{
question:"The difference between the squares of two consecutive natural numbers is 31. The numbers are:",
options:["14 and 15","15 and 16","16 and 17","17 and 18"],
answer:1,
category:"Numerical Ability"
},

{
question:"If the ratio of two numbers is 5:7 and their LCM is 210, their sum is:",
options:["60","72","84","96"],
answer:1,
category:"Numerical Ability"
},

{
question:"The average of 8 numbers is 15. If one number 21 is removed, the new average is:",
options:["13","14","15","16"],
answer:1,
category:"Numerical Ability"
},
{
question:"If PEN is coded as 123, BOOK as 4567 and NOTE as 8912, then TONE is coded as:",
options:["2981","2198","2918","9281"],
answer:0,
category:"Logical Reasoning"
},

{
question:"Find the next term: 2, 6, 18, 54, 162, ?",
options:["324","486","648","972"],
answer:1,
category:"Logical Reasoning"
},

{
question:"A is older than B but younger than C. D is younger than B. Who is the youngest?",
options:["A","B","C","D"],
answer:3,
category:"Logical Reasoning"
},

{
question:"Which figure does not belong to the group?",
options:["Cube","Cuboid","Cylinder","Triangle"],
answer:3,
category:"Logical Reasoning"
},

{
question:"If South-East becomes North, North becomes West, then East becomes:",
options:["South","North-East","West","South-West"],
answer:0,
category:"Logical Reasoning"
},

{
question:"Find the missing number: 3, 8, 15, 24, 35, ?",
options:["46","48","50","52"],
answer:1,
category:"Logical Reasoning"
},
{
question:"A body moves with uniform velocity. Which statement is correct?",
options:[
"Acceleration is positive",
"Acceleration is negative",
"Acceleration is zero",
"Force is always increasing"
],
answer:2,
category:"Conceptual Understanding"
},

{
question:"When dilute HCl reacts with zinc, which gas is released?",
options:[
"Oxygen",
"Hydrogen",
"Carbon dioxide",
"Nitrogen"
],
answer:1,
category:"Conceptual Understanding"
},

{
question:"A concave mirror forms a real, inverted image of same size when object is placed at:",
options:[
"Focus",
"Centre of curvature",
"Between focus and pole",
"Beyond centre of curvature"
],
answer:1,
category:"Conceptual Understanding"
},

{
question:"If tan θ = 1 and θ is acute, then θ is:",
options:[
"30°",
"45°",
"60°",
"90°"
],
answer:1,
category:"Conceptual Understanding"
},

{
question:"During respiration, glucose is broken down to release energy mainly in:",
options:[
"Nucleus",
"Ribosome",
"Mitochondria",
"Vacuole"
],
answer:2,
category:"Conceptual Understanding"
},

{
question:"The roots of x² - 9x + 20 = 0 are:",
options:[
"4 and 5",
"2 and 10",
"3 and 6",
"1 and 20"
],
answer:0,
category:"Conceptual Understanding"
},

{
question:"A solution turns red litmus blue. The solution is:",
options:[
"Acidic",
"Basic",
"Neutral",
"Salty only"
],
answer:1,
category:"Conceptual Understanding"
},

{
question:"If resistance is doubled and voltage remains same, current becomes:",
options:[
"Double",
"Half",
"Four times",
"Zero"
],
answer:1,
category:"Conceptual Understanding"
},
{
question:"Which element has the atomic number 17?",
options:[
"Chlorine",
"Sodium",
"Potassium",
"Calcium"
],
answer:0,
category:"Retention"
},

{
question:"Who proposed the modern atomic theory?",
options:[
"Rutherford",
"Dalton",
"Bohr",
"Thomson"
],
answer:1,
category:"Retention"
},

{
question:"Which blood group is known as the universal recipient?",
options:[
"A",
"B",
"AB Positive",
"O Negative"
],
answer:2,
category:"Retention"
},

{
question:"The SI unit of electric power is:",
options:[
"Volt",
"Ampere",
"Ohm",
"Watt"
],
answer:3,
category:"Retention"
},

{
question:"Which of the following planets has the shortest revolution period around the Sun?",
options:[
"Mercury",
"Venus",
"Earth",
"Mars"
],
answer:0,
category:"Retention"
},
{
question:"A shopkeeper marks an item at ₹1200 and gives a 15% discount. The selling price is:",
options:[
"₹1000",
"₹1020",
"₹1050",
"₹1080"
],
answer:1,
category:"Problem Solving"
},

{
question:"A train travels 360 km at a speed of 72 km/h. Time taken is:",
options:[
"4 hours",
"5 hours",
"6 hours",
"7 hours"
],
answer:1,
category:"Problem Solving"
},

{
question:"A student scores 72, 84, 90, 78 and 96 marks in five subjects. What is the average score?",
options:[
"82",
"83",
"84",
"85"
],
answer:2,
category:"Problem Solving"
},

{
question:"The ratio of boys to girls in a class is 5:4. If there are 45 students in total, how many girls are there?",
options:[
"18",
"20",
"24",
"25"
],
answer:1,
category:"Problem Solving"
},

{
question:"A sum of money becomes ₹605 after 10% simple interest for 1 year. The principal amount was:",
options:[
"₹500",
"₹525",
"₹550",
"₹575"
],
answer:2,
category:"Problem Solving"
},

{
question:"The average of 12 numbers is 18. If one number 30 is removed, the new average becomes:",
options:[
"16",
"17",
"18",
"19"
],
answer:1,
category:"Problem Solving"
},
{
question:"Choose the synonym of 'Meticulous'.",
options:[
"Careless",
"Detailed",
"Hasty",
"Confused"
],
answer:1,
category:"Verbal Ability"
},

{
question:"Choose the antonym of 'Benevolent'.",
options:[
"Kind",
"Generous",
"Cruel",
"Helpful"
],
answer:2,
category:"Verbal Ability"
},

{
question:"Choose the correctly written sentence.",
options:[
"Neither of the players were ready.",
"Neither of the players was ready.",
"Neither of the player were ready.",
"Neither players was ready."
],
answer:1,
category:"Verbal Ability"
},

{
question:"Identify the correctly spelled word.",
options:[
"Acquaintance",
"Acquintance",
"Aquaintance",
"Acquaintence"
],
answer:0,
category:"Verbal Ability"
},

{
question:"Complete the sentence: 'Had the weather been better, we _____ the match.'",
options:[
"will play",
"would play",
"would have played",
"played"
],
answer:2,
category:"Verbal Ability"
},
{
question:"If 12.5% of a number is 25, the number is:",
options:[
"100",
"150",
"200",
"250"
],
answer:2,
category:"Learning Speed"
},

{
question:"Find the next number: 3, 7, 15, 31, 63, ?",
options:[
"95",
"111",
"127",
"135"
],
answer:2,
category:"Learning Speed"
},

{
question:"A trader buys an article for ₹480 and sells it for ₹600. His profit percentage is:",
options:[
"20%",
"25%",
"30%",
"35%"
],
answer:1,
category:"Learning Speed"
},

{
question:"Which is the greatest number?",
options:[
"0.909",
"0.990",
"0.9099",
"0.9090"
],
answer:1,
category:"Learning Speed"
},
{
question:"Which code is different from the others?",
options:[
"AB7X9K",
"AB7X9K",
"AB7XK9",
"AB7X9K"
],
answer:2,
category:"Attention to Detail"
},

{
question:"How many times does the letter 'E' appear in the word 'EXPERIENCE'?",
options:[
"2",
"3",
"4",
"5"
],
answer:1,
category:"Attention to Detail"
},

{
question:"Which pair is exactly identical?",
options:[
"mN7kP42",
"mN7kp42",
"mN7kP24",
"mN7kP42"
],
answer:3,
category:"Attention to Detail"
},

{
question:"Find the different number.",
options:[
"583942",
"583942",
"583924",
"583942"
],
answer:2,
category:"Attention to Detail"
},
{
question:"If all squares are rectangles, all rectangles are parallelograms, and some parallelograms are rhombuses, which statement is definitely true?",
options:[
"All rhombuses are squares",
"All squares are parallelograms",
"All rectangles are rhombuses",
"Some squares are rhombuses"
],
answer:1,
category:"Analytical Thinking"
},

{
question:"In a class of 60 students, 35 like Mathematics, 25 like Science, and 10 like both. How many students like only Mathematics?",
options:[
"20",
"25",
"30",
"35"
],
answer:1,
category:"Analytical Thinking"
},

{
question:"If 2 → 6, 3 → 12, 4 → 20, 5 → 30, then 8 → ?",
options:[
"56",
"64",
"72",
"80"
],
answer:2,
category:"Analytical Thinking"
},

{
question:"A clock gains 4 minutes every hour. Starting at 8:00 AM, after 12 actual hours, what time will the clock show?",
options:[
"8:40 PM",
"8:48 PM",
"8:52 PM",
"9:00 PM"
],
answer:1,
category:"Analytical Thinking"
} ];
// =====================================
// VARIABLES
// =====================================

let currentQuestion = 0;

let studentAnswers = [];
let visitedQuestions = [];
let questionTime = [];

let questionStartTime = Date.now();
let categoryTime = {};
let categoryScore = {};


// =====================================
// START ASSESSMENT
// =====================================

function startAssessment()
{
	let selectedClass =
document.getElementById("studentClass").value;

if(selectedClass=="8")
{
    questions = class8Questions;
}

if(selectedClass=="9")
{
    questions = class9Questions;
}

if(selectedClass=="10")
{
    questions = class10Questions;
}
    showPage("assessmentPage");

    createPalette();

    loadQuestion();

    updateCounts();

    startTimer();
}


// =====================================
// CREATE PALETTE
// =====================================

function createPalette()
{
    let palette = document.getElementById("questionPalette");

    palette.innerHTML = "";

    for(let i=1;i<=50;i++)
    {
        palette.innerHTML +=

        `<button
        class="paletteBtn"
        onclick="goToQuestion(${i-1})"
        id="q${i}">
        ${i}
        </button>`;
    }
}


// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion()
{
	visitedQuestions[currentQuestion] = true;
	questionStartTime = Date.now();
    document.getElementById("questionNumber").innerHTML =
    "Question " + (currentQuestion+1);

    document.getElementById("questionText").innerHTML =
    questions[currentQuestion].question;

    let html = "";

    for(let i=0;i<questions[currentQuestion].options.length;i++)
    {
        let checked = "";

        if(studentAnswers[currentQuestion] == i)
        {
            checked = "checked";
        }

        html += `

        <label>

        <input
        type="radio"
        name="answer"
        value="${i}"
        ${checked}
        onchange="saveAnswer(${i})">

        ${questions[currentQuestion].options[i]}

        </label>

        <br><br>

        `;
    }

    document.getElementById("optionsContainer").innerHTML = html;
	updatePaletteColors();
}


// =====================================
// SAVE ANSWER
// =====================================

function saveAnswer(optionIndex)
{
    studentAnswers[currentQuestion] = optionIndex;
	updatePaletteColors();

    

    updateCounts();
}
function updatePaletteColors()
{
    for(let i=0;i<50;i++)
    {
        let btn = document.getElementById("q"+(i+1));

        if(!btn)
        {
            continue;
        }

        // default gray
        btn.style.background = "#e0e0e0";
        btn.style.color = "black";

        // visited but unanswered = red
        if(visitedQuestions[i])
        {
            btn.style.background = "red";
            btn.style.color = "white";
        }

        // answered = green
        if(studentAnswers[i] != undefined)
        {
            btn.style.background = "green";
            btn.style.color = "white";
        }

        // current question = blue
        if(i == currentQuestion)
        {
            btn.style.background = "#0066ff";
            btn.style.color = "white";
        }
    }
}
function saveQuestionTime()
{
    let endTime = Date.now();

    let spentTime = Math.floor((endTime - questionStartTime)/1000);

    if(questionTime[currentQuestion]==undefined)
    {
        questionTime[currentQuestion]=0;
    }

    questionTime[currentQuestion]+=spentTime;
}

function updateCategoryTime()
{
    let category = questions[currentQuestion].category;

    if(categoryTime[category]==undefined)
    {
        categoryTime[category]=0;
    }

    categoryTime[category]+=questionTime[currentQuestion];
}

// =====================================
// COUNTS
// =====================================

function updateCounts()
{
    let attempted = studentAnswers.filter(x => x != undefined).length;

    document.getElementById("attemptedCount").innerHTML = attempted;

    document.getElementById("notAttemptedCount").innerHTML =
    50 - attempted;
	updateProgressBar();
}
function updateProgressBar()
{
    let attempted = studentAnswers.filter(x => x != undefined).length;

    let percent = Math.round((attempted / 50) * 100);

    document.getElementById("progressPercent").innerHTML = percent + "%";

    document.getElementById("progressFill").style.width = percent + "%";
}


// =====================================
// NEXT QUESTION
// =====================================

function nextQuestion()
{
	saveQuestionTime();
    if(currentQuestion < questions.length-1)
    {
        currentQuestion++;

        loadQuestion();
    }
}


// =====================================
// PREVIOUS QUESTION
// =====================================

function previousQuestion()
{
	saveQuestionTime();
    if(currentQuestion > 0)
    {
        currentQuestion--;

        loadQuestion();
    }
}


// =====================================
// PALETTE CLICK
// =====================================

function goToQuestion(index)
{
    currentQuestion = index;

    loadQuestion();
}

function startTimer()
{
    clearInterval(timerInterval);

    timerInterval = setInterval(function(){

        let minutes = Math.floor(totalTime / 60);

        let seconds = totalTime % 60;

        if(seconds < 10)
        {
            seconds = "0" + seconds;
        }

        document.getElementById("timer").innerHTML =
        minutes + ":" + seconds;

        totalTime--;

        if(totalTime < 0)
        {
            clearInterval(timerInterval);

            alert("Time is over. Test submitted automatically.");

            showPage("resultPage");
        }

    },1000);
}

function calculateCategoryScore()
{
    for(let i=0;i<50;i++)
    {
        let category = questions[i].category;

        if(categoryScore[category]==undefined)
        {
            categoryScore[category]=0;
        }

        if(studentAnswers[i]==questions[i].answer)
        {
            categoryScore[category]++;
        }
    }
}

function generateResult()
{
    let attempted = studentAnswers.filter(x => x !== undefined).length;
    let correct = 0;

    for(let i=0;i<questions.length;i++)
    {
        if(studentAnswers[i] == questions[i].answer)
        {
            correct++;
        }
    }

    let wrong = attempted - correct;
    let percentage = ((correct/questions.length)*100).toFixed(2);

    document.getElementById("attemptedResult").innerHTML = attempted;
    document.getElementById("correctResult").innerHTML = correct;
    document.getElementById("wrongResult").innerHTML = wrong;
    document.getElementById("percentageResult").innerHTML = percentage;

    document.getElementById("attemptedCard").innerHTML = attempted;
    document.getElementById("correctCard").innerHTML = correct;
    document.getElementById("percentageCard").innerHTML = percentage + "%";
}

function generateBasicResult()
{
    let attempted = 0;
    let correct = 0;

    for(let i=0;i<questions.length;i++)
    {
        if(studentAnswers[i] != undefined)
        {
            attempted++;
        }

        if(studentAnswers[i] == questions[i].answer)
        {
            correct++;
        }
    }

    let wrong = attempted - correct;

    let percentage =
    ((correct/questions.length)*100).toFixed(2);

    document.getElementById("totalQuestionsResult").innerHTML =
    questions.length;

    document.getElementById("attemptedResult").innerHTML =
    attempted;

    document.getElementById("correctResult").innerHTML =
    correct;

    document.getElementById("wrongResult").innerHTML =
    wrong;

    document.getElementById("percentageResult").innerHTML =
    percentage;
}
function saveStudentData()
{
    let studentData =
    {
        name: document.getElementById("studentName").value,

        class:
        document.getElementById("studentClass").value,

        mobile:
        document.getElementById("mobileNumber").value,

        school:
        document.getElementById("schoolName").value,

        attempted:
        document.getElementById("attemptedResult").innerText,

        percentage:
        document.getElementById("percentageResult").innerText,

        date:
        new Date().toLocaleString()
    };

    let allStudents =
    JSON.parse(localStorage.getItem("taaravStudents"))
    || [];

    allStudents.push(studentData);

    localStorage.setItem(
        "taaravStudents",
        JSON.stringify(allStudents)
    );
}
function saveToGoogleSheet()
{
    let attemptedValue =
    studentAnswers.filter(x => x !== undefined).length;

    let correctValue = 0;

    for(let i=0;i<questions.length;i++)
    {
        if(studentAnswers[i] == questions[i].answer)
        {
            correctValue++;
        }
    }

    let percentageValue =
    ((correctValue / questions.length) * 100).toFixed(2);

    let url =
    GOOGLE_SHEET_URL +
    "?name=" + encodeURIComponent(document.getElementById("studentName").value) +
    "&class=" + encodeURIComponent(document.getElementById("studentClass").value) +
    "&mobile=" + encodeURIComponent(document.getElementById("mobileNumber").value) +
    "&school=" + encodeURIComponent(document.getElementById("schoolName").value) +
    "&attempted=" + encodeURIComponent(attemptedValue) +
    "&correct=" + encodeURIComponent(correctValue) +
    "&percentage=" + encodeURIComponent(percentageValue + "%");

    fetch(url)
    .then(response => response.text())
    .then(data => {
        console.log("Google Sheet Response:", data);
    })
    .catch(error => {
        console.log("Google Sheet Error:", error);
    });
}
// =====================================
// SUBMIT TEST
// =====================================

function submitTest()
{
    saveQuestionTime();

    let answer = confirm("Are you sure you want to submit the test?");

    if(answer)
    {
        clearInterval(timerInterval);

        generateBasicResult();

        generateCategoryResult();

        showPage("resultPage");

        let attemptedCardValue =
        studentAnswers.filter(x => x !== undefined).length;

        let correctCardValue = 0;

        for(let i=0;i<questions.length;i++)
        {
            if(studentAnswers[i] == questions[i].answer)
            {
                correctCardValue++;
            }
        }

        let percentageCardValue =
        ((correctCardValue / questions.length) * 100).toFixed(2);

        document.getElementById("attemptedCard").innerHTML =
        attemptedCardValue;

        document.getElementById("correctCard").innerHTML =
        correctCardValue;

        document.getElementById("percentageCard").innerHTML =
        percentageCardValue + "%";

        generateRadarChart();

        generateStudentReportCard();

        generateLearningBadge();

        saveStudentData();

        saveToGoogleSheet();
    }
}
function generateCategoryResult()
{
    let categoryTotal = {};
    let categoryCorrect = {};

    for(let i=0;i<questions.length;i++)
    {
        let category = questions[i].category;

        if(categoryTotal[category] == undefined)
        {
            categoryTotal[category] = 0;
            categoryCorrect[category] = 0;
        }

        categoryTotal[category]++;

        if(studentAnswers[i] == questions[i].answer)
        {
            categoryCorrect[category]++;
        }
    }

    let html = "";

    for(let category in categoryTotal)
    {
        let total = categoryTotal[category];
        let correct = categoryCorrect[category];
        let percent = ((correct / total) * 100).toFixed(2);

        html += `
        <p>
            <b>${category}</b> :
            ${correct}/${total}
            (${percent}%)
        </p>
        `;
    }

    document.getElementById("categoryResult").innerHTML = html;
}
function generateRadarChart()
{
    let categoryTotal = {};
    let categoryCorrect = {};

    for(let i=0;i<questions.length;i++)
    {
        let category = questions[i].category;

        if(categoryTotal[category] == undefined)
        {
            categoryTotal[category] = 0;
            categoryCorrect[category] = 0;
        }

        categoryTotal[category]++;

        if(studentAnswers[i] == questions[i].answer)
        {
            categoryCorrect[category]++;
        }
    }

    let labels = [];
    let scores = [];

    for(let category in categoryTotal)
    {
        labels.push(category);

        let percent =
        ((categoryCorrect[category] / categoryTotal[category]) * 100).toFixed(2);

        scores.push(percent);
    }

    new Chart(document.getElementById("radarChart"), {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Skill Score %",
                data: scores,
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: "y",
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}
function generateStudentReportCard()
{
    let studentName = document.getElementById("studentName").value;
    let studentClass = document.getElementById("studentClass").value;
    let schoolName = document.getElementById("schoolName").value;

    let correct = 0;

    for(let i=0;i<questions.length;i++)
    {
        if(studentAnswers[i] == questions[i].answer)
        {
            correct++;
        }
    }

    let percentage = ((correct / questions.length) * 100).toFixed(2);

    let categoryTotal = {};
    let categoryCorrect = {};

    for(let i=0;i<questions.length;i++)
    {
        let category = questions[i].category;

        if(categoryTotal[category] == undefined)
        {
            categoryTotal[category] = 0;
            categoryCorrect[category] = 0;
        }

        categoryTotal[category]++;

        if(studentAnswers[i] == questions[i].answer)
        {
            categoryCorrect[category]++;
        }
    }

    let strengths = [];
    let improvements = [];

    for(let category in categoryTotal)
    {
        let score = (categoryCorrect[category] / categoryTotal[category]) * 100;

        if(score >= 75)
        {
            strengths.push(category);
        }
        else if(score < 60)
        {
            improvements.push(category);
        }
    }

    let studentType = "Balanced Learner";

    if(percentage >= 85)
    {
        studentType = "Advanced Learner";
    }
    else if(percentage >= 70)
    {
        studentType = "Strong Foundation Learner";
    }
    else if(percentage >= 50)
    {
        studentType = "Developing Learner";
    }
    else
    {
        studentType = "Foundation Support Required";
    }

    document.getElementById("studentReportCard").innerHTML = `
        <p><b>Student Name:</b> ${studentName}</p>
        <p><b>Class:</b> ${studentClass}</p>
        <p><b>School:</b> ${schoolName}</p>
        <p><b>Overall Score:</b> ${correct}/${questions.length}</p>
        <p><b>Percentage:</b> ${percentage}%</p>
        <p><b>Learning Profile:</b> ${studentType}</p>

        <hr>

        <h4>Strengths</h4>
        <p>${strengths.length > 0 ? strengths.join(", ") : "No strong area detected yet."}</p>

        <h4>Areas to Improve</h4>
        <p>${improvements.length > 0 ? improvements.join(", ") : "No major weak area detected."}</p>

        <h4>Recommendation</h4>
        <p>
            Student should continue regular practice, revise weak concepts weekly,
            and attempt foundation-level tests to improve accuracy and confidence.
        </p>
    `;
}
function generateLearningBadge()
{
    let correct = 0;

    for(let i=0;i<questions.length;i++)
    {
        if(studentAnswers[i] == questions[i].answer)
        {
            correct++;
        }
    }

    let percentage = (correct / questions.length) * 100;

    let badgeText = "";

    if(percentage >= 85)
    {
        badgeText = "🌟 Advanced Learner";
    }
    else if(percentage >= 70)
    {
        badgeText = "🚀 Strong Foundation Learner";
    }
    else if(percentage >= 50)
    {
        badgeText = "📚 Developing Learner";
    }
    else
    {
        badgeText = "🎯 Foundation Support Required";
    }

    document.getElementById("learningBadge").innerHTML = badgeText;
}
function showAdminDashboard()
{
    let password = prompt("Enter Admin Password:");

    if(password !== "taarav@admin")
    {
        alert("Wrong password. Access denied.");
        return;
    }

    let url = GOOGLE_SHEET_URL + "?action=read";

    fetch(url)
    .then(response => response.json())
    .then(students => {

        let html = `
        <h2>Student Records</h2>

        <table border="1" style="width:100%;border-collapse:collapse">
            <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Class</th>
                <th>Mobile</th>
                <th>School</th>
                <th>Attempted</th>
                <th>Correct</th>
                <th>Percentage</th>
            </tr>
        `;

        students.forEach(function(student)
        {
            html += `
            <tr>
                <td>${student.date}</td>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${student.mobile}</td>
                <td>${student.school}</td>
                <td>${student.attempted}</td>
                <td>${student.correct}</td>
                <td>${student.percentage}%</td>
            </tr>
            `;
        });

        html += `
        </table>

        <br>

        <button onclick="goHome()">Home Page</button>
        `;

        document.getElementById("adminPage").innerHTML = html;

        showPage("adminPage");
    })
    .catch(error => {
        alert("Unable to load Google Sheet data.");
        console.log(error);
    });
}
function goHome()
{
    window.location.reload();
}
function deleteStudent(index)
{
    let confirmDelete =
    confirm("Are you sure you want to delete this student record?");

    if(!confirmDelete)
    {
        return;
    }

    adminData.splice(index,1);

    localStorage.setItem(
        "adminData",
        JSON.stringify(adminData)
    );

    loadAdminData();
}
function deleteStudent(index)
{
    let students =
    JSON.parse(localStorage.getItem("taaravStudents")) || [];

    let confirmDelete =
    confirm("Are you sure you want to delete this student record?");

    if(confirmDelete)
    {
        students.splice(index,1);

        localStorage.setItem(
            "taaravStudents",
            JSON.stringify(students)
        );

        showAdminDashboard();
    }
}
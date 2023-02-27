const questions = [
    {
        category: "Algebra",
        question: "(a+b)²= ",
        correctAnswer: "a²+2ab+b²",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 1
    },
    {
        category: "Algebra",
        question: "(a-b)²= ",
        correctAnswer: "a²-2ab+b²",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 1
    },
    {
        category: "Algebra",
        question: "(a+b)³= ",
        correctAnswer: "a³+3a²b+3ab²+b³",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 1
    },
    {
        category: "Algebra",
        question: "(a-b)³= ",
        correctAnswer: "a³-3a²b+3ab²-b³",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 1
    },
    {
        category: "Algebra",
        question: "a²-b²= ",
        correctAnswer: "(a-b)*(a+b)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 1
    },
    {
        category: "Algebra",
        question: "a³-b³= ",
        correctAnswer: "(a-b)*(a²+ab+b²)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 1
    },
    {
        category: "Algebra",
        question: "a³+b³= ",
        correctAnswer: "(a+b)*(a²-ab+b²)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 1
    },
    {
        category: "Jednacine",
        question: "Determinanta D = ",
        correctAnswer: "b²-4ac",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 2
    },
    {
        category: "Jednacine",
        question: "Vijetove formule, x1+x2= ",
        correctAnswer: "-b/a",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 2
    },
    {
        category: "Jednacine",
        question: "Vijetove formule, x1*x2= ",
        correctAnswer: "c/a",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 2
    },
    {
        category: "Vektori",
        question: "Vektori a i b su ortogonalni kad je:",
        correctAnswer: "a*b=0",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 5
    },
    {
        category: "Vektori",
        question: "Vektori a i b su kolinearni kad je:",
        correctAnswer: "a=kb",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 5
    },
    {
        category: "Vektori",
        question: "Vektori a,b i c su komplanarni kad je:",
        correctAnswer: "(axb)*c=0",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 5
    },
    {
        category: "Vektori",
        question: "a(x,y), pa je |a| =",
        correctAnswer: "√(x²+y²)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 5
    },
    {
        category: "Vektori",
        question: "cos(f) vektora a i b je:",
        correctAnswer: "a*b/|a|*|b|",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 5
    },
    {
        category: "Vektori",
        question: "Tacka S na sredini 2 tacke se racuna:",
        correctAnswer: "(x1+x2/2,y1+y2/2)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 5
    },
    {
        category: "Vektori",
        question: "Vektor AB-BC",
        correctAnswer: "AC",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 5
    },
    {
        category: "Vektori",
        question: "a=2i+6j, b=3j+4j, a*b=",
        correctAnswer: "30",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 5
    },
    {
        category: "Analitcka geometrija",
        question: "Opsta formula prave",
        correctAnswer: "y=kx+n",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "Prava koja prolazi kroz tacku i imamo k:",
        correctAnswer: "y-y1=k(x-x1)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "Prava koja prolazi kroz 2 tacke:",
        correctAnswer: "y-y1=y2-y1/x2-x1(x-x1)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "k2 kada je prava normalna:",
        correctAnswer: "-1/k1",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "tgα izmedju prava gde imamo k",
        correctAnswer: "k2-k1/1+k1*k2",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "Jednacina kruga",
        correctAnswer: "(x-p)²+(y-q)²=r²",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "(x-6)²+(y-3)²=10², O = ?",
        correctAnswer: "O(6,3)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "Jednacina elipse",
        correctAnswer: "x²/a²+y²/b²=1",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "Jednacina hiperbole",
        correctAnswer: "x²/a²-y²/b²=1",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Analitcka geometrija",
        question: "Jednacina parabole",
        correctAnswer: "y²=2px",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 6
    },
    {
        category: "Planimetrija",
        question: "α+β+γ trougla je: (stepeni)",
        correctAnswer: "180",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "α1+β1+γ1 trougla je: (stepeni)",
        correctAnswer: "360",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Povrsina trougla",
        correctAnswer: "P=a*ha/2",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Obim trougla: ",
        correctAnswer: "O=a+b+c",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Povrsina trougla sa r: ",
        correctAnswer: "P=r*(a+b+c/2)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Povrsina trougla sa sinβ ",
        correctAnswer: "P=a*c*sinβ/2",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Poluprecnik opsianog kruga trougla:",
        correctAnswer: "r=2P/O",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Poluprecnik opsianog kruga trougla:",
        correctAnswer: "r=2P/O",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Sinusna teorema sa sinα",
        correctAnswer: "a/sinα=R2",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Pitagorina teorema",
        correctAnswer: "c²=a²+b²",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Povrsina jednakostranicnog trougla:",
        correctAnswer: "P=a²√3/4",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Visina jednakostranicnog trougla:",
        correctAnswer: "h=a√3/2",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Planimetrija",
        question: "Povrsina kruga",
        correctAnswer: "P=r²π",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 7
    },
    {
        category: "Proporcije i procenti",
        question: "Kod direktne proporcionalnosti, k = ",
        correctAnswer: "y/x",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 11
    },
    {
        category: "Proporcije i procenti",
        question: "Kod obrnute proporcionalnosti, k = ",
        correctAnswer: "x*y",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 11
    },
    {
        category: "Proporcije i procenti",
        question: "120% u decimalnom obliku je:",
        correctAnswer: "1.2",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 11
    },
    {
        category: "Proporcije i procenti",
        question: "63% u decimalnom obliku je:",
        correctAnswer: "0.63",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 11
    },
    {
        category: "Integrali",
        question: "∫x^n*dx",
        correctAnswer: "x^(n + 1)/(n + 1)+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫dx",
        correctAnswer: "x+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫e^x*dx=",
        correctAnswer: "e^x + C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫1/x*dx",
        correctAnswer: "log|x|+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫a^x*dx = ",
        correctAnswer: "a^x/loga+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫cosx*dx=",
        correctAnswer: "sinx+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫sinx*dx=",
        correctAnswer: "-cosx+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫dx/cos²x*dx=",
        correctAnswer: "tgx+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫dx/sin²x*dx=",
        correctAnswer: "-ctgx+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫dx/1+x²*dx=",
        correctAnswer: "arctgx+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫dx/√(1-x²)*dx=",
        correctAnswer: "arcsinx+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Integrali",
        question: "∫dx/√(a²-x²)*dx=",
        correctAnswer: "arcsin(x/a)+C",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 13
    },
    {
        category: "Kompleksni brojevi",
        question: "√-1",
        correctAnswer: "i",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 14
    },
    {
        category: "Kompleksni brojevi",
        question: "Algebarski oblik kompleksnog broja:",
        correctAnswer: "z=x+iy",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 14
    },
    {
        category: "Kompleksni brojevi",
        question: "Modul kompleksnog broja, |z| =",
        correctAnswer: "√(x²+y²)",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 14
    },
    {
        category: "Kompleksni brojevi",
        question: "z = 2+6i, konjugovano z je:",
        correctAnswer: "2-6i",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 14
    },
    {
        category: "Kompleksni brojevi",
        question: "tgφ (kompleksni brojevi), φ = ",
        correctAnswer: "y/x",
        hasImage: false,
        imagePath: "/",
        categoryNumber: 14
    },
];

export default questions;
//² ³ √
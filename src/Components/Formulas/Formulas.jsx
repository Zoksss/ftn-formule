import './Formulas.css';

import Formula from './Formula';


const Formulas = () => {


    return (
        <div className="formulas">
            <div className="formulas-title-row">
                <p>Vektori</p>
                <p>5</p>
            </div>
            <Formula 
            question="Vektori a i b su ortogonalni kad je:" answer="a*b=0" />
            <Formula question="Vektori a i b su kolinearni kad je:" answer="a=kb" />
            <Formula question="Vektori a,b i c su komplanarni kad je:" answer="(axb)*c=0" />
            <Formula question="a(x,y), pa je |a| =" answer="√(x²+y²)" />
            <Formula question="cos(f) vektora a i b je:" answer="a*b/|a|*|b|" />
            <Formula question="Tacka S na sredini 2 tacke se racuna:" answer="(x1+x2/2,y1+y2/2)" />
            <Formula question="Vektor AB-BC" answer="AC" />
            <Formula question="a=2i+6j, b=3j+4j, a*b=" answer="30" />
            <div className="formulas-title-row">
                <p>Analiticka geometrija</p>
                <p>6</p>
            </div>
            <Formula question="Opsta formula prave" answer="y=kx+n" />
            <Formula question="Prava koja prolazi kroz tacku i imamo k:" answer="y-y1=k(x-x1)" />
            <Formula question="Prava koja prolazi kroz 2 tacke:" answer="y-y1=y2-y1/x2-x1(x-x1)" />
            <Formula question="k2 kada je prava normalna:" answer="-1/k1" />
            <Formula question="tgα izmedju prava gde imamo k" answer="k2-k1/1+k1*k2" />
            <Formula question="Jednacina kruga" answer="(x-p)²+(y-q)²=r²" />
            <Formula question="(x-6)²+(y-3)²=10², O = ?" answer="O(6,3)" />
            <Formula question="Jednacina elipse" answer="x²/a²+y²/b²=1" />
            <Formula question="Jednacina hiperbole" answer="x²/a²-y²/b²=1" />
            <Formula question="Jednacina parabole" answer="y²=2px" />
            <div className="formulas-title-row">
                <p>Planimetrija</p>
                <p>7</p>
            </div>
            <Formula question="α1+β1+γ1 trougla je: (stepeni)" answer="360" />
            <Formula question="Povrsina trougla" answer="P=a*ha/2" />
            <Formula question="Obim trougla:" answer="O=a+b+c" />
            <Formula question="Povrsina trougla sa r: " answer="P=r*(a+b+c/2)" />
            <Formula question="Povrsina trougla sa sinβ" answer="P=a*c*sinβ/2" />
            <Formula question="Poluprecnik opsianog kruga trougla:" answer="r=2P/O" />
            <Formula question="Sinusna teorema sa sinα" answer="a/sinα=R2" />
            <Formula question="Pitagorina teorema" answer="c²=a²+b²" />
            <Formula question="Povrsina jednakostranicnog trougla:" answer="P=a²√3/4" />
            <Formula question="Visina jednakostranicnog trougla:" answer="h=a√3/2" />
            <Formula question="Povrsina kruga" answer="P=r²π" />
            <div className="formulas-title-row">
                <p>Proporcije i procenti</p>
                <p>11</p>
            </div>
            <Formula question="Kod direktne proporcionalnosti, k =" answer="y/k" />
            <Formula question="Kod obrnute proporcionalnosti, k = " answer="x*y" />
            <Formula question="120% u decimalnom obliku je:" answer="1.2" />
            <Formula question="63% u decimalnom obliku je:" answer="0.63" />
            <div className="formulas-title-row">
                <p>Kompleksni brojevi</p>
                <p>14</p>
            </div>
            <Formula question="√-1" answer="i" />
            <Formula question="Algebarski oblik kompleksnog broja:" answer="z=x+iy" />
            <Formula question="Modul kompleksnog broja, |z| =" answer="√(x²+y²)" />
            <Formula question="z = 2+6i, konjugovano z je:" answer="2-6i" />
            <Formula question="tgφ (kompleksni brojevi), φ = " answer="y/x" />
        </div >
    )
}

export default Formulas;
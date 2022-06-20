import './Formulas.css';

import Formula from './Formula';


const Formulas = () => {


    return (
        <div className="formulas">
            <div className="formulas-title-row">
                <p>Vektori</p>
                <p>1</p>
            </div>
            <Formula question="test123" answer="a*b=0" />
        </div >
    )
}

export default Formulas;
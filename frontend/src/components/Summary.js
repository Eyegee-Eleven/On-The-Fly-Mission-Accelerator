import '../css/Summary.css'


function calcWeightAndArm(items){
    let overAllWeight=0;
    let overAllMoment=0;
    for (let item of items){
        overAllWeight+=Number(item.weight);
        overAllMoment+=Number(item.weight)*Number(item.arm);
    }
    if (!isFinite(overAllMoment)) overAllMoment=0;
    if (!isFinite(overAllWeight)) overAllWeight=0;
    
    let overAllArm = Math.round(overAllMoment/overAllWeight);
    if (!isFinite(overAllArm)) overAllArm=0;

    return {weight: overAllWeight, arm: overAllArm, moment: overAllMoment/1000};
}

function typeConvertFormF(formf){
    formf.basic_weight=Number(formf.basic_weight);
    formf.basic_moment=Number(formf.basic_moment);
    formf.crew_weight=Number(formf.crew_weight);
    formf.crew_moment=Number(formf.crew_moment);
    formf.fuel_weight=Number(formf.fuel_weight);
    formf.fuel_moment=Number(formf.fuel_moment);
}

export default function Summary({formf}){
    formf={...formf};
    typeConvertFormF(formf);

    const {weight: kitWeight, arm: kitArm, moment: kitMoment} = calcWeightAndArm(JSON.parse(formf.kit));
    const {weight: cargoWeight, arm: cargoArm, moment: cargoMoment} = calcWeightAndArm(JSON.parse(formf.cargo));
    const operatingWeight = formf.basic_weight + formf.crew_weight + kitWeight
    const operatingMoment = formf.basic_moment + formf.crew_moment + kitMoment
    const operatingArm = Math.round(operatingMoment/operatingWeight*1000)
    
    const zerofuelWeight = cargoWeight + operatingWeight
    const zerofuelMoment = cargoMoment + operatingMoment
    const zerofuelArm = Math.round(zerofuelMoment/zerofuelWeight*1000)

    const grossWeight = zerofuelWeight + formf.fuel_weight
    const grossMoment = zerofuelMoment + formf.fuel_moment
    const grossArm =  Math.round(grossMoment/grossWeight*1000) 

    return <>
            <div className='super'>
            <div className='container'>
                <h1>Weight: </h1>
                <div id='kit' className='status'>
                    Kit: <label id='weight' className='numeral'> {kitWeight} </label>
                </div>

                <div id='cargo' className='status'>
                    Cargo: <label id='weight' className='numeral'> {cargoWeight} </label>
                </div>  

                <div id='operating' className='status'>
                    Operating: <label id='weight' className='numeral'> {operatingWeight} </label>
                </div>

                <div id='zerofuel' className='status'>
                    zerofuel: <label id='weight' className='numeral'> {zerofuelWeight} </label>
                </div>

                <div id='gross' className='status'>
                    Gross: <label id='weight' className='numeral'> {grossWeight} </label>
                </div>
            </div>
            <div className='container'>
            <h1>Arm</h1>
                <div id='kit2' className='status'>
                Kit: <label id='arm' className='numeral'> {kitArm} </label>
                </div>

                <div id='cargo2' className='status'>
                Cargo: <label id='arm' className='numeral'> {cargoArm} </label>
                </div>

                <div id='operating2' className='status'>
                Operating: <label id='arm' className='numeral'> {operatingArm} </label>
                </div>

                <div id='zerofuel2' className='status'>
                zerofuel: <label id='arm' className='numeral'> {zerofuelArm}</label>
                </div>

                <div id='gross2' className='status'>
                Gross: <label id='arm' className='numeral'> {grossArm} </label>
                </div>
            </div>
            </div>
            </>
}

/*
<div className='container'>
                <div id='kit' className='status'>
                    Kit Weight: <label id='weight'> {kitWeight} </label>
                    Arm: <label id='arm'> {kitArm} </label>
                </div>

                <div id='cargo' className='status'>
                    Cargo: <label id='weight'> {cargoWeight} </label>
                    Arm: <label id='arm'> {cargoArm} </label>
                </div>

                <div id='operating' className='status'>
                    Operating: <label id='weight'> {operatingWeight} </label>
                    Arm: <label id='arm'> {operatingArm} </label>
                </div>

                <div id='zerofuel' className='status'>
                    zerofuel: <label id='weight'> {zerofuelWeight} </label>
                    Arm: <label id='arm'> {zerofuelArm}</label>
                </div>

                <div id='gross' className='status'>
                    gross: <label id='weight'> {grossWeight} </label>
                    Arm: <label id='arm'> {grossArm} </label>
                </div>
              </div>
*/
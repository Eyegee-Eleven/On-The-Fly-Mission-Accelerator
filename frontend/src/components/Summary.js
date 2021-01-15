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

export default function Summary({formf}){
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
                <div id='kit'>
                    Kit Weight:<label id='weight'>{kitWeight}</label>
                    Arm:<label id='arm'>{kitArm}</label>
                </div>

                <div id='cargo'>
                    Cargo:<label id='weight'>{cargoWeight}</label>
                    Arm:<label id='arm'>{cargoArm}</label>
                </div>

                <div id='operating'>
                    Operating:<label id='weight'>{operatingWeight}</label>
                    Arm:<label id='arm'>{operatingArm}</label>
                </div>

                <div id='zerofuel'>
                    zerofuel:<label id='weight'>{zerofuelWeight}</label>
                    Arm:<label id='arm'>{zerofuelArm}</label>
                </div>

                <div id='gross'>
                    gross:<label id='weight'>{grossWeight}</label>
                    Arm:<label id='arm'>{grossArm}</label>
                </div>

            </>
}
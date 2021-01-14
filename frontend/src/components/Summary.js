export default function Summary({formf}){
    return <>

                <div id='kit'>
                    Kit Weight:<label id='weight' value={formf.kit}/>
                    Arm:<label id='arm' value={formf.kit}/>
                </div>

                <div id='cargo'>
                    Cargo:<label id='weight'  value={formf.cargo}/>
                    Arm:<label id='arm' value={formf.kit}/>
                </div>

                <div id='operating'>
                    Operating:<label id='weight'  value={formf.operating}/>
                    Arm:<label id='arm' value={formf.kit}/>
                </div>

                <div id='zerofuel'>
                    zerofuel:<label id='weight'  value={formf.zerofuel}/>
                    Arm:<label id='arm' value={formf.kit}/>
                </div>

                <div id='gross'>
                    gross:<label id='weight' value={formf.gross}/>
                    Arm:<label id='arm' value={formf.kit}/>
                </div>

            </>
}
import "../styles/footer.scss"

export default function Footer(){

    //D20 //
    function rollD20() {
    let d20Result = document.getElementById("d20Result");
    let d20 = Math.floor(Math.random()*20+1);
      d20Result.innerHTML = d20;
    };
    
    //D12//
    function rollD12() {
    let d12Result = document.getElementById("d12Result");
    let d12 = Math.floor(Math.random()*12+1);
      d12Result.innerHTML = d12;
    };
    
    //D10//
    function rollD10() {
    let d10Result = document.getElementById("d10Result");
    let d10 = Math.floor(Math.random()*10+1);
      d10Result.innerHTML = d10;
    };
    
    //D8//
    function rollD8() {
    let d8Result = document.getElementById("d8Result");
    let d8 = Math.floor(Math.random()*8+1);
      d8Result.innerHTML = d8;
    };
    
    //D6//
    function rollD6() {
    let d6Result = document.getElementById("d6Result");
    let d6 = Math.floor(Math.random()*6+1);
      d6Result.innerHTML = d6;
    };
    
    //D4//
    function rollD4() {
    let d4Result = document.getElementById("d4Result");
    let d4 = Math.floor(Math.random()*4+1);
      d4Result.innerHTML = d4;
    };

    return(
        <footer>
            <p>Some of the data for D&D 5e are open source. The API only covers data that can be found in the SRD/Systems Reference Document.</p>

            <div className="dice-wrapper">
                {/* d20 */}
                <div className="dice-area">
                    <button onClick={() => rollD20()}>D20</button>
                    <p id="d20Result"></p>  
                </div>

                {/* d12 */}
                <div className="dice-area">
                    <button onClick={() => rollD12()}>D12</button>
                    <p id="d12Result"></p>  
                </div>

                {/* d10 */}
                <div className="dice-area">
                    <button onClick={() => rollD10()}>D10</button>
                    <p id="d10Result"></p>  
                </div>
                
                {/* d8 */}
                <div className="dice-area">
                    <button onClick={() => rollD8()}>D8</button>
                    <p id="d8Result"></p>  
                </div>
                
                {/* d6 */}
                <div className="dice-area">
                    <button onClick={() => rollD6()}>D6</button>
                    <p id="d6Result"></p>  
                </div>
                
                {/* d4 */}
                <div className="dice-area">
                    <button onClick={() => rollD4()}>D4</button>
                    <p id="d4Result"></p>  
                </div>
            </div>
        </footer>
    )
}
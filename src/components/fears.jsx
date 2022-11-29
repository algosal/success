import '../App.css';
export default function Fears() {

  function myFunc(){
    alert("We are leaving here and going to our main page"); 
    window.open("https://salmansaeed.us")
  }
  
  return (
    <div>

        <p><h1 style={{color:"maroon"}}>Deadly Fears</h1></p>
        <p className="big-font-p" style={{width:"80%", paddingLeft:"100px"}}>
          The Fears Below must NOT be in your life
          <ol>
            <li>Poverty</li>
            <li>Critisism</li>
            <li>Ill Health</li>
            <li>Loss of Love</li>
            <li>Old Age</li>
            <li>Death</li>
            <li>Health</li>
          </ol>
           </p>
    <button onClick={myFunc} className="button-entry">&emsp; Open Main Page &emsp;</button>
    </div>
  );
}
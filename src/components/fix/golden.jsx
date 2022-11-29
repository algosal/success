import '../App.css';
export default function GoldenPrinciples() {

  function myFunc(){
    alert("We are leaving here and going to our main page"); 
    window.open("https://salmansaeed.us")
  }
  
  return (
    <div>

        <p><h1 style={{color:"maroon"}}>Golden Principles</h1></p>
        <p className="big-font-p" style={{width:"80%", paddingLeft:"100px"}}>
          The Principle Below must be read everyday and Followed 
          <ul>
            <li>Definiteness of Purpose</li>
            <li>Mastery Over Self</li>
            <li>Learning from Adversity</li>
            <li>Environmental Influence</li>
            <li>Time</li>
            <li>Harmony</li>
          </ul>
           </p>
    <button onClick={myFunc} className="button-entry">&emsp; Open Main Page &emsp;</button>
    </div>
  );
}
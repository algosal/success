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
          It is the knowledge of Perfect Law working through and above all things; 
            of perfect justice operating in and adjusting all human affairs, 
            that enables the good man to love his enemies, 
            and to rise above all hatred, resentment or complaining; 
            for he knows that only his own can come to him, and that 
            though he be surrounded by persecutors, his enemies are but the 
            blind instruments of a faultless retribution; and so he blamesthem not, 
            and calmly receives his accounts and patiently pays his moral debt. </p>
    <button onClick={myFunc} className="button-entry">&emsp; Open Main Page &emsp;</button>
    </div>
  );
}
import '../App.css';
export function MyButton() {

  function myFunc(){
    alert("We are leaving here and going to our main page"); 
    window.open("https://salmansaeed.us")
  }
  
  return (
    <button onClick={myFunc} className="button-entry">&emsp; Open Main Page &emsp;</button>
  );
}
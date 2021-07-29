// Your code goes here

document.addEventListener("DOMContentLoaded", () => {
    changeText();
  }); 


  function changeText(text){
      let change = document.querySelector('#text')
      change.textContent = "This is really cool!"
  }


  //<body>
//   <p id="text">JavaScript is so cool. It lets me add text to my page programmatically.</p>
//   <script type="text/javascript" src="index.js"></script>
// </body>
// </html>

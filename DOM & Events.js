Fill in the blanks to change the content of all paragraph tags of the page to "SoloLearn".
  var arr = document
   .getElementsByTagName("p");
     for(var x=0; x<arr.length; x++){arr[x].innerHTML="SoloLearn";


What is the output of this code?
 <div id="test">
 <p>some text</p>
 </div>
 <script>
 var el=document.getElementById("test");
 alert(el.hasChildNodes());
 </script>
true


Drag and drop from the options below to change the color of the paragraph with id="p2" to red.
 <script>
 var d = document.
 getElementById("p2");
 d.style.color="red";
 </script>


Can you handle multiple events on the same HTML element?
  yes


Fill in the blanks to alert a message when the button is clicked.
<button 
onclick="msg()">Click me</button>
<script>functionmsg() {alert("Hi!");}</script>


Display an alert when the mouse pointer is over the div tag:
  <div onmouseover="alert('Hi!');">put the mouse pointer over me</div>
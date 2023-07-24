//What is Dom.
//Document is just a file like word file exel file , We are just talking about HTML Document 
//Object is anything that we put in Document.
//Model is how you layout all the structure

/*
The DOM was designed to be independent of any particular programming language, making the structural 
representation of the document available from a single, consistent API. 
Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for
 any language, as this Python example demonstrates:


As it is generally not recommended to mix the structure of the page (written in HTML) and 
manipulation of the DOM (written in JavaScript), the JavaScript parts will be grouped together here, 
and separated from the HTML.

*/

window.onload = () => {
    // create a couple of elements in an otherwise empty HTML page
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("Big Head!");
    heading.appendChild(headingText);
    document.body.appendChild(heading);
  };

  /*
                Dccument
                   /\
                  /  \
                 /    \
               Body  Head
               /\
              h1 h2
              /\
             li li 

             
All the object located are know as Node 
Element is type based on node





  */
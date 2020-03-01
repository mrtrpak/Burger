# Burger

## Synopsis
This application is designed to be able to utilize a database, update the database based on user input and update the database. This was used to better my skills with using heroku, mysql and bringing it all together to bring a working app. 

## Getting Started
On load of the website it will show the burgers in the database on the left. There is also an option to add in more burgers. After entering a new burger that new burger is automatically added to the bottom of the list with a button generated next to it. The devour button next to the burgers, once clicked, will then move that burger to the right side of the screen immediately. The burgers on the right side of the screen also generates a button next to it which will delete that burger from the database and make the burger disappear from the page immediately. 

## Tools Used
- express
- handlebars
- MySql

## Difficulties 
One issue I ran into when making this app was how to separate the burgers based on if they were devoured or not. I was then able to find a way using handlebars to sort them with the #each & #if as well as #each & #unless. The other issue I was running into was getting the devour button to work properly. It kept coming up with an id of undefined which was making it difficult to grab that specific burger to get devoured. I changed the way I was targeting the burger with checking for a click on the document and passing the class of the button in the argument. After that I was able to target the id and the rest fell into place. 

## Link 
[Burger App Link](https://peaceful-fjord-70078.herokuapp.com/)

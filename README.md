# Giphy-Api

A fully functioning web application that uses various technologies, jquery, vanilla javascript , HTML , CSS and usage of API . This is to showcase my ability as a web developer to navigate thru the data of a given API and use it to build a web application . 

#Introduction :

This is a functional random gif generator . When you open the application , you will be given 5 random with randomized topics each. Clicking those buttons will generate a random gif correlated to the the topic of the button that was pressed, This randomized event was enabled thru the manipulation of the "offset" parameter on the GIPHY API . The user (you) can then search for your own words, or click the "MORE BUTTONS" to generate another set of 5 buttons with a random topic each . The user (you) can also clear the buttons and clear the gifs . When the user clicks the Download button,he will be redirected to the full resolution of the image ,this is NOT on the GIPHY api ,the URL is parsed and appended to another similar hostname to achieve this(the hostname without the annoying giphy adds). The possilities are endless, this is trully a GIF to the world!


### Deployed at : https://archivecoderzero.github.io/Giphy-Api/.

### History :

05/01/19 

> Initial commit with the baseline code from the activity,

> created the basic HTML format 

> created the button generator in javascript file 

> added an else statement in the seach button generator , so that if the user clicks an "empty" search query, it will alert the user to prevent creating a "blank" button .

05/04/19

> added a working topics button

> fully working display of the gif 

> static topics, but user can add his or her own topics

> onclick gif pause and gif play

05/05/19 

> added a download button

> added cosmetic improvements including hover animations and hover effects

> added toggle button to stop the background animation if the user goes "dizzy" 

> added the array of words, the randomizer , clear buttons , add more buttons , clear gifs button.

### Known "FEATURES" <-- wink wink-->

05/05/19

> as i was testing the generated words, some do not have any generated gifs, this leads me to believe that it might not have any associated gifs in regards to that word. IE : "panicky" . Manually searching it did not yield any results .

> Download button does not automatically download the image, it redirects to the image from Giphy host , to avoid this , i parsed the URL to directly pull the image address .


### Feel free to copy and remix this code ! this is my "GIF" to the world :)

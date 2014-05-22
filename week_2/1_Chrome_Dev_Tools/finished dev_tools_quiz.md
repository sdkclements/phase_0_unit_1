#### Include an inline screenshot of your codeschool's points from the profile page:
screenshot addresss: http://i.imgur.com/yPW2XFg.png

<!-- Modify the Markdown to include your answers. Don't delete the questions! -->

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS : To modify html we can open up the devtools and then under the elements tab we can edit it and change its location.
  to modidy the CSS, we look at the elements under the style sheet. this is on the right side of the developer tools.
  * Javascript Debugging: when looking to modufy JS in real time we have to use the sources tab, this will only allow you to edit JS in its own file, so some of it will remain as read only. Of particular importance is Execution control which allow you to move through the code efficiently. WHen Debugging with breakpoints(which is an intentional stopping of pausing place in a script) we want to use workflow which allows us to add in conditional statements.
  * Performance Optimization : Improving network performance is vital to optimizing your page. your do this under the NETWORK tab, this shows you what kind and in what way your page is utilizing various resources.

* What's the quick key for your OS to spawn the Dev Tools inspector? : Command-shift-C

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!) #0b0f11 is the background color
  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.) LINK TO SCREENSHOT http://i.imgur.com/nCCgqfN.png

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain. Because it inherits the color from body home. I would have to modify the color of the whole pages background to change it.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? IF we are talking about specifically an image it is the logo on the top left.
  * Explain how you would find out this information, and list the URL of offending image here and how big it is.
 This is the location in the DOM <img id="ctl00_LogoArea_tm_SitefinityImage1" src="/App_Themes/PXS_Demo/Images/logo.png" alt="Company Logo" style="border-width:0px;">
 http://www.ticketswizard.com/App_Themes/PXS_Demo/Images/logo.png THIS IS LINK TO IMAGE

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated? 885.9KiB could be eliminated thru optimization
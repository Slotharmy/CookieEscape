# CookieEscape

##How does it work?

As a user browsing on the internet you have to constantly accept or reject your cookies preferences. It is, however, impractical to click through various pop-ups and banners that often lack standardized design.

Our tool makes your browsing experience smoother and saves time and energy by making it possible to disable cookies by default. With websites that require cookies (“take it or leave it”), our tool warns and informs you that consent is required, displays privacy icons and suggests alternative websites without the obligatory cookie wall.

You can either turn off the plug-in and accept cookies to browse the respective webpage or, alternatively, follow one of our suggestions and switch to another website without cookies. 

##How does the prototype work?

The background.js is automatically executed when the extension is loaded. On every tab update we look for the current URL and the current tab. This information is then passed to the popup.js for further use. By now, everything is static. This means our cookie extension does only work for one specific site with low security standards. In the future we want to automatically take the correct HTML element (cookie banner) for the correct site. 

After the popup.js is started we are looking for the (by now) known html element of the website (the cookie banner), narrower the button id for allowing only the necessary cookies.
If the element is found a clicker should automatically select the right settings for you. If the element was not found the user can manage his preferred settings on his own or look for alternative websites in our chrome extension window.

##

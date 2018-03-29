/*Pseudo Code */


-Remove .hidden from #popUp
-Fetch All Data from API
On document.ready{
	-ADD .hidden to #popUp
	-ADD click event listener to News Source List Items{
			
	}


}


// - Start by adding all the DOM functionality first.
// - Map out all of the needed fields/properties from each respective feed.
// - Start by doing a console.log of the incoming feeds to confirm you have a
//   successful transaction before you start mapping anything out.
// - Make sure you have the [JSON View chrome extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
//   to get a clean view of the JSON dump in your browser.
// - Think about ways to best standardize all of your incoming data.
// - Test small pieces of functionality frequently, to make sure everything is
//   working.
__Feed rules:__

// - When the application first loads display the loading container (see below on
//   instructions to toggle this). When you successfully retrieve information from
//   the default API hide the loader and replace the content of the `#main`
//   container with that of the API. The DOM structure of each article must adhere
//   to the `.article` structure.
// - When the user selects an article's title show the `#popUp` overlay. The
//   content of the article must be inserted in the `.container` class inside
//   `#popUp`. Make sure you remove the `.loader` class when toggling the article
//   information in the pop-up.
// - Change the link of the "Read more from source" button to that of the
//   respective article.
// - When the user selects a source from the dropdown menu on the header, replace
//   the content of the page with articles from the newly selected source. Display
//   the loading pop up when the user first selects the new source, and hide it on
//   success.
// - Add an error message (either alert or a notification on the page) if the app
//   cannot load from the selected feed.

// __Additional UI interaction rules:__

// - When the user clicks/taps the search icon, expand the input box. Best approach
//   for this is to toggle the `.active` class for the `#search` container. If the
//   search input box is already expanded tapping the search icon again will close
//   the input. Pressing the "Enter" key should also close the opened input box.
//   _See Bonus 2 for search filtering functionality._
// - When the app is first loading and when the user selects to load a new feed
//   from the dropdown, display the `#popUp` container with the `.loader` class.
//   You can toggle the `.hidden` class from the container to display/hide the
//   overlay container.
// - Add functionality to hide the pop-up when user selects the "X" button on the
//   pop-up.
// - Clicking/tapping the "Feedr" logo will display the main/default feed.
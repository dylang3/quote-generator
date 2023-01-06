# quote-generator

This application randomly displays a quote which is selected from a default array of quotes. The user also has the ability to add new quotes to be randomly selected and displayed. A local storage solution is currently used for the application, but upgrading to a database solution is a priority for Version 3.0. 

The initial version of the application was created based on [this Youtube video](https://www.youtube.com/watch?v=5fb2aPlgoys&t=5380s). I expanded upon the original application to include the functionality for users to add their own custom quotes and for these custom quotes to be saved using the user's local browser storage (Version 2.0). 

## To-Do:
* Remove ability for a user to add a blank quote or a quote without attribution to an individual
* Add functionality to view the entire array of quotes as a list
  * One idea is to create a modal from which the user add quotes. The quote list view could then just have an "Add New Quote" button that triggers this modal.
* Add functionality to remove a quote from the quotes array
* Alter random selection of quotes such that quotes are sampled without replacement until all quotes have been displayed
  * The existing add quote functionality may be removed in favor of including this functionality with the quote list

# Welcome to Event Tite!
This app was designed for event planners and producers to help manage all of your events and provide insights on each ticket sold for each event.


## The Events Dashboard
The Events Dashboard provides a list of your events with a snapshot of tickets sold and revenues generated. You can click 'See More' on each event to expand the event and view more details on the Event Page.


### Event Pages
Event Pages provide the information on each ticket sold, including capabilities to create a new ticket, delete a ticket, and update a ticket in the case of typos or missing information.


#### 'New Event'
You can add an unlimeted number of events to your Events Dashboard via the 'New Event' tab at the top of the app. Simply fill out the form with the information about your new event and it will compile into your Events Dashboard.
    




# Requirements

- At a minimum, set up the following API routes in Sinatra:
  <!-- - create and read actions for both models -->
  - full CRUD capability for one of the models: 
  <!-- The update action should be implemented using a form that is 
  pre-filled with existing values for the object.  -->
  On submission of the form, the object should update. Note: Using a like button or similar will not meet the update requirement.


- Implement proper front end state management. You should be updating state using a setState function after receiving your response from a POST, PATCH, or DELETE request. You should NOT be relying on a GET request to update state. 

- Use good OO design patterns. You should have separate classes for each of your models, and create instance and class methods as necessary. 

- Routes in your application (both client side and back end) should follow RESTful conventions.
Update controller so tickets are associated with the event
Remove ticket fetch from App, pass as props.
Stop fetching on each event Page
Delete function needs to delete from events, not tickets
Get rid of tickets page. Put ticket buttons on eventPage



EventPage
    // REMOVE. Pass events/tickets as prop
    // store singleEvent as state
    // 1st render will come in as undefined. Find and If event exists, set state.
    // Convert param from string to compare to ID
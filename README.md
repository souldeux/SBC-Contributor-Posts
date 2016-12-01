# SBC-Contributor-Posts
Customizing the admin add/edit post interface with a wordpress plugin

This WordPress plugin inserts some javascript into the add/edit post pages in the default admin area. 

We use that javascript to alter the layout of those pages, hiding elements, changing tooltips, etc. A button marked
"Enter Contributor Mode" is created and inserted near the top of the page; when clicked, the relevant changes occur.

This is very much a customized solution for contributors to ShamelessBookClub, but the basic principles (importing/running JS 
only on certain pages in the admin area, using jQuery commands in no-conflict mode, etc.) are reusable elsewhere.

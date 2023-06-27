# DemoAppReactNetFrame
React app + .NET Framework app on same host using api routes and hashROuter for react

# Client-App
client-app folder contains react app code and can be developed saparately 

# API 
.NET Framework app is api app and a default route / where react app render

# How To Deploy
- create react app production build and nevigate to *index.html* in build folder
- copy build hashes for react build and change old hashes in *\Views\Shared\_Layout.cshtml* and *\Views\Home\Index.cshtml* respectively
- run your .NET APP or deploy to your sever

# Note 
This approach is old and is only for .NET Framewrok. There is better Approach for it with .NET Core and later with proxy

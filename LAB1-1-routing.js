//LAB 1-1: SIMPLE ROUTING WITH THE LOCATION OBJECT

// Get the query parameter from the URL
var page = window.location.search.substring(1);

// Create references to the mainContent and pageTitle elements
var mainContent = document.getElementById("mainContent");
var pageTitle = document.getElementById("pageTitle");

//#### CONTENT FOR HOME PAGE ==== - BACKGROUND IS white
var contentHome = "<h3>Welcome to our website!</h3>";
contentHome += "<p>We have many wonderful products that you might be interested in.</p>";
//==== END OF CONTENT FOR HOME PAGE ####

//#### CONTENT FOR PRODUCTS PAGE ====  - BACKGROUND IS red
var contentProducts = "<h3>Our Top 5 Products</h3>";
contentProducts += "<ol><li>Computers</li><li>Hard Drives</li><li>USB Drives</li><li>Backup Drives</li><li>Printers</li></ol>";
//==== END OF CONTENT FOR PRODUCTS PAGE #### 

//#### CONTENT FOR ABOUT US PAGE ==== - BACKGROUND IS green
var contentAbout = "<h3>About Computer Corp</h3>";
contentAbout += "<p>We have been around a long time, so we know what we're doing.</p>";
contentAbout += "<p><h4>Customer Feedback</h4><q>You're the only computer company I trust</q>&mdash;Ernst Blofeld</p>";
//==== END OF CONTENT FOR ABOUT US PAGE ####

// Steps to implement simple routing
// 1. Check the value of the 'page' variable
// 2. Set the background color of mainContent based on the page
// 3. Set the pageTitle based on the page
// 4. Set the content of mainContent based on the page


// Step 1: Check the value of the 'page' variable
if (page === "home") {
    // Step 2: Set the background color of mainContent based on the page
    mainContent.style.backgroundColor = "white";
    // Step 3: Set the pageTitle based on the page
    pageTitle.innerHTML = "Home Page";
    // Step 4: Set the content of mainContent based on the page
    mainContent.innerHTML = contentHome;
  } else if (page === "products") {
    mainContent.style.backgroundColor = "red";
    pageTitle.innerHTML = "Products Page";
    mainContent.innerHTML = contentProducts;
  } else if (page === "about") {
    mainContent.style.backgroundColor = "green";
    pageTitle.innerHTML = "About Us Page";
    mainContent.innerHTML = contentAbout;
  } else {
    // Default to the home page if the page parameter is not recognized
    mainContent.style.backgroundColor = "white";
    pageTitle.innerHTML = "Home Page";
    mainContent.innerHTML = contentHome;
  }
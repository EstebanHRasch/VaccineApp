// Notifications : 29/12/2021

// Show notification on top of header (Right Corner)
// Design Should show a circular or any small icon, to show number of notifications
// Upon click it should expand in rectangular box and show all the notification messages 
// All notification messages should be clickable
// Upon click of any of them it should reduce the count in notification icon
// It should have two types of notifications - static and dynamic
// Static Notifications To Assist User
// 1. To Add Products from Product Screen
// 2. To Add Items from Cart Page
// 3. To review cart from Checkout Page
// 4. To Make Payment from Payment Page
// 5. To Assist Them for cancel/reorder
// Dynamic Notifications To Assist User
// 1. To Check the number of items added in the Cart
// 2. If user cancels an order it should it should add one notification that an order has been cancelled and add it to notification row

// Logout : 23/12/2021
// LogOut : Set up logout button/link on TopRight corner, upon click user should be cleared and back to home

// Review Page - 23/12/2021
// This should get its reviews from recent orders page
// User should be allowed to give ratings and his comments to each products
// Upon successful submission each product should have a link to show its review 
// When user expands product detail we should also see the button to which will take us to its review
// on recent order page we can show a popup to submit rating or a new page its up to you //can use -> react bootstrap
// user should only be able to give rating once cancel button is gone

// Reorder - 23/12/2021
// User to reorder from recent orders or from cancelled orders
// A Simple process just add the order to your cart and replace or merge whatever is present in cart

// Upon Cancel Click - 22/12/2021
// Save the order to CancelledOrders collection (should have userid, cancelled, dateTime)
// Make API to Save and Fetch from CancelledOrders
// Make a component CancelledOrders to Show all cancelled Orders of current user in Latest First
// Add a button to Buy Again, (also show a message - This offer is much more exciting)
// Upon Adding this should get appended to the existing Cart that is shown in Carts App


// Recentorder Page - 21/12/2021
// Upon MakePayment Click
// Save the cart to RecentOrders collection (should have userid, order, dateTime)
// Make API to Save and Fetch from RecentOrders
// Make a component RecentOrders to Show all previous Orders of current user
// Add a button to Cancel (like) we have remove in CartComponent and then save again, 
// order can be cancelled within 2 days after that it should be marked delivered

// Coupon Page - 20/12/2021
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload


// Practice : 20/12/2021 

// In the header component we want to show only three navigations - Home, User, About, when user lands on page
// If user is signed in then only we want to show all the navigations
// If user is not signed in then we show a banner or message on top - to use Login page to see other features
// Once user sign in then - Welcome "User Name", to Shopping cart application
// the user navigation link should say - Login, untill user is signed in

// On product page the signed in user with name - Admin, should only be allowed to add product


// Checkout Page - 17/12/2021

// Create A functional component and use react hook or using container to read data from store
// Show - User Details (Name, address) //We will deliver products to below address kind of message as well
// Show Table of cart put up for purchase (you need to re-use the cartlist and cartitem components)
// Show the purchase Summary (total qty and total amount)
// Show a Button to Proceed to Payment
// Integrate this page on CartComponent Button (Go to checkout)

// Second Task :
// Create a state using useState to show hide (Make Payment Message)
// Upon Clicking on MakePayment button, hide everything and just show the message - "Thankyou for the payment, your items under process!"
// Change the header from Checkout Page to Payment Page

// Practice : 15/12/2021 

// NewCart Implementation
// Create New Cart Component using react hooks, functional component
// Each Item in this component should be added from Product Component 
// Now each Product should have general fields, like Name, Description, Rating, Price, Category (New Product Document/ Collection)
// In Product component each item when we click to display details should also have a button "Add To Item" on click should add to New Cart
// On Cart Component, Button for save to Checkout should save the cart item to database (New Cart Document/ Collection)

// Practice - 2

//1. Create a component with name Hobby, add a textbox to insert hobbyname into it and save it to the database using SaveAPI
//2. Create an action to save the hobby, can use useractions file and userrouter file for the same


// Practice - 1

//1. Create a child component with your Name, parent would be app component
//2. Pass various properties like Name, Age, Address, etc as an object from app component and show values accordingly.
//3. Pass some html elements (h1, input, etc) as properties, show as child elements
//4. Use callback function to send "User Name" from child component back to parent
//5. Create an input box in Class Component and bind event to read values using setState (can use existing component)

//Get-AppXPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}
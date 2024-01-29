/*LAB 1-2: JAVASCRIPT CLASSES*/

// FAVE FRIEND CLASS
class Friend {
	constructor(name, number) {
	  this.name = name;
	  this.number = number;
	}
  }
  
  window.onload = function () {
	var faveThree = []; // FAVE 3 ARRAY
  
	// Form submission event handler
	document.forms["fave_form"].addEventListener("submit", function (event) {
	  event.preventDefault(); // Prevent the default form submission behavior
  
	  // Create Friend objects from form inputs
	  const friend1 = new Friend(
		document.getElementById("n_1").value,
		document.getElementById("p_1").value
	  );
	  const friend2 = new Friend(
		document.getElementById("n_2").value,
		document.getElementById("p_2").value
	  );
	  const friend3 = new Friend(
		document.getElementById("n_3").value,
		document.getElementById("p_3").value
	  );
	  const friend4 = new Friend(
		document.getElementById("n_4").value,
		document.getElementById("p_4").value
	  );
	  const friend5 = new Friend(
		document.getElementById("n_5").value,
		document.getElementById("p_5").value
	  );
  
	  // Add Friend objects to the faveThree array
	  faveThree = [friend1, friend2, friend3, friend4, friend5];
  
	  // Display the Fave Three list
	  displayFaveThreeList();
	});
  
	// Function to display the Fave Three list
	function displayFaveThreeList() {
	  const faveListElement = document.getElementById("faveList");
  
	  // Clear existing list items
	  faveListElement.innerHTML = "";
  
	  // Loop through the faveThree array to create list items
	  faveThree.forEach((friend) => {
		const listItem = document.createElement("li");
		listItem.textContent = `${friend.name}  ${friend.number}`;
		faveListElement.appendChild(listItem);
	  });
  
	  // Show the Fave Three block
	  document.getElementById("faveBlock").style.display = "block";
	}
  }; // END OF onload FUNCTION
  
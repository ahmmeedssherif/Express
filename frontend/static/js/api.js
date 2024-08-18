// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /api/data
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

// Set up a function to handle the response
xhr.onreadystatechange = function () {
  // Check if the request is complete
  if (xhr.readyState === 4) {
    // Check if the request was successful
    if (xhr.status === 200) {
      // Parse and handle the response
      const response = JSON.parse(xhr.responseText);
      // Map through the array and generate HTML content for each item
      const content = response
        .map(
          (item) => `
                    <div>
                    <h3>Todo ID: ${item.id}</h3>
                    <p>User ID: ${item.userId}</p>
                    <p>Title: ${item.title}</p>
                    <p>Completed: ${item.completed ? "Yes" : "No"}</p>
                    </div>`
        )
        .join("");

      // Insert the content into the page
      document.getElementById("cont").innerHTML = content;
    } else {
      // Handle the error
      console.error("Request failed with status code:", xhr.status);
    }
  }
};

// Send the request
xhr.send();

var AppScriptUrl = 'https://script.google.com/macros/s/AKfycbxM4jW2ht858MGWBZ4v4sJPzyIyIOZG9Wvs2rNUzJ98ipnGQIiDXB9m8nDKnrMgRz-DdA/exec';

function getData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Request was successful
        var response = JSON.parse(xhr.responseText);
        // Handle the response data here
         handleData(response);
         console.log(response);
      } else {
        // Request failed
        console.error('Request failed:', xhr.status);
      }
    }
  };
  xhr.send();
}

// this function prints the data to the HTML page.
function handleData(response) {
  const sheetDataElement = document.getElementById("sheetData");

  // Create an object to aggregate data per menu category
  const menuData = {};

  // Iterate over each item in the response
  response.forEach(function(item) {
    const menu = item["menu"];
    const message = item["message"];
    const vote = item["radio-group"];
    const name = item["name"];

    // Initialize data for each menu if not already present
    if (!menuData[menu]) {
      menuData[menu] = { y: 0, n: 0, messages: [] };
    }

    // Count 'y' and 'n' votes
    if (vote === "y") {
      menuData[menu].y++;
    } else if (vote === "n") {
      menuData[menu].n++;
    }

    // Add the message and name to the menu's message list
    menuData[menu].messages.push({ message, name });
  });

  // Display the aggregated data for each menu
  Object.keys(menuData).forEach(function(menu) {
    // Create a <li> element for each menu category
    const menuListItem = document.createElement("li");

    // Add menu title and y/n count
    menuListItem.innerHTML = `<strong>${menu}</strong> (Yes: ${menuData[menu].y}, No: ${menuData[menu].n})`;

    // Create a <ul> for messages and add each message as a <li>
    const messageList = document.createElement("ul");
    menuData[menu].messages.forEach(function(entry) {
      const messageItem = document.createElement("li");
      messageItem.textContent = entry.message;

      // Create a div for the name, positioned below and to the right
      const nameDiv = document.createElement("div");
      nameDiv.textContent = `- ${entry.name}`;
      nameDiv.style.fontSize = "0.9em";
      nameDiv.style.marginLeft = "10px";
      nameDiv.style.color = "gray";

      // Append the name div to the message item
      messageItem.appendChild(nameDiv);

      // Append the message item to the message list
      messageList.appendChild(messageItem);
    });

    // Append the message list to the menu item
    menuListItem.appendChild(messageList);

    sheetDataElement.appendChild(menuListItem);
  });
}

// Example usage:
getData(AppScriptUrl);

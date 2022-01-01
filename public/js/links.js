import {links} from "./config.js";

// Create web links
const box2 = document.getElementById("box-2");

for (var i = 0; i < links.length; i++){
    // Create list
    let list = document.createElement("ul");

    // Add title item to <ul> element
    let title = document.createElement("li")
    title.appendChild(document.createTextNode(links[i].name));
    list.appendChild(title)

    // Add link items
    for (var j = 0; j < links[i].links.length; j++) {
        // Create <li> element
        let listItem = document.createElement("li");

        // Create <a> element, add to <li>
        let linkItem = document.createElement("a");
        linkItem.href = links[i].links[j].href;
        linkItem.target = links[i].links[j].target;
        linkItem.appendChild(document.createTextNode(
            links[i].links[j].content
        ));
        listItem.appendChild(linkItem)

        // Add <li> to <section>
        list.appendChild(listItem)
    }

    // Add link list to HTML
    box2.appendChild(list)
}
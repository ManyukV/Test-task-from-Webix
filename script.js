webix.ready(function() {
    webix.ui({
      container: "app",
      rows: [
        {
          view: "toolbar",
          css: "my-header",
          elements: [
            { view: "label", label: "My App", css: "header-label" },
            { 
              view: "button", 
              type: "icon", 
              icon: "wxi-user", 
              label: "Profile", 
              width: 100, 
              css: "transparent-button",
              align: "right" 
            }
          ]
        },
        {
          cols: [
            {
              view: "sidebar",
              css: "sidebar",
              data: [
                { id: "dashboard", value: "Dashboard" },
                { id: "users", value: "Users" },
                { id: "products", value: "Products" },
                { id: "locations", value: "Locations" }
              ]
            },
            {
              view: "resizer"
            },
            {
              rows: [
                {
                  view: "datatable",
                  autoConfig: true,
                  scrollY: true, // Включаем вертикальный скролл
                  columns: [
                    { id: "title", header: "Title", fillspace: true },
                    { id: "year", header: "Year", width: 100 },
                    { id: "votes", header: "Votes", width: 100 },
                    { id: "rating", header: "Rating", width: 100 },
                    { id: "rank", header: "Rank", width: 100 }
                  ],
                  data: small_film_set
                }
              ]
            },
            {
              view: "form",
              width: 300,
              elements: [
                { view: "template", template: "EDIT FILMS", type: "section" },
                { view: "text", label: "Title", name: "title" },
                { view: "text", label: "Year", name: "year" },
                { view: "text", label: "Rating", name: "rating" },
                { view: "text", label: "Votes", name: "votes" },
                {
                  margin: 5, cols: [
                    { view: "button", value: "Add new", css: "webix_primary" },
                    { view: "button", value: "Clear" }
                  ]
                }
              ]
            }
          ]
        },
        {
          view: "template",
          template: "The software is provided by https://webix.com. All rights reserved (c).",
          height: 30,
          css: "footer"
        }
      ]
    });
  });
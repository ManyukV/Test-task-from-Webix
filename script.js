webix.ready(function () {
  webix.ui({
    container: "app",
    rows: [
      {
        view: "toolbar",
        css: "my-header",
        height: 50,
        elements: [
          { view: "label", label: "<span class='header-label'>My App</span>" },
          {
            view: "button",
            type: "icon",
            icon: "wxi-user",
            label: "Profile",
            width: 100,
            css: "transparent-button",
            align: "right",
          },
        ],
      },
      {
        cols: [
          {
            rows: [
              {
                view: "sidebar",
                css: "sidebar",
                width: 201,
                data: [
                  { id: "dashboard", value: "Dashboard" },
                  { id: "users", value: "Users" },
                  { id: "products", value: "Products" },
                  { id: "locations", value: "Locations" }
                ],
              },
              {
                css:"connected-status",
                width: 201,
                template: "<div><span class='webix_icon wxi-check'></span>Connected</div>",
                autoheight: true,
                borderless: true
              }
            ]
          },
          {
            rows: [
              {
                view: "datatable",
                height: 880,
                autoConfig: true,
                columns: [
                  { id: "title", header: "Title", fillspace: true },
                  { id: "year", header: "Year" },
                  { id: "votes", header: "Votes" },
                  { id: "rating", header: "Rating" },
                  { id: "rank", header: "Rank" },
                ],
                data: small_film_set,
              },
            ],
          },
          {
            view: "form",
            width: 300,
            minWidth: 200,
            maxWidth: 350,
            elements: [
              { view: "template", template: "EDIT FILMS", type: "section" },
              { view: "text", label: "Title", name: "title" },
              { view: "text", label: "Year", name: "year" },
              { view: "text", label: "Rating", name: "rating" },
              { view: "text", label: "Votes", name: "votes" },
              {
                margin: 5,
                cols: [
                  { view: "button", value: "Add new", css: "webix_primary" },
                  { view: "button", value: "Clear" },
                ],
              },
            ],
          },
        ],
      },
      {
        view: "template",
        template:
          "The software is provided by <a href='https://webix.com'>https://webix.com</a>. All rights reserved (c).",
        height: 40,
        css: "footer",
      },
    ],
  });
});

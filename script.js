webix.ready(function () {
  webix.ui({
    rows: [
      //first row
      {
        view: "toolbar",
        css: "webix_dark",
        height: 50,
        paddingX: 12,
        cols: [
          { view: "label", label: "My App" },
          {
            view: "button",
            type: "icon",
            icon: "wxi-user",
            label: "Profile",
            autowidth: true,
            css: "webix_transparent"
          },
        ],
      },
      //second row
      {
        cols: [
          //first col
          {
            rows: [
              {
                view: "sidebar",
                css: "sidebar",
                paddingX: 15,
                width: 250,
                borderless: true,
                resizer:true,
                css: "sidebar",
                data: [
                  { id: "dashboard", value: "Dashboard" },
                  { id: "users", value: "Users" },
                  { id: "products", value: "Products" },
                  { id: "locations", value: "Locations" },
                ],
              },
              {
                view: "template",
                template:
                  "<div style='color: green; text-align: center;'><span class='webix_icon wxi-check'></span> Connected</div>",
                height: 30,
                borderless: false,
                css: "sidebar template",
              },
            ],
            
          },
          {
            view: "resizer", // Добавляем ресайзер для изменения ширины боковой панели
          },
          //second col
          {
            rows: [
              {
                view: "datatable",
                autoConfig: true,
                scrollX: false,
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
          //third col
          {
            view: "form",
            width: 320,
            rows: [
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
              {}
            ],
          },
        ],
      },
      //third row
      {
        view: "template",
        template:
          "<div style='text-align:center;'>The software is provided by <a href='https://webix.com'>https://webix.com</a>. All rights reserved (c).</div>",
        height: 26,
      },
    ],
  });
});
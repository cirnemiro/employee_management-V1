
const data = $.ajax({
    url: 'library/employeeController.php',
    method: 'GET',
    data: 'param=employees',
    success: function (response) {
        render(JSON.parse(response))
    }
})

function render(data) {
    $('#grid').jsGrid({
        data: data,

        autoload: true,
        // controller: {
        // },

        width: "100vw",
        height: "100vh",
        filtering: false,
        editing: true,
        sorting: true,
        paging: true,

        // {
        //     "id": "1",
        //     "name": "Rack",
        //     "lastName": "Lei",
        //     "email": "jackon@network.com",
        //     "gender": "man",
        //     "age": "24",
        // }
        fields: [
            {name: "id", type: "number", width: "auto"},
            {name: "name", type: "text", width: "auto"},
            {name: "lastName", type: "text", width: "auto"},
            {name: "email", type: "email", width: "auto"},
            {name: "gender", type: "select", width: "auto"},
            {name: "age", type: "number", width: "auto"},
            {type: "control"}
        ],
    })
}

function changeData(request, data, args) {
    return $.ajax({
        url: 'library/employeeController.php',
        method: request,
        data: {method: data, params: args},
        success: function (response) {
            // promise? I go to sleep.. think while dreaming
            return response;
        }
    })
}

const employees = changeData('GET', 'getAllEmployees', 0).then(response => {
    render(JSON.parse(response))
})

// const employees = $.ajax({
// url: 'library/employeeController.php',
// method: 'GET',
// data: {method: 'getAllEmployees', params: 0},
// success: function (response) {
// render(JSON.parse(response))
// }
// })

function render(employees) {
    $('#grid').jsGrid({
        data: employees,

        autoload: true,
        controller: {
            loadData: () => {
                // console.log(employees);
            },
            updateItem: (args) => {
                return changeData('GET', 'updateEmployee', args).then(
                    response => {
                        console.log(JSON.parse(response))
                        // return JSON.parse(response);
                    }
                );
            },
            insertItem: (args) => {
                // changeData('updateEmployee', args);
            },
            deleteItem: (args) => {
                // changeData('deleteEmployee', JSON.stringify(args));
            }
        },

        width: "100vw",
        height: "100vh",
        filtering: false,
        editing: true,
        sorting: true,
        paging: true,

        deleteConfirm: "Do you really want to delete this employee?",

        fields: [
            {name: "id", type: "number", width: "auto"},
            {name: "name", type: "text", width: "auto"},
            {name: "lastName", type: "text", width: "auto"},
            {name: "email", type: "email", width: "auto"},
            // TODO // auto select gender from data //
            {name: "gender", type: "select", items: ['male', 'female', 'non-binary'], width: "auto"},
            {name: "age", type: "number", width: "auto"},
            {type: "control"}
        ],
    })
}

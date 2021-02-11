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
        onItemUpdating: function(args){
            // for (const item of args.item) {
            //     console.log(item);
            // }

            // if (args.item == args.previousItem) {
            //     args.cancel =true
            //     console.log('canceled');
            // }else{
            //     console.log('modified');
            // }
        },

        controller: {
            loadData: () => {
                // console.log(employees);
            },
            updateItem: (args) => {
                return changeData('GET', 'updateEmployee', args).then(
                    response => {
                        console.log(args);
                        console.log(response)
                        // return JSON.parse(response);
                    }
                );
            },
            insertItem: (args) => {
                console.log(args);
                return changeData('GET', 'addEmployee', args).then(
                    response => {
                        console.log(response)
                        // return JSON.parse(response);
                    }
                );
                
            },
            deleteItem: (args) => {
               
                return changeData('GET', 'deleteEmployee', args).then(
                    response => {
                        console.log(response)
                        // return JSON.parse(response);
                    }
                );
            }
        },

        width: "100vw",
        height: "100vh",
        filtering: false,
        editing: true,
        sorting: true,
        paging: true,
        updateOnResize: true,
        inserting: true,

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

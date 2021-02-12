import {modal} from "../modal.js";

// const employees = $.ajax({
// url: 'library/employeeController.php',
// method: 'GET',
// data: {method: 'getAllEmployees', params: 0},
// success: function (response) {
// render(JSON.parse(response))
// }
// })

export function changeData(request, data, args) {
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


function render(employees) {
    $('#grid').jsGrid({
        data: employees,

        autoload: true,
        onItemUpdating: function (args) {
            // for (const item of args.item) {

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
                        if (response === 'update') {
                            console.log(args.name);
                            alert(args.name + ' has been modified')
                        }
                    }
                );
            },
            insertItem: (args) => {
                console.log(args);
                return changeData('GET', 'addEmployee', args).then(
                    response => {
                        console.log(response)
                        // return JSON.parse(response);
                        if (response === 'add') {
                            console.log(args.name);
                            alert(args.name + ' has been added')
                        }
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
            {name: "id", type: "number", width: "auto", align: "center", validate: "required"},
            {name: "name", type: "text", width: "auto"},
            {name: "lastName", type: "text", width: "auto"},
            {name: "email", type: "email", width: "auto"},
            // TODO // auto select gender from data //
            {
                name: "gender", type: "select",
                items: ['male', 'female', 'non-binary'], width: "auto"
            },
            {name: "age", type: "number", width: "auto"},
            {type: "control"},
        ],
        insertRowRenderer: function () {
            return modal.templateModal(false, 'Edit')
        },
        rowDoubleClick: function (data) {
            // -- todo modal:
            // >>> modal edit enable/disable modes.
            // >>> run controller modes
            // >>> change "submit" functions for diferent cases
            // >>> delete modal when a employee is deleted
            // >>> listen from where comes the modal request.
            // >>> ✅listen to input values >> transform to object 
            // >>> ✅ create modal component 
            const cell = data.event.target;
            const employee = data.item;
            const row = data.event.currentTarget;

            const form = modal.templateModal(data.item, 'Edit', 'disabled')

            $('#employee-modal').remove();
            $(form).insertAfter($(row));

            $('#employee-modal__exit').on('click', () => {
                $('.employee-modal').remove();
            });
            modal.modalButtonListener(data, 'disabled');
        },
        rowClick: function (click) {
        },
        insertValue: function (data) {

        }
    })
}

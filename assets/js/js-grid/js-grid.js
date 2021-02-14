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
                        // return JSON.parse(response);
                        if (response === 'updated') {
                            console.log(args.name);
                            alert(args.name + ' has been updated')
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
                        if (response === 'added') {
                            console.log(args.name);
                            alert(args.name + ' has been added')
                        }
                    }
                );

            },
            deleteItem: (args) => {
                $('#employee-modal').remove();
                return changeData('GET', 'deleteEmployee', args).then(
                    response => {
                        console.log(response)
                        // return JSON.parse(response);
                    }
                );
            }
        },

        width: "100%",
        filtering: false,
        editing: true,
        sorting: true,
        paging: true,
        updateOnResize: true,
        inserting: false,

        deleteConfirm: "Do you really want to delete this employee?",



        fields: [
            {name: "id", type: "number", width: "auto", align: "center", validate: "required", headercss: 'table'},
            {name: "name", type: "text", width: "auto", headercss: 'table'},
            {name: "lastName", type: "text", width: "auto", headercss: 'table'},
            {name: "email", type: "email", width: "auto", headercss: 'table'},
            // TODO // auto select gender from data //
            {
                name: "gender", type: "select",
                items: ['male', 'female', 'non-binary'], width: "auto",
                headercss: 'table'
            },
            {name: "age", type: "number", width: "auto", headercss: 'table'},
            {type: "control"},
        ],
        insertRowRenderer: function () {
            setTimeout(() => {
                modal.modalButtonListener({
                    age: "", city: "", email: "", gender: "", id: "",
                    lastName: "", name: "", phoneNumber: "",
                    postalCode: "", state: "", streetAddress: ""
                }, 'add');
            }, 0)
            $('.jsgrid-table').append(modal.templateModal(false, 'Submit'))
        },
        rowDoubleClick: function (data) {
            // -- todo modal:
            // >>> ✅listen to input values >> transform to object 
            // >>> ✅ create modal component 
            // >>> ✅ modal edit enable/disable modes.
            // >>> run controller modes
            // >>> ✅ change "submit" functions for diferent cases
            // >>> ✅ delete modal when a employee is deleted
            // >>> ✅ listen from where comes the modal request.
            const cell = data.event.target;
            const employee = data.item;

            const row = data.event.currentTarget;
            const form = modal.templateModal(data.item, 'Edit', 'disabled')

            $('#employee-modal').remove();
            $(form).insertAfter($(row));
            modal.modalButtonListener(data.item, 'disabled');
        },
        rowClick: function (click) {
        },
        insertValue: function (data) {

        }
    })
}

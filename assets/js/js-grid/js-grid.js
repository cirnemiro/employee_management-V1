import {modal} from "../modal.js";
import {addEmployee} from "../add-employee.js";


export function changeData(request, data, args) {
    return $.ajax({
        url: 'library/employeeController.php',
        method: request,
        data: {method: data, params: args},
        success: function (response) {
            if (response == 1) {                
                window.location.href = "../index.php";
            }else{
                return response;
            }
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


        controller: {
            loadData: () => {
                $('body').append(addEmployee.template)
                addEmployee.addEmployeeListener();
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
            {
                name: "id", type: "number", width: "auto", align: "center",
                validate: "required", headercss: 'table'
            },
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
        rowDoubleClick: function (data) {
            const cell = data.event.target;
            const employee = data.item;

            const row = data.event.currentTarget;
            const form = modal.templateModal(data.item, 'Edit', 'disabled')

            $('#employee-modal').remove();

            if (!$(row).attr('data-open')) {
                $(row).attr('data-open', 'true');
                $(form).insertAfter($(row));
                modal.modalButtonListener(data.item, 'disabled');
            } else {
                $(row).removeAttr('data-open');
                $('#employee-modal').remove();
            }
        },
        onItemUpdating: function (args) {
        },
        insertRowRenderer: function () {
        },
        rowClick: function (click) {
        },
        insertValue: function (data) {

        }
    })
}

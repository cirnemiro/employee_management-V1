import {modal} from "../modal.js";
import {addEmployee} from "../add-employee.js";
import {validation} from "../validation.js";


export function changeData(request, data, args) {
    return $.ajax({
        url: 'library/employeeController.php',
        method: request,
        data: {method: data, params: args},
        success: function (response) {
            if (response == 1) {
                window.location.href = "../index.php";
            } else {
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
                $('.custom-add__header').append(addEmployee.template)
                addEmployee.addEmployeeListener();
            },
            updateItem: (args) => {
                return changeData('GET', 'updateEmployee', args).then(
                    response => {
                        if (response === 'updated') {
                            console.log(args.name);
                            alert(args.name + ' has been updated')
                        }
                    }
                );
            },
            insertItem: (args) => {
                return changeData('GET', 'addEmployee', args).then(
                    response => {
                        console.log(response)
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
                    }
                );
            }
        },

        width: "90%",
        // margin: 'auto',
        filtering: false,
        editing: true,
        sorting: true,
        paging: true,
        updateOnResize: true,
        inserting: false,
        pageSize: 10,
        pageNextText: '>>',
        pagePrevText: '<<',

        deleteConfirm: "Do you really want to delete this employee?",

        fields: [
            {
                name: "id", type: "number", width: "auto", align: "center",
                visible: false
            },
            {name: "name", type: "text", width: "auto"},
            {name: "lastName", type: "text", width: "auto"},
            {name: "email", type: "email", width: "auto"},
            // TODO // auto select gender from data //
            {
                name: "gender", type: "select",
                items: ['male', 'female', 'non binary'], width: "auto"
            },
            {name: "age", type: "number", width: "auto"},
            {type: "control", headercss: 'custom-add__header'},
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
                modal.avatarListener();
            } else {
                $(row).removeAttr('data-open');
                $('#employee-modal').remove();
            }
        },
        onItemUpdating: function (args) {

            // if (args.item.name != 'klkpasa') {
            //     console.log('updating error');
            //     args.cancel = true
            // }
            validation(args)
        },
        onItemUpdated: function (args) {
            console.log('onItemUpdated', args);
        },
        insertRowRenderer: function () {
        },
        rowClick: function (click) {
        },
        insertValue: function (data) {
        },
        invalidNotify: function (args) {
            alert('error')
            console.log(args);
        }
    })
}

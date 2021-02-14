import {modal} from "./modal.js";
const addEmployee = {
    template: `
    <div id="custom-add" class="custom-add custom-add-position no-select">
        <span class="material-icons">
            person_add
        </span>
    </div>'`,
    addEmployeeListener: function () {
        $('#custom-add').on('click', () => {
            $('#employee-modal').remove();
            $('.grid').prepend(modal.templateModal(false, 'Submit')).one();
            modal.modalButtonListener({
                age: "", city: "", email: "", gender: "", id: "",
                lastName: "", name: "", phoneNumber: "",
                postalCode: "", state: "", streetAddress: ""
            }, 'add');
        })
    }
}

export {addEmployee}

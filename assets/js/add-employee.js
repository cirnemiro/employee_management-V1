import {modal} from "./modal.js";
const addEmployee = {
    template: `
    <div id="custom-add" class="custom-add custom-add-position no-select">
        <span id="custom-add__icon" class="material-icons">
            person_add
        </span>
    </div>`,
    addEmployeeListener: function () {
        $('#custom-add').on('click', () => {
            window.scrollTo(0, 0);
            console.log('scroll');
            $('#employee-modal').remove();
            $('tbody').prepend(modal.templateModal(false, 'Submit')).one();
            modal.modalButtonListener({
                age: "", city: "", email: "", gender: "",
                lastName: "", name: "", phoneNumber: "", id: "",
                postalCode: "", state: "", streetAddress: ""
            }, 'add');
            modal.avatarListener();
        })
    }
}

export {addEmployee}

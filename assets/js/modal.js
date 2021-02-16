import {changeData} from './js-grid/js-grid.js'

export const modal = {
    templateModal: function (employee, buttonType, action = '') {
        const template = `
            <div id="employee-modal" class="employee-modal width100">
                <form>
                    <div  id="employee-modal__inputs" class="employee-modal__inputs"> 
                        ${this.templateInputs(employee, action)}
                    </div>
                    <button class="employee-modal__submit" id="employee-modal__submit" data-edit="false" type="submit">${buttonType}</button>
                    <button type="button" class="employee-modal__exit" id="employee-modal__exit">Exit</button>
                </form>
            </div>`
        return template;
    },
    templateInputs: function (employee, action) {
        const template = `
            <div class="employee-modal__inputs-container">
                <div class="employee-modal__avatar no-select">
                    <span class="material-icons">
                        face
                    </span>
                </div>
                <div class="employee-modal__pair">
                    <label>Name</label>
                    <input name="name" class="employee-modal-input employee-modal-input__name" id="employee-modal-input__name" value="${employee ? employee.name : ''}" required ${action}></input>
                </div>
                <div class="employee-modal__pair">
                    <label>Last Name</label>
                    <input name="lastName" class="employee-modal-input" id="employee-modal-input__lastName" value="${employee ? employee.lastName : ''}" required ${action}></input>
                </div>
            </div>
            <div class="employee-modal__inputs-container">
                <div class="employee-modal__pair">
                    <label>Age</label>
                    <input name="age" class="employee-modal-input" id="employee-modal-input__age" value="${employee ? employee.age : ''}" required ${action}></input>
                </div>
                <div class="employee-modal__pair">
                    <label>Gender</label>
                    <input name="gender" class="employee-modal-input" id="employee-modal-input__gender" value="${employee ? employee.gender : ''}" required ${action}></input>
                </div>
                <div class="employee-modal__pair">
                    <label>E-mail</label>
                    <input name="email" class="employee-modal-input" id="employee-modal-input__email" value="${employee ? employee.email : ''}" required ${action}></input>
                </div>
            </div>
            <div class="employee-modal__inputs-container">
                <div class="employee-modal__pair">
                    <label>ID</label>
                    <input name="id" class="employee-modal-input" id="employee-modal-input__id" value="${employee ? employee.id : ''}" required ${action}></input>
                </div>
                <div class="employee-modal__pair">
                    <label>Phone</label>
                    <input name='phone' class="employee-modal-input" id="employee-modal-input__phoneNumber" value="${employee ? employee.phoneNumber : ''}" required ${action}></input>
                </div>
                <div class="employee-modal__pair">
                    <label>State</label>
                    <input name="state" class="employee-modal-input" id="employee-modal-input__state" value="${employee ? employee.state : ''}" required ${action}></input>
                </div>
            </div>
            <div class="employee-modal__inputs-container">
                <div class="employee-modal__pair">
                    <label>City</label>
                    <input name="city" class="employee-modal-input" id="employee-modal-input__city" value="${employee ? employee.city : ''}" required ${action}></input>
                </div>
                <div class="employee-modal__pair">
                    <label>Postal Code</label>
                    <input name="postalCode" class="employee-modal-input" id="employee-modal-input__postalCode" value="${employee ? employee.postalCode : ''}" required ${action}></input>
                </div>
                <div class="employee-modal__pair">
                    <label>Street Address</label>
                    <input name="streetAddress" class="employee-modal-input" id="employee-modal-input__streetAddress" value="${employee ? employee.streetAddress : ''}" required ${action}></input>
                </div>
            </div>
            `
        return template;
    },
    checkInputs: function () {
        const form = document.forms[0];
        const inputNames = {
            'name', 'lastName', 'age', 'gender', 'email',
            'id', 'phone', 'state', 'city', 'postalCode', 'streetAddress'
        }
        const regex = []
        const result = [];
        inputNames.forEach((name, index) => {
            if (form[name].checkValidity()) {
                result.push(true)
            } else {
                console.log('INVALID')
                console.log(form[name])
            }
        })

        if (result.length === inputNames.length) {
            return true;
        } else {
            return false;
        }
    },
    getInputValues: function (data, mode) {
        const keys = Object.keys(data);

        // extract values from the inputs
        keys.map(key => {
            data[key] = $(`#employee-modal-input__${key}`).val();
        })

        const phpMethod = mode === 'add' ? 'addEmployee' : 'updateEmployee';
        const phpResponse = mode === 'add' ? 'added' : 'updated';

        changeData('GET', phpMethod, data).then(
            response => {
                // return JSON.parse(response);
                if (response === phpResponse) {
                    alert(data.name + ` has been ${phpResponse}`)
                }
            }
        );
    },
    modalButtonListener: function (data, mode) {
        $('#employee-modal__exit').on('click', () => {
            $('#employee-modal').remove();
        });

        $('#employee-modal__submit').on('click', e => {
            e.preventDefault();

            if (mode === 'disabled') {
                // re-render with listener on enabled mode
                const form = modal.templateModal(data, 'Submit');
                $('#employee-modal').replaceWith(form);
                this.modalButtonListener(data, 'enabled');
            } else {
                if (this.checkInputs()) {
                    this.getInputValues(data, mode);

                    $('#employee-modal').remove();
                    location.reload();
                }
            }
        })
    }
}

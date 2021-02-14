import {changeData} from './js-grid/js-grid.js'

export const modal = {
    templateModal: function (employee, buttonType, action = '') {
        const template = `
            <div id="employee-modal" class="employee-modal width100">
                <form>
                    <div  id="employee-modal__inputs" class="employee-modal__inputs"> 
                        ${this.templateInputs(employee, action)}
                    </div>
                    <button id="employee-modal__submit" data-edit="false" type="submit">${buttonType}</button>
                    <button id="employee-modal__exit">EXIT</button>
                </form>
            </div>`
        return template;

    },
    templateInputs: function (employee, action) {
        const template = `
                <label>ID</label>
                <input class="employee-modal-input" id="employee-modal-input__id" value="${employee ? employee.id : ''}" ${action}></input>
                <label>Name</label>
                <input class="employee-modal-input" id="employee-modal-input__name" value="${employee ? employee.name : ''}" ${action}></input>
                <label>Last Name</label>
                <input class="employee-modal-input" id="employee-modal-input__lastName" value="${employee ? employee.lastName : ''}" ${action} ></input>
                <label>E-mail</label>
                <input class="employee-modal-input" id="employee-modal-input__email" value="${employee ? employee.email : ''}" ${action}></input>
                <label>Phone</label>
                <input class="employee-modal-input" id="employee-modal-input__phoneNumber" value="${employee ? employee.phoneNumber : ''}" ${action}></input>
                <label>Gender</label>
                <input class="employee-modal-input" id="employee-modal-input__gender" value="${employee ? employee.gender : ''}" ${action}></input>
                <label>Age</label>
                <input class="employee-modal-input" id="employee-modal-input__age" value="${employee ? employee.age : ''}" ${action}></input>
                <label>State</label>
                <input class="employee-modal-input" id="employee-modal-input__state" value="${employee ? employee.state : ''}" ${action}></input>
                <label>City</label>
                <input class="employee-modal-input" id="employee-modal-input__city" value="${employee ? employee.city : ''}" ${action}></input>
                <label>Street Address</label>
                <input class="employee-modal-input" id="employee-modal-input__streetAddress" value="${employee ? employee.streetAddress : ''}" ${action}></input>
                <label>Postal Code</label>
                <input class="employee-modal-input" id="employee-modal-input__postalCode" value="${employee ? employee.postalCode : ''}" ${action}></input>
            `
        return template;
    },
    modalButtonListener: function (data, mode) {
        $('#employee-modal__exit').on('click', () => {
            $('#employee-modal').remove();
        });

        $('#employee-modal__submit').on('click', e => {
            e.preventDefault();

            console.log('mode')
            if (mode === 'disabled') {
                // re-render with listener on enabled mode
                const form = modal.templateModal(data, 'Submit');
                $('#employee-modal').replaceWith(form);
                this.modalButtonListener(data, 'enabled');
            } else {
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

                $('#employee-modal').remove();
                // location.reload();
            }
        })
    }
}

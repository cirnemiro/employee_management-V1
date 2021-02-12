import {changeData} from './js-grid/js-grid.js'

export const modal = {
    templateModal: function (employee, buttonType, action = '') {
        const template = `
            <div id="employee-modal" class=" employee-modal width100">
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
                <label>State</label>
                <input class="employee-modal-input" id="employee-modal-input__state" value="${employee ? employee.state : ''}" ${action}></input>
                <label>City</label>
                <input class="employee-modal-input" id="employee-modal-input__city" value="${employee ? employee.city : ''}" ${action}></input>
                <label>Street adress</label>
                <input class="employee-modal-input" id="employee-modal-input__streedAdress" value="${employee ? employee.streetAddress : ''}" ${action}></input>
            `
        return template;
    },
    modalButtonListener: function (data, mode, jsGrid) {
        $('#employee-modal__submit').on('click', e => {
            e.preventDefault();

            if (mode === 'disabled') {
                // re-render with listener on enabled mode
                const form = modal.templateModal(data.item, 'Submit');
                $('#employee-modal').replaceWith(form);
                this.modalButtonListener(data, 'enabled');
            } else {
                const keys = Object.keys(data.item);
                // extract values from inputs
                keys.map((key, index) => {
                    if ($(`#employee-modal-input__${key}`).val()) {
                        data.item[key] = $(`#employee-modal-input__${key}`).val();
                    }
                })

                changeData('GET', 'updateEmployee', data.item).then(
                    response => {
                        console.log(response)
                        // return JSON.parse(response);
                        if (response === 'update') {
                            alert(data.item.name + ' has been modified')
                        }
                    }
                );

                $('#employee-modal').remove();
                location.reload();
            }
        })
    }
}

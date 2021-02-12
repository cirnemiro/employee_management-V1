export const modal = {
    templateModal: function(employee,buttonType,action=0){
        console.log(employee);
        const template = `
            <div id="employee-modal" class=" employee-modal width100">
                <form>
                    <div class="employee-modal__inputs"> 
                    ${this.templateInputs(employee)}  
                    </div>
                    <button id="employee-modal__submit" type="submit">${buttonType}</button>
                    <button id="employee-modal__exit">EXIT</button>
                </form>
            </div>
        `
        return template
    },
    templateInputs: function(employee){
        console.log(employee);
            const template = `
                <label>Name</label>
                <input id="employee-modal-input__name" value="${employee.name}"></input>
                <label>Last Name</label>
                <input id="employee-modal-input__lastName" value="${employee.lastName}" ></input>
                <label>E-mail</label>
                <input id="employee-modal-input__email" value="${employee.email}"></input>
                <label>Phone</label>
                <input id="employee-modal-input__phoneNumber" value="${employee.phoneNumber}"></input>
                <label>Gender</label>
                <input id="employee-modal-input__gender" value="${employee.gender}"></input>
                <label>State</label>
                <input id="employee-modal-input__state" value="${employee.state}"></input>
                <label>City</label>
                <input id="employee-modal-input__city" value="${employee.city}"></input>
                <label>Street adress</label>
                <input id="employee-modal-input__streedAdress" value="${employee.streetAddress}"></input>
                
            `
            return template
    }
}

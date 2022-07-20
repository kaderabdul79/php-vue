// import {EmployeeService} from '../../services/EmployeeService.js'
import {EmployeeService} from '@/services/EmployeeService.js'

export default {
    namespaced: true,
    state: {
        employeeList: {
            employees: EmployeeService.getAllEmployees()
        }
    },
    mutations: {
        UPDATE_SELECTED(state,payload){
            state.employeeList.employees = state.employeeList.employees.map(employee => {
                if(employee.id === payload.empId){
                    return {
                        ...employee,
                        isSelected: !employee.isSelected
                    }
                }
                else return employee
            })
        }
    },
    actions: {
        changeSelected({commit}, payload){
            return commit("UPDATE_SELECTED", payload)
        }
    }
}

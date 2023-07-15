"use strict";
// Utility types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'compsci123',
    title: 'Final Project',
    grade: 0,
};
const assignGraded = updateAssignment(assign1, { grade: 95 });
console.log(assignGraded);

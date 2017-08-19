export default function exampleReducer(initialState, action) {
    if (initialState) {
        let count = initialState.count;
        const addCount = count+1;
        const minCount = count-1;

        if (action.type === 'CLICK') {
            return {
                clicked: !initialState.clicked,
                count: initialState.count
            }
        }
        if (action.type === 'ADD_COUNT') {
            return {
                clicked: initialState.clicked,
                count: addCount || 0
            }
        }
        if (action.type === 'MINUS_COUNT') {
            return {
                clicked: initialState.clicked,
                count: minCount || 0
            }
        } else return null
    } else return {clicked: false, count:0}
};
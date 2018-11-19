export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection("Projects").add({
            ...project,
            authFirstName: "Misbah",
            authLastName: "Sabarni",
            authorId: 123456,
            createAt: new Date()
        }).then( () => {
            dispatch({type: "create_Project", project})
        }).catch( (err) => {
            dispatch({type: "create_Project_Error", err})
        })
    }
};
const initState = {
    projects: [
        {id:1, title:"shopping" , content:"clothes, shoes, bags, makeup",},
        {id:2, title:"studies" , content:"html, css, javascript,react, redux, firebase",},
        {id:3, title:"workout" , content:"exercise, walking, jogging",},
    ]
}
const projectReducer = (state = initState, action) => {
 switch (action.type){
     case "create_Project":
     console.log(action.project)
     return state;
     case "create_Project_Error":
     console.log(action.err)
     return state;
     default:
     return state;
    }
}

export default projectReducer
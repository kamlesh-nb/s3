 const Create = async (params) => {
    return {Status: "Operation Completed Successfully", Request: params}

}

const List = (params) => {
    return {Status: "Operation Completed Successfully", Request: params}
}

const Delete = (params) => {
    return {Status: "Operation Completed Successfully", Request: params}
}


module.exports = { 
    Create,
    List,
    Delete
}
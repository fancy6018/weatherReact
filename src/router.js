import React from "react";

const routesConfig = [
    { path:'/',component: React.lazy(()=> import('./App')) },   
]

export default routesConfig;
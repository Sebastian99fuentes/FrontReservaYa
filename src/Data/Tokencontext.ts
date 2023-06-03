import React from "react"; 


export interface DecodedToken {
    exp: number;
    sub: string;
    jti:string;
    id: string;
    nbf: number;
    iat: number;
    numImplementos:string;
    numInstalaciones:string;
  }
  


export default  DecodedToken;
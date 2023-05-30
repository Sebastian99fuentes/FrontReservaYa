
import React from "react";

export interface Reserva{

    Dia: string;
    Hora: string;
    IdUsuario: string;
    Tipo: string;
}

// export interface ReservaContextModel{
//     Reserva: Reserva[];
//     addReserva: ( IdHorario: string,IdUsuario: string, Tipo: string)=>void;
// } 
// const ReservaContext = React.createContext<ReservaContextModel>({
//     Reserva: [],
//     addReserva: function (IdHorario: string,IdUsuario: string, Tipo: string): void {
//         throw new Error("Function not implemented.");
//     }
// });

export default  Reserva;
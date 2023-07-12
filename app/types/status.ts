export enum STATUS {
    IN_PROGRESS = "In Progress",
    COMPLETE = "Complete",
    BLOCKED = "Blocked"
}

export function getColor(E: STATUS){
    if(E == STATUS.IN_PROGRESS){
        return "bg-sky-700" 
    } else {
        return "bg-green-700"
    }
}
import clsx from "clsx";
export const generateClasses = (value, classes)=>{
    return clsx(classes.status, {
        [classes.online]: value,
        [classes.offline]: !value,
    })
}
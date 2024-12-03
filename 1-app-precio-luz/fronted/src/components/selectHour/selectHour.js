import "./selectHour.css"

const franjas = import.meta.env.VITE_HOURS_RANGES;

export const createSelectHours = () => {
    const selectHours = document.createElement("select");
    selectHours.id = "HourRangeSelect";
    franjas.split(",").forEach(franja => {
        const option = document.createElement("option")
        option.value = franja;
        option.textContent = franja;
        selectHours.appendChild(option);
    });
    return selectHours;
}
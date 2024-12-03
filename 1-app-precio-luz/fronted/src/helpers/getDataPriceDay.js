import { getData } from "./getDataPrice"
/**
 * @author Nicole Yranzo
 * @param {String} range 
 * @returns {Map}
 */
export const getDataRange = async (range) => {
    const { included } = await getData();
    const values = included[1].attributes.values;
    const rangeSplit = range.split("-");
    const map = new Map();
    values.forEach(({ value, datetime }) => {
        const daySplit = datetime.split("-")[2].split("T")[0];
        const timeSplit = Number(datetime.split("T")[1].split(":")[0]);
        if(timeSplit >= Number(rangeSplit[0]) && timeSplit <= Number(rangeSplit[1])){
            if(map.has(daySplit)){
                const valueArr = map.get(daySplit);
                valueArr.push({
                    time:timeSplit,
                    price:value,
                });
                map.set(daySplit, valueArr);
            }else{
                const newArr = [];
                newArr.push({
                    time:timeSplit,
                    price:value,
                });
                map.set(daySplit, newArr);
            }
        }
    });
    return map;
}
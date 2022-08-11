export default function mix(elements: any[]): any[] {
    return elements 
    .map(value => ({value, radom: Math.random() }))
    .sort((obj1, obj2) => obj1.radom - obj2.radom)
    .map(obj => obj.value)
}
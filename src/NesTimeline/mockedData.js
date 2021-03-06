import faker from 'faker';


// id: number,
// span: Number,
// color: string (hexa, rgb, rgba)
// isSelected: boolean (default  = false),
// start:{
//     type: String 'date', 'ufn', 'bot'
//     airac: number,
//     gregorian: date '1911-01-01'
// },
// end:{
//     type: String 'date', 'ufn', 'bot'
//     airac: number,
//     gregorian: date '1911-01-01'
// },
// intervalData: Array
// tooltip: Array

export const fixedTimelineData = [
    {
        id: 3004,
        span:1,
        start:{
            type: 'date',
            airac: 1911,
            gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        },
        end:{
            type: 'date',
            airac: 1911,
            gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        },
        intervalData: [{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }], 
        tooltip:[{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }]
    },
   
    
]

export const fixedTimelineData1 = [
    {
        id: 3004,
        span:2,
        start:{
            type: 'bot',
        },
        end:{
            type: 'ufn',
        },
        intervalData: [{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }], 
        tooltip:[{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }]
    },
]

export const fixedTimelineData2 = [
    {
        id: 3001,
        span:1,
        isSelected: false,
        color: 'red',
        start:{
            type: 'bot'
        },
        end:{
            type: 'date',
            airac: 1909,
            gregorian: '1909-01-01',
        },
        intervalData: [{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 30,
            address: `Avenue Jacques Georgin`
        }], 
        tooltip:[{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 30,
            address: `Avenue Jacques Georgin`
        }]
    },
    {
        id: 3004,
        isSelected: true,
        span:1,
        start:{
            type: 'date',
            airac: 1909,
            gregorian: '1909-01-01',
        },
        end:{
            type: 'date',
            airac: 1911,
            gregorian: '1911-01-01',
        },
        intervalData: [
            {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: 30,
                address: `Avenue Jacques Georgin`
            },
            {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: 30,
                address: `Avenue Jacques Georgin`
            },
            {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: 30,
                address: `Avenue Jacques Georgin`
            },
        ], 
        tooltip:[{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 30,
            address: `Avenue Jacques Georgin`
        }]
    },
    {
        id: 3005,
        span:1,
        isSelected: false,
        start:{
            type: 'date',
            airac: 1911,
            gregorian: '1911-01-01',
        },
        end:{
            type: 'date',
            airac: 1911,
            gregorian: '1911-01-02',
        },
        intervalData: [{
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }], 
        tooltip:[{
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }]
    },
    {
        id: 3006,
        span:1,
        isSelected: false,
        color: '#91ff00',
        start:{
            type: 'date',
            airac: 1911,
            gregorian: '1911-01-02',
        },
        end:{
            type: 'date',
            airac: 1913,
            gregorian: '1911-01-03',
        },
        intervalData:[{
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }], 
        tooltip: [{
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }]
    },
    {
        id: 3007,
        span:1,
        isSelected: false,
        start:{
            type: 'date',
            airac: 1913,
            gregorian: '1911-01-03',
        },
        end:{
            type: 'ufn'
        },
        intervalData:[{
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }], 
        tooltip: [{
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }]
    },
]

export const fixedTimelineData3 = [
    {
        id: 3004,
        span:2,
        start:{
            type: 'date',
            airac: 1912,
            gregorian: '1911-01-02',
        },
        end:{
            type: 'ufn',
        },
        intervalData: [{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }], 
        tooltip:[{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }]
    },
]

export const fixedTimelineData4 = [
    {
        id: 3002,
        span:2,
        start:{
            type: 'date',
            airac: 1909,
            gregorian: '1910-01-01',
        },
        end:{
            type: 'date',
            airac: 1911,
            gregorian: '1910-01-12',
        },
        intervalData: [{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }], 
        tooltip:[{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }]
    },
    {
        id: 3003,
        span:2,
        start:{
            type: 'date',
            airac: 1911,
            gregorian: '1910-01-12',
        },
        end:{
            type: 'date',
            airac: 1912,
            gregorian: '1911-01-02',
        },
        intervalData: [], 
        tooltip:[]
    },
    {
        id: 3004,
        span:2,
        start:{
            type: 'date',
            airac: 1912,
            gregorian: '1911-01-02',
        },
        end:{
            type: 'ufn',
        },
        intervalData: [], 
        tooltip:[]
    },
]

export const noDates = [
    {
        id: 3004,
        span:4,
        start:{
            type: 'bot',
        },
        end:{
            type: 'ufn',
        },
        intervalData: [], 
        tooltip:[]
    },
]
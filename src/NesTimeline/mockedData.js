import faker from 'faker';
import { date } from 'faker/locale/zh_TW';

// export const timelineData = new Array(10).fill(true).map((index) => {
//     return {
//         id: faker.random.uuid(),
//         AIRAC: faker.date.between('1911-01-01', '2020-12-31').getFullYear(),
//         gregorian: faker.date.between('1911-01-01', '2020-12-31'),
//         intervalData: {
//             key:faker.random.uuid(),
//             name: faker.name.firstName,
//             age: faker.random.number({
//                 min: 10,
//                 max: 50
//             }),
//             address: `${faker.address.streetName}`
//         }
//     };
// });


export const fixedTimelineData = [
    {
        id: 3004,
        AIRAC: 1911,
        gregorian: faker.date.between('1911-01-01', '2020-12-31'),
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
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }, 
        tooltip:{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }
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
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }, 
        tooltip:{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }
    },
]

export const fixedTimelineData2 = [
    {
        id: 3001,
        span:1,
        start:{
            type: 'bot'
        },
        end:{
            type: 'date',
            airac: 1909,
            gregorian: '1909-01-01',
        },
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 30,
            address: `Avenue Jacques Georgin`
        }, 
        tooltip:{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 30,
            address: `Avenue Jacques Georgin`
        }
    },
    {
        id: 3004,
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
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 30,
            address: `Avenue Jacques Georgin`
        }, 
        tooltip:{
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 30,
            address: `Avenue Jacques Georgin`
        }
    },
    {
        id: 3005,
        span:1,
        start:{
            type: 'date',
            airac: 1911,
            gregorian: '1911-01-01',
        },
        end:{
            type: 'date',
            airac: 1912,
            gregorian: '1911-01-02',
        },
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }, 
        tooltip:{
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }
    },
    {
        id: 3006,
        span:1,
        start:{
            airac: 1912,
            gregorian: '1911-01-02',
        },
        end:{
            type: 'ufn'
        },
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }, 
        tooltip:{
            key:faker.random.uuid(),
            name: 'Jane Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }
    },
]

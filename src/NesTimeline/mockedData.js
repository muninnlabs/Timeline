import faker from 'faker';


export const timelineData = new Array(10).fill(true).map((index) => {
    return {
        id: faker.random.uuid(),
        AIRAC: faker.date.between('1911-01-01', '2020-12-31').getFullYear(),
        gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        intervalData: {
            key:faker.random.uuid(),
            name: faker.name.firstName,
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `${faker.address.streetName}`
        }
    };
});


export const fixedTimelineData = [
    {
        id: 3004,
        AIRAC: 1911,
        gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        span:1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 10,
            address: `Avenue Jacques Georgin`
        }
    },
    {
        id: 3005,
        gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        span:1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 11,
            address: `Avenue Jacques Georgin`
        }
    },
    {
        id: 3006,
        AIRAC: 2020,
        span:1,
    },
    {
        id: 3007,
        AIRAC: 2024,
        gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        span:1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 12,
            address: `Avenue Jacques Georgin`
        }
    },
    {
        id: 3008,
        AIRAC: 2028,
        gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        span:1,
    },
    {
        id: 3009,
        AIRAC: 2030,
        gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        span:1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 13,
            address: `Avenue Jacques Georgin`
        }
    },
    {
        id: 3010,
        AIRAC: 2032,
        gregorian: faker.date.between('1911-01-01', '2020-12-31'),
        span:1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: 14,
            address: `Avenue Jacques Georgin`
        }
    },
    
]

export const fixedTimelineData2 = [
    {
        id: 5011,
        AIRAC: 1911,
        gregorian: '1960-12-31',
        span:1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
    },
    {
        id: 11,
        AIRAC: 1994,
        gregorian: "2010-09-08",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 21,
        AIRAC: 1997,
        gregorian: "2015-08-29",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 31,
        AIRAC: 1991,
        gregorian: "1977-07-25",
        span: 3,
     
      }, {
        id: 41,
        AIRAC: 1989,
        gregorian: "1985-06-01",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 51,
        AIRAC: 1992,
        gregorian: "1979-06-25",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 61,
        AIRAC: 2012,
        gregorian: "1996-06-20",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, 
      {
        id: 71,
        AIRAC: 2002,
        gregorian: "2002-11-22",
        span: 1,
        color: '#b8741a',
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 81,
        AIRAC: 2000,
        gregorian: "2003-09-21",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 91,
        AIRAC: 1992,
        gregorian: "1998-03-16",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 101,
        AIRAC: 2007,
        gregorian: "1968-11-13",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 111,
        AIRAC: 2006,
        gregorian: "2017-10-26",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 121,
        AIRAC: 2008,
        gregorian: "1995-09-06",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 131,
        AIRAC: 1990,
        gregorian: "1975-01-27",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 141,
        AIRAC: 2003,
        gregorian: "2005-07-30",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 151,
        AIRAC: 2005,
        gregorian: "2016-05-03",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 161,
        AIRAC: 2002,
        gregorian: "1974-05-07",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 171,
        AIRAC: 2010,
        gregorian: "2010-03-12",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 181,
        AIRAC: 2008,
        gregorian: "2001-11-16",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 191,
        AIRAC: 2007,
        gregorian: "2002-10-13",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }, {
        id: 201,
        AIRAC: 2008,
        gregorian: "2010-03-06",
        span: 1,
        intervalData: {
            key:faker.random.uuid(),
            name: 'Jhon Doe',
            age: faker.random.number({
                min: 10,
                max: 50
            }),
            address: `Avenue Jacques Georgin`
        }
      }
    ]

export const fixedTimelineData3 = [
        {
            id: 1,
            AIRAC: 1911,
            gregorian: '1960-12-31',
            span:5,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
        },
        {
            id: 2,
            AIRAC: 1994,
            gregorian: "2010-09-08",
            span: 2,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          }, {
            id: 3,
            AIRAC: 1997,
            gregorian: "2015-08-29",
            span: 5,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          }, {
            id: 4,
            AIRAC: 1991,
            gregorian: "1977-07-25",
            span: 3,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          },
        {
            id: 5,
            AIRAC: 1994,
            gregorian: "2010-09-08",
            span: 2,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          }, {
            id: 6,
            AIRAC: 1997,
            gregorian: "2015-08-29",
            span: 5,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          }, {
            id: 7,
            AIRAC: 1991,
            gregorian: "1977-07-25",
            span: 3,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          },
        {
            id: 8,
            AIRAC: 1994,
            gregorian: "2010-09-08",
            span: 2,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          }, {
            id: 9,
            AIRAC: 1997,
            gregorian: "2015-08-29",
            span: 5,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          }, {
            id: 10,
            AIRAC: 1991,
            gregorian: "1977-07-25",
            span: 3,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          },
        {
            id: 1001,
            AIRAC: 1994,
            gregorian: "2010-09-08",
            span: 2,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          }, {
            id: 12,
            AIRAC: 1997,
            gregorian: "2015-08-29",
            span: 5,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          }, {
            id: 13,
            AIRAC: 1991,
            gregorian: "1977-07-25",
            span: 3,
            intervalData: {
                key:faker.random.uuid(),
                name: 'Jhon Doe',
                age: faker.random.number({
                    min: 10,
                    max: 50
                }),
                address: `Avenue Jacques Georgin`
            }
          },
    ]      
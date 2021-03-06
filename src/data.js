export const data =  {
  tickets: [
    {
      id: 1,
      price: 7777,
      from: 'ABC',
      to: 'DEF',
      duration: 666,
      time: '01:00-10:00',
      transfer: ['ASD', 'JKL'],
    },
    {
      id: 2,
      price: 6666,
      from: 'BCD',
      to: 'CDE',
      duration: 111,
      time: '02:00-10:00',
      transfer: ['LJK', 'EHI', 'EHI'],
    },
    {
      id: 3,
      price: 2222,
      from: 'CDE',
      to: 'FGH',
      duration: 578,
      time: '03:00-10:00',
      transfer: ['AWL', 'UFA', 'WJI'],
    },
    {
      id: 4,
      price: 8888,
      from: 'DEF',
      to: 'GHI',
      duration: 999,
      time: '04:00-10:00',
      transfer: ['WJI'],
    },
    {
      id: 5,
      price: 4444,
      from: 'EDG',
      to: 'HIJ',
      duration: 998,
      time: '05:00-10:00',
      transfer: ['LKJ'],
    },
    {
      id: 6,
      price: 4444,
      from: 'MSI',
      to: 'INT',
      duration: 333,
      time: '06:00-10:00',
      transfer: [],
    },
    {
      id: 7,
      price: 3333,
      from: 'RUS',
      to: 'USA',
      duration: 434,
      time: '07:00-10:00',
      transfer: [],
    }

  ],
  checkboxList: [
    { id: 1, name: 'Все пересадки', value: 'all', isSelected: false },
    { id: 2, name: 'Без пересадок', value: 0, isSelected: false },
    { id: 3, name: '1 пересадка', value: 1, isSelected: false },
    { id: 4, name: '2 пересадки', value: 2, isSelected: false },
    { id: 5, name: '3 пересадки', value: 3, isSelected: false },
  ],
  buttonSelector: [
    { name: 'Самый дешевый', value: 'cheapest', isActive: false },
    { name: 'Самый быстрый', value: 'fastest', isActive: false },
  ]
}
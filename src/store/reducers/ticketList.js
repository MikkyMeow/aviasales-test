import {data} from './../../data'

// экшн для фильтрации тикетов
export const getTicketList = searchId => ({
  type: 'GET_TICKET_LIST',
  searchId: searchId
})

const initialState = data.tickets || []

export const ticketList = (state = initialState, action) => {

  switch(action.type){
    case 'GET_TICKET_LIST':
      return state
    default:
      return state
  }

}


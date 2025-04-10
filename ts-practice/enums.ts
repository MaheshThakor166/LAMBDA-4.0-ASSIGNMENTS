/**Enum is kind of constants  which never will gonna be change
 * Enum have Numeric and String both mapping
 */

enum TicketStatus {
  INTIALISED,
  CANCELED,
  PENDING,
  CLOSED,
}
// console.log(TicketStatus.INTIALISED)

const Ticket = {
  id: 1,
  title: 'new Ticket',
  status: TicketStatus.INITALISED,
}
if (Ticket.status == TicketStatus.INITALISED) {
  console.log('done')
}

enum StatusCodes {
  NOTFOUND = 404,
  SUCCESS = 200,
  ACCEPTED = 202,
  CREATED = 201,
  BADREQUEST = 400,
}

const Responses = {
  url: 'www.codeNova.com',
  type: 'get',
  data: 'Some String',
  status: StatusCodes.SUCCESS,
}
console.log(Responses)

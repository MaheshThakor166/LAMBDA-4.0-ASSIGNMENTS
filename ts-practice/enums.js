"use strict";
/**Enum is kind of constants  which never will gonna be change
 * Enum have Numeric and String both mapping
 */
var TicketStatus;
(function (TicketStatus) {
    TicketStatus[TicketStatus["INTIALISED"] = 0] = "INTIALISED";
    TicketStatus[TicketStatus["CANCELED"] = 1] = "CANCELED";
    TicketStatus[TicketStatus["PENDING"] = 2] = "PENDING";
    TicketStatus[TicketStatus["CLOSED"] = 3] = "CLOSED";
})(TicketStatus || (TicketStatus = {}));
// console.log(TicketStatus.INTIALISED)
const Ticket = {
    id: 1,
    title: 'new Ticket',
    status: TicketStatus.INITALISED,
};
if (Ticket.status == TicketStatus.INITALISED) {
    console.log('done');
}
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NOTFOUND"] = 404] = "NOTFOUND";
    StatusCodes[StatusCodes["SUCCESS"] = 200] = "SUCCESS";
    StatusCodes[StatusCodes["ACCEPTED"] = 202] = "ACCEPTED";
    StatusCodes[StatusCodes["CREATED"] = 201] = "CREATED";
    StatusCodes[StatusCodes["BADREQUEST"] = 400] = "BADREQUEST";
})(StatusCodes || (StatusCodes = {}));
const Responses = {
    url: 'www.codeNova.com',
    type: 'get',
    data: 'Some String',
    status: StatusCodes.SUCCESS,
};
console.log(Responses);

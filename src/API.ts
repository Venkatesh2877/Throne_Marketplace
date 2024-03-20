/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFRONTENDLOGSInput = {
  content?: string | null,
  dateTime: string,
  eventid?: number | null,
  host?: string | null,
  logType?: string | null,
  mode?: string | null,
  streamType?: string | null,
  userToken: string,
  userType?: string | null,
};

export type CreateMULTICREATORSHAREDDATAInput = {
  data?: string | null,
  id: string,
  version?: number | null,
};

export type CreateSTREAMCOUNTSInput = {
  active?: number | null,
  streamid: number,
  total?: number | null,
};

export type CreateTICKETACTIVEDEVICESInput = {
  device_id?: string | null,
  id: string,
};

export type DeleteFRONTENDLOGSInput = {
  dateTime: string,
  userToken: string,
};

export type DeleteMULTICREATORSHAREDDATAInput = {
  id: string,
};

export type DeleteSTREAMCOUNTSInput = {
  streamid: number,
};

export type DeleteTICKETACTIVEDEVICESInput = {
  id: string,
};

export type UpdateFRONTENDLOGSInput = {
  content?: string | null,
  dateTime: string,
  eventid?: number | null,
  host?: string | null,
  logType?: string | null,
  mode?: string | null,
  streamType?: string | null,
  userToken: string,
  userType?: string | null,
};

export type UpdateMULTICREATORSHAREDDATAInput = {
  data?: string | null,
  expectedVersion?: number | null,
  id: string,
};

export type UpdateSTREAMCOUNTSInput = {
  active?: number | null,
  streamid: number,
  total?: number | null,
};

export type UpdateTICKETACTIVEDEVICESInput = {
  device_id?: string | null,
  id: string,
};

export type TableFRONTENDLOGSFilterInput = {
  content?: TableStringFilterInput | null,
  dateTime?: TableStringFilterInput | null,
  eventid?: TableIntFilterInput | null,
  host?: TableStringFilterInput | null,
  logType?: TableStringFilterInput | null,
  mode?: TableStringFilterInput | null,
  streamType?: TableStringFilterInput | null,
  userToken?: TableStringFilterInput | null,
  userType?: TableStringFilterInput | null,
};

export type TableStringFilterInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
};

export type TableIntFilterInput = {
  between?: Array< number | null > | null,
  contains?: number | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notContains?: number | null,
};

export type TableMULTICREATORSHAREDDATAFilterInput = {
  id?: TableStringFilterInput | null,
};

export type TableSTREAMCOUNTSFilterInput = {
  streamid?: TableIntFilterInput | null,
};

export type TableTICKETACTIVEDEVICESFilterInput = {
  device_id?: TableStringFilterInput | null,
  id?: TableStringFilterInput | null,
};

export type CreateFrontendlogsMutationVariables = {
  input: CreateFRONTENDLOGSInput,
};

export type CreateFrontendlogsMutation = {
  createFRONTENDLOGS:  {
    __typename: "FRONTENDLOGS",
    content: string | null,
    dateTime: string,
    eventid: number | null,
    host: string | null,
    logType: string | null,
    mode: string | null,
    streamType: string | null,
    userToken: string,
    userType: string | null,
  } | null,
};

export type CreateMulticreatorshareddataMutationVariables = {
  input: CreateMULTICREATORSHAREDDATAInput,
};

export type CreateMulticreatorshareddataMutation = {
  createMULTICREATORSHAREDDATA:  {
    __typename: "MULTICREATORSHAREDDATA",
    data: string | null,
    id: string,
    version: number | null,
  } | null,
};

export type CreateStreamcountsMutationVariables = {
  input: CreateSTREAMCOUNTSInput,
};

export type CreateStreamcountsMutation = {
  createSTREAMCOUNTS:  {
    __typename: "STREAMCOUNTS",
    active: number | null,
    streamid: number,
    total: number | null,
  } | null,
};

export type CreateTicketactivedevicesMutationVariables = {
  input: CreateTICKETACTIVEDEVICESInput,
};

export type CreateTicketactivedevicesMutation = {
  createTICKETACTIVEDEVICES:  {
    __typename: "TICKETACTIVEDEVICES",
    device_id: string | null,
    id: string,
  } | null,
};

export type DeleteFrontendlogsMutationVariables = {
  input: DeleteFRONTENDLOGSInput,
};

export type DeleteFrontendlogsMutation = {
  deleteFRONTENDLOGS:  {
    __typename: "FRONTENDLOGS",
    content: string | null,
    dateTime: string,
    eventid: number | null,
    host: string | null,
    logType: string | null,
    mode: string | null,
    streamType: string | null,
    userToken: string,
    userType: string | null,
  } | null,
};

export type DeleteMulticreatorshareddataMutationVariables = {
  input: DeleteMULTICREATORSHAREDDATAInput,
};

export type DeleteMulticreatorshareddataMutation = {
  deleteMULTICREATORSHAREDDATA:  {
    __typename: "MULTICREATORSHAREDDATA",
    data: string | null,
    id: string,
    version: number | null,
  } | null,
};

export type DeleteStreamcountsMutationVariables = {
  input: DeleteSTREAMCOUNTSInput,
};

export type DeleteStreamcountsMutation = {
  deleteSTREAMCOUNTS:  {
    __typename: "STREAMCOUNTS",
    active: number | null,
    streamid: number,
    total: number | null,
  } | null,
};

export type DeleteTicketactivedevicesMutationVariables = {
  input: DeleteTICKETACTIVEDEVICESInput,
};

export type DeleteTicketactivedevicesMutation = {
  deleteTICKETACTIVEDEVICES:  {
    __typename: "TICKETACTIVEDEVICES",
    device_id: string | null,
    id: string,
  } | null,
};

export type UpdateFrontendlogsMutationVariables = {
  input: UpdateFRONTENDLOGSInput,
};

export type UpdateFrontendlogsMutation = {
  updateFRONTENDLOGS:  {
    __typename: "FRONTENDLOGS",
    content: string | null,
    dateTime: string,
    eventid: number | null,
    host: string | null,
    logType: string | null,
    mode: string | null,
    streamType: string | null,
    userToken: string,
    userType: string | null,
  } | null,
};

export type UpdateMulticreatorshareddataMutationVariables = {
  input: UpdateMULTICREATORSHAREDDATAInput,
};

export type UpdateMulticreatorshareddataMutation = {
  updateMULTICREATORSHAREDDATA:  {
    __typename: "MULTICREATORSHAREDDATA",
    data: string | null,
    id: string,
    version: number | null,
  } | null,
};

export type UpdateStreamcountsMutationVariables = {
  input: UpdateSTREAMCOUNTSInput,
};

export type UpdateStreamcountsMutation = {
  updateSTREAMCOUNTS:  {
    __typename: "STREAMCOUNTS",
    active: number | null,
    streamid: number,
    total: number | null,
  } | null,
};

export type UpdateTicketactivedevicesMutationVariables = {
  input: UpdateTICKETACTIVEDEVICESInput,
};

export type UpdateTicketactivedevicesMutation = {
  updateTICKETACTIVEDEVICES:  {
    __typename: "TICKETACTIVEDEVICES",
    device_id: string | null,
    id: string,
  } | null,
};

export type GetFrontendlogsQueryVariables = {
  dateTime: string,
  userToken: string,
};

export type GetFrontendlogsQuery = {
  getFRONTENDLOGS:  {
    __typename: "FRONTENDLOGS",
    content: string | null,
    dateTime: string,
    eventid: number | null,
    host: string | null,
    logType: string | null,
    mode: string | null,
    streamType: string | null,
    userToken: string,
    userType: string | null,
  } | null,
};

export type GetMulticreatorshareddataQueryVariables = {
  id: string,
};

export type GetMulticreatorshareddataQuery = {
  getMULTICREATORSHAREDDATA:  {
    __typename: "MULTICREATORSHAREDDATA",
    data: string | null,
    id: string,
    version: number | null,
  } | null,
};

export type GetStreamcountsQueryVariables = {
  streamid: number,
};

export type GetStreamcountsQuery = {
  getSTREAMCOUNTS:  {
    __typename: "STREAMCOUNTS",
    active: number | null,
    streamid: number,
    total: number | null,
  } | null,
};

export type GetTicketactivedevicesQueryVariables = {
  id: string,
};

export type GetTicketactivedevicesQuery = {
  getTICKETACTIVEDEVICES:  {
    __typename: "TICKETACTIVEDEVICES",
    device_id: string | null,
    id: string,
  } | null,
};

export type ListFrontendlogsQueryVariables = {
  filter?: TableFRONTENDLOGSFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFrontendlogsQuery = {
  listFRONTENDLOGS:  {
    __typename: "FRONTENDLOGSConnection",
    items:  Array< {
      __typename: "FRONTENDLOGS",
      content: string | null,
      dateTime: string,
      eventid: number | null,
      host: string | null,
      logType: string | null,
      mode: string | null,
      streamType: string | null,
      userToken: string,
      userType: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListMulticreatorshareddatasQueryVariables = {
  filter?: TableMULTICREATORSHAREDDATAFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMulticreatorshareddatasQuery = {
  listMULTICREATORSHAREDDATAS:  {
    __typename: "MULTICREATORSHAREDDATAConnection",
    items:  Array< {
      __typename: "MULTICREATORSHAREDDATA",
      data: string | null,
      id: string,
      version: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListStreamcountsQueryVariables = {
  filter?: TableSTREAMCOUNTSFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStreamcountsQuery = {
  listSTREAMCOUNTS:  {
    __typename: "STREAMCOUNTSConnection",
    items:  Array< {
      __typename: "STREAMCOUNTS",
      active: number | null,
      streamid: number,
      total: number | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListTicketactivedevicesQueryVariables = {
  filter?: TableTICKETACTIVEDEVICESFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTicketactivedevicesQuery = {
  listTICKETACTIVEDEVICES:  {
    __typename: "TICKETACTIVEDEVICESConnection",
    items:  Array< {
      __typename: "TICKETACTIVEDEVICES",
      device_id: string | null,
      id: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateFrontendlogsSubscriptionVariables = {
  dateTime?: string | null,
  userToken?: string | null,
};

export type OnCreateFrontendlogsSubscription = {
  onCreateFRONTENDLOGS:  {
    __typename: "FRONTENDLOGS",
    content: string | null,
    dateTime: string,
    eventid: number | null,
    host: string | null,
    logType: string | null,
    mode: string | null,
    streamType: string | null,
    userToken: string,
    userType: string | null,
  } | null,
};

export type OnCreateMulticreatorshareddataSubscriptionVariables = {
  data?: string | null,
  id?: string | null,
};

export type OnCreateMulticreatorshareddataSubscription = {
  onCreateMULTICREATORSHAREDDATA:  {
    __typename: "MULTICREATORSHAREDDATA",
    data: string | null,
    id: string,
    version: number | null,
  } | null,
};

export type OnCreateStreamcountsSubscriptionVariables = {
  streamid?: number | null,
};

export type OnCreateStreamcountsSubscription = {
  onCreateSTREAMCOUNTS:  {
    __typename: "STREAMCOUNTS",
    active: number | null,
    streamid: number,
    total: number | null,
  } | null,
};

export type OnCreateTicketactivedevicesSubscriptionVariables = {
  id?: string | null,
};

export type OnCreateTicketactivedevicesSubscription = {
  onCreateTICKETACTIVEDEVICES:  {
    __typename: "TICKETACTIVEDEVICES",
    device_id: string | null,
    id: string,
  } | null,
};

export type OnDeleteFrontendlogsSubscriptionVariables = {
  dateTime?: string | null,
  userToken?: string | null,
};

export type OnDeleteFrontendlogsSubscription = {
  onDeleteFRONTENDLOGS:  {
    __typename: "FRONTENDLOGS",
    content: string | null,
    dateTime: string,
    eventid: number | null,
    host: string | null,
    logType: string | null,
    mode: string | null,
    streamType: string | null,
    userToken: string,
    userType: string | null,
  } | null,
};

export type OnDeleteMulticreatorshareddataSubscriptionVariables = {
  data?: string | null,
  id?: string | null,
};

export type OnDeleteMulticreatorshareddataSubscription = {
  onDeleteMULTICREATORSHAREDDATA:  {
    __typename: "MULTICREATORSHAREDDATA",
    data: string | null,
    id: string,
    version: number | null,
  } | null,
};

export type OnDeleteStreamcountsSubscriptionVariables = {
  streamid?: number | null,
};

export type OnDeleteStreamcountsSubscription = {
  onDeleteSTREAMCOUNTS:  {
    __typename: "STREAMCOUNTS",
    active: number | null,
    streamid: number,
    total: number | null,
  } | null,
};

export type OnDeleteTicketactivedevicesSubscriptionVariables = {
  id?: string | null,
};

export type OnDeleteTicketactivedevicesSubscription = {
  onDeleteTICKETACTIVEDEVICES:  {
    __typename: "TICKETACTIVEDEVICES",
    device_id: string | null,
    id: string,
  } | null,
};

export type OnUpdateFrontendlogsSubscriptionVariables = {
  dateTime?: string | null,
  userToken?: string | null,
};

export type OnUpdateFrontendlogsSubscription = {
  onUpdateFRONTENDLOGS:  {
    __typename: "FRONTENDLOGS",
    content: string | null,
    dateTime: string,
    eventid: number | null,
    host: string | null,
    logType: string | null,
    mode: string | null,
    streamType: string | null,
    userToken: string,
    userType: string | null,
  } | null,
};

export type OnUpdateMulticreatorshareddataSubscriptionVariables = {
  data?: string | null,
  id?: string | null,
};

export type OnUpdateMulticreatorshareddataSubscription = {
  onUpdateMULTICREATORSHAREDDATA:  {
    __typename: "MULTICREATORSHAREDDATA",
    data: string | null,
    id: string,
    version: number | null,
  } | null,
};

export type OnUpdateStreamcountsSubscriptionVariables = {
  streamid?: number | null,
};

export type OnUpdateStreamcountsSubscription = {
  onUpdateSTREAMCOUNTS:  {
    __typename: "STREAMCOUNTS",
    active: number | null,
    streamid: number,
    total: number | null,
  } | null,
};

export type OnUpdateTicketactivedevicesSubscriptionVariables = {
  id?: string | null,
};

export type OnUpdateTicketactivedevicesSubscription = {
  onUpdateTICKETACTIVEDEVICES:  {
    __typename: "TICKETACTIVEDEVICES",
    device_id: string | null,
    id: string,
  } | null,
};

export const FEATURES_DATA = {
    SUBSCRIBE_CHANNEL_APPLY_CHARGE: "12-Feb-2021",
    SUBSCRIBE_CHANNEL_APPLY_TITLE: "12 February 2021"
}

export const API = {

    ORDER_DETAILS: "order/details",
    CART_CURRENCY: "cart/currency"
}

export const BlockChain_INFO = {
    SINGLE_NFT721_JSON: "../NFT.json",
    SINGLE_NFT721_ADDRESS: "0x8782e9322eD46974388984A3dD657a6b6E2aC8BC",
    MULTIPLE_NFT1155_JSON: "../MultNFT.json",
    MULTIPLE_NFT1155_ADDRESS: "0xE9c316cB40E89331108e9dBC3e5030Be8De2Bcf6",
    ERC_20_JSON: "",
    ERC_20_ADDRESS: "0xd37D018814ff53a05a8c4358cD8Cf1527BBE7A8F",
    MARKET_PLACE_JSON: "../MarketPlace.json",
    // MARKET_PLACE_ADDRESS: "0xAdE1B80026F7656E5cC36ad50CccEa5EA77b5A51",
    MARKET_PLACE_ADDRESS: "0xbAfF314bf47a892025bD7e7cbC73A09077042Bce"
}

export const CONST_AWS_API = {
    CATEGORIES: "categories",
    GET_USER: "getUser",
    LOGOUT: "logout",
    MAIN_PAGE_SEARCH: "mainPageSearch",
    FILTER_SEARCH: "filterSearch",
    SEARCH: "search",
    GET_SUBSCRIPTION_PLANS: "getSubscriptionPlans",
    GET_CATEGORY_ORGANISATIONS: "getCategoryOrganisations",
    EVENTS: "events",
    GET_ORGANIZATION_CHANNELS: "organizationChannels",
    GET_ORG_SUBSCRIPTION: "getOrganizationSubscription",
    PERFORMER_EVENTS: "performerEvents",
    PERFORMER_VIDEOS: "performerVideos",
    LIVE_EVENTS: "liveEvents",
    ON_GOING_EVENTS: "ongoingEvents",
    GET_PERFORMER_ORG_INFO: "getPerformerOrgInfo",
    USER_DONATIONS: "userDonations",
    START_SESSION: "startSession",
    UPLOAD_PROFILE_PIC: "uploadProfilePic",
    GET_PROFILE: "getProfile",
    UPDATE_PROFILE: "setProfile",
    END_SESSION: "endSession",
    GET_URL: "getUrl",
    METRIC_UPLOAD: "stream_metrics",
    MULTI_CREATOR_LIVE_EVENTS: "multiCreatorLiveEvents",
    GET_SIGNED_COOKIES: "getSignedCookies",
    EVENT_STREAM_COUNT: "eventStreamCounts",
    TRENDING_CHANNELS: "trendingChannels",
    MY_LIST: "myList",
    //GET_EVENT_WEBPAGE: "getEventWebPage",
    GET_EVENT_WEBPAGE: "getWebPageSettings",
    GET_ORG_GROUP_STAGES_VODS: "getOrgGroupStagesVods",
    GET_STAGE_EVENTS: "getStageEvents",
    GET_LIVE_EVENT_BY_ID: "LiveEventById",
    GET_PERFORMER_INFO: "getPerformerInfo",
    GET_CHANNEL_HOME: "getChannelHome",
    GET_VOD_BY_ID: "getVodById",
    GET_VOD_BY_TAG: "getVodByTag",
    VALIDATE_ZIP: "validateZip",
    // GET_ADDRESS: "getAddress",
    GET_PAYMENT_DETAILS: "getPaymentDetails",
    CALCUATE_TAX: "calculateTax",
    PROCEED_TO_PAYMENT: "proceedToPayment",
    GET_USER_BY_ID: "getUserById",
    GET_USER_ID: "getUserId",
    VERIFY_OTP: "verifyOTP",
    SEND_OTP: "sendOTP",
    GET_EVENT_BY_SLUG: "getEventBySlug",
    GET_LIVE_UPCOMING_EVENTS: "getLiveUpcomingEvents",
    GET_SUBSCRIPTION_STATUS: "getSubscriptionStatus",
    GET_CHANNEL_SUBSCRIPTION_PLANS: "getChannelSubscriptionPlans",
    GET_USER_SUBSCRIPTONS: "getUserSubscriptons",
    GET_CATEGORY_CHANNELS: "getCategoryChannels",
    GET_CONTACTS_LIST: "listContacts",
    GET_SEARCH_CONTACTS: "searchContacts",
    ADD_CONTACT: "addFriend",
    INVITE_USER: "inviteUser",
    BLOCK_CONTACT: "unfriend",
    ONELOGIN_HOOK: "oneloginHook",
    GET_TICKET_DETAILS: "getTicketDetails",
    GET_CATEGORIES_LIST: "listCategories",
    GET_TICKETS_BY_TICKET_ID: "getTicketsByTicketId",
    GET_TICKETS_BY_EVENT_ID: "getTicketsByEventId",
    GET_QUESTIONS_BY_EVENT_ID: "getQuestionsByEventId",
    VERIFY_CODE: "verifyCode",
    GET_FANS_BY_EVENT_ID: "listFansByEventId",
    SEND_EVENT_CONTACT_REQUEST: "sendEventContactRequest",
    PROCESS_EVENT_CONTACT_REQUEST: "processEventContactRequest",
    GET_CONTACT_DETAILS: "getContactDetails",
    GET_EXPO_LIST: "listExpo",
    GET_EXPO_BY_ID: "getExpoById",
    START_VIDEO_ROOM_SESSION: "startVideoRoomSession",
    END_VIDEO_ROOM_SESSION: "endVideoRoomSession",
    INTERESTED: "interested",
    GET_ROOMS_LIST: "listNetworkRooms",
    GET_NETWORK_ROOM_BY_ID: "getNetworkRoomById",
    GET_TICKET: "getTicket",
    VERIFY_EMAIL: "verifyEmail",
    VERIFY_TICKET_OTP: "verifyTicketOTP",
    CLAIM_TICKET: "claimTicket",
    START_NETWORK_ROOM_SESSION: "startNetworkRoomSession",
    END_NETWORK_ROOM_SESSION: "endNetworkRoomSession",
    GET_NETWORK_ROOM_USERS: "getNetworkingUsers",
    SAVE_QUESTIONS: "saveQuestions",
    GET_EXCHANGE_RATES: "getExchangeRates",
    UPDATE_NETWORK_VIDEO_ROOMS: "updateNetworkRooms",
    GET_TAX: "getTax",
    LIST_POLLS: "listPolls",
    VOTE_POLL: "vote",
    KEVEL_ADS: "getKevelAds",
    SAVE_USER_PLAYLIST: "saveUserPlayList",
    GET_USER_PLAYLIST: "getUserPlayList",
    DELETE_USER_PLAYLIST: "deleteUserPlayList",
    GET_PAST_EVENTS: "getPastEvents",
    GET_EVENT_TICKETS: "getEventTickets",
    GET_STREAM_CAMPAIGNS: "getStreamCampaigns",
    GET_ADDRESS: "address"
}

export const CONST_ONE_API = {
    GET_TOKEN: "auth/oauth2/v2/token",
    CREATE_USER: "api/2/users",
    LOGIN_USER: "api/1/login/auth",
    API_SESSION_TOKEN: "session_via_api_token",
    RESET_PASSWORD: "api/1/invites/send_invite_link",
    SEND_INVITE_LINK: "api/1/invites/get_invite_link",
    CHANGE_PASSWORD: "api/1/users/set_password_clear_text/",
    GET_USER_BY_ID: "api/2/users/",
    UPDATE_USER_BY_ID: "api/2/users/",
    SEND_VERIFY_OTP: "api/2/mfa/users",
    LOGOUT: "logout"
}

export const US_ORIGIN = [
    CONST_ONE_API.GET_TOKEN,
    CONST_ONE_API.CREATE_USER,
    CONST_ONE_API.LOGIN_USER,
    CONST_ONE_API.RESET_PASSWORD,
    CONST_ONE_API.SEND_INVITE_LINK,
    CONST_ONE_API.CHANGE_PASSWORD,
    CONST_ONE_API.GET_USER_BY_ID,
    CONST_ONE_API.SEND_VERIFY_OTP,
    CONST_ONE_API.LOGOUT
];

export const AWS_RES_STATUS_CODE = {
    USER_NOT_CONFIRMED_EXCEPTION: "UserNotConfirmedException",
    NOT_AUTHORIZED_EXCEPTION: "NotAuthorizedException"
}

export const DEFAULT_IMAGE = {
    IMAGE_1: "assets/default-img1.jpg",
    IMAGE_2: "assets/default-img2.jpg"
}

export const COLORLIST = [
    "#44d7b6",
    "#FF8935",
    "#f3af5a",
    "#846aa4",
    "#bf6780",
    "#b47f60",
    "#21accf",
    "#3d7dca",
    "#ed6c82",
    "#ee91a4",
    "#787ca9",
    "#5b868d",
    "#98bfaa",
    "#55d951",
    "#d0b2a0"
];


export const COUNTRIES_LIST: any =
    [
        {
            "name": "Afghanistan",
            "phoneCode": "+93",
            "alpha2code": "AF",
            "alpha3code": "AFG"
        },
        // {
        //     "name": "Albania",
        //     "phoneCode": "+355",
        //     "alpha2code": "AL",
        //     "alpha3code": "ALB",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Algeria",
        //     "phoneCode": "+213",
        //     "alpha2code": "DZ",
        //     "alpha3code": "DZA",
        //     "avalara": "no"
        // },
        // {
        //     "name": "American Samoa",
        //     "phoneCode": "+1",
        //     "alpha2code": "AS",
        //     "alpha3code": "ASM",
        //     "avalara": "no"
        // },
        {
            "name": "Andorra",
            "phoneCode": "+376",
            "alpha2code": "AD",
            "alpha3code": "AND"
        },
        // {
        //     "name": "Angola",
        //     "phoneCode": "+244",
        //     "alpha2code": "AO",
        //     "alpha3code": "AGO",
        //     "avalara": "no"
        // },
        {
            "name": "Anguilla",
            "phoneCode": "+1",
            "alpha2code": "AI",
            "alpha3code": "AIA"
        },
        {
            "name": "Antigua and Barbuda",
            "phoneCode": "+1",
            "alpha2code": "AG",
            "alpha3code": "ATG"
        },
        {
            "name": "Argentina",
            "phoneCode": "+54",
            "alpha2code": "AR",
            "alpha3code": "ARG"
        },
        {
            "name": "Armenia",
            "phoneCode": "+374",
            "alpha2code": "AM",
            "alpha3code": "ARM"
        },
        {
            "name": "Aruba",
            "phoneCode": "+297",
            "alpha2code": "AW",
            "alpha3code": "ABW"
        },
        {
            "name": "Australia",
            "phoneCode": "+61",
            "alpha2code": "AU",
            "alpha3code": "AUS"
        },
        {
            "name": "Austria",
            "phoneCode": "+43",
            "alpha2code": "AT",
            "alpha3code": "AUT"
        },
        {
            "name": "Azerbaijan",
            "phoneCode": "+994",
            "alpha2code": "AZ",
            "alpha3code": "AZE"
        },
        {
            "name": "Bahamas",
            "phoneCode": "+1",
            "alpha2code": "BS",
            "alpha3code": "BHS"
        },
        {
            "name": "Bahrain",
            "phoneCode": "+973",
            "alpha2code": "BH",
            "alpha3code": "BHR"
        },
        {
            "name": "Bangladesh",
            "phoneCode": "+880",
            "alpha2code": "BD",
            "alpha3code": "BGD"
        },
        {
            "name": "Barbados",
            "phoneCode": "+1",
            "alpha2code": "BB",
            "alpha3code": "BRB"
        },
        {
            "name": "Belarus",
            "phoneCode": "+375",
            "alpha2code": "BY",
            "alpha3code": "BLR"
        },
        {
            "name": "Belgium",
            "phoneCode": "+32",
            "alpha2code": "BE",
            "alpha3code": "BEL"
        },
        {
            "name": "Belize",
            "phoneCode": "+501",
            "alpha2code": "BZ",
            "alpha3code": "BLZ"
        },
        // {
        //     "name": "Benin",
        //     "phoneCode": "+229",
        //     "alpha2code": "BJ",
        //     "alpha3code": "BEN",
        //     "avalara": "no"
        // },
        {
            "name": "Bermuda",
            "phoneCode": "+1",
            "alpha2code": "BM",
            "alpha3code": "BMU"
        },
        // {
        //     "name": "Bhutan",
        //     "phoneCode": "+975",
        //     "alpha2code": "BT",
        //     "alpha3code": "BTN",
        //     "avalara": "no"
        // },
        {
            "name": "Bolivia",
            "phoneCode": "+591",
            "alpha2code": "BO",
            "alpha3code": "BOL"
        },
        {
            "name": "Bosnia and Herzegovina",
            "phoneCode": "+387",
            "alpha2code": "BA",
            "alpha3code": "BIH"
        },
        {
            "name": "Botswana",
            "phoneCode": "+267",
            "alpha2code": "BW",
            "alpha3code": "BWA"
        },
        {
            "name": "Brazil",
            "phoneCode": "+55",
            "alpha2code": "BR",
            "alpha3code": "BRA"
        },
        // {
        //     "name": "British Indian Ocean Territory",
        //     "phoneCode": "+246",
        //     "alpha2code": "IO",
        //     "alpha3code": "IOT",
        //     "avalara": "no"
        // },
        {
            "name": "British Virgin Islands",
            "phoneCode": "+1",
            "alpha2code": "VG",
            "alpha3code": "VGB"
        },
        // {
        //     "name": "Brunei Darussalam",
        //     "phoneCode": "+673",
        //     "alpha2code": "BN",
        //     "alpha3code": "BRN",
        //     "avalara": "no"
        // },
        {
            "name": "Bulgaria",
            "phoneCode": "+359",
            "alpha2code": "BG",
            "alpha3code": "BGR"
        },
        // {
        //     "name": "Burkina Faso",
        //     "phoneCode": "+226",
        //     "alpha2code": "BF",
        //     "alpha3code": "BFA",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Myanmar",
        //     "phoneCode": "+95",
        //     "alpha2code": "MM",
        //     "alpha3code": "MMR",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Burundi",
        //     "phoneCode": "+257",
        //     "alpha2code": "BI",
        //     "alpha3code": "BDI",
        //     "avalara": "no"
        // },
        {
            "name": "Cambodia",
            "phoneCode": "+855",
            "alpha2code": "KH",
            "alpha3code": "KHM"
        },
        // {
        //     "name": "Cameroon",
        //     "phoneCode": "+237",
        //     "alpha2code": "CM",
        //     "alpha3code": "CMR",
        //     "avalara": "no"
        // },
        {
            "name": "Canada",
            "phoneCode": "+1",
            "alpha2code": "CA",
            "alpha3code": "CAN",
            "validation": "yes"
        },
        // {
        //     "name": "Cabo Verde",
        //     "phoneCode": "+238",
        //     "alpha2code": "CV",
        //     "alpha3code": "CPV",
        //     "avalara": "no"
        // },
        {
            "name": "Cayman Islands",
            "phoneCode": "+1",
            "alpha2code": "KY",
            "alpha3code": "CYM"
        },
        // {
        //     "name": "Central African Republic",
        //     "phoneCode": "+236",
        //     "alpha2code": "CF",
        //     "alpha3code": "CAF",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Chad",
        //     "phoneCode": "+235",
        //     "alpha2code": "ID",
        //     "alpha3code": "TCD",
        //     "avalara": "no"
        // },
        {
            "name": "Chile",
            "phoneCode": "+56",
            "alpha2code": "CL",
            "alpha3code": "CHL"
        },
        {
            "name": "China",
            "phoneCode": "+86",
            "alpha2code": "CN",
            "alpha3code": "CHN"
        },
        {
            "name": "Colombia",
            "phoneCode": "+57",
            "alpha2code": "CO",
            "alpha3code": "COL"
        },
        // {
        //     "name": "Comoros",
        //     "phoneCode": "+269",
        //     "alpha2code": "KM",
        //     "alpha3code": "COM",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Cook Islands",
        //     "phoneCode": "+682",
        //     "alpha2code": "CK",
        //     "alpha3code": "COK",
        //     "avalara": "no"
        // },
        {
            "name": "Costa Rica",
            "phoneCode": "+506",
            "alpha2code": "CR",
            "alpha3code": "CRI"
        },
        // {
        //     "name": "Côte dIvoire",
        //     "phoneCode": "+225",
        //     "alpha2code": "CI",
        //     "alpha3code": "CIV",
        //     "avalara": "no"
        // },
        {
            "name": "Croatia",
            "phoneCode": "+385",
            "alpha2code": "HR",
            "alpha3code": "HRV"
        },
        {
            "name": "Cuba",
            "phoneCode": "+53",
            "alpha2code": "CU",
            "alpha3code": "CUB"
        },
        {
            "name": "Curaçao",
            "phoneCode": "+599",
            "alpha2code": "CW",
            "alpha3code": "CUW"
        },
        {
            "name": "Caribbean Netherlands",
            "phoneCode": "+599",
            "alpha2code": "BQ",
            "alpha3code": "BES"
        },
        {
            "name": "Cyprus",
            "phoneCode": "+357",
            "alpha2code": "CY",
            "alpha3code": "CYP"
        },
        {
            "name": "Czechia",
            "phoneCode": "+420",
            "alpha2code": "CZ",
            "alpha3code": "CZE"
        },
        {
            "name": "Denmark",
            "phoneCode": "+45",
            "alpha2code": "DK",
            "alpha3code": "DNK"
        },
        // {
        //     "name": "Djibouti",
        //     "phoneCode": "+253",
        //     "alpha2code": "DJ",
        //     "alpha3code": "DJI",
        //     "avalara": "no"
        // },
        {
            "name": "Dominica",
            "phoneCode": "+1",
            "alpha2code": "DM",
            "alpha3code": "DMA"
        },
        {
            "name": "Dominican Republic",
            "phoneCode": "+1",
            "alpha2code": "DO",
            "alpha3code": "DOM"
        },
        {
            "name": "Ecuador",
            "phoneCode": "+593",
            "alpha2code": "EC",
            "alpha3code": "ECU"
        },
        {
            "name": "Egypt",
            "phoneCode": "+20",
            "alpha2code": "EG",
            "alpha3code": "EGY"
        },
        {
            "name": "El Salvador",
            "phoneCode": "+503",
            "alpha2code": "SV",
            "alpha3code": "SLV"
        },
        // {
        //     "name": "Equatorial Guinea",
        //     "phoneCode": "+240",
        //     "alpha2code": "GQ",
        //     "alpha3code": "GNQ",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Eritrea",
        //     "phoneCode": "+291",
        //     "alpha2code": "ER",
        //     "alpha3code": "ERI",
        //     "avalara": "no"            
        // },
        {
            "name": "Estonia",
            "phoneCode": "+372",
            "alpha2code": "EE",
            "alpha3code": "EST"
        },
        // {
        //     "name": "Ethiopia",
        //     "phoneCode": "+251",
        //     "alpha2code": "ET",
        //     "alpha3code": "ETH",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Falkland Islands",
        //     "phoneCode": "+500",
        //     "alpha2code": "FK",
        //     "alpha3code": "FLK",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Faroe Islands",
        //     "phoneCode": "+298",
        //     "alpha2code": "FO",
        //     "alpha3code": "FRO",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Federated States of Micronesia",
        //     "phoneCode": "+691",
        //     "alpha2code": "FM",
        //     "alpha3code": "FSM",
        //     "avalara": "no"
        // },
        {
            "name": "Fiji",
            "phoneCode": "+679",
            "alpha2code": "FJ",
            "alpha3code": "FJI"
        },
        {
            "name": "Finland",
            "phoneCode": "+358",
            "alpha2code": "FI",
            "alpha3code": "FIN"
        },
        {
            "name": "France",
            "phoneCode": "+33",
            "alpha2code": "FR",
            "alpha3code": "FRA"
        },
        {
            "name": "French Guiana",
            "phoneCode": "+594",
            "alpha2code": "GF",
            "alpha3code": "GUF"
        },
        // {
        //     "name": "French Polynesia",
        //     "phoneCode": "+689",
        //     "alpha2code": "PF",
        //     "alpha3code": "PYF",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Gabon",
        //     "phoneCode": "+241",
        //     "alpha2code": "GA",
        //     "alpha3code": "GAB",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Georgia",
        //     "phoneCode": "+995",
        //     "alpha2code": "GE",
        //     "alpha3code": "GEO",
        //     "avalara": "no"
        // },
        {
            "name": "Germany",
            "phoneCode": "+49",
            "alpha2code": "DE",
            "alpha3code": "DEU"
        },
        {
            "name": "Ghana",
            "phoneCode": "+233",
            "alpha2code": "GH",
            "alpha3code": "GHA"
        },
        {
            "name": "Gibraltar",
            "phoneCode": "+350",
            "alpha2code": "GI",
            "alpha3code": "GIB"
        },
        {
            "name": "Greece",
            "phoneCode": "+30",
            "alpha2code": "GR",
            "alpha3code": "GRC"
        },
        // {
        //     "name": "Greenland",
        //     "phoneCode": "+299",
        //     "alpha2code": "GL",
        //     "alpha3code": "GRL",
        //     "avalara": "no"
        // },
        {
            "name": "Grenada",
            "phoneCode": "+1",
            "alpha2code": "GD",
            "alpha3code": "GRD"
        },
        {
            "name": "Guadeloupe",
            "phoneCode": "+590",
            "alpha2code": "GP",
            "alpha3code": "GLP"
        },
        // {
        //     "name": "Guam",
        //     "phoneCode": "+1",
        //     "alpha2code": "GU",
        //     "alpha3code": "GUM",
        //     "avalara": "no"
        // },
        {
            "name": "Guatemala",
            "phoneCode": "+502",
            "alpha2code": "GT",
            "alpha3code": "GTM"
        },
        {
            "name": "Guernsey",
            "phoneCode": "+44",
            "alpha2code": "GG",
            "alpha3code": "GGY"
        },
        // {
        //     "name": "Guinea",
        //     "phoneCode": "+224",
        //     "alpha2code": "GN",
        //     "alpha3code": "GIN",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Guinea-Bissau",
        //     "phoneCode": "+245",
        //     "alpha2code": "GW",
        //     "alpha3code": "GNB",
        //     "avalara": "no"
        // },
        {
            "name": "Guyana",
            "phoneCode": "+592",
            "alpha2code": "GY",
            "alpha3code": "GUY"
        },
        {
            "name": "Haiti",
            "phoneCode": "+509",
            "alpha2code": "HT",
            "alpha3code": "HTI"
        },
        {
            "name": "Honduras",
            "phoneCode": "+504",
            "alpha2code": "HN",
            "alpha3code": "HND"
        },
        {
            "name": "Hong Kong",
            "phoneCode": "+852",
            "alpha2code": "HK",
            "alpha3code": "HKG"
        },
        {
            "name": "Hungary",
            "phoneCode": "+36",
            "alpha2code": "HU",
            "alpha3code": "HUN"
        },
        {
            "name": "Iceland",
            "phoneCode": "+354",
            "alpha2code": "IS",
            "alpha3code": "ISL"
        },
        {
            "name": "India",
            "phoneCode": "+91",
            "alpha2code": "IN",
            "alpha3code": "IND"
        },
        {
            "name": "Indonesia",
            "phoneCode": "+62",
            "alpha2code": "ID",
            "alpha3code": "IDN"
        },
        // {
        //     "name": "Iran",
        //     "phoneCode": "+98",
        //     "alpha2code": "IR",
        //     "alpha3code": "IRN",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Iraq",
        //     "phoneCode": "+964",
        //     "alpha2code": "IQ",
        //     "alpha3code": "IRQ",
        //     "avalara": "no"
        // },
        {
            "name": "Ireland",
            "phoneCode": "+353",
            "alpha2code": "IE",
            "alpha3code": "IRL"
        },
        {
            "name": "Israel",
            "phoneCode": "+972",
            "alpha2code": "IL",
            "alpha3code": "ISR"
        },
        {
            "name": "Italy",
            "phoneCode": "+39",
            "alpha2code": "IT",
            "alpha3code": "ITA"
        },
        {
            "name": "Jamaica",
            "phoneCode": "+1",
            "alpha2code": "JM",
            "alpha3code": "JAM"
        },
        {
            "name": "Japan",
            "phoneCode": "+81",
            "alpha2code": "JP",
            "alpha3code": "JPN"
        },
        {
            "name": "Jersey",
            "phoneCode": "+44",
            "alpha2code": "JE",
            "alpha3code": "JEY"
        },
        {
            "name": "Jordan",
            "phoneCode": "+962",
            "alpha2code": "JO",
            "alpha3code": "JOR"
        },
        {
            "name": "Kazakhstan",
            "phoneCode": "+7",
            "alpha2code": "KZ",
            "alpha3code": "KAZ"
        },
        {
            "name": "Kenya",
            "phoneCode": "+254",
            "alpha2code": "KE",
            "alpha3code": "KEN"
        },
        // {
        //     "name": "Kiribati",
        //     "phoneCode": "+686",
        //     "alpha2code": "KI",
        //     "alpha3code": "KIR",
        //     "avalara": "no"
        // },
        {
            "name": "Kuwait",
            "phoneCode": "+965",
            "alpha2code": "KW",
            "alpha3code": "KWT"
        },
        // {
        //     "name": "Kyrgyzstan",
        //     "phoneCode": "+996",
        //     "alpha2code": "KG",
        //     "alpha3code": "KGZ",
        //     "avalara": "no"
        // },
        {
            "name": "Laos",
            "phoneCode": "+856",
            "alpha2code": "LA",
            "alpha3code": "LAO"
        },
        {
            "name": "Latvia",
            "phoneCode": "+371",
            "alpha2code": "LV",
            "alpha3code": "LVA"
        },
        {
            "name": "Lebanon",
            "phoneCode": "+961",
            "alpha2code": "LB",
            "alpha3code": "LBN"
        },
        // {
        //     "name": "Lesotho",
        //     "phoneCode": "+266",
        //     "alpha2code": "LS",
        //     "alpha3code": "LSO",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Liberia",
        //     "phoneCode": "+231",
        //     "alpha2code": "LR",
        //     "alpha3code": "LBR",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Libya",
        //     "phoneCode": "+218",
        //     "alpha2code": "LY",
        //     "alpha3code": "LBY",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Liechtenstein",
        //     "phoneCode": "+423",
        //     "alpha2code": "LI",
        //     "alpha3code": "LIE",
        //     "avalara": "no"
        // },
        {
            "name": "Lithuania",
            "phoneCode": "+370",
            "alpha2code": "LT",
            "alpha3code": "LTU"
        },
        {
            "name": "Luxembourg",
            "phoneCode": "+352",
            "alpha2code": "LU",
            "alpha3code": "LUX"
        },
        // {
        //     "name": "Macao",
        //     "phoneCode": "+853",
        //     "alpha2code": "MO",
        //     "alpha3code": "MAC",
        //     "avalara": "no"
        // },
        {
            "name": "Macedonia",
            "phoneCode": "+389",
            "alpha2code": "MK",
            "alpha3code": "MKD"
        },
        // {
        //     "name": "Madagascar",
        //     "phoneCode": "+261",
        //     "alpha2code": "MG",
        //     "alpha3code": "MDG",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Malawi",
        //     "phoneCode": "+265",
        //     "alpha2code": "MW",
        //     "alpha3code": "MWI",
        //     "avalara": "no"
        // },
        {
            "name": "Malaysia",
            "phoneCode": "+60",
            "alpha2code": "MY",
            "alpha3code": "MYS"
        },
        // {
        //     "name": "Maldives",
        //     "phoneCode": "+960",
        //     "alpha2code": "MV",
        //     "alpha3code": "MDV",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Mali",
        //     "phoneCode": "+223",
        //     "alpha2code": "ML",
        //     "alpha3code": "MLI",
        //     "avalara": "no"
        // },
        {
            "name": "Malta",
            "phoneCode": "+356",
            "alpha2code": "MT",
            "alpha3code": "MLT"
        },
        // {
        //     "name": "Marshall Islands",
        //     "phoneCode": "+692",
        //     "alpha2code": "MH",
        //     "alpha3code": "MHL",
        //     "avalara": "no"
        // },
        {
            "name": "Martinique",
            "phoneCode": "+596",
            "alpha2code": "MQ",
            "alpha3code": "MTQ"
        },
        // {
        //     "name": "Mauritania",
        //     "phoneCode": "+222",
        //     "alpha2code": "MR",
        //     "alpha3code": "MRT",
        //     "avalara": "no"
        // },
        {
            "name": "Mauritius",
            "phoneCode": "+230",
            "alpha2code": "MU",
            "alpha3code": "MUS"
        },
        // {
        //     "name": "Mayotte",
        //     "phoneCode": "+262",
        //     "alpha2code": "YT",
        //     "alpha3code": "MYT",
        //     "avalara": "no"
        // },
        {
            "name": "Mexico",
            "phoneCode": "+52",
            "alpha2code": "MX",
            "alpha3code": "MEX"
        },
        // {
        //     "name": "Moldova",
        //     "phoneCode": "+373",
        //     "alpha2code": "MD",
        //     "alpha3code": "MDA",
        //     "avalara": "no"
        // },
        {
            "name": "Monaco",
            "phoneCode": "+377",
            "alpha2code": "MC",
            "alpha3code": "MCO"
        },
        {
            "name": "Mongolia",
            "phoneCode": "+976",
            "alpha2code": "MN",
            "alpha3code": "MNG"
        },
        {
            "name": "Montenegro",
            "phoneCode": "+382",
            "alpha2code": "ME",
            "alpha3code": "MNE"
        },
        {
            "name": "Montserrat",
            "phoneCode": "+1",
            "alpha2code": "MS",
            "alpha3code": "MSR"
        },
        {
            "name": "Morocco",
            "phoneCode": "+212",
            "alpha2code": "MA",
            "alpha3code": "MAR"
        },
        // {
        //     "name": "Mozambique",
        //     "phoneCode": "+258",
        //     "alpha2code": "MZ",
        //     "alpha3code": "MOZ",
        //     "avalara": "no"
        // },
        {
            "name": "Namibia",
            "phoneCode": "+264",
            "alpha2code": "NA",
            "alpha3code": "NAM"
        },
        // {
        //     "name": "Nauru",
        //     "phoneCode": "+674",
        //     "alpha2code": "NR",
        //     "alpha3code": "NRU",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Nepal",
        //     "phoneCode": "+977",
        //     "alpha2code": "NP",
        //     "alpha3code": "NPL",
        //     "avalara": "no"
        // },
        {
            "name": "Netherlands",
            "phoneCode": "+31",
            "alpha2code": "NL",
            "alpha3code": "NLD"
        },
        // {
        //     "name": "Netherlands Antilles",
        //     "phoneCode": "+599",
        //     "alpha2code": "AN",
        //     "alpha3code": "ANT",
        //     "avalara": "no"
        // },
        // {
        //     "name": "New Caledonia",
        //     "phoneCode": "+687",
        //     "alpha2code": "NC",
        //     "alpha3code": "NCL",
        //     "avalara": "no"
        // },
        {
            "name": "New Zealand",
            "phoneCode": "+64",
            "alpha2code": "NZ",
            "alpha3code": "NZL"
        },
        {
            "name": "Nicaragua",
            "phoneCode": "+505",
            "alpha2code": "NI",
            "alpha3code": "NIC"
        },
        // {
        //     "name": "Niger",
        //     "phoneCode": "+227",
        //     "alpha2code": "NE",
        //     "alpha3code": "NER",
        //     "avalara": "no"
        // },
        {
            "name": "Nigeria",
            "phoneCode": "+234",
            "alpha2code": "NG",
            "alpha3code": "NGA"
        },
        // {
        //     "name": "Niue",
        //     "phoneCode": "+683",
        //     "alpha2code": "NU",
        //     "alpha3code": "NIU",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Norfolk Island",
        //     "phoneCode": "+672",
        //     "alpha2code": "NF",
        //     "alpha3code": "NFK",
        //     "avalara": "no"
        // },
        // {
        //     "name": "North Korea",
        //     "phoneCode": "+850",
        //     "alpha2code": "KP",
        //     "alpha3code": "PRK",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Northern Mariana Islands",
        //     "phoneCode": "+1",
        //     "alpha2code": "MP",
        //     "alpha3code": "MNP",
        //     "avalara": "no"
        // },
        {
            "name": "Norway",
            "phoneCode": "+47",
            "alpha2code": "NO",
            "alpha3code": "NOR"
        },
        {
            "name": "Oman",
            "phoneCode": "+968",
            "alpha2code": "OM",
            "alpha3code": "OMN"
        },
        {
            "name": "Pakistan",
            "phoneCode": "+92",
            "alpha2code": "PK",
            "alpha3code": "PAK"
        },
        // {
        //     "name": "Palau",
        //     "phoneCode": "+680",
        //     "alpha2code": "PW",
        //     "alpha3code": "PLW",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Palestine",
        //     "phoneCode": "+970",
        //     "alpha2code": "PS",
        //     "alpha3code": "PSE",
        //     "avalara": "no"
        // },
        {
            "name": "Panama",
            "phoneCode": "+507",
            "alpha2code": "PA",
            "alpha3code": "PAN",
            "avalara": "no"
        },
        {
            "name": "Papua New Guinea",
            "phoneCode": "+675",
            "alpha2code": "PG",
            "alpha3code": "PNG"
        },
        {
            "name": "Paraguay",
            "phoneCode": "+595",
            "alpha2code": "PY",
            "alpha3code": "PRY"
        },
        {
            "name": "Peru",
            "phoneCode": "+51",
            "alpha2code": "PE",
            "alpha3code": "PER"
        },
        {
            "name": "Philippines",
            "phoneCode": "+63",
            "alpha2code": "PH",
            "alpha3code": "PHL"
        },
        {
            "name": "Poland",
            "phoneCode": "+48",
            "alpha2code": "PL",
            "alpha3code": "POL"
        },
        {
            "name": "Portugal",
            "phoneCode": "+351",
            "alpha2code": "PT",
            "alpha3code": "PRT"
        },
        // {
        //     "name": "Puerto Rico",
        //     "phoneCode": "+1",
        //     "alpha2code": "PR",
        //     "alpha3code": "PRI",
        //     "avalara": "no"
        // },
        {
            "name": "Qatar",
            "phoneCode": "+974",
            "alpha2code": "QA",
            "alpha3code": "QAT"
        },
        // {
        //     "name": "Congo",
        //     "phoneCode": "+242",
        //     "alpha2code": "CG",
        //     "alpha3code": "COG",
        //     "avalara": "no"
        // },
        {
            "name": "Réunion",
            "phoneCode": "+262",
            "alpha2code": "RE",
            "alpha3code": "REU"
        },
        {
            "name": "Romania",
            "phoneCode": "+40",
            "alpha2code": "RO",
            "alpha3code": "ROU"
        },
        {
            "name": "Russia",
            "phoneCode": "+7",
            "alpha2code": "RU",
            "alpha3code": "RUS"
        },
        // {
        //     "name": "Rwanda",
        //     "phoneCode": "+250",
        //     "alpha2code": "RW",
        //     "alpha3code": "RWA",
        //     "avalara": "no"
        // },
        {
            "name": "Saint Barthélemy",
            "phoneCode": "+590",
            "alpha2code": "BL",
            "alpha3code": "BLM"
        },
        // {
        //     "name": "Saint Helena",
        //     "phoneCode": "+290",
        //     "alpha2code": "SH",
        //     "alpha3code": "SHN",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Saint Kitts and Nevis",
        //     "phoneCode": "+1",
        //     "alpha2code": "KN",
        //     "alpha3code": "KNA",
        //     "avalara": "no"
        // },
        {
            "name": "Saint Lucia",
            "phoneCode": "+1",
            "alpha2code": "LC",
            "alpha3code": "LCA"
        },
        {
            "name": "Saint Martin",
            "phoneCode": "+590",
            "alpha2code": "MF",
            "alpha3code": "MAF"
        },
        // {
        //     "name": "Saint Pierre and Miquelon",
        //     "phoneCode": "+508",
        //     "alpha2code": "PM",
        //     "alpha3code": "SPM",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Saint Vincent and the Grenadines",
        //     "phoneCode": "+1",
        //     "alpha2code": "VC",
        //     "alpha3code": "VCT",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Samoa",
        //     "phoneCode": "+685",
        //     "alpha2code": "WS",
        //     "alpha3code": "WSM",
        //     "avalara": "no"
        // },
        {
            "name": "San Marino",
            "phoneCode": "+378",
            "alpha2code": "SM",
            "alpha3code": "SMR"
        },
        // {
        //     "name": "São Tomé and Príncipe",
        //     "phoneCode": "+239",
        //     "alpha2code": "ST",
        //     "alpha3code": "STP",
        //     "avalara": "no"
        // },
        {
            "name": "Saudi Arabia",
            "phoneCode": "+966",
            "alpha2code": "SA",
            "alpha3code": "SAU"
        },
        {
            "name": "Senegal",
            "phoneCode": "+221",
            "alpha2code": "SN",
            "alpha3code": "SEN"
        },
        {
            "name": "Serbia",
            "phoneCode": "+381",
            "alpha2code": "RS",
            "alpha3code": "SRB"
        },
        // {
        //     "name": "Seychelles",
        //     "phoneCode": "+248",
        //     "alpha2code": "SC",
        //     "alpha3code": "SYC",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Sierra Leone",
        //     "phoneCode": "+232",
        //     "alpha2code": "SL",
        //     "alpha3code": "SLE",
        //     "avalara": "no"
        // },
        {
            "name": "Singapore",
            "phoneCode": "+65",
            "alpha2code": "SG",
            "alpha3code": "SGP"
        },
        {
            "name": "Sint Maarten (Dutch part)",
            "phoneCode": "+1",
            "alpha2code": "SX",
            "alpha3code": "SXM"
        },
        {
            "name": "Slovakia",
            "phoneCode": "+421",
            "alpha2code": "SK",
            "alpha3code": "SVK"
        },
        {
            "name": "Slovenia",
            "phoneCode": "+386",
            "alpha2code": "SI",
            "alpha3code": "SVN"
        },
        // {
        //     "name": "Solomon Islands",
        //     "phoneCode": "+677",
        //     "alpha2code": "SB",
        //     "alpha3code": "SLB",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Somalia",
        //     "phoneCode": "+252",
        //     "alpha2code": "SO",
        //     "alpha3code": "SOM",
        //     "avalara": "no"
        // },
        {
            "name": "South Africa",
            "phoneCode": "+27",
            "alpha2code": "ZA",
            "alpha3code": "ZAF"
        },
        {
            "name": "South Korea",
            "phoneCode": "+82",
            "alpha2code": "KR",
            "alpha3code": "KOR"
        },
        // {
        //     "name": "South Sudan",
        //     "phoneCode": "+211",
        //     "alpha2code": "SS",
        //     "alpha3code": "SSD",
        //     "avalara": "no"
        // },
        {
            "name": "Spain",
            "phoneCode": "+34",
            "alpha2code": "ES",
            "alpha3code": "ESP"
        },
        {
            "name": "Sri Lanka",
            "phoneCode": "+94",
            "alpha2code": "LK",
            "alpha3code": "LKA"
        },
        {
            "name": "St Kitts And Nevis",
            "phoneCode": "+869",
            "alpha2code": "KN",
            "alpha3code": "KNA"
        },
        {
            "name": "St Vincent",
            "phoneCode": "+784",
            "alpha2code": "LC",
            "alpha3code": "LCA"
        },
        // {
        //     "name": "Sudan",
        //     "phoneCode": "+249",
        //     "alpha2code": "SD",
        //     "alpha3code": "SDN",
        //     "avalara": "no"
        // },
        {
            "name": "Suriname",
            "phoneCode": "+597",
            "alpha2code": "SR",
            "alpha3code": "SUR"
        },
        // {
        //     "name": "Swaziland",
        //     "phoneCode": "+268",
        //     "alpha2code": "SZ",
        //     "alpha3code": "SWZ",
        //     "avalara": "no"
        // },
        {
            "name": "Sweden",
            "phoneCode": "+46",
            "alpha2code": "SE",
            "alpha3code": "SWE"
        },
        {
            "name": "Switzerland",
            "phoneCode": "+41",
            "alpha2code": "CH",
            "alpha3code": "CHE"
        },
        // {
        //     "name": "Syrian Arab Republic",
        //     "phoneCode": "+963",
        //     "alpha2code": "SY",
        //     "alpha3code": "SYR",
        //     "avalara": "no"
        // },
        {
            "name": "Taiwan",
            "phoneCode": "+886",
            "alpha2code": "TW",
            "alpha3code": "TWN"
        },
        // {
        //     "name": "Tajikistan",
        //     "phoneCode": "+992",
        //     "alpha2code": "TJ",
        //     "alpha3code": "TJK",
        //     "avalara": "no"
        // },
        {
            "name": "Tanzania",
            "phoneCode": "+255",
            "alpha2code": "TZ",
            "alpha3code": "TZA"
        },
        {
            "name": "Thailand",
            "phoneCode": "+66",
            "alpha2code": "TH",
            "alpha3code": "THA"
        },
        // {
        //     "name": "Gambia",
        //     "phoneCode": "+220",
        //     "alpha2code": "GM",
        //     "alpha3code": "GMB",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Timor-Leste",
        //     "phoneCode": "+670",
        //     "alpha2code": "TL",
        //     "alpha3code": "TLS",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Togo",
        //     "phoneCode": "+228",
        //     "alpha2code": "TG",
        //     "alpha3code": "TGO",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Tokelau",
        //     "phoneCode": "+690",
        //     "alpha2code": "TK",
        //     "alpha3code": "TKL",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Tonga",
        //     "phoneCode": "+676",
        //     "alpha2code": "TO",
        //     "alpha3code": "TON",
        //     "avalara": "no"
        // },
        {
            "name": "Trinidad and Tobago",
            "phoneCode": "+1",
            "alpha2code": "TT",
            "alpha3code": "TTO"
        },
        // {
        //     "name": "Tunisia",
        //     "phoneCode": "+216",
        //     "alpha2code": "TN",
        //     "alpha3code": "TUN",
        //     "avalara": "no"
        // },
        {
            "name": "Turkey",
            "phoneCode": "+90",
            "alpha2code": "TR",
            "alpha3code": "TUR"
        },
        // {
        //     "name": "Turkmenistan",
        //     "phoneCode": "+993",
        //     "alpha2code": "TM",
        //     "alpha3code": "TKM",
        //     "avalara": "no"
        // },
        {
            "name": "Turks and Caicos Islands",
            "phoneCode": "+1",
            "alpha2code": "TC",
            "alpha3code": "TCA"
        },
        // {
        //     "name": "Tuvalu",
        //     "phoneCode": "+688",
        //     "alpha2code": "TV",
        //     "alpha3code": "TUV",
        //     "avalara": "no"
        // },
        {
            "name": "Uganda",
            "phoneCode": "+256",
            "alpha2code": "UG",
            "alpha3code": "UGA"
        },
        {
            "name": "Ukraine",
            "phoneCode": "+380",
            "alpha2code": "UA",
            "alpha3code": "UKR"
        },
        {
            "name": "United Arab Emirates",
            "phoneCode": "+971",
            "alpha2code": "AE",
            "alpha3code": "ARE"
        },
        {
            "name": "United Kingdom",
            "phoneCode": "+44",
            "alpha2code": "GB",
            "alpha3code": "GBR",
            "stateless": "yes"
        },
        {
            "name": "United States",
            "phoneCode": "+1",
            "alpha2code": "US",
            "alpha3code": "USA",
            "validation": "yes"
        },
        {
            "name": "Uruguay",
            "phoneCode": "+598",
            "alpha2code": "UY",
            "alpha3code": "URY"
        },
        // {
        //     "name": "U.S. Virgin Islands",
        //     "phoneCode": "+1",
        //     "alpha2code": "VI",
        //     "alpha3code": "VIR",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Uzbekistan",
        //     "phoneCode": "+998",
        //     "alpha2code": "UZ",
        //     "alpha3code": "UZB",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Vanuatu",
        //     "phoneCode": "+678",
        //     "alpha2code": "VU",
        //     "alpha3code": "VUT",
        //     "avalara": "no"
        // },
        {
            "name": "Vatican City",
            "phoneCode": "+39",
            "alpha2code": "VA",
            "alpha3code": "VAT"
        },
        {
            "name": "Venezuela",
            "phoneCode": "+58",
            "alpha2code": "VE",
            "alpha3code": "VEN"
        },
        {
            "name": "Vietnam",
            "phoneCode": "+84",
            "alpha2code": "VN",
            "alpha3code": "VNM"
        },
        // {
        //     "name": "Wallis and Futuna",
        //     "phoneCode": "+681",
        //     "alpha2code": "WF",
        //     "alpha3code": "WLF",
        //     "avalara": "no"
        // },
        // {
        //     "name": "Yemen",
        //     "phoneCode": "+967",
        //     "alpha2code": "YE",
        //     "alpha3code": "YEM",
        //     "avalara": "no"
        // },
        {
            "name": "Zambia",
            "phoneCode": "+260",
            "alpha2code": "ZM",
            "alpha3code": "ZMB"
        },
        {
            "name": "Zimbabwe",
            "phoneCode": "+263",
            "alpha2code": "ZW",
            "alpha3code": "ZWE"
        }
    ];

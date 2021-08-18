export const TravelModel = [
  {
    id: "passenger",
    name: "Passenger",
    type: "text",
    foreign: {
      controller: "passenger",
      key: "id",
    },
    form: false,
    grid: false,
  },
  {
    id: "driver",
    name: "Driver",
    type: "text",
    foreign: {
      controller: "driver",
      key: "id",
    },
    form: false,
    grid: false,
  },
  {
    id: "price",
    name: "Price",
    type: "text",
    form: false,
    grid: false,
  },
  {
    id: "paymethod",
    name: "Paymethod",
    type: "text",
    form: true,
    grid: true,
  },
  {
    id: "init_position",
    name: "Position Passenger",
    type: "position",
    form: false,
    grid: false,
  },
  {
    id: "end_position",
    name: "Destiny",
    type: "text",
    form: false,
    grid: false,
  },
  {
    id: "status_travel",
    name: "Status",
    type: "text",
    form: false,
    grid: false,
  },
  {
    id: "status",
    name: "Status",
    type: "select",
    options: [
      {
        name: "Active",
        value: "1",
      },
      {
        name: "Inactive",
        value: "0",
      },
    ],
    form: false,
    grid: false,
  },
  {
    id: "actions",
    name: "Actions",
    type: "text",
    form: false,
    grid: true,
  },
  {
    id: "pay",
    name: "Pay Method",
    type: "text",
    form: false,
    grid: false,
  },
  {
    id: "childrens",
    name: "Childrens",
    children: {
      rolID: null,
    },
    form: false,
    grid: false,
  },
];

export const SEQUELIZE = "SEQUELIZE";

export const QUOTATION_EXPIRED = "EXPIRED";
export const ALL_QUOTATIONS = "ALL";

export enum FILE_SIZES_IN_BYTES {
  KB = 1000,
  MB = 1000 * 1000,
  GB = 1000 * 1000 * 1000,
  TB = 1000 * 1000 * 1000 * 1000,
  PB = 1000 * 1000 * 1000 * 1000 * 1000,
}

export enum QUOTATION_CHANNEL_TYPE {
  OMS = "OMS",
  OB = "OB",
  EP = "PROC",
  CP = "KAM",
}

export enum MILLISECONDS {
  IN_SECOND = 1000,
  IN_MINUTE = 1000 * 60,
  IN_HOUR = 1000 * 60 * 60,
  IN_DAY = 1000 * 60 * 60 * 24,
}

export const template = [
  {
    activityName: "DISMANTLING & SHIFTING",
    tasks: [
      {
        id: "54fe5d29-4d68-41b0-8120-e8355c64eae3",
        activityName: "DISMANTLING & SHIFTING",
        taskName: "Dismantling activities",
        plan: {
          "60": {
            duration: "2",
            startDay: "2",
          },
          "75": {
            duration: "4",
            startDay: "2",
          },
          "90": {
            duration: "5",
            startDay: "2",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T08:42:01.501Z",
        updatedAt: "2024-05-25T08:47:44.228Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "2",
        duration: "2",
      },
      "75": {
        startDay: "2",
        duration: "4",
      },
      "90": {
        startDay: "2",
        duration: "5",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "INTERIOR WORKS",
    tasks: [
      {
        id: "fc96a187-8f4e-470c-a55b-cbc7802393f3",
        activityName: "INTERIOR WORKS",
        taskName: "Partition marking & approval",
        plan: {
          "60": {
            duration: "1",
            startDay: "4",
          },
          "75": {
            duration: "2",
            startDay: "6",
          },
          "90": {
            duration: "2",
            startDay: "7",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:31:47.213Z",
        updatedAt: "2024-05-01T06:03:46.275Z",
        deletedAt: null,
      },
      {
        id: "0516874e-9764-4851-8691-c84e6839106e",
        activityName: "INTERIOR WORKS",
        taskName: "Partition framing",
        plan: {
          "60": {
            duration: "5",
            startDay: "5",
          },
          "75": {
            duration: "8",
            startDay: "8",
          },
          "90": {
            duration: "10",
            startDay: "9",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:37:09.409Z",
        updatedAt: "2024-05-24T12:05:17.559Z",
        deletedAt: null,
      },
      {
        id: "1d5f06e4-050e-4800-998b-efda202b2e61",
        activityName: "INTERIOR WORKS",
        taskName: "Single side skin work",
        plan: {
          "60": {
            duration: "6",
            startDay: "7",
          },
          "75": {
            duration: "8",
            startDay: "13",
          },
          "90": {
            duration: "8",
            startDay: "15",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:47:29.343Z",
        updatedAt: "2024-05-24T12:06:03.650Z",
        deletedAt: null,
      },
      {
        id: "6d59e012-9887-48c6-8638-7dee2b7f3df3",
        activityName: "INTERIOR WORKS",
        taskName: "Double side skin work",
        plan: {
          "60": {
            duration: "5",
            startDay: "13",
          },
          "75": {
            duration: "8",
            startDay: "21",
          },
          "90": {
            duration: "10",
            startDay: "24",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:47:53.042Z",
        updatedAt: "2024-05-24T12:20:52.284Z",
        deletedAt: null,
      },
      {
        id: "a987505f-b56f-4281-9925-80d94ae8c243",
        activityName: "INTERIOR WORKS",
        taskName: "Gypsum ceiling framing",
        plan: {
          "60": {
            duration: "5",
            startDay: "28",
          },
          "75": {
            duration: "5",
            startDay: "39",
          },
          "90": {
            duration: "7",
            startDay: "71",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:49:33.419Z",
        updatedAt: "2024-05-24T12:21:39.453Z",
        deletedAt: null,
      },
      {
        id: "63f8a5e6-3f20-4017-93be-994f98a9ba44",
        activityName: "INTERIOR WORKS",
        taskName: "Ceiling board fixing",
        plan: {
          "60": {
            duration: "7",
            startDay: "30",
          },
          "75": {
            duration: "14",
            startDay: "41",
          },
          "90": {
            duration: "4",
            startDay: "78",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:49:52.925Z",
        updatedAt: "2024-05-24T12:38:41.065Z",
        deletedAt: null,
      },
      {
        id: "d76e9cea-0dbe-4619-ad1d-24e0cff237b1",
        activityName: "INTERIOR WORKS",
        taskName: "Surface preparation of false ceiling",
        plan: {
          "60": {
            duration: "4",
            startDay: "37",
          },
          "75": {
            duration: "4",
            startDay: "55",
          },
          "90": {
            duration: "5",
            startDay: "77",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:50:15.179Z",
        updatedAt: "2024-05-24T12:40:01.097Z",
        deletedAt: null,
      },
      {
        id: "1067c654-d7aa-4cb5-bae1-541499553e30",
        activityName: "INTERIOR WORKS",
        taskName: "Surface preparation of walls and partitions",
        plan: {
          "60": {
            duration: "10",
            startDay: "39",
          },
          "75": {
            duration: "11",
            startDay: "54",
          },
          "90": {
            duration: "15",
            startDay: "29",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:50:31.930Z",
        updatedAt: "2024-05-24T12:40:23.611Z",
        deletedAt: null,
      },
      {
        id: "83e34d60-c9ca-4b1b-a248-fe99f6aedb2b",
        activityName: "INTERIOR WORKS",
        taskName: "First coat of paint",
        plan: {
          "60": {
            duration: "5",
            startDay: "37",
          },
          "75": {
            duration: "5",
            startDay: "55",
          },
          "90": {
            duration: "10",
            startDay: "43",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:51:06.667Z",
        updatedAt: "2024-05-24T12:40:59.918Z",
        deletedAt: null,
      },
      {
        id: "0b3b628a-0db1-42a0-8bb8-1e8fef74f017",
        activityName: "INTERIOR WORKS",
        taskName: "Final coat of paint",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "8",
            startDay: "70",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-24T12:41:06.255Z",
        updatedAt: "2024-05-24T12:41:15.804Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "",
        duration: "7",
      },
      "75": {
        startDay: "",
        duration: "8",
      },
      "90": {
        startDay: "15",
        duration: "8",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "CIVIL WORKS",
    tasks: [
      {
        id: "a547cbb2-5233-457d-9dff-c87a5e04896d",
        activityName: "CIVIL WORKS",
        taskName: "Blockworks",
        plan: {
          "60": {
            duration: "10",
            startDay: "4",
          },
          "75": {
            duration: "10",
            startDay: "6",
          },
          "90": {
            duration: "10",
            startDay: "9",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:53:52.645Z",
        updatedAt: "2024-05-24T12:42:27.683Z",
        deletedAt: null,
      },
      {
        id: "9061e77b-cc81-41c0-8846-1aa22cd5594a",
        activityName: "CIVIL WORKS",
        taskName: "Waterproofing works",
        plan: {
          "60": {
            duration: "5",
            startDay: "14",
          },
          "75": {
            duration: "5",
            startDay: "16",
          },
          "90": {
            duration: "10",
            startDay: "16",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:54:13.912Z",
        updatedAt: "2024-05-24T12:42:47.074Z",
        deletedAt: null,
      },
      {
        id: "fe978600-fafa-4473-8618-0fc46e7e1f65",
        activityName: "CIVIL WORKS",
        taskName: "Floor tile installation-Toilet",
        plan: {
          "60": {
            duration: "7",
            startDay: "29",
          },
          "75": {
            duration: "10",
            startDay: "31",
          },
          "90": {
            duration: "6",
            startDay: "26",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:54:39.019Z",
        updatedAt: "2024-05-24T12:43:04.548Z",
        deletedAt: null,
      },
      {
        id: "6f7c7a4f-8e84-43fc-abce-acb2635265df",
        activityName: "CIVIL WORKS",
        taskName: "Wall tile installation-Toilet",
        plan: {
          "60": {
            duration: "7",
            startDay: "36",
          },
          "75": {
            duration: "10",
            startDay: "41",
          },
          "90": {
            duration: "10",
            startDay: "32",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:54:58.985Z",
        updatedAt: "2024-05-24T12:43:22.072Z",
        deletedAt: null,
      },
      {
        id: "bf9bc104-e5c2-4e2f-96d3-ba2f547dbb94",
        activityName: "CIVIL WORKS",
        taskName: "Floor tile installation-Pantry",
        plan: {
          "60": {
            duration: "4",
            startDay: "38",
          },
          "75": {
            duration: "8",
            startDay: "46",
          },
          "90": {
            duration: "3",
            startDay: "32",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:55:20.717Z",
        updatedAt: "2024-05-24T12:43:47.763Z",
        deletedAt: null,
      },
      {
        id: "69ddcd81-86a1-4de3-9a61-7ef8c48e684c",
        activityName: "CIVIL WORKS",
        taskName: "Wall tile installation-Pantry",
        plan: {
          "60": {
            duration: "5",
            startDay: "43",
          },
          "75": {
            duration: "8",
            startDay: "54",
          },
          "90": {
            duration: "7",
            startDay: "35",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:55:45.180Z",
        updatedAt: "2024-05-24T12:44:00.171Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "14",
        duration: "7",
      },
      "75": {
        startDay: "16",
        duration: "8",
      },
      "90": {
        startDay: "16",
        duration: "7",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "PLUMBING WORKS",
    tasks: [
      {
        id: "1c493e98-6b4e-4713-b992-24c6b9a36831",
        activityName: "PLUMBING WORKS",
        taskName: "Plumbing line laying",
        plan: {
          "60": {
            duration: "8",
            startDay: "33",
          },
          "75": {
            duration: "10",
            startDay: "41",
          },
          "90": {
            duration: "6",
            startDay: "10",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:57:32.220Z",
        updatedAt: "2024-05-24T12:45:17.029Z",
        deletedAt: null,
      },
      {
        id: "9e655c8d-eb18-4d53-9806-64bcbcb117ed",
        activityName: "PLUMBING WORKS",
        taskName: "Testing & commissionong",
        plan: {
          "60": {
            duration: "2",
            startDay: "41",
          },
          "75": {
            duration: "2",
            startDay: "51",
          },
          "90": {
            duration: "5",
            startDay: "16",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:57:51.666Z",
        updatedAt: "2024-05-24T12:45:31.521Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "33",
        duration: "8",
      },
      "75": {
        startDay: "41",
        duration: "2",
      },
      "90": {
        startDay: "10",
        duration: "6",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "ELECTRICAL WORKS",
    tasks: [
      {
        id: "4104f1f6-4b07-4581-bfd5-227d868ef6bd",
        activityName: "ELECTRICAL WORKS",
        taskName: "Cable trays & Raceways installation",
        plan: {
          "60": {
            duration: "8",
            startDay: "9",
          },
          "75": {
            duration: "8",
            startDay: "15",
          },
          "90": {
            duration: "16",
            startDay: "10",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T09:59:26.887Z",
        updatedAt: "2024-05-24T12:49:46.208Z",
        deletedAt: null,
      },
      {
        id: "330af83b-15d9-4298-b93a-e2e9314bb316",
        activityName: "ELECTRICAL WORKS",
        taskName: "Electrical Conduiting in Partitions",
        plan: {
          "60": {
            duration: "6",
            startDay: "11",
          },
          "75": {
            duration: "8",
            startDay: "17",
          },
          "90": {
            duration: "10",
            startDay: "19",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:00:06.621Z",
        updatedAt: "2024-05-24T12:50:11.509Z",
        deletedAt: null,
      },
      {
        id: "51c3f679-4999-4e2f-a1de-4d7a69c7549c",
        activityName: "ELECTRICAL WORKS",
        taskName: "Electrical Conduiting in Ceiling and Flooring",
        plan: {
          "60": {
            duration: "11",
            startDay: "24",
          },
          "75": {
            duration: "13",
            startDay: "30",
          },
          "90": {
            duration: "16",
            startDay: "10",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:00:28.997Z",
        updatedAt: "2024-05-24T12:50:27.345Z",
        deletedAt: null,
      },
      {
        id: "95c53e74-0ac0-40de-adb5-6164dd69c579",
        activityName: "ELECTRICAL WORKS",
        taskName: "Lighting and Power wiring/ Cabling",
        plan: {
          "60": {
            duration: "6",
            startDay: "42",
          },
          "75": {
            duration: "10",
            startDay: "60",
          },
          "90": {
            duration: "20",
            startDay: "25",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:00:51.904Z",
        updatedAt: "2024-05-24T12:50:44.941Z",
        deletedAt: null,
      },
      {
        id: "8efc273a-ddb2-4d50-a2c6-ab78adc6e63e",
        activityName: "ELECTRICAL WORKS",
        taskName: "Light Fixture installation",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "8",
            startDay: "79",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-24T12:50:51.526Z",
        updatedAt: "2024-05-24T12:51:01.238Z",
        deletedAt: null,
      },
      {
        id: "763689a7-3e98-4490-8259-01f6a2decc25",
        activityName: "ELECTRICAL WORKS",
        taskName: "Switches and Sockets installation",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "10",
            startDay: "64",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-24T12:51:13.779Z",
        updatedAt: "2024-05-24T12:51:20.088Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "",
        duration: "8",
      },
      "75": {
        startDay: "",
        duration: "8",
      },
      "90": {
        startDay: "10",
        duration: "8",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "HVAC WORKS",
    tasks: [
      {
        id: "eeea6b2d-5b58-4b1d-9f7a-08a9d679f1c8",
        activityName: "HVAC WORKS",
        taskName: "HVAC Low side works",
        plan: {
          "60": {
            duration: "25",
            startDay: "20",
          },
          "75": {
            duration: "30",
            startDay: "26",
          },
          "90": {
            duration: "35",
            startDay: "10",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:01:40.370Z",
        updatedAt: "2024-05-24T12:51:46.172Z",
        deletedAt: null,
      },
      {
        id: "96bcc98f-26b3-4e81-a7ce-ffc7c0bc280c",
        activityName: "HVAC WORKS",
        taskName: "HVAC Hi side work",
        plan: {
          "60": {
            duration: "5",
            startDay: "50",
          },
          "75": {
            duration: "10",
            startDay: "61",
          },
          "90": {
            duration: "25",
            startDay: "45",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:02:02.673Z",
        updatedAt: "2024-05-24T12:51:58.446Z",
        deletedAt: null,
      },
      {
        id: "777e939b-cf2f-4eb8-8406-0e46e002d91f",
        activityName: "HVAC WORKS",
        taskName: "Testing & commissionong",
        plan: {
          "60": {
            duration: "3",
            startDay: "55",
          },
          "75": {
            duration: "4",
            startDay: "71",
          },
          "90": {
            duration: "10",
            startDay: "74",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:02:45.728Z",
        updatedAt: "2024-05-24T12:52:08.066Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "20",
        duration: "5",
      },
      "75": {
        startDay: "26",
        duration: "4",
      },
      "90": {
        startDay: "10",
        duration: "35",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "LV WORKS",
    tasks: [
      {
        id: "94905e08-e49e-4a0d-8fe5-be3b701f1670",
        activityName: "LV WORKS",
        taskName: "Conduiting for LV Work in Ceiling and Flooring",
        plan: {
          "60": {
            duration: "10",
            startDay: "17",
          },
          "75": {
            duration: "15",
            startDay: "27",
          },
          "90": {
            duration: "16",
            startDay: "10",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:03:18.606Z",
        updatedAt: "2024-05-24T12:52:57.755Z",
        deletedAt: null,
      },
      {
        id: "afc1fb1b-31cb-4051-8445-46b92946dd00",
        activityName: "LV WORKS",
        taskName: "Data cabling",
        plan: {
          "60": {
            duration: "11",
            startDay: "27",
          },
          "75": {
            duration: "11",
            startDay: "33",
          },
          "90": {
            duration: "16",
            startDay: "40",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:03:37.175Z",
        updatedAt: "2024-05-24T12:53:35.839Z",
        deletedAt: null,
      },
      {
        id: "33ac91f9-3852-4468-909d-ccf124d271e6",
        activityName: "LV WORKS",
        taskName: "CCTV & access cabling",
        plan: {
          "60": {
            duration: "10",
            startDay: "47",
          },
          "75": {
            duration: "12",
            startDay: "49",
          },
          "90": {
            duration: "16",
            startDay: "10",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:03:56.657Z",
        updatedAt: "2024-05-24T12:55:36.594Z",
        deletedAt: null,
      },
      {
        id: "c04d99e4-7e6f-4ff9-a8a2-289e556d3aad",
        activityName: "LV WORKS",
        taskName: "Smoke detector Installation",
        plan: {
          "60": {
            duration: "4",
            startDay: "42",
          },
          "75": {
            duration: "4",
            startDay: "57",
          },
          "90": {
            duration: "8",
            startDay: "66",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:04:17.530Z",
        updatedAt: "2024-05-24T12:56:06.201Z",
        deletedAt: null,
      },
      {
        id: "1bb1b0ed-5ccf-4f57-9039-7a4806ee03bb",
        activityName: "LV WORKS",
        taskName: "CCTV & access installation",
        plan: {
          "60": {
            duration: "5",
            startDay: "42",
          },
          "75": {
            duration: "5",
            startDay: "57",
          },
          "90": {
            duration: "8",
            startDay: "66",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:04:37.039Z",
        updatedAt: "2024-05-24T12:56:27.440Z",
        deletedAt: null,
      },
      {
        id: "658975cc-dcfd-43dd-9a3c-8a12e955c682",
        activityName: "LV WORKS",
        taskName: "Smoke detector cabling",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "16",
            startDay: "25",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-24T12:53:09.682Z",
        updatedAt: "2024-05-24T12:53:17.698Z",
        deletedAt: null,
      },
      {
        id: "19904ef1-5ce1-4e75-a765-e8983d1451ba",
        activityName: "LV WORKS",
        taskName: "Data and Voice Ports termination",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "10",
            startDay: "53",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-25T08:40:30.192Z",
        updatedAt: "2024-05-25T08:40:42.753Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "",
        duration: "5",
      },
      "75": {
        startDay: "",
        duration: "5",
      },
      "90": {
        startDay: "10",
        duration: "8",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
    tasks: [
      {
        id: "ebe29819-2755-4b19-9015-7bff2dc7b40f",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Laminate paneling",
        plan: {
          "60": {
            duration: "6",
            startDay: "35",
          },
          "75": {
            duration: "10",
            startDay: "41",
          },
          "90": {
            duration: "36",
            startDay: "26",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:05:13.183Z",
        updatedAt: "2024-05-24T13:00:16.054Z",
        deletedAt: null,
      },
      {
        id: "d4837f18-78b4-4bab-874a-ec7fbd26e6e7",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Glazing Partition & Doors",
        plan: {
          "60": {
            duration: "6",
            startDay: "42",
          },
          "75": {
            duration: "10",
            startDay: "60",
          },
          "90": {
            duration: "10",
            startDay: "62",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:05:34.369Z",
        updatedAt: "2024-05-24T13:00:32.845Z",
        deletedAt: null,
      },
      {
        id: "102fb339-6cd2-4ef5-962b-4915e38a530c",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Lacqured glass fixing",
        plan: {
          "60": {
            duration: "3",
            startDay: "41",
          },
          "75": {
            duration: "3",
            startDay: "61",
          },
          "90": {
            duration: "8",
            startDay: "76",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:05:53.487Z",
        updatedAt: "2024-05-24T13:00:46.079Z",
        deletedAt: null,
      },
      {
        id: "3a78736c-2714-4497-886f-1fa0e3899eeb",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Wooden door fixing",
        plan: {
          "60": {
            duration: "4",
            startDay: "48",
          },
          "75": {
            duration: "8",
            startDay: "70",
          },
          "90": {
            duration: "5",
            startDay: "62",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:06:17.323Z",
        updatedAt: "2024-05-24T13:01:37.686Z",
        deletedAt: null,
      },
      {
        id: "b9c14a50-e426-443c-bee4-132fe6918ac3",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Carpet Flooring",
        plan: {
          "60": {
            duration: "3",
            startDay: "47",
          },
          "75": {
            duration: "3",
            startDay: "65",
          },
          "90": {
            duration: "8",
            startDay: "53",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:06:59.860Z",
        updatedAt: "2024-05-25T08:45:05.005Z",
        deletedAt: null,
      },
      {
        id: "3239167f-6f36-41e2-baae-7d8eff31a3e7",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Skirting Installation",
        plan: {
          "60": {
            duration: "4",
            startDay: "50",
          },
          "75": {
            duration: "4",
            startDay: "68",
          },
          "90": {
            duration: "9",
            startDay: "55",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:07:18.046Z",
        updatedAt: "2024-05-24T13:02:12.824Z",
        deletedAt: null,
      },
      {
        id: "d95123d5-f2a9-461e-8c80-b3b0de0f0c44",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Modular furniture installation",
        plan: {
          "60": {
            duration: "6",
            startDay: "49",
          },
          "75": {
            duration: "8",
            startDay: "67",
          },
          "90": {
            duration: "10",
            startDay: "55",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:07:36.881Z",
        updatedAt: "2024-05-24T13:02:39.048Z",
        deletedAt: null,
      },
      {
        id: "f1334a15-457c-4d6f-88b1-c5eb47d3677e",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Loose furinture installation",
        plan: {
          "60": {
            duration: "3",
            startDay: "58",
          },
          "75": {
            duration: "2",
            startDay: "73",
          },
          "90": {
            duration: "9",
            startDay: "77",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:07:57.105Z",
        updatedAt: "2024-05-24T13:02:53.756Z",
        deletedAt: null,
      },
      {
        id: "62a36a49-af67-4825-bc97-b268f637ec44",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Graphic & frost film installation",
        plan: {
          "60": {
            duration: "2",
            startDay: "58",
          },
          "75": {
            duration: "2",
            startDay: "73",
          },
          "90": {
            duration: "9",
            startDay: "72",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:08:15.499Z",
        updatedAt: "2024-05-24T13:03:04.856Z",
        deletedAt: null,
      },
      {
        id: "288463bc-3bff-41ab-9552-24b6cad4b84a",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Deep Cleaning",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "7",
            startDay: "82",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-24T13:01:11.405Z",
        updatedAt: "2024-05-25T09:12:13.261Z",
        deletedAt: null,
      },
      {
        id: "781f56a0-1d5d-49e4-9617-0191d346fc95",
        activityName: "FINAL FINISHING ACTIVITIES (PHASE - I & II)",
        taskName: "Wooden frames fixing",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "5",
            startDay: "43",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-25T08:43:36.731Z",
        updatedAt: "2024-05-25T08:43:49.950Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "",
        duration: "6",
      },
      "75": {
        startDay: "",
        duration: "8",
      },
      "90": {
        startDay: "26",
        duration: "9",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "HANDOVER PHASE I & II",
    tasks: [
      {
        id: "a4193c40-f935-4ca6-989b-b39f6448ff08",
        activityName: "HANDOVER PHASE I & II",
        taskName: "Handover",
        plan: {
          "60": {
            duration: "1",
            startDay: "60",
          },
          "75": {
            duration: "1",
            startDay: "75",
          },
          "90": {
            duration: "2",
            startDay: "89",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-04-15T10:17:40.571Z",
        updatedAt: "2024-05-24T13:03:48.728Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "60",
        duration: "1",
      },
      "75": {
        startDay: "75",
        duration: "1",
      },
      "90": {
        startDay: "89",
        duration: "2",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "SANITARY FIXTURE INSTALLATION",
    tasks: [
      {
        id: "e064fe75-d6ee-4923-916d-11f333cdc52e",
        activityName: "SANITARY FIXTURE INSTALLATION",
        taskName: "Sanitary fixture installation",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "5",
            startDay: "81",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-25T08:32:27.422Z",
        updatedAt: "2024-05-25T08:34:22.563Z",
        deletedAt: null,
      },
      {
        id: "265e2ea7-67bb-4f2b-8562-bfb115bbf29a",
        activityName: "SANITARY FIXTURE INSTALLATION",
        taskName: "Testing & commissioning",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "5",
            startDay: "86",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdBy: {
          id: "9580ccd8-0cef-444d-8f0b-a9d8b6c36312",
          name: "Kaundinya",
        },
        createdAt: "2024-05-25T08:32:43.435Z",
        updatedAt: "2024-05-25T08:34:22.563Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "",
        duration: 0,
      },
      "75": {
        startDay: "",
        duration: 0,
      },
      "90": {
        startDay: "81",
        duration: "5",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "DESIGN AND DEVELOPMENT ",
    tasks: [
      {
        id: "31854930-69b1-4749-b949-bfca94a60dff",
        activityName: "DESIGN AND DEVELOPMENT ",
        taskName: "3D views Approved/Detailed drawings  ",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "",
            startDay: "",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {},
        createdBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdAt: "2024-08-02T05:12:10.442Z",
        updatedAt: "2024-08-02T05:12:10.442Z",
        deletedAt: null,
      },
      {
        id: "62475feb-378c-452e-9268-a316bf8c42a1",
        activityName: "DESIGN AND DEVELOPMENT ",
        taskName: "Final BOQ with detailed scope of work",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "",
            startDay: "",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdAt: "2024-08-02T05:12:24.057Z",
        updatedAt: "2024-08-02T05:13:11.023Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "",
        duration: 0,
      },
      "75": {
        startDay: "",
        duration: 0,
      },
      "90": {
        startDay: "",
        duration: 0,
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "Design Delivery",
    tasks: [
      {
        id: "14b99fd4-7714-4244-af7c-e3e49acb31bc",
        activityName: "Design Delivery",
        taskName: "3D views Approved/Detailed drawings  ",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "",
            startDay: "",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {},
        createdBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdAt: "2024-08-02T05:15:19.568Z",
        updatedAt: "2024-08-02T05:15:19.568Z",
        deletedAt: null,
      },
      {
        id: "835e03db-8905-4c8d-bc63-a197719a776e",
        activityName: "Design Delivery",
        taskName: "BOQ with final scope of work",
        plan: {
          "60": {
            duration: "",
            startDay: "",
          },
          "75": {
            duration: "",
            startDay: "",
          },
          "90": {
            duration: "",
            startDay: "",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {},
        createdBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdAt: "2024-08-02T05:15:35.973Z",
        updatedAt: "2024-08-02T05:15:35.973Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "",
        duration: 0,
      },
      "75": {
        startDay: "",
        duration: 0,
      },
      "90": {
        startDay: "",
        duration: 0,
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
  {
    activityName: "Procurement and Internal Planning",
    tasks: [
      {
        id: "a568f0ce-2ab4-420d-a303-823d84819712",
        activityName: "Procurement and Internal Planning",
        taskName: "GC Vendor Onboarding",
        plan: {
          "60": {
            duration: "4",
            startDay: "1",
          },
          "75": {
            duration: "5",
            startDay: "1",
          },
          "90": {
            duration: "6",
            startDay: "1",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdAt: "2024-08-02T05:20:21.778Z",
        updatedAt: "2024-08-02T05:21:40.626Z",
        deletedAt: null,
      },
      {
        id: "b955c08c-bbe3-4b51-93d0-2062f1d60e31",
        activityName: "Procurement and Internal Planning",
        taskName: "Procurement of long lead items",
        plan: {
          "60": {
            duration: "15",
            startDay: "1",
          },
          "75": {
            duration: "20",
            startDay: "1",
          },
          "90": {
            duration: "25",
            startDay: "1",
          },
          "120": {
            duration: "",
            startDay: "",
          },
        },
        updatedBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdBy: {
          id: "a3e9737e-28d3-429a-8ef4-6c346473ef93",
          name: "Hemant Malik",
        },
        createdAt: "2024-08-02T05:20:45.739Z",
        updatedAt: "2024-08-02T05:21:22.540Z",
        deletedAt: null,
      },
    ],
    plan: {
      "60": {
        startDay: "1",
        duration: "4",
      },
      "75": {
        startDay: "1",
        duration: "5",
      },
      "90": {
        startDay: "1",
        duration: "6",
      },
      "120": {
        startDay: "",
        duration: 0,
      },
    },
  },
];

export const ProjectSchedulingConstant = {
  taskStatus: {
    NOT_STARTED: "NOT_STARTED",
    NOT_COMPLETED: "NOT_COMPLETED",
    HALF_NOT_COMPLETED: "HALF_NOT_COMPLETED",
    HALF_COMPLETED: "HALF_COMPLETED",
    COMPLETED: "COMPLETED",
    STARTED: "STARTED",
  },
};

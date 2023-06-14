export const interchainAccountRouterAbi = [
  {
    inputs: [
      { internalType: "uint32", name: "_localDomain", type: "uint32" },
      { internalType: "address", name: "_proxy", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint8", name: "version", type: "uint8" },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint32", name: "origin", type: "uint32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "owner",
        type: "bytes32",
      },
      { indexed: false, internalType: "address", name: "ism", type: "address" },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "InterchainAccountCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "interchainGasPaymaster",
        type: "address",
      },
    ],
    name: "InterchainGasPaymasterSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "module",
        type: "address",
      },
    ],
    name: "InterchainSecurityModuleSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "mailbox",
        type: "address",
      },
    ],
    name: "MailboxSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "destination",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "router",
        type: "bytes32",
      },
      { indexed: false, internalType: "bytes32", name: "ism", type: "bytes32" },
    ],
    name: "RemoteCallDispatched",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
    ],
    name: "DispatchId",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint32", name: "domain", type: "uint32" },
      { indexed: false, internalType: "bytes32", name: "ism", type: "bytes32" },
    ],
    name: "RemoteIsmEnrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint32", name: "domain", type: "uint32" },
      {
        indexed: false,
        internalType: "bytes32",
        name: "router",
        type: "bytes32",
      },
    ],
    name: "RemoteRouterEnrolled",
    type: "event",
  },
  // {
  //   inputs: [
  //     { internalType: "uint32", name: "_destination", type: "uint32" },
  //     { internalType: "address", name: "_to", type: "address" },
  //     { internalType: "uint256", name: "_value", type: "uint256" },
  //     { internalType: "bytes", name: "_data", type: "bytes" },
  //   ],
  //   name: "callRemote",
  //   outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
  //   stateMutability: "nonpayable",
  //   type: "function",
  // },
  {
    inputs: [
      { internalType: "uint32", name: "_destination", type: "uint32" },
      {
        components: [
          { internalType: "bytes32", name: "to", type: "bytes32" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct CallLib.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callRemote",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_destination", type: "uint32" },
      { internalType: "bytes32", name: "_router", type: "bytes32" },
      { internalType: "bytes32", name: "_ism", type: "bytes32" },
      {
        components: [
          { internalType: "bytes32", name: "to", type: "bytes32" },
          { internalType: "uint256", name: "value", type: "uint256" },
          { internalType: "bytes", name: "data", type: "bytes" },
        ],
        internalType: "struct CallLib.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callRemoteWithOverrides",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "domains",
    outputs: [{ internalType: "uint32[]", name: "", type: "uint32[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_destination", type: "uint32" },
      { internalType: "bytes32", name: "_router", type: "bytes32" },
    ],
    name: "enrollRemoteRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_destination", type: "uint32" },
      { internalType: "bytes32", name: "_router", type: "bytes32" },
      { internalType: "bytes32", name: "_ism", type: "bytes32" },
    ],
    name: "enrollRemoteRouterAndIsm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32[]", name: "_destinations", type: "uint32[]" },
      { internalType: "bytes32[]", name: "_routers", type: "bytes32[]" },
    ],
    name: "enrollRemoteRouters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_origin", type: "uint32" },
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "address", name: "_router", type: "address" },
      { internalType: "address", name: "_ism", type: "address" },
    ],
    name: "getDeployedInterchainAccount",
    outputs: [
      { internalType: "contract OwnableMulticall", name: "", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_origin", type: "uint32" },
      { internalType: "bytes32", name: "_owner", type: "bytes32" },
      { internalType: "bytes32", name: "_router", type: "bytes32" },
      { internalType: "address", name: "_ism", type: "address" },
    ],
    name: "getDeployedInterchainAccount",
    outputs: [
      { internalType: "contract OwnableMulticall", name: "", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_origin", type: "uint32" },
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "address", name: "_router", type: "address" },
      { internalType: "address", name: "_ism", type: "address" },
    ],
    name: "getLocalInterchainAccount",
    outputs: [
      { internalType: "contract OwnableMulticall", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_origin", type: "uint32" },
      { internalType: "bytes32", name: "_owner", type: "bytes32" },
      { internalType: "bytes32", name: "_router", type: "bytes32" },
      { internalType: "address", name: "_ism", type: "address" },
    ],
    name: "getLocalInterchainAccount",
    outputs: [
      { internalType: "contract OwnableMulticall", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_destination", type: "uint32" },
      { internalType: "address", name: "_owner", type: "address" },
    ],
    name: "getRemoteInterchainAccount",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_owner", type: "address" },
      { internalType: "address", name: "_router", type: "address" },
      { internalType: "address", name: "_ism", type: "address" },
    ],
    name: "getRemoteInterchainAccount",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint32", name: "_origin", type: "uint32" },
      { internalType: "bytes32", name: "_sender", type: "bytes32" },
      { internalType: "bytes", name: "_message", type: "bytes" },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "_mailbox", type: "address" },
      {
        internalType: "address",
        name: "_interchainGasPaymaster",
        type: "address",
      },
      {
        internalType: "address",
        name: "_interchainSecurityModule",
        type: "address",
      },
      { internalType: "address", name: "_owner", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "interchainGasPaymaster",
    outputs: [
      {
        internalType: "contract IInterchainGasPaymaster",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interchainSecurityModule",
    outputs: [
      {
        internalType: "contract IInterchainSecurityModule",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    name: "isms",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mailbox",
    outputs: [{ internalType: "contract IMailbox", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    name: "routers",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_interchainGasPaymaster",
        type: "address",
      },
    ],
    name: "setInterchainGasPaymaster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_module", type: "address" }],
    name: "setInterchainSecurityModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_mailbox", type: "address" }],
    name: "setMailbox",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

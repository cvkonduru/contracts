/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC1155 } from "../ERC1155";

export class ERC1155__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(uri_: string, overrides?: Overrides): Promise<ERC1155> {
    return super.deploy(uri_, overrides || {}) as Promise<ERC1155>;
  }
  getDeployTransaction(
    uri_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(uri_, overrides || {});
  }
  attach(address: string): ERC1155 {
    return super.attach(address) as ERC1155;
  }
  connect(signer: Signer): ERC1155__factory {
    return super.connect(signer) as ERC1155__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155 {
    return new Contract(address, _abi, signerOrProvider) as ERC1155;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "uri_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200190238038062001902833981810160405260208110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052506200010191506301ffc9a760e01b905062000137565b6200010c81620001bc565b6200011e636cdb3d1360e11b62000137565b620001306303a24d0760e21b62000137565b5062000281565b6001600160e01b0319808216141562000197576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b8051620001d1906003906020840190620001d5565b5050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200020d576000855562000258565b82601f106200022857805160ff191683800117855562000258565b8280016001018555821562000258579182015b82811115620002585782518255916020019190600101906200023b565b50620002669291506200026a565b5090565b5b808211156200026657600081556001016200026b565b61167180620002916000396000f3fe608060405234801561001057600080fd5b50600436106100875760003560e01c80634e1273f41161005b5780634e1273f41461035a578063a22cb465146104cd578063e985e9c5146104fb578063f242432a1461052957610087565b8062fdd58e1461008c57806301ffc9a7146100ca5780630e89341c146101055780632eb2c2d614610197575b600080fd5b6100b8600480360360408110156100a257600080fd5b506001600160a01b0381351690602001356105f2565b60408051918252519081900360200190f35b6100f1600480360360208110156100e057600080fd5b50356001600160e01b031916610661565b604080519115158252519081900360200190f35b6101226004803603602081101561011b57600080fd5b5035610680565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561015c578181015183820152602001610144565b50505050905090810190601f1680156101895780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610358600480360360a08110156101ad57600080fd5b6001600160a01b038235811692602081013590911691810190606081016040820135600160201b8111156101e057600080fd5b8201836020820111156101f257600080fd5b803590602001918460208302840111600160201b8311171561021357600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561026257600080fd5b82018360208201111561027457600080fd5b803590602001918460208302840111600160201b8311171561029557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b8111156102e457600080fd5b8201836020820111156102f657600080fd5b803590602001918460018302840111600160201b8311171561031757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610718945050505050565b005b61047d6004803603604081101561037057600080fd5b810190602081018135600160201b81111561038a57600080fd5b82018360208201111561039c57600080fd5b803590602001918460208302840111600160201b831117156103bd57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050600160201b81111561040c57600080fd5b82018360208201111561041e57600080fd5b803590602001918460208302840111600160201b8311171561043f57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610a16945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156104b95781810151838201526020016104a1565b505050509050019250505060405180910390f35b610358600480360360408110156104e357600080fd5b506001600160a01b0381351690602001351515610b94565b6100f16004803603604081101561051157600080fd5b506001600160a01b0381358116916020013516610c83565b610358600480360360a081101561053f57600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a081016080820135600160201b81111561057e57600080fd5b82018360208201111561059057600080fd5b803590602001918460018302840111600160201b831117156105b157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610cb1945050505050565b60006001600160a01b0383166106395760405162461bcd60e51b815260040180806020018281038252602b8152602001806114bc602b913960400191505060405180910390fd5b5060009081526001602090815260408083206001600160a01b03949094168352929052205490565b6001600160e01b03191660009081526020819052604090205460ff1690565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561070c5780601f106106e15761010080835404028352916020019161070c565b820191906000526020600020905b8154815290600101906020018083116106ef57829003601f168201915b50505050509050919050565b81518351146107585760405162461bcd60e51b81526004018080602001828103825260288152602001806116146028913960400191505060405180910390fd5b6001600160a01b03841661079d5760405162461bcd60e51b81526004018080602001828103825260258152602001806115416025913960400191505060405180910390fd5b6107a5610e7c565b6001600160a01b0316856001600160a01b031614806107d057506107d0856107cb610e7c565b610c83565b61080b5760405162461bcd60e51b81526004018080602001828103825260328152602001806115666032913960400191505060405180910390fd5b6000610815610e7c565b9050610825818787878787610a0e565b60005b845181101561092657600085828151811061083f57fe5b60200260200101519050600085838151811061085757fe5b602002602001015190506108c4816040518060600160405280602a8152602001611598602a91396001600086815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002054610e819092919063ffffffff16565b60008381526001602090815260408083206001600160a01b038e811685529252808320939093558a16815220546108fb9082610f18565b60009283526001602081815260408086206001600160a01b038d168752909152909320555001610828565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b838110156109ac578181015183820152602001610994565b50505050905001838103825284818151815260200191508051906020019060200280838360005b838110156109eb5781810151838201526020016109d3565b5050505090500194505050505060405180910390a4610a0e818787878787610f79565b505050505050565b60608151835114610a585760405162461bcd60e51b81526004018080602001828103825260298152602001806115eb6029913960400191505060405180910390fd5b6000835167ffffffffffffffff81118015610a7257600080fd5b50604051908082528060200260200182016040528015610a9c578160200160208202803683370190505b50905060005b8451811015610b8c5760006001600160a01b0316858281518110610ac257fe5b60200260200101516001600160a01b03161415610b105760405162461bcd60e51b81526004018080602001828103825260318152602001806114e76031913960400191505060405180910390fd5b60016000858381518110610b2057fe5b602002602001015181526020019081526020016000206000868381518110610b4457fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002054828281518110610b7957fe5b6020908102919091010152600101610aa2565b509392505050565b816001600160a01b0316610ba6610e7c565b6001600160a01b03161415610bec5760405162461bcd60e51b81526004018080602001828103825260298152602001806115c26029913960400191505060405180910390fd5b8060026000610bf9610e7c565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610c3d610e7c565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205460ff1690565b6001600160a01b038416610cf65760405162461bcd60e51b81526004018080602001828103825260258152602001806115416025913960400191505060405180910390fd5b610cfe610e7c565b6001600160a01b0316856001600160a01b03161480610d245750610d24856107cb610e7c565b610d5f5760405162461bcd60e51b81526004018080602001828103825260298152602001806115186029913960400191505060405180910390fd5b6000610d69610e7c565b9050610d89818787610d7a886111f8565b610d83886111f8565b87610a0e565b610dd0836040518060600160405280602a8152602001611598602a913960008781526001602090815260408083206001600160a01b038d1684529091529020549190610e81565b60008581526001602090815260408083206001600160a01b038b81168552925280832093909355871681522054610e079084610f18565b60008581526001602090815260408083206001600160a01b03808b168086529184529382902094909455805188815291820187905280518a8416938616927fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6292908290030190a4610a0e81878787878761123d565b335b90565b60008184841115610f105760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ed5578181015183820152602001610ebd565b50505050905090810190601f168015610f025780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610f72576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b610f8b846001600160a01b03166113ae565b15610a0e57836001600160a01b031663bc197c8187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b03168152602001806020018060200180602001848103845287818151815260200191508051906020019060200280838360005b83811015611019578181015183820152602001611001565b50505050905001848103835286818151815260200191508051906020019060200280838360005b83811015611058578181015183820152602001611040565b50505050905001848103825285818151815260200191508051906020019080838360005b8381101561109457818101518382015260200161107c565b50505050905090810190601f1680156110c15780820380516001836020036101000a031916815260200191505b5098505050505050505050602060405180830381600087803b1580156110e657600080fd5b505af192505050801561110b57506040513d602081101561110657600080fd5b505160015b6111a0576111176113ba565b806111225750611169565b60405162461bcd60e51b8152602060048201818152835160248401528351849391928392604401919085019080838360008315610ed5578181015183820152602001610ebd565b60405162461bcd60e51b81526004018080602001828103825260348152602001806114606034913960400191505060405180910390fd5b6001600160e01b0319811663bc197c8160e01b146111ef5760405162461bcd60e51b81526004018080602001828103825260288152602001806114946028913960400191505060405180910390fd5b50505050505050565b6040805160018082528183019092526060916000919060208083019080368337019050509050828160008151811061122c57fe5b602090810291909101015292915050565b61124f846001600160a01b03166113ae565b15610a0e57836001600160a01b031663f23a6e6187878686866040518663ffffffff1660e01b815260040180866001600160a01b03168152602001856001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156112de5781810151838201526020016112c6565b50505050905090810190601f16801561130b5780820380516001836020036101000a031916815260200191505b509650505050505050602060405180830381600087803b15801561132e57600080fd5b505af192505050801561135357506040513d602081101561134e57600080fd5b505160015b61135f576111176113ba565b6001600160e01b0319811663f23a6e6160e01b146111ef5760405162461bcd60e51b81526004018080602001828103825260288152602001806114946028913960400191505060405180910390fd5b3b151590565b60e01c90565b600060443d10156113ca57610e7e565b600481823e6308c379a06113de82516113b4565b146113e857610e7e565b6040513d600319016004823e80513d67ffffffffffffffff81602484011181841117156114185750505050610e7e565b828401925082519150808211156114325750505050610e7e565b503d8301602082840101111561144a57505050610e7e565b601f01601f191681016020016040529150509056fe455243313135353a207472616e7366657220746f206e6f6e2045524331313535526563656976657220696d706c656d656e746572455243313135353a204552433131353552656365697665722072656a656374656420746f6b656e73455243313135353a2062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2062617463682062616c616e636520717565727920666f7220746865207a65726f2061646472657373455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a207472616e7366657220746f20746865207a65726f2061646472657373455243313135353a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564455243313135353a20696e73756666696369656e742062616c616e636520666f72207472616e73666572455243313135353a2073657474696e6720617070726f76616c2073746174757320666f722073656c66455243313135353a206163636f756e747320616e6420696473206c656e677468206d69736d61746368455243313135353a2069647320616e6420616d6f756e7473206c656e677468206d69736d61746368a264697066735822122059b871f6680e6ae3edeb7970673be34bf14724cd938ed572aa7ca73ab70913e064736f6c63430007060033";

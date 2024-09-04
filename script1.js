const contractABI = [
    {
      "inputs": [],
      "name": "InvalidInitialization",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotInitializing",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Claimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "ClaimedRankRewards",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "version",
          "type": "uint64"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "level",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "LevelIncome",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "NewSwapCap",
          "type": "uint256"
        }
      ],
      "name": "NewSwapCap",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "PriceAfterUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "PriceBeforeUpdate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "PriceUpdateAttemptedTooSoon",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "enum Presale_StorageVault.Rank",
          "name": "rank",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reward",
          "type": "uint256"
        }
      ],
      "name": "RankAchieved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        }
      ],
      "name": "Registration",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "upline",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Skiped",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "SoldMemelord",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "recievedUSDT",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "liquidityTax",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "adminTax",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "marketingTax",
          "type": "uint256"
        }
      ],
      "name": "Sold",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "TokensBought",
          "type": "uint256"
        }
      ],
      "name": "TokensPurchased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "currentDay",
          "type": "uint256"
        }
      ],
      "name": "TokensReleased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "User",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amountReleased",
          "type": "uint256"
        }
      ],
      "name": "VestedTokensReleased",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "price",
          "type": "uint256"
        }
      ],
      "name": "erLog",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amt",
          "type": "uint256"
        }
      ],
      "name": "isSwap",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "ELEVATOR",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Elevate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MIN_BUY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "Stabilizer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "USDTPercentage",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "acceptedTokenAddresses",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "usdtAmount",
          "type": "uint256"
        }
      ],
      "name": "addLiquidity",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "aggregatorAddress",
          "type": "address"
        }
      ],
      "name": "addToAcceptedToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "bnbToUSDT",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_connection",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "buyForAnyUser",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_connection",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "usdtPercent",
          "type": "uint256"
        }
      ],
      "name": "buyForAnyUserPair",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "usdtPercent",
          "type": "uint256"
        }
      ],
      "name": "buyUsingPair",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "buyUsingSingleToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "canMaintainPrice",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "changeAdminWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newLiq",
          "type": "address"
        }
      ],
      "name": "changeLiquidityWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newMkt",
          "type": "address"
        }
      ],
      "name": "changeMarketingWallet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "claimRewards",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimVestedTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "floorPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "getLatestPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "level",
          "type": "uint256"
        }
      ],
      "name": "getLevelReferees",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPriceMEMELORD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "userAddress",
          "type": "address"
        }
      ],
      "name": "getPurchaseDetails",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "totalPurchased",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalClaimed",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "totalTokens",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "allotedTokens",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "boughtTokens",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "boughtUSDt",
              "type": "uint256"
            },
            {
              "components": [
                {
                  "internalType": "bool",
                  "name": "vestingComplete",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "boughtAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestedAmountInitial",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestedAmountRemaining",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lastClaimedDay",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "totalClaimedAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "buyTimestamp",
                  "type": "uint256"
                }
              ],
              "internalType": "struct Presale_StorageVault.VestingSchedule[]",
              "name": "vestingSchedules",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct Presale_StorageVault.UserPurchases",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_layer",
          "type": "uint256"
        }
      ],
      "name": "getTeamUsersLevelWise",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amountInUSD",
          "type": "uint256"
        }
      ],
      "name": "getTokenAmountForUSD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getTotalClaimedAndRemainingTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalClaimed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalRemaining",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "getTotalTeam",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "holdReferralRewardsTokens",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isAcceptedToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amountUsd",
          "type": "uint256"
        }
      ],
      "name": "memelordCountforUSD",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "removeToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_acceptedTokenAddresses",
          "type": "address[]"
        }
      ],
      "name": "setAcceptedTokenAddresses",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "per",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "setBonusForBuy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newCLAIM_MULTIPLIER",
          "type": "uint256"
        }
      ],
      "name": "setCLAIM_MULTIPLIER",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newElevator",
          "type": "address"
        }
      ],
      "name": "setElevator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newPercentage",
          "type": "uint256"
        }
      ],
      "name": "setFloorPercentage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newFloorPrice",
          "type": "uint256"
        }
      ],
      "name": "setFloorPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "initialPercent",
          "type": "uint256"
        }
      ],
      "name": "setInitialVestingPercentage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "NumberOfDays",
          "type": "uint256"
        }
      ],
      "name": "setInitialVestingTimePeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setMaintainPriceOnOff",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "nextPercent",
          "type": "uint256"
        }
      ],
      "name": "setNextVestingPercentage",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setPurchaseBonusOnOff",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "setSwapCap",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "usdPercent",
          "type": "uint256"
        }
      ],
      "name": "setUSDTPercentageinPair",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "NumberOfDays",
          "type": "uint256"
        }
      ],
      "name": "setVestingTimePeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "usdtAmount",
          "type": "uint256"
        }
      ],
      "name": "swaptoToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "swaptoUsdt",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "teamUsers",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "updateAndAssignRanksRecursively",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "usdtAmount",
          "type": "uint256"
        }
      ],
      "name": "usdtToBNB",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "ref",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amt",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "userRegistration",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userTeams",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "directConnections",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalConnections",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "otherLegsCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "strongLegCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "teamNum",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "activeteamNum",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userVestingSchedules",
      "outputs": [
        {
          "internalType": "bool",
          "name": "vestingComplete",
          "type": "bool"
        },
        {
          "internalType": "uint256",
          "name": "boughtAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "vestedAmountInitial",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "vestedAmountRemaining",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastClaimedDay",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalClaimedAmount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "buyTimestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userinfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalTokensBoughtUsd",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "referralRewards",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "directReferrals",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalClaimedRewards",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "rankRewards",
          "type": "uint256"
        },
        {
          "internalType": "enum Presale_StorageVault.Rank",
          "name": "rank",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "claimedReferralRewards",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "claimedReferralTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "claimedRankRewards",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalBalance",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userpurchases",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "totalPurchased",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalClaimed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "totalTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "allotedTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "boughtTokens",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "boughtUSDt",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "users",
      "outputs": [
        {
          "internalType": "bool",
          "name": "registered",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "active",
          "type": "bool"
        },
        {
          "internalType": "address",
          "name": "referrer",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "directConnectionsCount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "joiningTimestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ];
  
  
  const { ethers } = require("ethers");
  const fs = require('fs');
  const axios = require('axios');
  
  // Replace with your provider URL (BSC RPC endpoint)
  const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed1.binance.org/");
  
  // Replace with your smart contract address
  const contractAddress = "0xA9dce24A3ef787F9932Bf464980f20b8ff4c79ab";
  
  // Create a contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  
  async function fetchLevel1UsersRecursively(userAddress, levelUsersSet) {
    try {
      // Fetch level 1 users for the given userAddress
      const level1Users = await contract.getLevelReferees(userAddress, 1);
      for (const user of level1Users) {
        if (!levelUsersSet.has(user)) {
          levelUsersSet.add(user);
          await fetchLevel1UsersRecursively(user, levelUsersSet);
        }
      }
    } catch (error) {
      console.error(`Error fetching level 1 users for ${userAddress}:`, error);
    }
  }
  function bigNumberToNumber(purchase) {
    if (purchase.type === "BigNumber" && purchase.hex) {
      return parseInt(purchase.hex, 16);
    }
    return 0;
  }
  const sendDataToBackend = async (address, totalBuys, directBuys, joinedAt, level1Users) => {
    console.log('Sending data to backend:', address, totalBuys, directBuys, joinedAt, level1Users);
    try {
      const response = await axios.post('http://localhost:8076/api/update-founders', {
        address,
        totalBuys,
        directBuys,
        joinedAt,
        level1Users,
      });
      console.log('Data sent to backend successfully:', response.data);
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };
  // Function to fetch user data
  async function fetchUserData(userAddress) {
    try {
      // Fetch user data
      const userData = await contract.users(userAddress);
      //console.log(userData);
      const userPurchases = await contract.userpurchases(userAddress);
      const userInfos = await contract.userinfo(userAddress);
  
      // Fetch all level 1 users recursively
      const levelUsersSet = new Set();
      await fetchLevel1UsersRecursively(userAddress, levelUsersSet);
  
      const levelUsersArray = Array.from(levelUsersSet);
  
      return {
        userAddress,
        userData,
        userInfos,
        userPurchases,
        levelUsers: levelUsersArray
      };
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  }
  
  // Main function to execute the fetch and save data
  async function main() {
    let currentLevelUsers = new Set(["0x1d1024ecC799390aB8D714409999d9D31CE93B20"]); // Initial user address
    const allUsersData = [];
    const processedUsers = new Set();

while (currentLevelUsers.size > 0) {
  const nextLevelUsers = new Set();

  for (const userAddress of currentLevelUsers) {
    if (processedUsers.has(userAddress)) {
      continue;
    }

    const data = await fetchUserData(userAddress);

    if (data) {
      allUsersData.push(data);
      processedUsers.add(userAddress);
        //console.log(data);
        let userData = data;
    const address = userData.userAddress;
    let total = 0;
        for (let level = 1; level <= 25; level++) {
          const usersAtLevel = await contract.getLevelReferees(address, level);
          for (const user of usersAtLevel) {
            const userInfo = await contract.userinfo(user);
            total += Number(userInfo[0]); // Total buy is at index 0
          }
        }
    const directBuys = userData.userPurchases.totalPurchased.toNumber();
    const joiningTimestampHex = userData.userData.joiningTimestamp.toNumber();
    const joinedAt = new Date(joiningTimestampHex * 1000);
    const level1Users = await contract.getLevelReferees(address, 1);
    let level1Obj = [];
    for (const user of level1Users) { 
    const user1 = await contract.users(user);
    const joiningTimestampHex1 = user1.joiningTimestamp.toNumber();
    const joinedAt1 = new Date(joiningTimestampHex1 * 1000);
    const userpur1 = await contract.userpurchases(userAddress);
    const usd1 =  userpur1.totalPurchased.toNumber() 
    const level1Objtemp ={
      address:user,
      joinedAt:joinedAt1,
      totalTokensBoughtUsd:usd1
    }
    level1Obj.push(level1Objtemp);
    console.log("level 1 users data",joinedAt1);
    }
    
    console.log("level 1 Object",level1Obj);

    console.log('User data to backend:', address, total, directBuys, joinedAt, level1Obj);
    sendDataToBackend(address, total, directBuys, joinedAt, level1Obj);   
      for (const levelUser of data.levelUsers) {
        if (!processedUsers.has(levelUser)) {
          nextLevelUsers.add(levelUser);
        }
      }
    }
  }

  currentLevelUsers = nextLevelUsers;
}
  
    fs.writeFileSync('user_data_1.json', JSON.stringify(allUsersData, null, 2));
    console.log("Data saved to user_data.json");
  }
  
  main();
  
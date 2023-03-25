import {create} from 'zustand'
import {Stock} from "../../types/types";

type UserState = {
    userNickname: string
    userBalance: number
    userStocks: Array<Stock>
}

type UserAction = {
    changeNickname: (userNickname: UserState['userNickname']) => void
    changeBalance: (userBalance: UserState['userBalance']) => void
    buyNewStock: (newStock: Stock) => void
    soldCurrentStock: (soldStockId: string, soldCounter : number) => void
    fetchUserData: () => void,
}

export const userStore = create<UserState & UserAction>((set) => ({
    userId: 'mockUser',
    userNickname: 'MockUser',
    userBalance: 1000,
    userStocks: [
        {
            companyId: "microsoft",
            companyName: "Microsoft",
            stockValue: 1800,
            stockCount: 30
        },
        {
            companyId: "apple",
            companyName: "Apple California",
            stockValue: 2700,
            stockCount: 479
        },
    ],
    fetchUserData: () => {},
    changeNickname: (newNickname) => set(() => ({userNickname: newNickname})),
    changeBalance: (newBalance) => set((state) => ({userBalance: state.userBalance + newBalance})),
    buyNewStock: (newStock: Stock) => set((state) => ({
        userStocks: [
            ...state.userStocks,
            newStock
        ]
    })),
    soldCurrentStock: (soldStockId: string, soldCounter: number ) => set((state) => ({
        userStocks : state.userStocks.filter((stock) => {
          if (stock.companyId === soldStockId) {
              return Object.assign({}, stock, {
                  stockCount : stock.stockCount - soldCounter
              })
          }
          return stock
        })
    }))
}))
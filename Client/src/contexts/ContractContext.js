import React, { createContext, useContext } from 'react';

import { useAddress, useContract, useContractWrite, useMetadata } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
const StateContext =createContext();

export const StateContextProvider = ({ children }) => { 
    const { contract } = useContract("0x7699934da1B0Cd787C725Ea121c234b4d0F7e686");
  
    const { mutateAsync: buyTicket } = useContractWrite(contract, "buyTicket")
    const address=useAddress()
    // const { data } = useMetadata(contract);
    // console.log(data);

    const park = async (form) => {
        
        try {
          const data = await buyTicket([
            form.zone, 
            form.duration,
            form.plate
          ])
    
          console.log("contract call success", data)
        } catch (error) {
          console.log("contract call failure", error)
        }
      }
      return (
        <StateContext.Provider
          value={{ 
            address,
            contract,
            buyTicket:park,
          }}
        >
          {children}
        </StateContext.Provider>
      )
}


export const useStateContext = () => useContext(StateContext);
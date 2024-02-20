import { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import InputBox from './components/InputBox'


function App() {
  const [amount,setAmount] = useState()
  const [FromcurrencyType,setFromCurrencyType] = useState('usd')
  const [TocurrencyType,setToCurrencyType] = useState('inr')
  const [ConvertedAmount,setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(FromcurrencyType)
  const currencyOptions = Object.keys(currencyInfo)

  const swap = () => {
   setFromCurrencyType(TocurrencyType)
    setToCurrencyType(FromcurrencyType)
  }

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[TocurrencyType])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: `url(https://images.pexels.com/photos/4497591/pexels-photo-4497591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
            <form onSubmit={(e)=>{
              e.preventDefault()
              convertCurrency()
            }}>
              <div className='w-full mb-1'>
                <InputBox 
                lable={"From"}
                amount={amount}
                CurrencyOptions={currencyOptions}
                currencyTypeChange={(e)=> setFromCurrencyType(e)}
                onAmountChange={(e)=> setAmount(e)}
                currentCurrencyType={FromcurrencyType}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                onClick={swap}
                >
                  Swap
                </button>
              </div>
              <div className='w-full mb-1'>
                <InputBox 
                lable='To'
                CurrencyOptions={currencyOptions}
                amount={ConvertedAmount}
                currencyTypeChange={(e)=> setToCurrencyType(e)}
                currentCurrencyType={TocurrencyType}
                amountDisabled={true}
                />
              </div>
              <button
              type='submit'
              className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
              >Convert {FromcurrencyType.toUpperCase()} to {TocurrencyType.toUpperCase()}
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default App

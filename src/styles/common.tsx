export const navItem = `flex cursor-pointer nav-item`;
export const wrapperLayout = `flex flex-col justify-center content-center items-center mt-20 mb-20 text-white px-3 max-w-7xl`;
export const wrapperHeader = `text-sm underline font-bold`;
export const wrapperDesc = `text-md md:text-lg mt-6 mb-10 opacity-60 text-center max-w-3xl`;
export const wrapperContentLayout = `flex gap-4 mx-3 flex-row flex-wrap justify-center content-center items-center`;
export const formBubble = `bg-card2 text-sm px-3 py-1 absolute z-10 left-10 border-card1 border rounded-3xl`;
export const formEntry = `bg-card2 w-full rounded-lg p-3 h-20 outline-none`;
export const formEntryXl = `bg-card2  rounded-lg px-3 py-6 h-32 outline-none resize-none`;
export const dualHeaderWrapper = `flex flex-col m-10 flex-1`;
export const primeHeaderText = `text-2xl md:text-4xl font-semibold`;
export const secondaryHeaderText = ` text-lg text-white/60 mt-4`;
export let landingCard = (cardNumber: number) =>
    cardNumber == 1
        ? `flex flex-col  bg-card1 shadow-xl -mb-10 -ml-20 rounded-xl z-0 sm:w-80 w-64`
        : cardNumber == 2
        ? `flex flex-col bg-card2 shadow-xl -mr-20 rounded-xl z-10 sm:max-w-xs w-64`
        : `flex flex-col bg-card3 shadow-xl -mt-3 -ml-20 md:-ml-40 rounded-xl z-20 sm:w-80 w-64`;

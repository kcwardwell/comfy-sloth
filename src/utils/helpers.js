

export const formatPrice = (number) => { 
    const formattedNumber = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',       
    }).format(number/100)
    return formattedNumber
}

export const getUniqueValues = () => { }



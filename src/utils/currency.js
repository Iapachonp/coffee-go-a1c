

export function money (price) {
    return(
    new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGroupedThousandths: true,
    groupStyle: 'Decimal',
    groupingUsedForFractions: false}).format(price)
    )
}; 

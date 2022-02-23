export function numbers(query) {
    let finalNumbers = query.replaceAll('=', '');
    let arr = finalNumbers.split('&');
    finalNumbers = arr[0].replaceAll('a', '');
    finalNumbers = arr[1].replaceAll('b', '');
    console.log(finalNumbers);
    return finalNumbers;
}

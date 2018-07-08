function getShortenedPrice(input) {
	const price = String(input);
  
  if (price.length < 7) {
    return `${price.slice(0, -3)}rb`;
  }
  return `${toMillion(price)}`;
}

function toMillion(price) {
  let result = '';
	
  if (price.length < 8) {
    if (price[1] === '0') {
      result = price.slice(0, -6);
    } else {
      const prices = price.slice(0, -5);
      result = `${prices[0]},${prices[1]}`;
    }
  } else {
    result = price.slice(0, -6);
  }

  return `${result}jt`;
}

export default getShortenedPrice;

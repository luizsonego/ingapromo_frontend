function checkIsPercentageOrValue(value, type) {
  return type === 10 ? `${value}%` : `R$ ${value}`;
}	

export default checkIsPercentageOrValue;
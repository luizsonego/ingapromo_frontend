export function checkLocalization(value)
{
  switch (value) { 
    case 1:
      return 'Lateral';
    case 2:
      return 'Topo';
    case 3:
      return 'Bottom';
    case 4:
      return 'Super Topo';
    default:
      return 'nenhum';
  }
}

export function checkType(value)
{
  switch (value) { 
    case 1:
      return 'Quadrado';
    case 2:
      return 'Horizontal';
    default:
      return 'nenhum';
  }
}

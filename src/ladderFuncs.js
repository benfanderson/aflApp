export function addExtendedClass(...args) {
  for (let i = 0; i < args.length; i++) {
    args[i].setAttribute('class', 'extendedTable');
    args[i].style.display = 'none';
  }
}

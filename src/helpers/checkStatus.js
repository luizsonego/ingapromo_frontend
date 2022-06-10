function checkStatus(value) {
  if (value === 10) {
    return (
      <div className="bg-green h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-normal">Ativo</span>
        </div>
    );
  }

  if (value === 1) {
    return (
      <div className="bg-orange h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-normal">Inativo</span>
        </div>
    );
  }

  if (value === 0) {
    return (
      <div className="bg-red h-6 w-20 mb-4 md:mb-0 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-normal">Deletado</span>
        </div>
    );
  }

  return '';
}	

export default checkStatus;
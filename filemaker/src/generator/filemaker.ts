export function fileMaker(content: string, fileName: string) {
  // Conteúdo do arquivo
  const conteudo = content;

  // Cria um Blob com o conteúdo do arquivo
  const blob = new Blob([conteudo], { type: 'text/plain' });

  // Cria uma URL para o Blob
  const url = URL.createObjectURL(blob);

  // Cria um elemento <a> para fazer o download
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;

  // Adiciona o link ao DOM
  document.body.appendChild(link);

  // Aciona o clique no link para iniciar o download
  link.click();

  // Remove o link do DOM
  document.body.removeChild(link);

  // Libera a memória usada pela URL do Blob
  URL.revokeObjectURL(url);
}

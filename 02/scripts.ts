const usuarios2: { nome: string; idade: number; status: boolean }[] = [
  {
    nome: "Guido",
    idade: 32,
    status: true,
  },
  {
    nome: "Dani",
    idade: 30,
    status: true,
  },
  {
    nome: "João",
    idade: 40,
    status: false,
  },
  {
    nome: "Guilherme",
    idade: 29,
    status: true,
  },
  {
    nome: "Ana",
    idade: 18,
    status: false,
  },
  {
    nome: "José",
    idade: 28,
    status: false,
  },
];

const filtrarUsuarios = (
  listaUsuarios: { nome: string; idade: number; status: boolean }[],
  nome: string
): { nome: string; idade: number; status: boolean }[] => {
  const usuariosFiltros: { nome: string; idade: number; status: boolean }[] =
    listaUsuarios.filter((usuario) => {
      return usuario.nome.toLowerCase().includes(nome.toLowerCase());
    });
  return usuariosFiltros;
};

console.log(filtrarUsuarios(usuarios2, "w"));

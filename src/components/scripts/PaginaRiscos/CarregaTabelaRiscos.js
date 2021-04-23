export const columnsRiscos = [
    { field: "id", headerName: "Código", width: 98, description: "Código identificador do risco." },
    { field: "risco", headerName: "Risco", width: 200, description: "Nome completo do risco."},
    { field: "dono", headerName: "Dono", width: 170, description: "Pessoa responsavel pelo risco." },
    { field: "divisao", headerName: "Divisão", width: 170, description: "Divisão que o risco pertence." },
    { field: "nivel", headerName: "Criticidade", width: 120, description: "O nivel critico que esse risco pertence." },
    { field: "status", headerName: "Status", width: 112, description: "Status do risco." },
  ];

export const rowsRiscos = [
    { id: 1, dono: "Davi", risco: "Teste risco 1", divisao: "Ger Avia Setor 1", nivel: "Baixo", status: "Habilitado" },
    { id: 2, dono: "Davi", risco: "Teste risco 2", divisao: "Ger Avia Setor 2", nivel: "Médio", status: "Desabilitado"},
    { id: 3, dono: "Milena", risco: "Teste risco 3", divisao: "Ger Avia Setor 1", nivel: "Alto", status: "Habilitado" },
    { id: 4, dono: "Cassia", risco: "Teste risco 4", divisao: "Ger Avia Setor 2", nivel: "Alto", status: "Habilitado" },
    { id: 5, dono: "Milena", risco: "Teste risco 5", divisao: "Ger Avia Setor 2", nivel: "Médio", status: "Habilitado" },
    { id: 6, dono: "Milena", risco: "Teste risco 6", divisao: "Ger Avia Setor 1", nivel: "Baixo", status: "Habilitado" },
    { id: 7, dono: "Davi", risco: "Teste risco 7", divisao: "Ger Avia Setor 2", nivel: "Alto", status: "Habilitado" },
    { id: 8, dono: "Cassia", risco: "Teste risco 8", divisao: "Ger Avia Setor 1", nivel: "Baixo", status: "Habilitado" },
    { id: 9, dono: "Milena", risco: "Teste risco 9", divisao: "Ger Avia Setor 2", nivel: "Alto", status: "Habilitado" },
    { id: 10, dono: "Elio", risco: "Teste risco 10", divisao: "Ger Avia Setor 1", nivel: "Médio", status: "Habilitado" },
    { id: 11, dono: "Milena", risco: "Teste risco 11", divisao: "Ger Avia Setor 2", nivel: "Baixo", status: "Habilitado" },
    { id: 12, dono: "Davi", risco: "Teste risco 12", divisao: "Ger Avia Setor 1", nivel: "Alto", status: "Habilitado" },
    { id: 13, dono: "Elio", risco: "Teste risco 13", divisao: "Ger Avia Setor 2", nivel: "Médio", status: "Habilitado" },
    { id: 14, dono: "Cassia", risco: "Teste risco 14", divisao: "Ger Avia Setor 1", nivel: "Baixo", status: "Habilitado" },
    { id: 15, dono: "Davi", risco: "Teste risco 15", divisao: "Ger Avia Setor 2", nivel: "Médio", status: "Habilitado" },
    { id: 16, dono: "Elio", risco: "Teste risco 16", divisao: "Ger Avia Setor 1", nivel: "Alto", status: "Habilitado" },
    { id: 17, dono: "Milena", risco: "Teste risco 17", divisao: "Ger Avia Setor 2", nivel: "Alto", status: "Habilitado" },
    { id: 18, dono: "Davi", risco: "Teste risco 18", divisao: "Ger Avia Setor 1", nivel: "Médio", status: "Habilitado" },
    { id: 19, dono: "Milena", risco: "Teste risco 19", divisao: "Ger Avia Setor 2", nivel: "Baixo", status: "Habilitado" },
    { id: 20, dono: "Davi", risco: "Teste risco 20", divisao: "Ger Avia Setor 1", nivel: "Alto", status: "Habilitado" }
  ];

  export function testeLoad(){

    console.log("Faz as consultas no banco...")

  };
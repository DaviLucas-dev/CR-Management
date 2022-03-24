export const GRID_DEFAULT_LOCALE_TEXT = {
    // Root
    rootGridLabel:"Grade",
    noRowsLabel: 'Nenhuma linha',
    noResultsOverlayLabel: 'Nenhum resultado encontrado.',
    errorOverlayDefaultLabel: 'Ocorreu um erro.',
  
    // Density selector toolbar button text
    toolbarDensity: 'Densidade',
    toolbarDensityLabel: 'Densidade',
    toolbarDensityCompact: 'Compacto',
    toolbarDensityStandard: 'Padrão',
    toolbarDensityComfortable: 'Confortável',
  
    // Columns selector toolbar button text
    toolbarColumns: 'Colunas',
    toolbarColumnsLabel: 'Exibir seletor de colunas',
  
    // Filters toolbar button text
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Exibir filtros',
    toolbarFiltersTooltipHide: 'Ocultar filtros',
    toolbarFiltersTooltipShow: 'Exibir filtros',
    toolbarFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
  
    // Export selector toolbar button text
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Baixar CSV',
    toolbarExportPrint: 'Print',
  
    // Columns panel text
    columnsPanelTextFieldLabel: 'Localizar coluna',
    columnsPanelTextFieldPlaceholder: 'Título da coluna',
    columnsPanelDragIconLabel: 'Reordenar Coluna',
    columnsPanelShowAllButton: 'Mostrar todas',
    columnsPanelHideAllButton: 'Ocultar todas',
  
    // Filter panel text
    filterPanelAddFilter: 'Adicionar filtro',
    filterPanelDeleteIconLabel: 'Excluir',
    filterPanelLinkOperator: 'Operador logico',
    filterPanelOperators: 'Operadores', // TODO v6: rename to filterPanelOperator
    filterPanelOperatorAnd: 'E',
    filterPanelOperatorOr: 'Ou',
    filterPanelColumns: 'Colunas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Filtrar valor',
  
    // Filter operators text
    filterOperatorContains: 'contém',
    filterOperatorEquals: 'é igual a',
    filterOperatorStartsWith: 'começa com',
    filterOperatorEndsWith: 'termina com',
    filterOperatorIs: 'é',
    filterOperatorNot: 'não é',
    filterOperatorAfter: 'após',
    filterOperatorOnOrAfter: 'em ou após',
    filterOperatorBefore: 'antes de',
    filterOperatorOnOrBefore: 'em ou antes de',
    filterOperatorIsEmpty: 'é vazio',
    filterOperatorIsNotEmpty: 'não é vazio',
    filterOperatorIsAnyOf: 'é qualquer um',
  
    // Filter values text
    filterValueAny: 'qualquer',
    filterValueTrue: 'verdadeiro',
    filterValueFalse: 'falso',
  
    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Exibir colunas',
    columnMenuFilter: 'Filtrar',
    columnMenuHideColumn: 'Ocultar',
    columnMenuUnsort: 'Desfazer ordenação',
    columnMenuSortAsc: 'Ordenar do menor para o maior',
    columnMenuSortDesc: 'Ordenar do maior para o menor',
  
    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
    columnHeaderFiltersLabel: 'Exibir Filtros',
    columnHeaderSortIconLabel: 'Ordenar',
  
    // Rows selected footer text
    footerRowSelected: (count) =>
      count !== 1
        ? `${count.toLocaleString()} linhas selecionadas`
        : `${count.toLocaleString()} linha selecionada`,
  
    // Total row amount footer text
    footerTotalRows: 'Total de linhas:',
  
    // Total visible row amount footer text
    footerTotalVisibleRows: (visibleCount, totalCount) =>
      `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
  
    // Checkbox selection text
    checkboxSelectionHeaderName: 'Checkbox selection',
    checkboxSelectionSelectAllRows: 'Selecionar todas as linhas',
    checkboxSelectionUnselectAllRows: 'Deselecionar todas as linhas',
    checkboxSelectionSelectRow: 'Selecionar linha',
    checkboxSelectionUnselectRow: 'Deselecionar linha',
  
    // Boolean cell text
    booleanCellTrueLabel: 'sim',
    booleanCellFalseLabel: 'não',
  
    // Actions cell more text
    actionsCellMore: 'mais',
  
    // Column pinning text
    pinToLeft: 'Marcar para a esquerda',
    pinToRight: 'Marcar para a direita',
    unpin: 'Desmarcar',
  
    // Tree Data
    treeDataGroupingHeaderName: 'Grupo',
    treeDataExpand: 'ver filhos',
    treeDataCollapse: 'ocultar filhos',
  
    // Grouping columns
    groupingColumnHeaderName: 'Grupo',
    groupColumn: (name) => `Groupo de ${name}`,
    unGroupColumn: (name) => `Parar agrupamento de ${name}`,
  
    // Master/detail
    expandDetailPanel: 'Expandir',
    collapseDetailPanel: 'Colapso',
  
    // Used core components translation keys
    MuiTablePagination: {},
  };
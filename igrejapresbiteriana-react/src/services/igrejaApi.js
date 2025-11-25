// Serviço de API da Igreja
// Por enquanto retorna dados mockados, mas pode ser expandido para buscar de uma API real

const igrejaApiService = {
  // Cache de eventos
  eventosCache: null,
  ultimaAtualizacao: null,
  statusAtualizacao: {
    emAndamento: false,
    sucesso: false,
    erro: null
  },

  // Buscar eventos online
  async fetchEventosOnline() {
    try {
      // Por enquanto retorna dados mockados
      // Em produção, aqui seria feita uma chamada para uma API real
      const eventosMock = [
        {
          id: 1,
          data: "15/09/2025",
          titulo: "Escola Dominical",
          horario: "09:30",
          local: "Templo Principal",
          descricao: "Participe dos estudos bíblicos para todas as idades"
        },
        {
          id: 2,
          data: "15/09/2025",
          titulo: "Culto Dominical",
          horario: "18:00",
          local: "Templo Principal",
          descricao: "Momento de adoração, louvor e pregação da Palavra de Deus"
        }
      ];

      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 500));

      this.eventosCache = eventosMock;
      this.ultimaAtualizacao = new Date();
      this.statusAtualizacao.sucesso = true;
      this.statusAtualizacao.erro = null;

      return eventosMock;
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
      this.statusAtualizacao.erro = error.message;
      this.statusAtualizacao.sucesso = false;
      throw error;
    }
  },

  // Forçar atualização dos eventos
  async forcarAtualizacao() {
    this.statusAtualizacao.emAndamento = true;
    try {
      const eventos = await this.fetchEventosOnline();
      this.statusAtualizacao.emAndamento = false;
      return eventos;
    } catch (error) {
      this.statusAtualizacao.emAndamento = false;
      throw error;
    }
  },

  // Obter status da atualização
  getStatusAtualizacao() {
    return {
      ...this.statusAtualizacao,
      ultimaAtualizacao: this.ultimaAtualizacao,
      temCache: this.eventosCache !== null
    };
  }
};

export default igrejaApiService;


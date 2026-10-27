import { AppDemo } from "./app-demo";
import { HeroPhones } from "./hero-phones";
import { Reveal } from "./reveal";
import { OfferBar } from "./offer-bar";
import { TestimonialsCarousel } from "./testimonials-carousel";
import { VturbPlayer } from "./vturb-player";

// Vazio no build padrao; "/enfermeira.v3" no build do GitHub Pages.
const asset = process.env.PAGES_BASE_PATH ?? "";

const precoMensal = "67";
// Ancoragem de valor da seção de bônus: app por 12 meses no preço mensal
// + valor de cada bônus. Edite os valores dos bônus no array `bonuses`.
const valorAppAnual = 67 * 12;
const formatarReais = (valor: number) => `R$ ${valor.toLocaleString("pt-BR")}`;
const precoAnualMensal = "20,37";
const parcelamentoAnual = `12x R$ ${precoAnualMensal}`;

const essentialCheckout =
  "https://checkout.payt.com.br/00866f9e635b46efd70d93bf8af772fa";
const completeCheckout =
  "https://checkout.payt.com.br/b6a1d5de6e0101f3886464727fc6fb22?split=12";

const subjects = [
  { icon: "🏥", title: "Concurso EBSERH", text: "Reforce por meio de músicas os conteúdos mais cobrados nos concursos da EBSERH.", topics: ["SUS", "Legislação em Enfermagem", "Segurança do Paciente", "Urgência e Emergência", "Conhecimentos específicos de Enfermagem"] },
  { icon: "🩺", title: "Sistema Único de Saúde (SUS)", text: "Memorize os principais conceitos do SUS através de músicas criadas com base nos conteúdos mais cobrados em concursos.", topics: ["Princípios e Diretrizes", "Leis 8.080 e 8.142", "Organização do SUS", "Redes de Atenção à Saúde", "Participação Social"] },
  { icon: "⚖️", title: "Ética em Enfermagem", text: "Revise os principais conteúdos de Ética e Legislação de forma simples e repetitiva.", topics: ["Código de Ética", "Direitos e deveres", "Responsabilidade profissional", "Infrações éticas", "Exercício da profissão"] },
  { icon: "🌎", title: "Saúde Coletiva", text: "Aprenda os conceitos fundamentais cobrados nas provas de Saúde Coletiva.", topics: ["Promoção da Saúde", "Vigilância em Saúde", "Epidemiologia", "Atenção Primária", "Políticas Públicas"] },
  { icon: "💊", title: "Farmacologia", text: "Reforce os principais medicamentos e conceitos cobrados nos concursos.", topics: ["Classes de medicamentos", "Administração", "Efeitos adversos", "Interações medicamentosas", "Cuidados de Enfermagem"] },
  { icon: "🚑", title: "Urgência e Emergência", text: "Revise protocolos e condutas essenciais para provas de concursos.", topics: ["PCR", "SBV", "Atendimento inicial", "Trauma", "Urgências clínicas"] },
  { icon: "🦺", title: "Biossegurança", text: "Memorize as principais normas de segurança cobradas nas provas.", topics: ["EPIs", "Precauções padrão", "Isolamentos", "Controle de infecção", "Segurança do paciente"] },
  { icon: "🤰", title: "Saúde da Mulher", text: "Reforce os conteúdos mais cobrados sobre assistência à saúde da mulher.", topics: ["Pré-natal", "Puerpério", "Planejamento familiar", "Ginecologia", "Obstetrícia"] },
  { icon: "👶", title: "Saúde da Criança", text: "Aprenda os principais temas de Pediatria e Saúde da Criança.", topics: ["Crescimento e desenvolvimento", "Imunização", "Aleitamento materno", "Principais doenças", "Assistência de Enfermagem"] },
  { icon: "📋", title: "Processo de Enfermagem", text: "Memorize todas as etapas do Processo de Enfermagem.", topics: ["SAE", "Diagnósticos", "Planejamento", "Implementação", "Avaliação"] },
  { icon: "💉", title: "Administração de Medicamentos", text: "Revise os principais conceitos para evitar erros e acertar questões.", topics: ["Vias de administração", "Cálculo de medicamentos", "Diluições", "Segurança do paciente", "Administração segura"] },
  { icon: "📜", title: "Legislação em Enfermagem", text: "Memorize as principais leis e normas da profissão.", topics: ["Lei do Exercício Profissional", "COFEN", "COREN", "Responsabilidades legais", "Direitos do profissional"] },
  { icon: "🎧", title: "Conhecimentos Complementares", status: "Playlist em constante atualização", text: "Além dos temas principais, você terá acesso a novas playlists adicionadas conforme os editais forem sendo publicados.", topics: ["Saúde do Adulto e do Idoso", "Clínica Médica e Cirúrgica", "Saúde Mental", "Centro Cirúrgico e CME", "Segurança do Paciente", "Controle de Infecções e CCIH", "Gestão e Gerenciamento em Enfermagem", "Nutrição, dietoterapia e sondagens", "Feridas, curativos e lesões por pressão", "Procedimentos e técnicas de Enfermagem", "Português e conhecimentos básicos"] },
];

// Todos os assuntos dos módulos, divididos em três faixas deslizantes.
const allTopics = [...new Set(subjects.flatMap((subject) => subject.topics))];
const marqueeTopics = [0, 1, 2].map((row) => allTopics.filter((_, index) => index % 3 === row));

const testimonials = [
  { image: `${asset}/media/depoimento-juliana.webp`, alt: "Depoimento de Juliana Rocha" },
  { image: `${asset}/media/depoimento-camila.webp`, alt: "Depoimento de Camila Santos" },
  { image: `${asset}/media/depoimento-amanda.webp`, alt: "Depoimento de Amanda Ferreira" },
  { image: `${asset}/media/depoimento-plano-anual.webp`, alt: "Depoimento de aluna que assinou o plano mensal e quis migrar para o anual" },
  { image: `${asset}/media/depoimento-lu-miranda.webp`, alt: "Depoimento de Lu Miranda, que divulgou o método no hospital" },
  { image: `${asset}/media/depoimento-edna.webp`, alt: "Depoimento de Edna Silva sobre a trilha sonora do aprendizado" },
];

const bonuses = [
  {
    number: "01",
    value: 97,
    title: "Checklist dos assuntos mais cobrados",
    text: "Saiba o que priorizar e acompanhe sua evolução pelos temas com maior incidência.",
    image: `${asset}/media/bonus-checklist.webp`,
  },
  {
    number: "02",
    value: 97,
    title: "Banco de questões comentadas",
    text: "Pratique após cada revisão com questões organizadas por disciplina.",
    image: `${asset}/media/bonus-questoes.webp`,
  },
  {
    number: "03",
    value: 147,
    title: "Comunidade exclusiva de alunos",
    text: "Troque experiências, tire dúvidas e acompanhe as novidades do método.",
    image: `${asset}/media/bonus-comunidade.webp`,
  },
  {
    number: "04",
    value: 67,
    title: "Letras comentadas",
    text: "A letra de cada música com os trechos-chave destacados e o conceito explicado.",
    image: `${asset}/media/bonus-letras.webp`,
  },
  {
    number: "05",
    value: 47,
    title: "Cronograma de 30 dias até a prova",
    text: "O que ouvir em cada dia, com revisões espaçadas para fixar o conteúdo.",
    image: `${asset}/media/bonus-cronograma.webp`,
  },
];

export default function Home() {
  return (
    <main>
      <Reveal />
      <OfferBar parcelamento={parcelamentoAnual} />

      <section className="hero" id="inicio">
        <nav className="nav wrap">
          <a className="brand" href="#inicio" aria-label="Memória Musical — início">
            <span className="brand-mark">♪</span>
            <span>MEMÓRIA MUSICAL</span>
          </a>
          <a className="nav-link" href="#oferta">Ver planos</a>
        </nav>

        <div className="hero-grid wrap">
          <div className="hero-copy">
            <h1>
              Quer passar na <strong>EBSERH, Secretarias de Saúde, Prefeituras ou
              Transpetro?</strong> Descubra como memorizar os assuntos de Enfermagem
              que realmente são <strong>cobrados nas Bancas!</strong>
            </h1>
            <p className="lead">
              Comece a usar nosso app de música e pare de esquecer ou confundir os
              conteúdos da sua prova de Enfermagem.
            </p>
            <VturbPlayer />
            <div className="hero-actions">
              <button className="button primary" type="button" data-price-jump>
                <span aria-hidden="true">▶</span> Quero memorizar ouvindo música · Acesso imediato
              </button>
              <span className="microcopy">Sem cadastro · Dê o play agora</span>
            </div>
            <div className="hero-proof">
              <span>✓ Acesso imediato</span>
              <span>✓ Celular e computador</span>
              <span>✓ Garantia de 7 dias</span>
            </div>
          </div>

          <div className="hero-visual">
            <HeroPhones />
          </div>
        </div>
      </section>

      <section className="stats" aria-label="O que você recebe">
        <div className="wrap stats-grid">
          {[
            ["1.000+", "músicas educativas"],
            ["150+", "temas de Enfermagem"],
            ["Imediato", "acesso após a compra"],
            ["7 dias", "de garantia"],
          ].map(([value, label]) => (
            <div className="stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="problem section">
        <div className="wrap narrow">
          <span className="eyebrow">A frustração é conhecida</span>
          <h2>Você estudou. Mas, na prova, a resposta simplesmente não veio.</h2>
          <p className="section-intro">
            PDFs longos e horas de videoaula podem ensinar o conteúdo. O problema
            aparece depois: encontrar tempo e energia para reencontrar a matéria
            vezes suficientes para ela permanecer acessível.
          </p>
        </div>
      </section>

      <section className="mechanism section dark">
        <div className="wrap mechanism-grid">
          <div>
            <span className="eyebrow light">O mecanismo</span>
            <h2>Você não precisa encontrar mais horas. Precisa reencontrar a matéria mais vezes.</h2>
          </div>
          <div className="mechanism-copy">
            <p>
              O Método da Memória Musical transforma conteúdos recorrentes dos
              concursos de enfermagem em faixas organizadas por disciplina.
            </p>
            <p>
              Assim, sua revisão pode continuar no trânsito, no intervalo do
              plantão, caminhando ou cuidando da casa — sem substituir seu estudo
              principal.
            </p>
          </div>
          <div className="routine-strip">
            {["Estude", "Dê o play", "Reencontre", "Reconheça"].map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="listen section" id="experimente">
        <div className="wrap narrow">
          <div className="section-heading center listen-heading">
            <span className="eyebrow light">Amostras gratuitas</span>
            <h2>Ouça agora. Sem cadastro, sem compromisso.</h2>
            <p>Estas são faixas reais do método. Escolha uma matéria e comprove você mesmo.</p>
          </div>

          <AppDemo base={asset} />
        </div>
      </section>

      <section className="fit section">
        <div className="wrap fit-grid">
          <div className="fit-visual">
            <img src={`${asset}/media/fernanda-virada.webp`} alt="Fones de ouvido sobre materiais de estudo" loading="lazy" decoding="async" />
            <div className="time-badge"><strong>20</strong><span>minutos<br />por dia</span></div>
          </div>
          <div>
            <span className="eyebrow">Feito para a rotina real</span>
            <h2>Revise até quando você não está “sentada para estudar”.</h2>
            <div className="use-list">
              {[
                ["No trânsito", "Transforme o deslocamento em revisão."],
                ["No plantão", "Use uma pausa curta para reencontrar um tema."],
                ["Nas tarefas", "Continue ouvindo enquanto cuida da rotina."],
                ["Na caminhada", "Movimente o corpo sem abandonar o conteúdo."],
              ].map(([title, text], index) => (
                <div key={title}>
                  <span>0{index + 1}</span>
                  <p><strong>{title}</strong>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contents section" id="conteudos">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Dentro da plataforma</span>
            <h2>Os temas que mais aparecem nos editais, prontos para acompanhar você.</h2>
          </div>
        </div>
        <div className="topic-marquee" aria-hidden="true">
          {[0, 1, 2].map((row) => (
            <div className={`marquee-row ${row % 2 ? "reverse" : ""}`} key={row}>
              <div className="marquee-track">
                {[...marqueeTopics[row], ...marqueeTopics[row]].map((topic, index) => (
                  <span className={`pill ${(index + row) % 3 === 0 ? "pill-on" : ""}`} key={`${topic}-${index}`}>
                    {(index + row) % 3 === 0 ? "+ " : ""}{topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="wrap">
          <div className="subject-grid">
            {subjects.map((subject, index) => (
              <details key={subject.title} className="subject-card">
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{subject.title}</strong>
                  <small>Ver o que você vai revisar <b>+</b></small>
                </summary>
                <div className="subject-details">
                  <div className="subject-copy">
                    <strong className="playlist-status">{subject.status || "Playlist disponível"}</strong>
                    <p>{subject.text}</p>
                    <h4>{index === 11 ? "Você recebe atualizações com assuntos como:" : "Você vai revisar:"}</h4>
                    <ul>{subject.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
                    <div className="subject-value">Este é apenas um dos módulos disponíveis. No Plano Completo você libera acesso a todas as playlists e às futuras atualizações dos editais.</div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="concursos section soft" aria-labelledby="concursos-title">
        <div className="wrap narrow">
          <div className="section-heading center">
            <span className="eyebrow">Para quais concursos?</span>
            <h2 id="concursos-title">O Memória Musical serve para a sua preparação em Enfermagem.</h2>
            <p>Desenvolvido para quem está se preparando para concursos e processos seletivos de Enfermagem em todo o Brasil.</p>
          </div>
          <div className="concursos-list" role="list" aria-label="Concursos e processos seletivos atendidos">
            {[
              "EBSERH / HU Brasil",
              "Transpetro",
              "Secretarias Estaduais de Saúde (SES)",
              "Secretarias Municipais de Saúde (SMS)",
              "Prefeituras Municipais",
              "Forças Armadas — Exército, Marinha e Aeronáutica",
              "Polícia Militar e Corpo de Bombeiros — Área da Saúde",
              "Universidades Federais e Estaduais",
              "Institutos Federais",
              "Hospitais Públicos e Hospitais Universitários",
              "Residências Multiprofissionais",
            ].map((concurso) => (
              <p key={concurso} role="listitem">✓ {concurso}</p>
            ))}
          </div>
          <p className="concursos-note">E muitos outros concursos da área da Enfermagem.</p>
        </div>
      </section>

      <section className="comparison section dark">
        <div className="wrap">
          <div className="section-heading center light-heading">
            <span className="eyebrow light">Menos atrito, mais frequência</span>
            <h2>Qual revisão tem mais chance de caber no seu dia?</h2>
          </div>
          <div className="compare-grid">
            <article className="compare-old">
              <span className="compare-label">Revisão tradicional</span>
              <h3>Depende de parar tudo.</h3>
              <ul>
                <li>× PDFs extensos para reler</li>
                <li>× Mais tempo diante da tela</li>
                <li>× Difícil manter todos os dias</li>
                <li>× Revisões deixadas para depois</li>
              </ul>
            </article>
            <article className="compare-new">
              <span className="compare-label">Memória Musical</span>
              <h3>Acompanha o que você já faz.</h3>
              <ul>
                <li>✓ Faixas rápidas por disciplina</li>
                <li>✓ Ouça pelo celular</li>
                <li>✓ Mais contato com os conteúdos</li>
                <li>✓ Fácil de repetir na rotina</li>
              </ul>
            </article>
          </div>
          <p className="disclaimer-inline">
            O método é complementar: não substitui aulas, leitura ou resolução de questões.
          </p>
        </div>
      </section>

      <section className="bonuses section">
        <div className="wrap">
          <div className="section-heading split-heading">
            <div>
              <span className="eyebrow">No plano completo</span>
              <h2>Cinco recursos para transformar revisão em preparação.</h2>
            </div>
            <p>Ouça, entenda cada letra, siga o cronograma, pratique e mantenha o ritmo com outros alunos.</p>
          </div>
          <div className="bonus-grid">
            {bonuses.map((bonus) => (
              <article key={bonus.title}>
                <img src={bonus.image} alt={`Prévia do bônus: ${bonus.title}`} width="1120" height="800" loading="lazy" decoding="async" />
                <div className="bonus-copy">
                  <span>Bônus {bonus.number}</span>
                  <h3>{bonus.title}</h3>
                  <p>{bonus.text}</p>
                  <div className="bonus-price">
                    <s>De {formatarReais(bonus.value)}</s>
                    <strong>por R$ 0</strong>
                    <small>no Plano Completo</small>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="value-stack">
            <span className="value-title">Tudo o que você recebe no Plano Completo</span>
            <ul>
              <li><span>Método da Memória Musical · 12 meses de acesso</span><s>{formatarReais(valorAppAnual)}</s></li>
              {bonuses.map((bonus) => (
                <li key={bonus.title}><span>Bônus {bonus.number} · {bonus.title}</span><s>{formatarReais(bonus.value)}</s></li>
              ))}
            </ul>
            <div className="value-total">
              <span>Somando tudo, você pagaria</span>
              <s>{formatarReais(valorAppAnual + bonuses.reduce((total, bonus) => total + bonus.value, 0))}</s>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section soft">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Experiência de alunas</span>
            <h2>Veja os relatos de quem incluiu as músicas na rotina.</h2>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="pricing section" id="oferta">
        <div className="wrap">
          <div className="section-heading center">
            <span className="eyebrow">Escolha seu acesso</span>
            <h2>Comece hoje a estudar com músicas.</h2>
            <p>Seu desconto de 60% foi aplicado com sucesso.</p>
          </div>

          <div className="price-grid">
            <article className="price-card essential-plan">
              <span className="price-ribbon essential-ribbon">Para começar</span>
              <span className="plan-tag">Plano Essencial</span>
              <h3>Acesso ao Método da Memória Musical</h3>
              <div className="single-price"><small>R$</small><strong>{precoMensal}</strong><small>,00</small><span className="price-period">/mês</span></div>
              <p className="cash-price light-copy">cobrança mensal recorrente</p>
              <ul>
                <li>✓ Mais de 1.000 músicas educativas</li>
                <li>✓ Mais de 150 temas de Enfermagem</li>
                <li>✓ Acesso pelo celular e computador</li>
              </ul>
              <a
                className="button price-button essential-button"
                href={essentialCheckout}
                data-goatcounter-click="checkout-plano-essencial-67"
                data-goatcounter-title="Clique no checkout — Plano Essencial R$ 67"
                data-goatcounter-no-session="1"
              >
                Assinar mensal por R$ {precoMensal}
              </a>
            </article>

            <article className="price-card featured">
              <span className="price-ribbon complete-ribbon">Melhor escolha</span>
              <span className="plan-tag">Anual · Plano Completo</span>
              <h3>Todo o método e todos os bônus</h3>
              <div className="annual-price"><small>R$</small><strong>{precoAnualMensal}</strong><span>/mês</span></div>
              <p className="annual-payment">{`12x de R$ ${precoAnualMensal}`} no cartão · ou R$ 197 à vista</p>
              <span className="value-badge">70% mais barato que o mensal</span>
              <ul>
                <li>✓ Mais de 1.000 músicas educativas</li>
                <li>✓ Mais de 150 temas de Enfermagem</li>
                <li>✓ Conteúdos para Enfermeiros, Técnicos e Residência</li>
                <li>✓ Novas músicas e temas adicionados constantemente</li>
                <li>✓ Acesso pelo celular e computador</li>
                <li>✓ Checklist dos assuntos mais cobrados</li>
                <li>✓ Banco de questões comentadas</li>
                <li>✓ Comunidade exclusiva de alunos</li>
                <li>✓ Letras comentadas</li>
                <li>✓ Cronograma de 30 dias até a prova</li>
                <li>✓ Suporte prioritário</li>
              </ul>
              <a
                className="button primary price-button"
                href={completeCheckout}
                data-goatcounter-click="checkout-plano-completo-197"
                data-goatcounter-title="Clique no checkout — Plano Completo R$ 197"
                data-goatcounter-no-session="1"
              >
                Quero o Plano Completo
              </a>
            </article>
          </div>
          <p className="secure-note">🔒 Compra segura · Liberação imediata · Garantia de 7 dias</p>
        </div>
      </section>

      <section className="guarantee section dark">
        <div className="wrap guarantee-grid">
          <div className="guarantee-seal"><strong>7</strong><span>DIAS</span></div>
          <div>
            <span className="eyebrow light">Risco reduzido</span>
            <h2>Ouça, explore e veja se o método cabe na sua rotina.</h2>
            <p>
              Você tem 7 dias para experimentar. Se perceber que o Método da
              Memória Musical não faz sentido para você, basta solicitar o reembolso.
            </p>
            <strong>O risco fica do nosso lado.</strong>
          </div>
        </div>
      </section>

      <section className="faq section">
        <div className="wrap narrow">
          <div className="section-heading">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>Antes de dar o play, tire suas dúvidas.</h2>
          </div>
          <div className="faq-list">
            {[
              [
                "O que é o Método da Memória Musical®?",
                "O Método da Memória Musical® é uma forma diferente de complementar seus estudos para concursos de Enfermagem. Em vez de depender apenas de PDFs e videoaulas, você também revisa os conteúdos por meio de músicas criadas com base nos principais assuntos cobrados nos editais.",
              ],
              [
                "O Método da Memória Musical® substitui PDFs, videoaulas ou cursos?",
                "Não.\n\nEle foi desenvolvido para complementar sua preparação. Você continua estudando pelos materiais tradicionais e utiliza as músicas para reforçar e revisar os conteúdos de forma prática durante a rotina.",
              ],
              [
                "Tem músicas específicas para o concurso da EBSERH?",
                "Sim! O Memória Musical possui músicas voltadas para conteúdos cobrados nos concursos da EBSERH.",
              ],
              [
                "Como estudar ouvindo música pode ajudar?",
                "As músicas permitem que você mantenha contato frequente com os conteúdos já estudados, aproveitando momentos em que normalmente não estaria revisando, como no carro, caminhando, fazendo tarefas de casa ou nos intervalos do trabalho.",
              ],
              [
                "É para Enfermeiro ou Técnico de Enfermagem?",
                "Para os dois! O material possui músicas com conteúdos voltados tanto para concursos de Enfermeiro quanto de Técnico de Enfermagem. Basta acessar e estudar os conteúdos relacionados à sua preparação.",
              ],
              [
                "Funciona mesmo para quem trabalha em plantão?",
                "Sim.\n\nO método foi pensado justamente para quem tem pouco tempo disponível. Como as músicas podem ser ouvidas em diferentes momentos do dia, fica mais fácil incluir revisões na rotina sem precisar passar horas extras sentado estudando.",
              ],
              [
                "Nunca consegui decorar nada com música. Mesmo assim vale a pena?",
                "Sim.\n\nVocê não precisa cantar nem ter facilidade musical. As músicas funcionam como uma ferramenta complementar de revisão. Muitas pessoas percebem que a combinação entre ritmo e repetição torna o contato com o conteúdo mais frequente e agradável.",
              ],
              [
                "As músicas são baseadas no edital?",
                "Sim.\n\nAs músicas são desenvolvidas com base nos assuntos presentes nos editais de concursos de Enfermagem, com prioridade para os conteúdos mais recorrentes nas provas. Como cada concurso pode apresentar temas e exigências específicas, o Método da Memória Musical deve ser utilizado como complemento ao estudo direcionado pelo edital do concurso que você pretende prestar.",
              ],
              [
                "Para quais concursos o método serve?",
                "O Método da Memória Musical® foi desenvolvido para concursos da área da Enfermagem. Como cada edital possui suas particularidades, ele deve ser utilizado como complemento à preparação específica para o concurso que você pretende prestar.",
              ],
              [
                "Sou iniciante. Esse método é para mim?",
                "Sim.\n\nSe você está começando agora, as músicas ajudam a reforçar o conteúdo desde o início dos estudos. E, se já estuda há algum tempo, elas podem complementar sua rotina de revisões.",
              ],
              [
                "Tenho pouco tempo para estudar. Ainda vale a pena?",
                "Sim.\n\nUma das maiores vantagens do método é justamente permitir que você aproveite momentos do dia que normalmente seriam improdutivos para reforçar os conteúdos já estudados.",
              ],
              [
                "Posso acessar pelo celular?",
                "Sim.\n\nVocê poderá acessar a plataforma pelo celular, tablet ou computador, estudando de onde estiver.",
              ],
              [
                "O acesso é imediato?",
                "Sim.\n\nApós a confirmação do pagamento, seu acesso é liberado e você já pode começar a utilizar a plataforma.",
              ],
              [
                "Vou receber atualizações?",
                "Sempre que novos conteúdos forem adicionados dentro do período de acesso do seu plano, eles ficarão disponíveis na plataforma conforme as condições da oferta.",
              ],
              [
                "E se eu não gostar?",
                "Você conta com uma garantia de 7 dias.\n\nAssim, poderá conhecer a plataforma e decidir com tranquilidade se o Método da Memória Musical® faz sentido para a sua preparação.",
              ],
              [
                "Preciso estudar todos os dias ouvindo música?",
                "Não.\n\nAs músicas são uma ferramenta para complementar suas revisões. Você pode utilizá-las nos momentos que fizerem sentido para a sua rotina de estudos.",
              ],
              [
                "Em quanto tempo vou perceber resultados?",
                "Cada pessoa possui uma rotina e um ritmo de aprendizado diferentes.\n\nO Método da Memória Musical® foi criado para facilitar suas revisões e complementar sua preparação, mas o desempenho em concursos depende de diversos fatores, como constância, planejamento e dedicação aos estudos.",
              ],
              [
                "Como começo depois da compra?",
                "É simples.\n\n1. Finalize sua compra.\n2. Receba o acesso imediatamente.\n3. Entre na plataforma.\n4. Escolha a playlist do assunto que deseja revisar.\n5. Comece a estudar utilizando o Método da Memória Musical®.",
              ],
            ].map(([question, answer], index) => (
              <details key={question}>
                <summary>{`${index + 1}. ${question}`}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="whatsapp-support" aria-labelledby="whatsapp-support-title">
        <div className="wrap narrow whatsapp-support-inner">
          <span className="eyebrow">Atendimento</span>
          <h2 id="whatsapp-support-title">Ainda ficou com alguma dúvida?</h2>
          <p>Chame nosso suporte no WhatsApp. Estamos disponíveis para ajudar você antes de começar.</p>
          <a
            className="button whatsapp-button"
            href="https://wa.me/5516992344060?text=Ol%C3%A1%21%20Ainda%20tenho%20algumas%20d%C3%BAvidas%20sobre%20o%20M%C3%A9todo%20da%20Mem%C3%B3ria%20Musical."
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com o suporte no WhatsApp <span>→</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <a className="brand" href="#inicio"><span className="brand-mark">♪</span><span>MEMÓRIA MUSICAL</span></a>
          <p>© 2026 Método da Memória Musical. Todos os direitos reservados.</p>
          <p className="legal">Este produto é um recurso complementar de revisão e não garante aprovação. Resultados variam conforme dedicação, rotina de estudos e outros fatores individuais.</p>
        </div>
      </footer>
    </main>
  );
}

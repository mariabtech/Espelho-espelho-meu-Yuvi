#  Yuvi — Rede Social em React

A **Yuvi** é uma aplicação web inspirada no layout e nas interações principais do Instagram, desenvolvida em **React + Vite**. 

Em vez de um feed genérico, a proposta da Yuvi é reunir publicações temáticas criadas por personagens fictícios que representam universos de arte, magia, amizade, moda e ciência — onde cada publicação reflete exatamente aquilo que cada personagem mais gosta de compartilhar e ver.

---

## ✨ Identidade Visual

* **Nome da Plataforma:** Yuvi
* **Paleta de Cores:**
  * Azul Principal: `#256AE4`
  * Azul Intenso: `#3F25E4`
  * Ciano Destaque: `#25CAE4`
  * Rosa Yuvi (Curtidas e Stories): `#FF2A7A`
  * Fundo Neutro: `#F8FAFC` | Texto Escuro: `#0F172A`
* **Tipografia (Google Fonts):**
  * **Cabin** — Títulos e nomes de usuário
  * **Assistant** — Subtítulos e localizações
  * **Rubik** — Textos, legendas e comentários

---

##  Personagens e Conteúdo do Feed

Todas as publicações são carregadas dinamicamente a partir de um arquivo estruturado em JSON (`src/data/posts.json`):

* **Rapunzel (`@rapunzel.artes`):** Pinturas, paisagens e reflexões poéticas sobre arte e liberdade.
* **Nico Wakatsuki (`@nico.witchwatch`):** Memes divertidos e situações mágicas do dia a dia.
* **Serena Tsukino (`@serena.tsukino`):** Passeios com as amigas, momentos em família e registros fofos da sua gatinha Lua.
* **Barbie (`@barbie.modamagia`):** Bastidores como atriz, visitas ao ateliê de alta-costura de sua tia em Paris e momentos com sua cadelinha.
* **Luna (`@showdaluna.oficial`):** Curiosidades científicas, astronomia e descobertas sobre a natureza e as flores.

---

##  Funcionalidades e Desafios Implementados

- [x] **Identidade Visual Customizada:** Nova logo, favicon, paleta de cores e tipografia própria.
- [x] **Feed Dinâmico via JSON:** Publicações gerenciadas diretamente pelo arquivo `posts.json`.
- [x] **Curtidas Interativas:** Botão de curtir (e duplo clique na imagem) que alterna o ícone para o coração rosa e atualiza o contador em tempo real.
- [x] **Sistema de Comentários:** Exibição de comentários e formulário funcional para publicar novos comentários em cada post.
- [x] **Barra de Stories e Tela de Perfil:** Stories interativos que filtram as publicações por personagem ao clicar, além de uma aba dedicada à visualização de perfil.

---


---

##  Tecnologias Utilizadas

* **React**
* **Vite**
* **React Icons**
* **CSS3** (Variáveis CSS, Flexbox e CSS Grid)

---

##  Como executar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git](https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git)

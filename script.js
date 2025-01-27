document.addEventListener('DOMContentLoaded', function() {
    const newsData = [
        { 
            title: 'Cyberpunk 2077: Обновление 2.2', 
            content: 'CD Projekt Red выпустили обновление 2.2 для Cyberpunk 2077 с множеством исправлений и улучшений.',
            image: 'assets/game1.jpg',
             link: 'https://www.cyberpunk.net/ru/news/50380/patch-2-12-dlya-cyberpunk-2077-uzhe-dostupen'
        },
        {
            title: 'Анонс новой игры от Bethesda',
             content: 'Bethesda Softworks анонсировала новую игру в жанре RPG, которая выйдет в следующем году.',
             image: 'assets/game2.jpg',
              link: 'https://doom.bethesda.net/ru/'
        },
          { 
            title: 'Starfield: Новое дополнение', 
            content: 'Вышло новое дополнение для Starfield с новыми планетами и заданиями.',
            image: 'assets/game1.jpg',
            link: 'https://bethesda.net/ru/game/starfield'
        },
         {
            title: 'The Witcher 4 в разработке',
             content: 'CD Projekt Red объявили о начале разработки новой части ведьмака',
             image: 'assets/game2.jpg',
             link: 'https://www.cdprojekt.com/en/'
         },
          { 
            title: 'Baldur\'s Gate 3: Награды игры', 
             content: 'Baldur\'s Gate 3 забрала множество наград на недавней церемонии',
             image: 'assets/game1.jpg',
             link: 'https://baldursgate3.game/'
         },
         {
            title: 'Новая игра от Riot Games',
             content: 'Riot Games анонсировали новую игру в жанре MOBA.',
             image: 'assets/game2.jpg',
             link: 'https://www.riotgames.com/'
        },
    ];

      const reviewsData = [
        {
            title: 'Обзор Elden Ring',
             content: 'Elden Ring - это шедевр, который поражает своим открытым миром и сложными боссами.',
             image: 'assets/game1.jpg',
             link: 'https://www.eldenring.com/'
         },
         {
             title: 'Обзор The Last of Us Part II',
             content: 'The Last of Us Part II — одна из самых противоречивых игр, но при этом, ее сюжет и геймплей достойны похвалы.',
             image: 'ww.jpg',
             link: 'https://www.playstation.com/ru-ru/games/the-last-of-us-part-ii/'
         },
         {
            title: 'Обзор Hades',
             content: 'Hades - это динамичный рогалик с захватывающим сюжетом и отличной реиграбельностью.',
            image: 'assets/game1.jpg',
            link: 'https://www.gog.com/en/game/hades'
         },
         {
           title: 'Обзор Ghost of Tsushima',
            content: 'Ghost of Tsushima - это красивый экшен в открытом мире, действие которого происходит в Японии.',
            image: 'assets/game2.jpg',
            link: 'https://www.playstation.com/ru-ru/games/ghost-of-tsushima/'
         },
           {
            title: 'Обзор Death Stranding',
            content: 'Death Stranding - игра, которая разделила аудиторию, но ее уникальность и подход заслуживают уважения.',
            image: 'assets/game1.jpg',
             link: 'https://www.deathstranding.com/'
         },
            {
           title: 'Обзор Red Dead Redemption 2',
            content: 'Red Dead Redemption 2 — это эпическое приключение в мире дикого запада с глубоким сюжетом и вниманием к деталям.',
            image: 'assets/game2.jpg',
            link: 'https://www.rockstargames.com/reddeadredemption2/'
          },
        ];
         
    const topGamesData = [
           {
               title: 'The Witcher 3: Wild Hunt',
               content: 'Одна из самых популярных RPG всех времен',
               image: 'assets/game1.jpg',
                link: 'https://thewitcher.com/ru/witcher3'
           },
            {
                title: 'Grand Theft Auto V',
                content: 'Экшен с большим открытым миром',
                 image: 'assets/game2.jpg',
                link: 'https://www.rockstargames.com/V/'
            },
            {
                title: 'Minecraft',
               content: 'Творческая песочница',
                image: 'assets/game1.jpg',
                link: 'https://www.minecraft.net/ru-ru'
             },
            {
              title: 'The Legend of Zelda: Breath of the Wild',
               content: 'Приключение в открытом мире с необычным геймплеем',
              image: 'assets/game2.jpg',
                link: 'https://www.nintendo.ru/Игры/Nintendo-Switch/The-Legend-of-Zelda-Breath-of-the-Wild-1173871.html'
             },
             {
              title: 'Dark Souls III',
                content: 'Одна из самых сложных RPG ',
                image: 'assets/game1.jpg',
                link: 'https://www.bandainamcoent.com/games/dark-souls-iii'
             },
            {
             title: 'Half-Life 2',
               content: 'Шутер, который изменил игровую индустрию',
               image: 'assets/game2.jpg',
               link: 'https://store.steampowered.com/app/220/HalfLife_2/'
             },
        ];


    function renderNews(data, containerClass, itemClass) {
          const container = document.querySelector(`.${containerClass}`);
        if (!container) return;
          container.innerHTML = '';
           data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add(itemClass);
        itemElement.innerHTML = `
             <a href="${item.link}">
                <img src="" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.content}</p>
            </a>
        `;
        container.appendChild(itemElement);
    });
    }
     renderNews(newsData, 'news-list', 'news-item');
     renderNews(reviewsData, 'reviews-list', 'reviews-item');
      renderNews(topGamesData, 'top-games-list', 'top-games-item');
});
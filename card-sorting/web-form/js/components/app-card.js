Vue.component('app-card', {
    data: () => {
        return {}
    },
    props: {
        card: {
            type: Object,
            default: {
                id: null,
                name: null,
                info: null,
            }
        },
        texts: {
            type: Object,
            default: window.texts
        }
    },
    template: `
        <article class="app-card">
            <span class="app-card__name">{{card.name}}</span>
            <span class="app-card__info" v-if="card.info" :data-info="card.info">
                <img src="img/info.svg" alt="Informação" />
            </span>
        </article>
    `,
});

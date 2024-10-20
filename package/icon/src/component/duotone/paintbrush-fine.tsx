
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paintbrush-fine` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush-fine?s=duotone paintbrush-fine}
 * @preview ![paintbrush-fine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paintbrush-fine.svg)
 */
const PaintbrushFine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480c0 17.7 14.3 32 32 32l144 0c61.9 0 112-50.1 112-112c0-10-1.3-19.7-3.8-29c-26.4-26.5-52.7-52.8-79.2-79.2c-9.3-2.4-19-3.8-29-3.8c-61.9 0-112 50.1-112 112c0 3.9 .2 7.8 .6 11.6C66.4 429.1 54.4 448 36.8 448L32 448c-17.7 0-32 14.3-32 32z" />
        <path d="M559.6 95.6c21.9-21.9 21.9-57.3 0-79.2s-57.3-21.9-79.2 0L205.1 291.7l79.2 79.2L559.6 95.6z" />
    </Icon>
);

export default PaintbrushFine;
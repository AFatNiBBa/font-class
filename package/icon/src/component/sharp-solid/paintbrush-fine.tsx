
import { Icon } from "../../index";

/**
 * A component that renders the `paintbrush-fine` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush-fine?s=sharp-solid paintbrush-fine}
 * @preview ![paintbrush-fine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/paintbrush-fine.svg)
 */
const PaintbrushFine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M575.2 80l-39.6 39.6L306.9 348.3l-79.2-79.2L456.4 40.4 496 .8 575.2 80zM205.1 291.7l79.2 79.2-.1 .1c2.5 9.3 3.8 19 3.8 29c0 61.9-50.1 112-112 112L0 512l0-64 64 0 0-48c0-61.9 50.1-112 112-112c10 0 19.8 1.3 29 3.8l.1-.1z" />
    </Icon>
);

export default PaintbrushFine;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `paintbrush-pencil` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paintbrush-pencil?s=sharp-duotone-solid paintbrush-pencil}
 * @preview ![paintbrush-pencil](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paintbrush-pencil.svg)
 */
const PaintbrushPencil: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M32 112L176 256c6.2 0 12.4 .4 18.4 1.2L297.8 153.8 224 80 144 0 32 112zM318.8 381.6c.8 6 1.2 12.2 1.2 18.4l80 80 144 32L512 368l-89.8-89.8L318.8 381.6z" />
        <path d="M575.2 80l-39.6 39.6L306.9 348.3l-79.2-79.2L456.4 40.4 496 .8 575.2 80zM205.1 291.7l79.2 79.2-.1 .1c2.5 9.3 3.8 19 3.8 29c0 61.9-50.1 112-112 112L0 512l0-64 64 0 0-48c0-61.9 50.1-112 112-112c10 0 19.8 1.3 29 3.8l.1-.1z" />
    </Icon>
);

export default PaintbrushPencil;

import { Icon } from "../../index";

/**
 * A component that renders the `layer-minus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-minus?s=sharp-light layer-minus}
 * @preview ![layer-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/layer-minus.svg)
 */
const LayerMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M408 64l-16 0 0 32 16 0 112 0 16 0 0-32-16 0L408 64zM288 349L78.8 256 288 163l209.2 93L288 349zM536.6 238.5L288 128 39.4 238.5 0 256l39.4 17.5L288 384 536.6 273.5 576 256l-39.4-17.5zM144 355l-39.4-17.5-65.2 29L0 384l39.4 17.5L288 512 536.6 401.5 576 384l-39.4-17.5-65.2-29L432 355l65.2 29L288 477 78.8 384 144 355z" />
    </Icon>
);

export default LayerMinus;
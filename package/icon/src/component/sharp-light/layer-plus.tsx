
import { Icon } from "../../index";

/**
 * A component that renders the `layer-plus` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-plus?s=sharp-light layer-plus}
 * @preview ![layer-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/layer-plus.svg)
 */
const LayerPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 24l0 40 40 0 16 0 0 32-16 0-40 0 0 40 0 16-32 0 0-16 0-40-40 0-16 0 0-32 16 0 40 0 0-40 0-16 32 0 0 16zM78.8 256L288 349l209.2-93L288 163 78.8 256zM288 128L536.6 238.5 576 256l-39.4 17.5L288 384 39.4 273.5 0 256l39.4-17.5L288 128zM104.6 337.5L144 355 78.8 384 288 477l209.2-93L432 355l39.4-17.5 65.2 29L576 384l-39.4 17.5L288 512 39.4 401.5 0 384l39.4-17.5 65.2-29z" />
    </Icon>
);

export default LayerPlus;
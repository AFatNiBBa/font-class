
import { Icon } from "../../index";

/**
 * A component that renders the `layer-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-plus?s=sharp-thin layer-plus}
 * @preview ![layer-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/layer-plus.svg)
 */
const LayerPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M472 24l0 48 48 0 8 0 0 16-8 0-48 0 0 48 0 8-16 0 0-8 0-48-48 0-8 0 0-16 8 0 48 0 0-48 0-8 16 0 0 8zM39.4 256L288 366.5 536.6 256 288 145.5 39.4 256zM288 128L556.3 247.2 576 256l-19.7 8.8L288 384 19.7 264.8 0 256l19.7-8.8L288 128zM104.6 337.5l19.7 8.8L39.4 384 288 494.5 536.6 384l-84.9-37.7 19.7-8.8 84.9 37.7L576 384l-19.7 8.8L288 512 19.7 392.8 0 384l19.7-8.8 84.9-37.7z" />
    </Icon>
);

export default LayerPlus;
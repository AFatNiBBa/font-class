
import { Icon } from "../../index";

/**
 * A component that renders the `layer-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-minus?s=sharp-thin layer-minus}
 * @preview ![layer-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/layer-minus.svg)
 */
const LayerMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M408 72l-8 0 0 16 8 0 112 0 8 0 0-16-8 0L408 72zM288 366.5L39.4 256 288 145.5 536.6 256 288 366.5zM556.3 247.2L288 128 19.7 247.2 0 256l19.7 8.8L288 384 556.3 264.8 576 256l-19.7-8.8zm-432 99l-19.7-8.8L19.7 375.2 0 384l19.7 8.8L288 512 556.3 392.8 576 384l-19.7-8.8-84.9-37.7-19.7 8.8L536.6 384 288 494.5 39.4 384l84.9-37.7z" />
    </Icon>
);

export default LayerMinus;

import { Icon } from "../../index";

/**
 * A component that renders the `shovel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shovel?s=sharp-thin shovel}
 * @preview ![shovel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/shovel.svg)
 */
const Shovel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M412.8-.1l5.7 5.7 88 88 5.7 5.7-5.7 5.7-34.6 34.6c-13.2 13.2-31 20.6-49.7 20.6c-16.5 0-31.7-5.7-43.7-15.2L221.7 301.7l71 71L304 384l-11.3 11.3L176 512 16 512 0 512l0-16L0 336 116.7 219.3 128 208l11.3 11.3 71 71L367.2 133.5c-9.5-12-15.2-27.2-15.2-43.7c0-18.6 7.4-36.5 20.6-49.7L407.1 5.5l5.7-5.7zm0 22.6L383.9 51.4C373.7 61.6 368 75.4 368 89.8c0 29.9 24.3 54.2 54.2 54.2c14.4 0 28.2-5.7 38.3-15.9l28.9-28.9L412.8 22.5zM16 342.6L16 496l153.4 0 112-112L128 230.6 16 342.6z" />
    </Icon>
);

export default Shovel;
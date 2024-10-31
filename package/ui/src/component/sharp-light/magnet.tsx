
import { Icon } from "../../index";

/**
 * A component that renders the `magnet` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=sharp-light magnet}
 * @preview ![magnet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/magnet.svg)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l16 0 112 0 16 0 0 16 0 208c0 44.2 35.8 80 80 80s80-35.8 80-80l0-208 0-16 16 0 112 0 16 0 0 16 0 208c0 123.7-100.3 224-224 224S0 379.7 0 256L0 48 0 32zM32 64l0 64 80 0 0-64L32 64zm0 192c0 106 86 192 192 192s192-86 192-192l0-96-80 0 0 96c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-96-80 0 0 96zM416 128l0-64-80 0 0 64 80 0z" />
    </Icon>
);

export default Magnet;
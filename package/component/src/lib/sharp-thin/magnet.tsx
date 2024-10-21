
import { Icon } from "../../index";

/**
 * A component that renders the `magnet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/magnet?s=sharp-thin magnet}
 * @preview ![magnet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/magnet.svg)
 */
const Magnet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l8 0 128 0 8 0 0 8 0 216c0 44.2 35.8 80 80 80s80-35.8 80-80l0-216 0-8 8 0 128 0 8 0 0 8 0 216c0 123.7-100.3 224-224 224S0 379.7 0 256L0 40l0-8zM16 48l0 96 112 0 0-96L16 48zm0 208c0 114.9 93.1 208 208 208s208-93.1 208-208l0-96-112 0 0 96c0 53-43 96-96 96s-96-43-96-96l0-96L16 160l0 96zM432 144l0-96L320 48l0 96 112 0z" />
    </Icon>
);

export default Magnet;
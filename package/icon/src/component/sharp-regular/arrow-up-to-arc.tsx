
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=sharp-regular arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-to-arc.svg)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48C141.1 48 48 141.1 48 256l0 24L0 280l0-24C0 114.6 114.6 0 256 0S512 114.6 512 256l-48 0c0-114.9-93.1-208-208-208zM134.4 279.7l104-112L256 148.7l17.6 18.9 104 112 16.3 17.6-35.2 32.7-16.3-17.6L280 245.1 280 488l0 24-48 0 0-24 0-242.9-62.4 67.2-16.3 17.6-35.2-32.7 16.3-17.6z" />
    </Icon>
);

export default ArrowUpToArc;
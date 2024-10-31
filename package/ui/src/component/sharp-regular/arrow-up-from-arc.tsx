
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-arc` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-arc?s=sharp-regular arrow-up-from-arc}
 * @preview ![arrow-up-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-from-arc.svg)
 */
const ArrowUpFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M134.4 130.9l-16.3 17.6 35.2 32.7 16.3-17.6L232 96.3 232 328l0 24 48 0 0-24 0-231.7 62.4 67.2 16.3 17.6 35.2-32.7-16.3-17.6-104-112L256-.1 238.4 18.9l-104 112zM256 464C141.1 464 48 370.9 48 256L0 256C0 397.4 114.6 512 256 512s256-114.6 256-256l0-24-48 0 0 24c0 114.9-93.1 208-208 208z" />
    </Icon>
);

export default ArrowUpFromArc;
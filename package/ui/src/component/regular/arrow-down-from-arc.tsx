
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-from-arc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-from-arc?s=regular arrow-down-from-arc}
 * @preview ![arrow-down-from-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-from-arc.svg)
 */
const ArrowDownFromArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48C141.1 48 48 141.1 48 256c0 13.3-10.7 24-24 24s-24-10.7-24-24C0 114.6 114.6 0 256 0S512 114.6 512 256c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-114.9-93.1-208-208-208zM134.4 392.3c-9-9.7-8.5-24.9 1.3-33.9s24.9-8.5 33.9 1.3L232 426.9 232 184c0-13.3 10.7-24 24-24s24 10.7 24 24l0 242.9 62.4-67.2c9-9.7 24.2-10.3 33.9-1.3s10.3 24.2 1.3 33.9l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7s-13-2.8-17.6-7.7l-104-112z" />
    </Icon>
);

export default ArrowDownFromArc;
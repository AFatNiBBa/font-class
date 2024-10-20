
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=regular arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 464c114.9 0 208-93.1 208-208c0-13.3 10.7-24 24-24s24 10.7 24 24c0 141.4-114.6 256-256 256S0 397.4 0 256c0-13.3 10.7-24 24-24s24 10.7 24 24c0 114.9 93.1 208 208 208zM377.6 232.3l-104 112c-4.5 4.9-10.9 7.7-17.6 7.7s-13-2.8-17.6-7.7l-104-112c-9-9.7-8.5-24.9 1.3-33.9s24.9-8.5 33.9 1.3L232 266.9 232 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 242.9 62.4-67.2c9-9.7 24.2-10.3 33.9-1.3s10.3 24.2 1.3 33.9z" />
    </Icon>
);

export default ArrowDownToArc;
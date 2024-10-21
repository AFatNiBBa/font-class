
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-to-arc` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-to-arc?s=regular arrow-up-to-arc}
 * @preview ![arrow-up-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/arrow-up-to-arc.svg)
 */
const ArrowUpToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48c114.9 0 208 93.1 208 208c0 13.3 10.7 24 24 24s24-10.7 24-24C512 114.6 397.4 0 256 0S0 114.6 0 256c0 13.3 10.7 24 24 24s24-10.7 24-24C48 141.1 141.1 48 256 48zM377.6 279.7l-104-112c-4.5-4.9-10.9-7.7-17.6-7.7s-13 2.8-17.6 7.7l-104 112c-9 9.7-8.5 24.9 1.3 33.9s24.9 8.5 33.9-1.3L232 245.1 232 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-242.9 62.4 67.2c9 9.7 24.2 10.3 33.9 1.3s10.3-24.2 1.3-33.9z" />
    </Icon>
);

export default ArrowUpToArc;
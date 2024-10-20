
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-arc` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-arc?s=sharp-regular arrow-down-to-arc}
 * @preview ![arrow-down-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-down-to-arc.svg)
 */
const ArrowDownToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M377.6 232.3l-104 112L256 363.3l-17.6-18.9-104-112-16.3-17.6 35.2-32.7 16.3 17.6L232 266.9 232 24l0-24 48 0 0 24 0 242.9 62.4-67.2 16.3-17.6 35.2 32.7-16.3 17.6zM256 464c114.9 0 208-93.1 208-208l0-24 48 0 0 24c0 141.4-114.6 256-256 256S0 397.4 0 256l48 0c0 114.9 93.1 208 208 208z" />
    </Icon>
);

export default ArrowDownToArc;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-notch` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=regular circle-notch}
 * @preview ![circle-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/circle-notch.svg)
 */
const CircleNotch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M215.1 26.3c3.6 12.7-3.7 26-16.5 29.7C111.6 80.9 48 161.1 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-94.9-63.6-175.1-150.6-200c-12.7-3.6-20.1-16.9-16.5-29.7s16.9-20.1 29.7-16.5C433.6 40.5 512 139.1 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 139.1 78.4 40.5 185.4 9.9c12.7-3.6 26 3.7 29.7 16.5z" />
    </Icon>
);

export default CircleNotch;
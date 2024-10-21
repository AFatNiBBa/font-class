
import { Icon } from "../../index";

/**
 * A component that renders the `circle-notch` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=sharp-regular circle-notch}
 * @preview ![circle-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-notch.svg)
 */
const CircleNotch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M198.6 56C111.6 80.9 48 161.1 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-94.9-63.6-175.1-150.6-200L326.6 9.9C433.6 40.5 512 139.1 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 139.1 78.4 40.5 185.4 9.9L198.6 56z" />
    </Icon>
);

export default CircleNotch;
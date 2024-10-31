
import { Icon } from "../../index";

/**
 * A component that renders the `circle-notch` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=sharp-solid circle-notch}
 * @preview ![circle-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-notch.svg)
 */
const CircleNotch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M201.1 71.9C121.8 95.6 64 169.1 64 256c0 106 86 192 192 192s192-86 192-192c0-86.9-57.8-160.4-137.1-184.1l18.3-61.3C434.9 42.1 512 140 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 140 77.1 42.1 182.9 10.6l18.3 61.3z" />
    </Icon>
);

export default CircleNotch;
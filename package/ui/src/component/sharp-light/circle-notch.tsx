
import { Icon } from "../../index";

/**
 * A component that renders the `circle-notch` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=sharp-light circle-notch}
 * @preview ![circle-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-notch.svg)
 */
const CircleNotch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M196.3 40C101.5 66.2 32 153 32 256c0 123.7 100.3 224 224 224s224-100.3 224-224C480 153 410.5 66.2 315.7 40l8.5-30.8C432.5 39.1 512 138.2 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 138.2 79.5 39.1 187.7 9.2L196.3 40z" />
    </Icon>
);

export default CircleNotch;
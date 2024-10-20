
import { Icon } from "../../index";

/**
 * A component that renders the `circle-notch` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-notch?s=light circle-notch}
 * @preview ![circle-notch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-notch.svg)
 */
const CircleNotch: typeof Icon = x => (
    <Icon {...x}>
        <path d="M207.4 20.4c2.4 8.5-2.6 17.3-11.2 19.7C101.5 66.2 32 153 32 256c0 123.7 100.3 224 224 224s224-100.3 224-224c0-103-69.5-189.8-164.3-215.9c-8.5-2.4-13.5-11.2-11.2-19.7s11.2-13.5 19.7-11.2C432.5 39.1 512 138.2 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 138.2 79.5 39.1 187.7 9.2c8.5-2.4 17.3 2.6 19.7 11.2z" />
    </Icon>
);

export default CircleNotch;
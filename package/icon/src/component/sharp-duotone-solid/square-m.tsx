
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-m` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-m?s=sharp-duotone-solid square-m}
 * @preview ![square-m](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/square-m.svg)
 */
const SquareM: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 480l448 0 0-448L0 32zm96 96l36.3 0 7.2 9.9L224 255l84.5-117.1 7.2-9.9 36.3 0 0 24 0 208 0 24-48 0 0-24 0-133.8-60.5 83.8L224 337l-19.5-26.9L144 226.2 144 360l0 24-48 0 0-24 0-208 0-24z" />
        <path d="M96 128l0 24 0 208 0 24 48 0 0-24 0-133.8 60.5 83.8L224 337l19.5-26.9L304 226.2 304 360l0 24 48 0 0-24 0-208 0-24-36.3 0-7.2 9.9L224 255 139.5 137.9l-7.2-9.9L96 128z" />
    </Icon>
);

export default SquareM;
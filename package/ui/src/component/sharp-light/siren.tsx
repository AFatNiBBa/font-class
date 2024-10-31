
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=sharp-light siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M363.8 320l32.2 0L368 96 80 96 52 320l32.2 0 24-192 231.5 0 24 192zm-185.6 0l13.8-110 2.2-18-32.2 0-1.8 14L145.9 320l32.2 0zM32 384l384 0 0 64L32 448l0-64zM0 352l0 32 0 64 0 32 32 0 384 0 32 0 0-32 0-64 0-32-32 0L32 352 0 352z" />
    </Icon>
);

export default Siren;
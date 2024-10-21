
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gas-pump-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump-slash?s=duotone gas-pump-slash}
 * @preview ![gas-pump-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gas-pump-slash.svg)
 */
const GasPumpSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 480c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 448c-17.7 0-32 14.3-32 32zM96 171.6L96 416l288 0 0-17.5L96 171.6zM97.3 51L384 275.7 384 64c0-35.3-28.7-64-64-64L160 0c-30.9 0-56.7 21.9-62.7 51zM448 32c-8.8 8.8-8.8 23.2 0 32l32 32 0 64c0 29.8 20.4 54.9 48 62l0 138c0 8.5-2.7 16.4-7.2 22.9c12.6 9.9 25.2 19.8 37.8 29.6C569.5 397.9 576 379.7 576 360l0-136 0-32 0-24 0-13.5c0-17-6.7-33.3-18.7-45.3L480 32c-8.8-8.8-23.2-8.8-32 0z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default GasPumpSlash;
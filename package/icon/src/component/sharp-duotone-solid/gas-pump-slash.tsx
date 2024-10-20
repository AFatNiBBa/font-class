
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gas-pump-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gas-pump-slash?s=sharp-duotone-solid gas-pump-slash}
 * @preview ![gas-pump-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gas-pump-slash.svg)
 */
const GasPumpSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 448l352 0 0 32 0 32L64 512l0-64zM96 0L384 0l0 275.4L96 51.8 96 0zm0 171.6L384 398.5l0 17.5L96 416l0-244.4zM432 48l32-32L576 128l0 40 0 24 0 32 0 136c0 19.2-6.2 37-16.6 51.5c-12.7-9.8-25.3-19.7-38-29.5c4.2-6.3 6.6-13.9 6.6-22l0-138c-27.6-7.1-48-32.2-48-62l0-64L432 48z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default GasPumpSlash;
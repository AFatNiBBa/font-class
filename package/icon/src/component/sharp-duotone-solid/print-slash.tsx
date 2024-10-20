
import { Icon, generic } from "../../index";

/**
 * A component that renders the `print-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/print-slash?s=sharp-duotone-solid print-slash}
 * @preview ![print-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/print-slash.svg)
 */
const PrintSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 192l0 192 64 0 0 96 0 32 32 0 320 0 32 0 0-12.6L446.8 448 192 448l0-64 0-16 0-16 132.9 0L121.8 192 96 192l-32 0zM128 0l0 32 0 44.6 64 49.7L192 64l226.7 0L448 93.3l0 66.7 64 0 0-80 0-13.3-9.4-9.4-48-48L445.3 0 432 0 160 0 128 0zM276.6 192c82.4 64 164.9 128 247.3 192l52.1 0 0-192-299.4 0zM472 248l48 0 0 48-48 0 0-48z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PrintSlash;
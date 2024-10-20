
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gun-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gun-slash?s=sharp-duotone-solid gun-slash}
 * @preview ![gun-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gun-slash.svg)
 */
const GunSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 240l92 0L64 480l160 0 32-128 68.9 0L32 121.2zM111.8 64c27.5 21.3 55 42.7 82.4 64L512 128l0 32-276.6 0c34.3 26.7 68.7 53.3 103 80l43.5 0-9.4 26.4c13.3 10.3 26.6 20.7 39.9 31L432.9 240l47.1 0 32-32 96 0 0-144-48 0 0-8 0-24-48 0 0 24 0 8L111.8 64z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default GunSlash;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `droplet-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/droplet-slash?s=sharp-duotone-solid droplet-slash}
 * @preview ![droplet-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/droplet-slash.svg)
 */
const DropletSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 320c0 106 86 192 192 192c53.2 0 101.4-21.6 136.1-56.6L159.8 221.9c-19 36.2-31.8 70.8-31.8 98.1zm64 0l32 0 0 16c0 44.2 35.8 80 80 80l16 0 0 32-16 0c-61.9 0-112-50.1-112-112l0-16zm17.9-179.8L505.5 369.7c4.2-15.8 6.5-32.5 6.5-49.7C512 214 320 0 320 0s-57.9 64.5-110.1 140.2z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default DropletSlash;
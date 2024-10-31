
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bottle-droplet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-droplet?s=sharp-duotone-solid bottle-droplet}
 * @preview ![bottle-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bottle-droplet.svg)
 */
const BottleDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M32 256l0 256 256 0 0-256c0-50.6-29.4-94.4-72-115.1L216 48c-37.3 0-74.7 0-112 0l0 92.9C61.4 161.6 32 205.4 32 256zm80 80c0-32 48-80 48-80s48 48 48 80s-21.5 48-48 48s-48-21.5-48-48z" />
        <path d="M96 0L72 0l0 48 24 0 128 0 24 0 0-48L224 0 96 0zm64 384c26.5 0 48-16 48-48s-48-80-48-80s-48 48-48 80c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default BottleDroplet;
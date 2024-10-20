
import { Icon } from "../../index";

/**
 * A component that renders the `bottle-droplet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bottle-droplet?s=sharp-solid bottle-droplet}
 * @preview ![bottle-droplet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bottle-droplet.svg)
 */
const BottleDroplet: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M96 0L72 0l0 48 24 0 8 0 0 92.9C61.4 161.6 32 205.4 32 256l0 256 256 0 0-256c0-50.6-29.4-94.4-72-115.1L216 48l8 0 24 0 0-48L224 0l-8 0s0 0 0 0L104 0s0 0 0 0L96 0zm64 384c-26.5 0-48-21.5-48-48c0-32 48-80 48-80s48 48 48 80s-21.5 48-48 48z" />
    </Icon>
);

export default BottleDroplet;
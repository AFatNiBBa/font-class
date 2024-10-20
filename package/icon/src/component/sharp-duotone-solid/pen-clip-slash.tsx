
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-clip-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip-slash?s=sharp-duotone-solid pen-clip-slash}
 * @preview ![pen-clip-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-clip-slash.svg)
 */
const PenClipSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 512l160-32L340.1 363.9 196.9 251.1 96 352 64 512zM191.9 126.2c12.7 9.9 25.5 19.8 38.2 29.7L288 97.9l31 31-54 54c48 37.3 96.1 74.6 144.1 111.9L447 257l33-33 1-1L305 47l-17-17L271 47l-79.2 79.2zM375.6 72.4l128 128L576 128 448 0 375.6 72.4z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PenClipSlash;
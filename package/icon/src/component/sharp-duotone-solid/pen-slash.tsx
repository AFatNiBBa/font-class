
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-slash?s=sharp-duotone-solid pen-slash}
 * @preview ![pen-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-slash.svg)
 */
const PenSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 512l160-32L340.1 363.9 196.9 251.1 96 352 64 512zM265 183c48 37.3 96.1 74.6 144.1 111.9l75.6-75.6-128-128L265 183zM379.3 68.7l128 128L576 128 448 0 379.3 68.7z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PenSlash;
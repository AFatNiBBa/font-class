
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-slash?s=sharp-duotone-solid plane-slash}
 * @preview ![plane-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-slash.svg)
 */
const PlaneSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 128L64 256 32 384l64 0 48-64 102.9 0L192 512l96 0 74.5-130.4L40.6 128 32 128zM192 0l46.4 162.3L441.5 320l72.8 0c34.2 0 93.7-28 93.7-64c0-35-59.5-64-93.7-64l-116.6 0L288 0 192 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PlaneSlash;
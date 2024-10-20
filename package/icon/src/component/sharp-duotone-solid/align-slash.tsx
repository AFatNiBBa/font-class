
import { Icon, generic } from "../../index";

/**
 * A component that renders the `align-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-slash?s=sharp-duotone-solid align-slash}
 * @preview ![align-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/align-slash.svg)
 */
const AlignSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 19.8L153 96l391 0 0-64L96 32zm0 139.6L96 224l66.5 0L96 171.6zM96 288l0 64 228.9 0-81.2-64L96 288zm0 128l0 64 391.4 0-81.2-64L96 416zM235.4 160l82.4 64L544 224l0-64-308.6 0zM400.3 288l82.4 64 61.3 0 0-64-143.7 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L18.9 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default AlignSlash;
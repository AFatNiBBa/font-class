
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pencil-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil-slash?s=sharp-duotone-solid pencil-slash}
 * @preview ![pencil-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pencil-slash.svg)
 */
const PencilSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 512.6l51-10.2 109-21.8L340.1 364.5 263.2 304l-27.9 27.9L224 343.2l-22.6-22.6 11.3-11.3L237.9 284l-41-32.3L96 352.6l-21.8 109L64 512.6zm61.2-61.2l15-75.1 23.7-23.7 12.1 0 0 48 48 0 0 12.1-23.7 23.7-75.1 15zM265.3 183.2l41.3 32.1 50-50L368 153.9l22.6 22.6-11.3 11.3-47.2 47.2 77.3 60 75.2-75.2-16-16-96-96-16-16-91.3 91.3zm114-114l16 16 96 96 16 16 34.7-34.7L576 128.6 542.1 94.6 481.9 34.5 448 .6 414.1 34.5 379.3 69.3z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default PencilSlash;
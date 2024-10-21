
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thumbtack-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack-slash?s=sharp-duotone-solid thumbtack-slash}
 * @preview ![thumbtack-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/thumbtack-slash.svg)
 */
const ThumbtackSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 320l0 32 196.9 0L175.8 234.5C142.2 263 128 299.1 128 320zM160 0l0 64 32 0 29.5 0-6.2 80.4L482.7 352l29.3 0 0-32c0-22.5-23.7-76.5-82.1-106.7L418.5 64 448 64l32 0 0-64L448 0 192 0 160 0zM288 384l0 96 0 32 64 0 0-32 0-96-64 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default ThumbtackSlash;
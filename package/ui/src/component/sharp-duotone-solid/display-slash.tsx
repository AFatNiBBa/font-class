
import { Icon, generic } from "../../index";

/**
 * A component that renders the `display-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/display-slash?s=sharp-duotone-solid display-slash}
 * @preview ![display-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/display-slash.svg)
 */
const DisplaySlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 0l0 2.1c5.5 4.2 10.9 8.5 16.4 12.7C69.5 31.2 90.6 47.6 111.8 64L544 64l0 288-61.3 0c27.5 21.3 55 42.7 82.4 64l42.8 0L608 0 32 0zm0 121.2L32 416l240 0-10.7 32L192 448l-32 0 0 64 32 0 256 0 32 0 0-37.8L446.8 448l-68.1 0L368 416l38.2 0-81.2-64L96 352l0-180.4L32 121.2z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default DisplaySlash;
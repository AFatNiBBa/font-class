
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-w` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-w?s=sharp-duotone-solid circle-w}
 * @preview ![circle-w](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-w.svg)
 */
const CircleW: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM102.5 152l50 0 40.7 141.5 39.9-124.8 5.3-16.7 35 0 5.3 16.7 39.9 124.8L359.5 152l50 0L343.1 382.6l-5 17.4-35.6 0-5.3-16.7L256 254.7 214.9 383.3 209.5 400l-35.6 0-5-17.4L102.5 152z" />
        <path d="M359.5 152l50 0L343.1 382.6l-5 17.4-35.6 0-5.3-16.7L256 254.7 214.9 383.3 209.5 400l-35.6 0-5-17.4L102.5 152l50 0 40.7 141.5 39.9-124.8 5.3-16.7 35 0 5.3 16.7 39.9 124.8L359.5 152z" />
    </Icon>
);

export default CircleW;
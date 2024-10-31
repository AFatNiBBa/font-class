
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=sharp-duotone-solid bell-on}
 * @preview ![bell-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bell-on.svg)
 */
const BellOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 368l0 48 448 0 0-48-64-72 0-88c0-77.4-55-142-128-156.8L352 0 288 0l0 51.2C215 66 160 130.6 160 208l0 88L96 368z" />
        <path d="M608.2 50.7L586.7 61.5l-64 32-21.5 10.7L479.8 61.3l21.5-10.7 64-32L586.7 7.8l21.5 42.9zM0 176l24 0 80 0 24 0 0 48-24 0-80 0L0 224l0-48zM384 448c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l64 0 64 0zM536 176l80 0 24 0 0 48-24 0-80 0-24 0 0-48 24 0zM53.3 61.5L31.8 50.7 53.3 7.8 74.7 18.5l64 32 21.5 10.7-21.5 42.9L117.3 93.5l-64-32z" />
    </Icon>
);

export default BellOn;
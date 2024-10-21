
import { Icon, generic } from "../../index";

/**
 * A component that renders the `broccoli` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/broccoli?s=duotone broccoli}
 * @preview ![broccoli](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/broccoli.svg)
 */
const Broccoli: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 352l112 0 0 .9c0 9.9 2.3 19.7 6.8 28.6l18.1 36.2c2.9 5.9 11.4 5.9 14.3 0l18.1-36.2c4.4-8.9 6.8-18.7 6.8-28.6l0-.9 112 0s-47.7 54.5-80.2 138.3c-5 12.8-17.1 21.7-30.9 21.7l-65.9 0c-13.8 0-25.9-8.9-30.9-21.7C159.7 406.5 112 352 112 352z" />
        <path d="M416 352L96 352c-53 0-96-43-96-96c0-45.5 31.6-83.6 74.1-93.5C67.7 152.6 64 140.7 64 128c0-35.3 28.7-64 64-64c12.7 0 24.6 3.7 34.5 10.1C172.4 31.6 210.5 0 256 0s83.6 31.6 93.5 74.1C359.4 67.7 371.3 64 384 64c35.3 0 64 28.7 64 64c0 12.7-3.7 24.6-10.1 34.5c42.5 9.9 74.1 48 74.1 93.5c0 53-43 96-96 96z" />
    </Icon>
);

export default Broccoli;
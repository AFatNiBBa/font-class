
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-6` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-6?s=sharp-duotone-solid circle-6}
 * @preview ![circle-6](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-6.svg)
 */
const Circle_6: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm160 32c0-31.7 11.9-62.3 33.3-85.7L261.4 128l65.1 0-14.9 16.2-44.4 48.4C315 198.2 352 238.8 352 288c0 53-43 96-96 96s-96-43-96-96zm48 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M193.3 202.3L261.4 128l65.1 0-14.9 16.2-44.4 48.4C315 198.2 352 238.8 352 288c0 53-43 96-96 96s-96-43-96-96c0-31.7 11.9-62.3 33.3-85.7zM208 288a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
    </Icon>
);

export default Circle_6;
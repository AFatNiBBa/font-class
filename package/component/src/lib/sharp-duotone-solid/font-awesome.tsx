
import { Icon, generic } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=sharp-duotone-solid font-awesome}
 * @preview ![font-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/font-awesome.svg)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l0 352 400 0 0-32L432 272l64-144 0-32L96 96z" />
        <path d="M96 93c12.2-9.5 20-24.3 20-41C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 419 64 0L96 93z" />
    </Icon>
);

export default FontAwesome;
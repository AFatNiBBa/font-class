
import { Icon, generic } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=duotone font-awesome}
 * @preview ![font-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/font-awesome.svg)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 96l0 352 373.6 0c14.6 0 26.4-11.8 26.4-26.4c0-3.7-.8-7.3-2.3-10.7L432 272l61.7-138.9c1.5-3.4 2.3-7 2.3-10.7c0-14.6-11.8-26.4-26.4-26.4L96 96z" />
        <path d="M96 93c12.2-9.5 20-24.3 20-41C116 23.3 92.7 0 64 0S12 23.3 12 52c0 16.7 7.8 31.5 20 41l0 419 64 0L96 93z" />
    </Icon>
);

export default FontAwesome;
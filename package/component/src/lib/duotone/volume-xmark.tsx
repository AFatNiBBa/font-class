
import { Icon, generic } from "../../index";

/**
 * A component that renders the `volume-xmark` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-xmark?s=duotone volume-xmark}
 * @preview ![volume-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/volume-xmark.svg)
 */
const VolumeXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M384 184c0 6.1 2.3 12.3 7 17l55 55-55 55c-4.7 4.7-7 10.8-7 17s2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7l55-55 55 55c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7s7-10.8 7-17s-2.3-12.3-7-17l-55-55 55-55c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17s-10.8-7-17-7s-12.3 2.3-17 7l-55 55-55-55c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7s-7 10.8-7 17z" />
        <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160 64 160c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l67.8 0L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448l0-384z" />
    </Icon>
);

export default VolumeXmark;
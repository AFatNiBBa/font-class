
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-left?s=duotone arrow-left}
 * @preview ![arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-left.svg)
 */
const ArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M77.3 256l32-32L416 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-306.7 0c-10.7-10.7-21.3-21.3-32-32z" />
        <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L77.3 256 214.6 393.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-160-160z" />
    </Icon>
);

export default ArrowLeft;
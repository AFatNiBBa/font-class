
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=sharp-duotone-solid wave-square}
 * @preview ![wave-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wave-square.svg)
 */
const WaveSquare: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 32l32 0 160 0 32 0 0 32 0 352 96 0 0-160 0-32 32 0 128 0 32 0 0 64-32 0-96 0 0 160 0 32-32 0-160 0-32 0 0-32 0-352-96 0 0 160 0 32-32 0L32 288 0 288l0-64 32 0 96 0 0-160 0-32z" />
    </Icon>
);

export default WaveSquare;
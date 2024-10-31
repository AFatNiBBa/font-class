
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=sharp-duotone-solid wave-triangle}
 * @preview ![wave-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wave-triangle.svg)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M175.6 10.1l26 34.7 262 349.3 102.5-141 18.8-25.9 51.8 37.6-18.8 25.9-128 176-25.5 35-26-34.7-262-349.3L73.9 258.8 55.1 284.7 3.3 247.1l18.8-25.9 128-176 25.5-35z" />
    </Icon>
);

export default WaveTriangle;
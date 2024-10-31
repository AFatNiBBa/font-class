
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-small-big` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-small-big?s=sharp-duotone-solid arrow-up-small-big}
 * @preview ![arrow-up-small-big](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-small-big.svg)
 */
const ArrowUpSmallBig: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M320 32l0 160 160 0 0-160L320 32zm0 224l0 224 224 0 0-224-224 0z" />
        <path d="M160 32.4l23.7 26 80 88 21.5 23.7-47.4 43.1-21.5-23.7L192 162.8 192 448l0 32-64 0 0-32 0-285.2-24.3 26.8L82.2 213.2 34.8 170.2l21.5-23.7 80-88 23.7-26z" />
    </Icon>
);

export default ArrowUpSmallBig;
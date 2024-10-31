
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-arrow-left` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-arrow-left?s=sharp-duotone-solid arrow-right-arrow-left}
 * @preview ![arrow-right-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-right-arrow-left.svg)
 */
const ArrowRightArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M2.7 384l22.6-22.6 80-80L128 258.7 173.3 304l-22.6 22.6L125.3 352 416 352l32 0 0 64-32 0-290.7 0 25.4 25.4L173.3 464 128 509.3l-22.6-22.6-80-80L2.7 384z" />
        <path d="M445.3 128l-22.6 22.6-80 80L320 253.3 274.7 208l22.6-22.6L322.7 160 32 160 0 160 0 96l32 0 290.7 0L297.4 70.6 274.7 48 320 2.7l22.6 22.6 80 80L445.3 128z" />
    </Icon>
);

export default ArrowRightArrowLeft;
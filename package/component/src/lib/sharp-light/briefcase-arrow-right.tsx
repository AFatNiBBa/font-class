
import { Icon } from "../../index";

/**
 * A component that renders the `briefcase-arrow-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/briefcase-arrow-right?s=sharp-light briefcase-arrow-right}
 * @preview ![briefcase-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/briefcase-arrow-right.svg)
 */
const BriefcaseArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l16 0L368 0l16 0 0 16 0 80 96 0 32 0 0 32 0 320 0 32-32 0L32 480 0 480l0-32L0 128 0 96l32 0 96 0 0-80 0-16zM352 32L160 32l0 64 192 0 0-64zM32 128l0 320 448 0 0-320-112 0-224 0L32 128zm267.3 68.7l80 80L390.6 288l-11.3 11.3-80 80L288 390.6 265.4 368l11.3-11.3L329.4 304 144 304l-16 0 0-32 16 0 185.4 0-52.7-52.7L265.4 208 288 185.4l11.3 11.3z" />
    </Icon>
);

export default BriefcaseArrowRight;
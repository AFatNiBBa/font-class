
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-right-arrow-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-arrow-left?s=duotone arrow-right-arrow-left}
 * @preview ![arrow-right-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-right-arrow-left.svg)
 */
const ArrowRightArrowLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 8.2 3.1 16.4 9.4 22.6l96 96c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3c-6.2-6.2-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4l-96 96C3.1 367.6 0 375.8 0 384z" />
        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-96 96c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L338.7 160 32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32l306.7 0L297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l96 96z" />
    </Icon>
);

export default ArrowRightArrowLeft;
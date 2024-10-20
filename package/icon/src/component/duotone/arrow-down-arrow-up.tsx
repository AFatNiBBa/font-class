
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-arrow-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-arrow-up?s=duotone arrow-down-arrow-up}
 * @preview ![arrow-down-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-arrow-up.svg)
 */
const ArrowDownArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M297.4 137.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3 384 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6l-96-96C432.4 35.1 424.2 32 416 32s-16.4 3.1-22.6 9.4l-96 96z" />
        <path d="M137.4 470.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 370.7 192 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96z" />
    </Icon>
);

export default ArrowDownArrowUp;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-left-and-arrow-up-right-to-center` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left-and-arrow-up-right-to-center?s=duotone arrow-down-left-and-arrow-up-right-to-center}
 * @preview ![arrow-down-left-and-arrow-up-right-to-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-down-left-and-arrow-up-right-to-center.svg)
 */
const ArrowDownLeftAndArrowUpRightToCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L176 381.3l0 50.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L80 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l50.7 0L9.4 457.4C3.1 463.6 0 471.8 0 480z" />
        <path d="M502.6 9.4c12.5 12.5 12.5 32.8 0 45.3L381.3 176l50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 50.7L457.4 9.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </Icon>
);

export default ArrowDownLeftAndArrowUpRightToCenter;
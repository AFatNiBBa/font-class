
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-left-and-arrow-up-right-to-center` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left-and-arrow-up-right-to-center?s=sharp-duotone-solid arrow-down-left-and-arrow-up-right-to-center}
 * @preview ![arrow-down-left-and-arrow-up-right-to-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-left-and-arrow-up-right-to-center.svg)
 */
const ArrowDownLeftAndArrowUpRightToCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M9.4 457.4l45.3 45.3L176 381.3l0 50.7 0 32 64 0 0-32 0-128 0-32-32 0L80 272l-32 0 0 64 32 0 50.7 0L9.4 457.4z" />
        <path d="M502.6 54.6L381.3 176l50.7 0 32 0 0 64-32 0-128 0-32 0 0-32 0-128 0-32 64 0 0 32 0 50.7L457.4 9.4l45.3 45.3z" />
    </Icon>
);

export default ArrowDownLeftAndArrowUpRightToCenter;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right-and-arrow-down-left-from-center` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-and-arrow-down-left-from-center?s=sharp-duotone-solid arrow-up-right-and-arrow-down-left-from-center}
 * @preview ![arrow-up-right-and-arrow-down-left-from-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-right-and-arrow-down-left-from-center.svg)
 */
const ArrowUpRightAndArrowDownLeftFromCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 320l0 32L0 480l0 32 32 0 128 0 32 0 0-64-32 0-50.7 0L214.6 342.6 237.3 320 192 274.7l-22.6 22.6L64 402.7 64 352l0-32L0 320z" />
        <path d="M320 0l32 0L480 0l32 0 0 32 0 128 0 32-64 0 0-32 0-50.7L342.6 214.6 320 237.3 274.7 192l22.6-22.6L402.7 64 352 64l-32 0 0-64z" />
    </Icon>
);

export default ArrowUpRightAndArrowDownLeftFromCenter;
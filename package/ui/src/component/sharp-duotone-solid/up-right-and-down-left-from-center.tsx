
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-right-and-down-left-from-center` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-and-down-left-from-center?s=sharp-duotone-solid up-right-and-down-left-from-center}
 * @preview ![up-right-and-down-left-from-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/up-right-and-down-left-from-center.svg)
 */
const UpRightAndDownLeftFromCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L0 512l160 0 32-32-52-52L240 328l-56-56L84 372 32 320 0 352z" />
        <path d="M480 192l32-32L512 0 352 0 320 32l52 52L272 184l56 56L428 140l52 52z" />
    </Icon>
);

export default UpRightAndDownLeftFromCenter;
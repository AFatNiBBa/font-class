
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-left-and-up-right-to-center` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left-and-up-right-to-center?s=sharp-duotone-solid down-left-and-up-right-to-center}
 * @preview ![down-left-and-up-right-to-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-left-and-up-right-to-center.svg)
 */
const DownLeftAndUpRightToCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 456l56 56L156 412l52 52 32-32 0-160L80 272 48 304l52 52L0 456z" />
        <path d="M304 48L272 80l0 160 160 0 32-32-52-52L512 56 456 0 356 100 304 48z" />
    </Icon>
);

export default DownLeftAndUpRightToCenter;
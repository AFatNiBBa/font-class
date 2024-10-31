
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=sharp-solid arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 2.7L70.6 25.4 160 114.7 160 80l0-32 64 0 0 32 0 112 0 32-32 0L80 224l-32 0 0-64 32 0 34.7 0L25.4 70.6 2.7 48 48 2.7zM509.3 48L486.6 70.6 397.3 160l34.7 0 32 0 0 64-32 0-112 0-32 0 0-32 0-112 0-32 64 0 0 32 0 34.7 89.4-89.4L464 2.7 509.3 48zM48 288l32 0 112 0 32 0 0 32 0 112 0 32-64 0 0-32 0-34.7L70.6 486.6 48 509.3 2.7 464l22.6-22.6L114.7 352 80 352l-32 0 0-64zm240 0l32 0 112 0 32 0 0 64-32 0-34.7 0 89.4 89.4L509.3 464 464 509.3l-22.6-22.6L352 397.3l0 34.7 0 32-64 0 0-32 0-112 0-32z" />
    </Icon>
);

export default ArrowsMinimize;
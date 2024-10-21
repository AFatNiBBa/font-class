
import { Icon } from "../../index";

/**
 * A component that renders the `pills` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pills?s=sharp-regular pills}
 * @preview ![pills](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pills.svg)
 */
const Pills: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 144c0-35.3 28.7-64 64-64s64 28.7 64 64l0 112L48 256l0-112zM112 32C50.1 32 0 82.1 0 144L0 368c0 61.9 50.1 112 112 112s112-50.1 112-112l0-224c0-61.9-50.1-112-112-112zM510.3 380.4L355.6 225.7C373 214.5 393.8 208 416 208c61.9 0 112 50.1 112 112c0 22.2-6.5 43-17.7 60.4zm-33.9 33.9C459 425.5 438.2 432 416 432c-61.9 0-112-50.1-112-112c0-22.2 6.5-43 17.7-60.4L476.4 414.3zM416 480a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default Pills;
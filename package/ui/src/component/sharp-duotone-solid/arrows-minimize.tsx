
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=sharp-duotone-solid arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.7 464L48 509.3l22.6-22.6L160 397.3l0 34.7 0 32 64 0 0-32 0-112 0-32-32 0L80 288l-32 0 0 64 32 0 34.7 0L25.4 441.4 2.7 464zM288 48l0 32 0 112 0 32 32 0 112 0 32 0 0-64-32 0-34.7 0 89.4-89.4L509.3 48 464 2.7 441.4 25.4 352 114.7 352 80l0-32-64 0z" />
        <path d="M48 2.7L70.6 25.4 160 114.7 160 80l0-32 64 0 0 32 0 112 0 32-32 0L80 224l-32 0 0-64 32 0 34.7 0L25.4 70.6 2.7 48 48 2.7zM288 288l32 0 112 0 32 0 0 64-32 0-34.7 0 89.4 89.4L509.3 464 464 509.3l-22.6-22.6L352 397.3l0 34.7 0 32-64 0 0-32 0-112 0-32z" />
    </Icon>
);

export default ArrowsMinimize;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-cctv` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-cctv?s=sharp-duotone-solid camera-cctv}
 * @preview ![camera-cctv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-cctv.svg)
 */
const CameraCctv: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 352l0 32 0 48 0 48 0 32 64 0 0-32 0-16 96 0 22.1 0 7.9-20.6 47.4-124.5-59.4-23.8L137.9 400 64 400l0-16 0-32L0 352zm352.7-22.5L520 400l56-136-81.8-31.8c-47.2 32.4-94.4 64.9-141.6 97.3z" />
        <path d="M0 224L128 0 576 176 320 352 0 224z" />
    </Icon>
);

export default CameraCctv;
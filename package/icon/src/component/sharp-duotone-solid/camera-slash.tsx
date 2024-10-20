
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=sharp-duotone-solid camera-slash}
 * @preview ![camera-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-slash.svg)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 146.4L64 480l423.4 0L356.4 376.8c-11.2 4.6-23.5 7.2-36.4 7.2c-53 0-96-43-96-96c0-5 .4-9.9 1.1-14.6L64 146.4zM153 96L285.1 198.6c10.8-4.2 22.6-6.6 34.9-6.6c53 0 96 43 96 96c0 3.9-.2 7.8-.7 11.7c53.6 41.6 107.1 83.2 160.7 124.8L576 96 437.3 96 416 32 224 32 202.7 96 153 96z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default CameraSlash;

import { Icon } from "../../index";

/**
 * A component that renders the `camera-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-slash?s=sharp-solid camera-slash}
 * @preview ![camera-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/camera-slash.svg)
 */
const CameraSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7L576 424.4 576 96 437.3 96 416 32 224 32 202.7 96 153 96 48.4 14.8zM285.1 198.6c10.8-4.2 22.6-6.6 34.9-6.6c53 0 96 43 96 96c0 3.9-.2 7.8-.7 11.7L285.1 198.6zM224 288c0-5 .4-9.9 1.1-14.6L64 146.4 64 480l423.4 0L356.4 376.8c-11.2 4.6-23.5 7.2-36.4 7.2c-53 0-96-43-96-96z" />
    </Icon>
);

export default CameraSlash;

import { Icon } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=regular camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 384a168 168 0 1 0 0-336 168 168 0 1 0 0 336zm0 48c-29.1 0-56.9-5.8-82.2-16.2L104.7 464l238.5 0-37.1-48.2C280.9 426.2 253.1 432 224 432zM440 216c0 72.8-36 137.2-91.3 176.4l62.3 81c5.6 7.2 6.5 17 2.5 25.2s-12.4 13.4-21.5 13.4L56 512c-9.1 0-17.5-5.2-21.5-13.4s-3.1-18 2.5-25.2l62.3-81C44 353.2 8 288.8 8 216C8 96.7 104.7 0 224 0S440 96.7 440 216zm-144 0a72 72 0 1 0 -144 0 72 72 0 1 0 144 0zm-192 0a120 120 0 1 1 240 0 120 120 0 1 1 -240 0z" />
    </Icon>
);

export default CameraWeb;
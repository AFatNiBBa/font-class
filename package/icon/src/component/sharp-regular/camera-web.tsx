
import { Icon } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=sharp-regular camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48a168 168 0 1 1 0 336 168 168 0 1 1 0-336zM342.3 396.7C401.2 358.1 440 291.6 440 216C440 96.7 343.3 0 224 0S8 96.7 8 216c0 75.6 38.8 142.1 97.7 180.7L53.3 464 16 512l60.8 0 294.4 0 60.8 0-37.3-48-52.3-67.3zm-193 22c23.3 8.6 48.4 13.3 74.7 13.3s51.4-4.7 74.7-13.3L333.9 464l-219.7 0 35.2-45.3zM224 144a72 72 0 1 1 0 144 72 72 0 1 1 0-144zm0 192a120 120 0 1 0 0-240 120 120 0 1 0 0 240z" />
    </Icon>
);

export default CameraWeb;
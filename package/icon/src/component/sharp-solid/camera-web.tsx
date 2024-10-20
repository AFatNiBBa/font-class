
import { Icon } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=sharp-solid camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M340.5 415.4C405 376 448 305 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224c0 81 43 152 107.5 191.4L32 472l0 40 384 0 0-40-75.5-56.6zM224 352a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-288a160 160 0 1 1 0 320 160 160 0 1 1 0-320zM176 224l-32 0c0-44.2 35.8-80 80-80l0 32c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default CameraWeb;
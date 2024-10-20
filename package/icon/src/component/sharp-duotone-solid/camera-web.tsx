
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=sharp-duotone-solid camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 224a128 128 0 1 0 256 0A128 128 0 1 0 96 224zm48 0c0-44.2 35.8-80 80-80l0 32c-26.5 0-48 21.5-48 48l-32 0z" />
        <path d="M448 224c0 81-43 152-107.5 191.4L416 472l0 40L32 512l0-40 75.5-56.6C43 376 0 305 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM224 384a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CameraWeb;
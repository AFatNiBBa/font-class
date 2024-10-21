
import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera-web` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-web?s=duotone camera-web}
 * @preview ![camera-web](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/camera-web.svg)
 */
const CameraWeb: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 224a128 128 0 1 0 256 0A128 128 0 1 0 96 224zm48 0c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
        <path d="M448 224c0 79.5-41.4 149.3-103.8 189.1l58.2 40.7c11.4 8 16.4 22.5 12.2 35.8S398 512 384 512L64 512c-14 0-26.3-9.1-30.5-22.4s.7-27.8 12.2-35.8l58.2-40.7C41.4 373.3 0 303.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224zM224 384a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default CameraWeb;
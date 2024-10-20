
import { Icon } from "../../index";

/**
 * A component that renders the `camera-retro` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera-retro?s=sharp-solid camera-retro}
 * @preview ![camera-retro](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/camera-retro.svg)
 */
const CameraRetro: typeof Icon = x => (
    <Icon {...x}>
        <path d="M220.6 121.2L271.1 96 448 96l0 96-114.8 0c-21.9-15.1-48.5-24-77.2-24s-55.2 8.9-77.2 24L64 192l0-64 128 0c9.9 0 19.7-2.3 28.6-6.8zM256 32L192 64l-32 0 0-32L64 32l0 32L0 64l0 64L0 416l0 64 64 0 384 0 64 0 0-64 0-320 0-64-64 0L256 32zM168 304a88 88 0 1 1 176 0 88 88 0 1 1 -176 0z" />
    </Icon>
);

export default CameraRetro;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=sharp-solid circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM196 160l12-32 96 0 12 32 68 0 0 192-256 0 0-192 68 0zm108 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CircleCamera;
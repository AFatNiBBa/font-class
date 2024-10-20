
import { Icon } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=sharp-thin circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM211.1 128l-2.2 4.4L195.1 160 136 160l-8 0 0 8 0 176 0 8 8 0 240 0 8 0 0-8 0-176 0-8-8 0-59.1 0-13.8-27.6-2.2-4.4-4.9 0-80 0-4.9 0zm9.9 16l70.1 0 13.8 27.6 2.2 4.4 4.9 0 56 0 0 160-224 0 0-160 56 0 4.9 0 2.2-4.4L220.9 144zM256 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-32-48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default CircleCamera;
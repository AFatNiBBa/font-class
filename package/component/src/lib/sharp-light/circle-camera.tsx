
import { Icon } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=sharp-light circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm60-352l-12-32-96 0-12 32-36 0-32 0 0 32 0 128 0 32 32 0 192 0 32 0 0-32 0-128 0-32-32 0-36 0zm36 32l0 128-192 0 0-128 36 0 22.2 0 7.8-20.8 4.2-11.2 51.6 0 4.2 11.2 7.8 20.8 22.2 0 36 0zm-96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CircleCamera;

import { Icon } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=sharp-regular circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm196-96l12-32 96 0 12 32 68 0 0 192-256 0 0-192 68 0zm108 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CircleCamera;
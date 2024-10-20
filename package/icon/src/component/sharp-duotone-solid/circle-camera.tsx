
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-camera` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-camera?s=sharp-duotone-solid circle-camera}
 * @preview ![circle-camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/circle-camera.svg)
 */
const CircleCamera: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-96l68 0 12-32 96 0 12 32 68 0 0 192-256 0 0-192z" />
        <path d="M208 128l-12 32-68 0 0 192 256 0 0-192-68 0-12-32-96 0zm48 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CircleCamera;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `camera` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=sharp-duotone-solid camera}
 * @preview ![camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/camera.svg)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 288a96 96 0 1 0 192 0 96 96 0 1 0 -192 0z" />
        <path d="M160 32L138.7 96 0 96 0 480l512 0 0-384L373.3 96 352 32 160 32zm96 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Camera;
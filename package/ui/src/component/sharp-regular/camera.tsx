
import { Icon } from "../../index";

/**
 * A component that renders the `camera` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/camera?s=sharp-regular camera}
 * @preview ![camera](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/camera.svg)
 */
const Camera: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 32l21.3 64L464 96l48 0 0 48 0 288 0 48-48 0L48 480 0 480l0-48L0 144 0 96l48 0 90.7 0L160 32l192 0zm21.3 112l-34.6 0-10.9-32.8L317.4 80 194.6 80l-10.4 31.2L173.3 144l-34.6 0L48 144l0 288 416 0 0-288-90.7 0zM256 176a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm64 112a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z" />
    </Icon>
);

export default Camera;
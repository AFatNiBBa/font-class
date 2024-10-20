
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile?s=sharp-regular face-smile}
 * @preview ![face-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-smile.svg)
 */
const FaceSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm124 77.3L164 306.7C176 324.8 211.9 352 256 352s80-27.2 92-45.3L388 333.3C368 363.2 317.9 400 256 400s-112-36.8-132-66.7zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceSmile;
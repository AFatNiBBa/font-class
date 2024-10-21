
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-beam` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-beam?s=sharp-regular face-smile-beam}
 * @preview ![face-smile-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-smile-beam.svg)
 */
const FaceSmileBeam: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm124 77.3L164 306.7C176 324.8 211.9 352 256 352s80-27.2 92-45.3L388 333.3C368 363.2 317.9 400 256 400s-112-36.8-132-66.7zM176 152c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm104 80c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceSmileBeam;
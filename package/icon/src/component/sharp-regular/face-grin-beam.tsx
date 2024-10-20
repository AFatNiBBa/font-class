
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-beam` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-beam?s=sharp-regular face-grin-beam}
 * @preview ![face-grin-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-grin-beam.svg)
 */
const FaceGrinBeam: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm255.9 62.8c50.3 0 97.2-8.6 136.5-23.5C378.6 355.2 322.7 400 255.9 400s-122.7-44.8-136.5-104.6c39.3 14.9 86.2 23.5 136.5 23.5zM176 152c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm104 80c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceGrinBeam;
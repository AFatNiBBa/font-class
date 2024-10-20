
import { Icon } from "../../index";

/**
 * A component that renders the `face-grin-beam` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-beam?s=sharp-solid face-grin-beam}
 * @preview ![face-grin-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-grin-beam.svg)
 */
const FaceGrinBeam: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm.3-180.2c59.1 0 114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2c46.2 18.3 101.2 29 160.2 29zM176 152c28 0 56 40 56 80c0 0-28-32-56-32s-56 32-56 32c0-40 28-80 56-80zm104 80c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceGrinBeam;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-grin-beam` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-grin-beam?s=sharp-duotone-solid face-grin-beam}
 * @preview ![face-grin-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-grin-beam.svg)
 */
const FaceGrinBeam: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96 46.8c46.2 18.3 101.2 29 160.2 29s114.1-10.6 160.2-29C400.3 376.7 334.7 432 256.3 432s-144-55.3-160.2-129.2zM120 232c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm160 0c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
        <path d="M120 232c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm160 0c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceGrinBeam;
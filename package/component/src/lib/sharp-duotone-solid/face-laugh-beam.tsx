
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-laugh-beam` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-beam?s=sharp-duotone-solid face-laugh-beam}
 * @preview ![face-laugh-beam](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-laugh-beam.svg)
 */
const FaceLaughBeam: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm96.8 32l318.4 0c-8 80.9-76.2 144-159.2 144s-151.2-63.1-159.2-144zM120 216c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm160 0c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
        <path d="M120 216c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32zm160 0c0-40 28-80 56-80s56 40 56 80c0 0-28-32-56-32s-56 32-56 32z" />
    </Icon>
);

export default FaceLaughBeam;
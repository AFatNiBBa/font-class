
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh?s=sharp-regular face-laugh}
 * @preview ![face-laugh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-laugh.svg)
 */
const FaceLaugh: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM258.2 408c-69.2 0-126.1-52.6-132.8-120L391 288c-6.7 67.4-63.6 120-132.8 120zM144.4 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceLaugh;
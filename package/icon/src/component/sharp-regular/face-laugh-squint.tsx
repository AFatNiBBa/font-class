
import { Icon } from "../../index";

/**
 * A component that renders the `face-laugh-squint` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-laugh-squint?s=sharp-regular face-laugh-squint}
 * @preview ![face-laugh-squint](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-laugh-squint.svg)
 */
const FaceLaughSquint: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM258.2 408c-69.2 0-126.1-52.6-132.8-120L391 288c-6.7 67.4-63.6 120-132.8 120zM112 128l118.9 64L112 256l45.7-64L112 128zm169.1 64L400 128l-45.7 64L400 256 281.1 192z" />
    </Icon>
);

export default FaceLaughSquint;
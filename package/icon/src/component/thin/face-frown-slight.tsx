
import { Icon } from "../../index";

/**
 * A component that renders the `face-frown-slight` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-frown-slight?s=thin face-frown-slight}
 * @preview ![face-frown-slight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/face-frown-slight.svg)
 */
const FaceFrownSlight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM361.4 396.6C340.6 366.8 305.4 336 256 336s-84.6 30.8-105.4 60.6c-2.5 3.6-7.5 4.5-11.1 2s-4.5-7.5-2-11.1c22.4-32 61.9-67.4 118.6-67.4s96.1 35.4 118.6 67.4c2.5 3.6 1.7 8.6-2 11.1s-8.6 1.7-11.1-2zM160.4 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default FaceFrownSlight;
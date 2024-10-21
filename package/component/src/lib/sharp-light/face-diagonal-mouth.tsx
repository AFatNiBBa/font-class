
import { Icon } from "../../index";

/**
 * A component that renders the `face-diagonal-mouth` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-diagonal-mouth?s=sharp-light face-diagonal-mouth}
 * @preview ![face-diagonal-mouth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-diagonal-mouth.svg)
 */
const FaceDiagonalMouth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM148.4 383.4l-8.8-30.8 224-64 8.8 30.8-224 64zm4-175.4a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default FaceDiagonalMouth;

import { Icon } from "../../index";

/**
 * A component that renders the `face-diagonal-mouth` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-diagonal-mouth?s=solid face-diagonal-mouth}
 * @preview ![face-diagonal-mouth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/face-diagonal-mouth.svg)
 */
const FaceDiagonalMouth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM372.4 319.4l-224 64c-8.5 2.4-17.4-2.5-19.8-11s2.5-17.4 11-19.8l224-64c8.5-2.4 17.4 2.5 19.8 11s-2.5 17.4-11 19.8zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceDiagonalMouth;

import { Icon } from "../../index";

/**
 * A component that renders the `person-falling` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-falling?s=sharp-solid person-falling}
 * @preview ![person-falling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-falling.svg)
 */
const PersonFalling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 0l0 32 0 96 0 19.8-17.7 8.8L252 181.8 304.5 256l95.5 0 16 0 9.6 12.8 48 64 19.2 25.6-51.2 38.4-19.2-25.6L384 320l-96 0-1.4 0 84.2 130.1L388.2 477l-53.7 34.8-17.4-26.9L160 242.2 160 352l0 32-64 0 0-32 0-144 0-19.8 17.7-8.8L256 108.2 256 32l0-32 64 0zM112 32a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default PersonFalling;
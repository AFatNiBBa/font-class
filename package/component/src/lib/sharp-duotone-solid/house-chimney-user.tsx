
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-chimney-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney-user?s=sharp-duotone-solid house-chimney-user}
 * @preview ![house-chimney-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-chimney-user.svg)
 */
const HouseChimneyUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 448.5 0-.5-224c-.1-5.3-.1-10.7-.1-16C437.3 210.7 362.7 149.3 288 88C213.3 149.3 138.7 210.6 64 272zM176 448l32-96 160 0 32 96-224 0zM352 256a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M288 0L0 240l0 32 64 0L288 88 512 272l64 0 0-32-64-53.3L512 32l-96 0 0 74.7L288 0zm64 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm48 192l-32-96-160 0-32 96 224 0z" />
    </Icon>
);

export default HouseChimneyUser;
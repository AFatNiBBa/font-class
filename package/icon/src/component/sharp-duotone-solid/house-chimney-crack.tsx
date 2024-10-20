
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-chimney-crack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-chimney-crack?s=sharp-duotone-solid house-chimney-crack}
 * @preview ![house-chimney-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/house-chimney-crack.svg)
 */
const HouseChimneyCrack: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 272l.1 240 166.3 0L192 448l96-80L224 256 384 368l-96 80 38.4 64 186.2 0-.5-224c-.1-5.3-.1-10.7-.1-16C437.3 210.7 362.7 149.3 288 88C213.3 149.3 138.7 210.6 64 272z" />
        <path d="M288 0L0 240l0 32 64 0L288 88 512 272l64 0 0-32-64-53.3L512 32l-96 0 0 74.7L288 0z" />
    </Icon>
);

export default HouseChimneyCrack;
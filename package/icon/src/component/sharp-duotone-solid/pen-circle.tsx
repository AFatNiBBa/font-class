
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=sharp-duotone-solid pen-circle}
 * @preview ![pen-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-circle.svg)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 384l16-96L252.7 179.3l80 80L224 368l-96 16zM275.3 156.7L320 112l80 80-44.7 44.7-80-80z" />
        <path d="M128 384l16-96L252.7 179.3l80 80L224 368l-96 16zM355.3 236.7l-80-80L320 112l80 80-44.7 44.7z" />
    </Icon>
);

export default PenCircle;
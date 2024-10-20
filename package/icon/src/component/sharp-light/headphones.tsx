
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=sharp-light headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 64C143.2 64 49.8 147.4 34.3 256l93.7 0 0 224L0 480 0 368l0-80C0 146.6 114.6 32 256 32s256 114.6 256 256l0 80 0 112-128 0 0-224 93.7 0C462.2 147.4 368.8 64 256 64zM480 368l0-80-64 0 0 160 64 0 0-80zM32 448l64 0 0-160-64 0 0 80 0 80z" />
    </Icon>
);

export default Headphones;
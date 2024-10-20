
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=sharp-solid headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80C152 80 65.8 156.3 50.4 256l77.6 0 0 224L0 480l0-96 0-96C0 146.6 114.6 32 256 32s256 114.6 256 256l0 96 0 96-128 0 0-224 77.6 0C446.2 156.3 360 80 256 80z" />
    </Icon>
);

export default Headphones;
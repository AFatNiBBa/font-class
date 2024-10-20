
import { Icon } from "../../index";

/**
 * A component that renders the `headphones` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/headphones?s=sharp-regular headphones}
 * @preview ![headphones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/headphones.svg)
 */
const Headphones: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 80C152 80 65.8 156.3 50.4 256L80 256l48 0 0 48 0 128 0 48-48 0-32 0L0 480l0-48 0-64 0-80C0 146.6 114.6 32 256 32s256 114.6 256 256l0 80 0 64 0 48-48 0-32 0-48 0 0-48 0-128 0-48 48 0 29.6 0C446.2 156.3 360 80 256 80zM464 304l-32 0 0 128 32 0 0-64 0-64zM48 368l0 64 32 0 0-128-32 0 0 64z" />
    </Icon>
);

export default Headphones;
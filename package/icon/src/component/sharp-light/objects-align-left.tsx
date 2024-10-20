
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-left?s=sharp-light objects-align-left}
 * @preview ![objects-align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/objects-align-left.svg)
 */
const ObjectsAlignLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512L0 0 32 0l0 512L0 512zM160 192l320 0 0-96L160 96l0 96zM128 96l0-32 32 0 320 0 32 0 0 32 0 96 0 32-32 0-320 0-32 0 0-32 0-96zm32 320l192 0 0-96-192 0 0 96zm-32-96l0-32 32 0 192 0 32 0 0 32 0 96 0 32-32 0-192 0-32 0 0-32 0-96z" />
    </Icon>
);

export default ObjectsAlignLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-right?s=sharp-light objects-align-right}
 * @preview ![objects-align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/objects-align-right.svg)
 */
const ObjectsAlignRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512L512 0 480 0l0 512 32 0zM352 192L32 192l0-96 320 0 0 96zm32-96l0-32-32 0L32 64 0 64 0 96l0 96 0 32 32 0 320 0 32 0 0-32 0-96zM352 416l-192 0 0-96 192 0 0 96zm32-96l0-32-32 0-192 0-32 0 0 32 0 96 0 32 32 0 192 0 32 0 0-32 0-96z" />
    </Icon>
);

export default ObjectsAlignRight;
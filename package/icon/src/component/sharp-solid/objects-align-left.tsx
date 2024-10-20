
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-left?s=sharp-solid objects-align-left}
 * @preview ![objects-align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/objects-align-left.svg)
 */
const ObjectsAlignLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512l48 0L48 0 0 0 0 512zM128 64l0 160 384 0 0-160L128 64zm0 224l0 160 256 0 0-160-256 0z" />
    </Icon>
);

export default ObjectsAlignLeft;
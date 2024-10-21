
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-right?s=sharp-solid objects-align-right}
 * @preview ![objects-align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/objects-align-right.svg)
 */
const ObjectsAlignRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512l-48 0L464 0l48 0 0 512zM384 64l0 160L0 224 0 64l384 0zm0 224l0 160-256 0 0-160 256 0z" />
    </Icon>
);

export default ObjectsAlignRight;

import { Icon } from "../../index";

/**
 * A component that renders the `diagram-predecessor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-predecessor?s=sharp-solid diagram-predecessor}
 * @preview ![diagram-predecessor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-predecessor.svg)
 */
const DiagramPredecessor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 416l0-64L64 352l0 64 384 0zm64 64l-64 0L64 480 0 480l0-64 0-64 0-64 64 0 384 0 64 0 0 64 0 64 0 64zM384 96l-96 0 0 128L0 224 0 32l208 0 80 0 128 0 32 0 0 32 0 64 64 0 0 32-96 96-96-96 0-32 64 0 0-32z" />
    </Icon>
);

export default DiagramPredecessor;

import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-right?s=sharp-thin objects-align-right}
 * @preview ![objects-align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/objects-align-right.svg)
 */
const ObjectsAlignRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512L512 0 496 0l0 512 16 0zM400 208L16 208 16 80l384 0 0 128zM416 80l0-16-16 0L16 64 0 64 0 80 0 208l0 16 16 0 384 0 16 0 0-16 0-128zM400 432l-256 0 0-128 256 0 0 128zm16-128l0-16-16 0-256 0-16 0 0 16 0 128 0 16 16 0 256 0 16 0 0-16 0-128z" />
    </Icon>
);

export default ObjectsAlignRight;
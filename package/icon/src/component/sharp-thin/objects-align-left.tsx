
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-left?s=sharp-thin objects-align-left}
 * @preview ![objects-align-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/objects-align-left.svg)
 */
const ObjectsAlignLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 512L0 0 16 0l0 512L0 512zM112 208l384 0 0-128L112 80l0 128zM96 80l0-16 16 0 384 0 16 0 0 16 0 128 0 16-16 0-384 0-16 0 0-16L96 80zm16 352l256 0 0-128-256 0 0 128zM96 304l0-16 16 0 256 0 16 0 0 16 0 128 0 16-16 0-256 0-16 0 0-16 0-128z" />
    </Icon>
);

export default ObjectsAlignLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-bottom` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-bottom?s=sharp-thin objects-align-bottom}
 * @preview ![objects-align-bottom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/objects-align-bottom.svg)
 */
const ObjectsAlignBottom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512L0 512l0-16 512 0 0 16zM208 400l0-384L80 16l0 384 128 0zM80 416l-16 0 0-16L64 16 64 0 80 0 208 0l16 0 0 16 0 384 0 16-16 0L80 416zm352-16l0-256-128 0 0 256 128 0zM304 416l-16 0 0-16 0-256 0-16 16 0 128 0 16 0 0 16 0 256 0 16-16 0-128 0z" />
    </Icon>
);

export default ObjectsAlignBottom;
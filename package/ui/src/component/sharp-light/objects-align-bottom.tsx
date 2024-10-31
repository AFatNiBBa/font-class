
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-bottom` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-bottom?s=sharp-light objects-align-bottom}
 * @preview ![objects-align-bottom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/objects-align-bottom.svg)
 */
const ObjectsAlignBottom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512L0 512l0-32 512 0 0 32zM192 352l0-320L96 32l0 320 96 0zM96 384l-32 0 0-32L64 32 64 0 96 0l96 0 32 0 0 32 0 320 0 32-32 0-96 0zm320-32l0-192-96 0 0 192 96 0zm-96 32l-32 0 0-32 0-192 0-32 32 0 96 0 32 0 0 32 0 192 0 32-32 0-96 0z" />
    </Icon>
);

export default ObjectsAlignBottom;
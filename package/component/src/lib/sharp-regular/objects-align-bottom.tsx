
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-bottom` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-bottom?s=sharp-regular objects-align-bottom}
 * @preview ![objects-align-bottom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/objects-align-bottom.svg)
 */
const ObjectsAlignBottom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512L0 512l0-48 512 0 0 48zM176 336l0-288-64 0 0 288 64 0zm-64 48l-48 0 0-48L64 48 64 0l48 0 64 0 48 0 0 48 0 288 0 48-48 0-64 0zm288-48l0-160-64 0 0 160 64 0zm-64 48l-48 0 0-48 0-160 0-48 48 0 64 0 48 0 0 48 0 160 0 48-48 0-64 0z" />
    </Icon>
);

export default ObjectsAlignBottom;
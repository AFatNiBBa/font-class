
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-top` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-top?s=sharp-regular objects-align-top}
 * @preview ![objects-align-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/objects-align-top.svg)
 */
const ObjectsAlignTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L0 0 0 48l512 0 0-48zM176 176l0 288-64 0 0-288 64 0zm-64-48l-48 0 0 48 0 288 0 48 48 0 64 0 48 0 0-48 0-288 0-48-48 0-64 0zm288 48l0 160-64 0 0-160 64 0zm-64-48l-48 0 0 48 0 160 0 48 48 0 64 0 48 0 0-48 0-160 0-48-48 0-64 0z" />
    </Icon>
);

export default ObjectsAlignTop;
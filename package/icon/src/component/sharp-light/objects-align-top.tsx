
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-top` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-top?s=sharp-light objects-align-top}
 * @preview ![objects-align-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/objects-align-top.svg)
 */
const ObjectsAlignTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0L0 0 0 32l512 0 0-32zM192 160l0 320-96 0 0-320 96 0zM96 128l-32 0 0 32 0 320 0 32 32 0 96 0 32 0 0-32 0-320 0-32-32 0-96 0zm320 32l0 192-96 0 0-192 96 0zm-96-32l-32 0 0 32 0 192 0 32 32 0 96 0 32 0 0-32 0-192 0-32-32 0-96 0z" />
    </Icon>
);

export default ObjectsAlignTop;
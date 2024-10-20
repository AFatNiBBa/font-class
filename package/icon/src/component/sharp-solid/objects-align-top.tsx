
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-top` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-top?s=sharp-solid objects-align-top}
 * @preview ![objects-align-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/objects-align-top.svg)
 */
const ObjectsAlignTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 0l0 48L0 48 0 0 512 0zM64 128l160 0 0 384L64 512l0-384zm224 0l160 0 0 256-160 0 0-256z" />
    </Icon>
);

export default ObjectsAlignTop;
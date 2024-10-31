
import { Icon } from "../../index";

/**
 * A component that renders the `objects-align-bottom` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/objects-align-bottom?s=sharp-solid objects-align-bottom}
 * @preview ![objects-align-bottom](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/objects-align-bottom.svg)
 */
const ObjectsAlignBottom: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 512l0-48L0 464l0 48 512 0zM64 384l160 0L224 0 64 0l0 384zm224 0l160 0 0-256-160 0 0 256z" />
    </Icon>
);

export default ObjectsAlignBottom;
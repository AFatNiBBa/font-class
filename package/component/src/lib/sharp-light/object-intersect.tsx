
import { Icon } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=sharp-light object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32L32 32l0 64L0 96 0 32 0 0 32 0 96 0l0 32zm32 0l0-32 96 0 0 32-96 0zM0 128l32 0 0 96L0 224l0-96zM320 32l-64 0 0-32 64 0 32 0 0 32 0 96-32 0 0-96zm0 128l32 0 0 32 0 64 0 64 0 32-32 0-96 0-32 0-32 0 0-32 0-64 0-64 0-32 32 0 96 0 32 0zM160 384l32 0 0 96 64 0 0 32-64 0-32 0 0-32 0-96zm-32-32l-96 0L0 352l0-32 0-64 32 0 0 64 96 0 0 32zM384 192l0-32 96 0 32 0 0 32 0 64-32 0 0-64-96 0zM288 512l0-32 96 0 0 32-96 0zm192 0l-64 0 0-32 64 0 0-64 32 0 0 64 0 32-32 0zm32-128l-32 0 0-96 32 0 0 96zM320 192l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default ObjectIntersect;
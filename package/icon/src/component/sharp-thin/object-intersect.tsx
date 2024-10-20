
import { Icon } from "../../index";

/**
 * A component that renders the `object-intersect` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-intersect?s=sharp-thin object-intersect}
 * @preview ![object-intersect](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/object-intersect.svg)
 */
const ObjectIntersect: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 16L16 16l0 80L0 96 0 16 0 0 16 0 96 0l0 16zm32 0l0-16 96 0 0 16-96 0zM0 128l16 0 0 96L0 224l0-96zM336 16l-80 0 0-16 80 0 16 0 0 16 0 112-16 0 0-112zm0 144l16 0 0 16 0 80 0 80 0 16-16 0-112 0-48 0-16 0 0-16 0-80 0-80 0-16 16 0 112 0 48 0zM160 384l16 0 0 112 80 0 0 16-80 0-16 0 0-16 0-112zm-32-32L16 352 0 352l0-16 0-80 16 0 0 80 112 0 0 16zM384 176l0-16 112 0 16 0 0 16 0 80-16 0 0-80-112 0zm32 336l0-16 80 0 0-80 16 0 0 80 0 16-16 0-80 0zm80-224l16 0 0 96-16 0 0-96zM288 512l0-16 96 0 0 16-96 0zM176 176l0 160 160 0 0-160-160 0z" />
    </Icon>
);

export default ObjectIntersect;
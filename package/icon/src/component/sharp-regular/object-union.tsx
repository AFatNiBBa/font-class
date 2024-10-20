
import { Icon } from "../../index";

/**
 * A component that renders the `object-union` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-union?s=sharp-regular object-union}
 * @preview ![object-union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/object-union.svg)
 */
const ObjectUnion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 352l48 0 0 48 0 64 0 48 48 0 256 0 48 0 0-48 0-256 0-48-48 0-64 0-48 0 0-48 0-64 0-48L304 0 48 0 0 0 0 48 0 304l0 48 48 0 64 0zM48 304L48 48l256 0 0 112 0 48 48 0 112 0 0 256-256 0 0-112 0-48-48 0L48 304z" />
    </Icon>
);

export default ObjectUnion;
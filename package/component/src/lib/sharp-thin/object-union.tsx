
import { Icon } from "../../index";

/**
 * A component that renders the `object-union` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-union?s=sharp-thin object-union}
 * @preview ![object-union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/object-union.svg)
 */
const ObjectUnion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 352l16 0 0 16 0 128 0 16 16 0 320 0 16 0 0-16 0-320 0-16-16 0-128 0-16 0 0-16 0-128 0-16L336 0 16 0 0 0 0 16 0 336l0 16 16 0 128 0zM16 336L16 16l320 0 0 144 0 16 16 0 144 0 0 320-320 0 0-144 0-16-16 0L16 336z" />
    </Icon>
);

export default ObjectUnion;

import { Icon } from "../../index";

/**
 * A component that renders the `object-union` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-union?s=sharp-solid object-union}
 * @preview ![object-union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/object-union.svg)
 */
const ObjectUnion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 0L0 0 0 352l160 0 0 160 352 0 0-352-160 0L352 0z" />
    </Icon>
);

export default ObjectUnion;
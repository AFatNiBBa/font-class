
import { Icon } from "../../index";

/**
 * A component that renders the `object-union` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-union?s=duotone object-union}
 * @preview ![object-union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/object-union.svg)
 */
const ObjectUnion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 288c0 35.3 28.7 64 64 64l96 0 0 96c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-96 0 0-96c0-35.3-28.7-64-64-64L64 0z" />
    </Icon>
);

export default ObjectUnion;
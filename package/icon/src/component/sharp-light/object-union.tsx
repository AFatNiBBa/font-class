
import { Icon } from "../../index";

/**
 * A component that renders the `object-union` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-union?s=sharp-light object-union}
 * @preview ![object-union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/object-union.svg)
 */
const ObjectUnion: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 352l32 0 0 32 0 96 0 32 32 0 288 0 32 0 0-32 0-288 0-32-32 0-96 0-32 0 0-32 0-96 0-32L320 0 32 0 0 0 0 32 0 320l0 32 32 0 96 0zM32 320L32 32l288 0 0 128 0 32 32 0 128 0 0 288-288 0 0-128 0-32-32 0L32 320z" />
    </Icon>
);

export default ObjectUnion;
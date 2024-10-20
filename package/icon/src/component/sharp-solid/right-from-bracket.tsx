
import { Icon } from "../../index";

/**
 * A component that renders the `right-from-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-bracket?s=sharp-solid right-from-bracket}
 * @preview ![right-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right-from-bracket.svg)
 */
const RightFromBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 96L512 256 352 416l-32 0 0-96-160 0 0-128 160 0 0-96 32 0zM160 96L64 96l0 320 96 0 32 0 0 64-32 0L32 480 0 480l0-32L0 64 0 32l32 0 128 0 32 0 0 64-32 0z" />
    </Icon>
);

export default RightFromBracket;
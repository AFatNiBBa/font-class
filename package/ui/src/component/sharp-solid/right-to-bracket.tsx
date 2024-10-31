
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-bracket?s=sharp-solid right-to-bracket}
 * @preview ![right-to-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right-to-bracket.svg)
 */
const RightToBracket: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 96L352 256 192 416l-32 0 0-96L0 320 0 192l160 0 0-96 32 0zM352 416l96 0 0-320-96 0-32 0 0-64 32 0 128 0 32 0 0 32 0 384 0 32-32 0-128 0-32 0 0-64 32 0z" />
    </Icon>
);

export default RightToBracket;
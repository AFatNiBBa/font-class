
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=sharp-regular turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 248l48 0 160 0 48 0 0 48 0 136 48 0 0-232-256 0-48 0 0-48 0-20.1L67.9 224 160 316.1l0-20.1 0-48zM33.9 257.9L0 224l33.9-33.9L160 64l48 0 0 40 0 8 0 40 48 0 208 0 48 0 0 48 0 232 0 48-48 0-48 0-48 0 0-48 0-88 0-48-48 0-64 0-48 0 0 40 0 8 0 40-48 0L33.9 257.9z" />
    </Icon>
);

export default TurnLeft;
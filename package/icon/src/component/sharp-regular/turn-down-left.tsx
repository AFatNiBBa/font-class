
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=sharp-regular turn-down-left}
 * @preview ![turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/turn-down-left.svg)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 264l48 0 160 0 48 0 0-48 0-136 48 0 0 232-256 0-48 0 0 48 0 20.1L67.9 288 160 195.9l0 20.1 0 48zM33.9 254.1L0 288l33.9 33.9L160 448l48 0 0-40 0-8 0-40 48 0 208 0 48 0 0-48 0-232 0-48-48 0-48 0-48 0 0 48 0 88 0 48-48 0-64 0-48 0 0-40 0-8 0-40-48 0L33.9 254.1z" />
    </Icon>
);

export default TurnDownLeft;
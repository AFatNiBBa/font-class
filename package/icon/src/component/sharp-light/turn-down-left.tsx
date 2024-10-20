
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=sharp-light turn-down-left}
 * @preview ![turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/turn-down-left.svg)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 256l32 0 192 0 32 0 0-32 0-160 64 0 0 256-288 0-32 0 0 32 0 50.7L45.3 288 160 173.3l0 50.7 0 32zm32-96l0-32-32 0L22.6 265.4 0 288l22.6 22.6L160 448l32 0 0-32 0-32 0-32 32 0 256 0 32 0 0-32 0-256 0-32-32 0-64 0-32 0 0 32 0 128 0 32-32 0-128 0-32 0 0-32 0-32z" />
    </Icon>
);

export default TurnDownLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=sharp-light turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 256l32 0 192 0 32 0 0 32 0 160 64 0 0-256-288 0-32 0 0-32 0-50.7L45.3 224 160 338.7l0-50.7 0-32zm32 96l0 32-32 0L22.6 246.6 0 224l22.6-22.6L160 64l32 0 0 32 0 32 0 32 32 0 256 0 32 0 0 32 0 256 0 32-32 0-64 0-32 0 0-32 0-128 0-32-32 0-128 0-32 0 0 32 0 32z" />
    </Icon>
);

export default TurnLeft;
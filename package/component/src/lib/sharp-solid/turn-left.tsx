
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left?s=sharp-solid turn-left}
 * @preview ![turn-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turn-left.svg)
 */
const TurnLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 224L160 64l32 0 0 112 320 0 0 304-96 0 0-208-224 0 0 112-32 0L0 224z" />
    </Icon>
);

export default TurnLeft;
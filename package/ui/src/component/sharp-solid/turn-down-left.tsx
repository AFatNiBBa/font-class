
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-left?s=sharp-solid turn-down-left}
 * @preview ![turn-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turn-down-left.svg)
 */
const TurnDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 288L160 448l32 0 0-112 320 0 0-304-96 0 0 208-224 0 0-112-32 0L0 288z" />
    </Icon>
);

export default TurnDownLeft;
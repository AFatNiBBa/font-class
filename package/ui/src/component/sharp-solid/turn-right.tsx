
import { Icon } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=sharp-solid turn-right}
 * @preview ![turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turn-right.svg)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 224L352 64l-32 0 0 112L0 176 0 480l96 0 0-208 224 0 0 112 32 0L512 224z" />
    </Icon>
);

export default TurnRight;
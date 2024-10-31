
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=sharp-solid turn-down-right}
 * @preview ![turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turn-down-right.svg)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 288L352 448l-32 0 0-112L0 336 0 32l96 0 0 208 224 0 0-112 32 0L512 288z" />
    </Icon>
);

export default TurnDownRight;
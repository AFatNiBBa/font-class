
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=sharp-thin turn-down-right}
 * @preview ![turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/turn-down-right.svg)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 256l-16 0L96 256l-16 0 0-16L80 48 16 48l0 272 304 0 16 0 0 16 0 96 9.4 0 144-144-144-144-9.4 0 0 96 0 16zm16-128L500.7 276.7 512 288l-11.3 11.3L352 448l-16 0-16 0 0-16 0-80 0-16-16 0L16 336 0 336l0-16L0 48 0 32l16 0 64 0 16 0 0 16 0 176 0 16 16 0 192 0 16 0 0-16 0-80 0-16 16 0 16 0z" />
    </Icon>
);

export default TurnDownRight;
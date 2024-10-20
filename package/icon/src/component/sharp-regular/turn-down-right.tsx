
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=sharp-regular turn-down-right}
 * @preview ![turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/turn-down-right.svg)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M352 264l-48 0-160 0-48 0 0-48L96 80 48 80l0 232 256 0 48 0 0 48 0 20.1L444.1 288 352 195.9l0 20.1 0 48zm126.1-9.9L512 288l-33.9 33.9L352 448l-48 0 0-40 0-8 0-40-48 0L48 360 0 360l0-48L0 80 0 32l48 0 48 0 48 0 0 48 0 88 0 48 48 0 64 0 48 0 0-40 0-8 0-40 48 0L478.1 254.1z" />
    </Icon>
);

export default TurnDownRight;
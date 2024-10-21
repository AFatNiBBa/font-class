
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left-down?s=sharp-solid turn-left-down}
 * @preview ![turn-left-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turn-left-down.svg)
 */
const TurnLeftDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512L32 352l0-32 112 0L144 0 384 0l0 96L240 96l0 224 112 0 0 32L192 512z" />
    </Icon>
);

export default TurnLeftDown;
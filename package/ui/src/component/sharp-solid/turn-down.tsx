
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=sharp-solid turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 512L352 352l0-32-112 0L240 0 0 0 0 96l144 0 0 224L32 320l0 32L192 512z" />
    </Icon>
);

export default TurnDown;
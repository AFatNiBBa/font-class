
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=sharp-thin turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M160 336l0-16 0-224 0-16-16 0L16 80l0-64 208 0 0 304 0 16 16 0 96 0 0 9.4-144 144L48 345.4l0-9.4 96 0 16 0zM32 352L180.7 500.7 192 512l11.3-11.3L352 352l0-16 0-16-16 0-80 0-16 0 0-16 0-288 0-16L224 0 16 0 0 0 0 16 0 80 0 96l16 0 112 0 16 0 0 16 0 192 0 16-16 0-80 0-16 0 0 16 0 16z" />
    </Icon>
);

export default TurnDown;
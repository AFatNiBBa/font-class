
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=sharp-solid arrow-turn-down}
 * @preview ![arrow-turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-turn-down.svg)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 64L0 64 0 0 32 0 192 0l32 0 0 32 0 357.5 73.4-73.4L320 293.5l45.3 45.3-22.6 22.6-128 128L192 512l-22.6-22.6-128-128L18.7 338.7 64 293.5l22.6 22.6L160 389.5 160 64 32 64z" />
    </Icon>
);

export default ArrowTurnDown;
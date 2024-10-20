
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-down?s=sharp-regular arrow-turn-down}
 * @preview ![arrow-turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-turn-down.svg)
 */
const ArrowTurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M24 48L0 48 0 0 24 0 192 0l24 0 0 24 0 394.9 79-79 17-17 33.9 33.9-17 17-113 113 0 1.3-1.3 0-5.8 5.8-17 17-17-17-5.8-5.8-1.3 0 0-1.3L55 373.8l-17-17L72 322.9l17 17 79 79L168 48 24 48z" />
    </Icon>
);

export default ArrowTurnDown;
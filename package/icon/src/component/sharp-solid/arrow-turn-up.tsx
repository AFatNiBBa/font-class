
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-turn-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-turn-up?s=sharp-solid arrow-turn-up}
 * @preview ![arrow-turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-turn-up.svg)
 */
const ArrowTurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 448L0 448l0 64 32 0 160 0 32 0 0-32 0-357.5 73.4 73.4L320 218.5l45.3-45.3-22.6-22.6-128-128L192 0 169.4 22.6l-128 128L18.7 173.3 64 218.5l22.6-22.6L160 122.5 160 448 32 448z" />
    </Icon>
);

export default ArrowTurnUp;
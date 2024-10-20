
import { Icon } from "../../index";

/**
 * A component that renders the `turn-left-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left-up?s=sharp-solid turn-left-up}
 * @preview ![turn-left-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turn-left-up.svg)
 */
const TurnLeftUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0L32 160l0 32 112 0 0 320 240 0 0-96-144 0 0-224 112 0 0-32L192 0z" />
    </Icon>
);

export default TurnLeftUp;
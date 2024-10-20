
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=sharp-solid turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 0L352 160l0 32-112 0 0 320L0 512l0-96 144 0 0-224L32 192l0-32L192 0z" />
    </Icon>
);

export default TurnUp;
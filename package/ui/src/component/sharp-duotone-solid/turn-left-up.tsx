
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-left-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-left-up?s=sharp-duotone-solid turn-left-up}
 * @preview ![turn-left-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turn-left-up.svg)
 */
const TurnLeftUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M144 192l0 320 240 0 0-96-144 0 0-224-96 0z" />
        <path d="M32 160L192 0 352 160l0 32L32 192l0-32z" />
    </Icon>
);

export default TurnLeftUp;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=sharp-duotone-solid turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 96 48 0 144 0 48 0 0-48 0-272-96 0 0 224-96 0L0 416z" />
        <path d="M352 160L192 0 32 160l0 32 320 0 0-32z" />
    </Icon>
);

export default TurnUp;
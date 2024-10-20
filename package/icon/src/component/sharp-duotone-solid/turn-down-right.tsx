
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=sharp-duotone-solid turn-down-right}
 * @preview ![turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/turn-down-right.svg)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 80 0 288l0 48 48 0 272 0 0-96L96 240 96 80l0-48L0 32z" />
        <path d="M352 448L512 288 352 128l-32 0 0 320 32 0z" />
    </Icon>
);

export default TurnDownRight;
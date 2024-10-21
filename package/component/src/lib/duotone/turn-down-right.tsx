
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down-right?s=duotone turn-down-right}
 * @preview ![turn-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turn-down-right.svg)
 */
const TurnDownRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 224c0 61.9 50.1 112 112 112l208 0 0-96-208 0c-8.8 0-16-7.2-16-16L96 64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64z" />
        <path d="M360.5 441.4c-7 6.6-17.2 8.4-26 4.6s-14.5-12.5-14.5-22l0-272c0-9.6 5.7-18.2 14.5-22s19-2 26 4.6l144 136c4.8 4.5 7.5 10.8 7.5 17.4s-2.7 12.9-7.5 17.4l-144 136z" />
    </Icon>
);

export default TurnDownRight;
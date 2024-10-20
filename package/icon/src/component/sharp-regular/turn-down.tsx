
import { Icon } from "../../index";

/**
 * A component that renders the `turn-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-down?s=sharp-regular turn-down}
 * @preview ![turn-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/turn-down.svg)
 */
const TurnDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M120 192l0-48-48 0-24 0L0 144 0 96 0 48 0 0 48 0 216 0l48 0 0 48 0 208 0 48 40 0 8 0 40 0 0 48L225.9 478.1 192 512l-33.9-33.9L32 352l0-48 40 0 8 0 40 0 0-48 0-64zM99.9 352L192 444.1 284.1 352 264 352l-48 0 0-48 0-256L48 48l0 48 72 0 48 0 0 48 0 160 0 48-48 0-20.1 0z" />
    </Icon>
);

export default TurnDown;
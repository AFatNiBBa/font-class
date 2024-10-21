
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-from-bracket?s=sharp-duotone-solid money-from-bracket}
 * @preview ![money-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-from-bracket.svg)
 */
const MoneyFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 96l0 416 384 0 0-416L128 96zm64 288c35.3 0 64 28.7 64 64l-64 0 0-64zm32-112c0-44.2 43-80 96-80s96 35.8 96 80s-43 80-96 80s-96-35.8-96-80zM384 448c0-35.3 28.7-64 64-64l0 64-64 0z" />
        <path d="M0 0L32 0 608 0l32 0 0 32 0 128 0 32-64 0 0-32 0-96L64 64l0 96 0 32L0 192l0-32L0 32 0 0z" />
    </Icon>
);

export default MoneyFromBracket;
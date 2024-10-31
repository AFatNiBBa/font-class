
import { Icon, generic } from "../../index";

/**
 * A component that renders the `money-simple-from-bracket` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-simple-from-bracket?s=sharp-duotone-solid money-simple-from-bracket}
 * @preview ![money-simple-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/money-simple-from-bracket.svg)
 */
const MoneySimpleFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M128 96l0 416 384 0 0-416L128 96zm96 176c0-44.2 43-80 96-80s96 35.8 96 80s-43 80-96 80s-96-35.8-96-80z" />
        <path d="M0 0L32 0 608 0l32 0 0 32 0 128 0 32-64 0 0-32 0-96L64 64l0 96 0 32L0 192l0-32L0 32 0 0z" />
    </Icon>
);

export default MoneySimpleFromBracket;
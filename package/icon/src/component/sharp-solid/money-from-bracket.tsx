
import { Icon } from "../../index";

/**
 * A component that renders the `money-from-bracket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-from-bracket?s=sharp-solid money-from-bracket}
 * @preview ![money-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/money-from-bracket.svg)
 */
const MoneyFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 0L608 0l32 0 0 32 0 128 0 32-64 0 0-32 0-96L64 64l0 96 0 32L0 192l0-32L0 32 0 0 32 0zM512 96l0 416-384 0 0-416 384 0zM256 448c0-35.3-28.7-64-64-64l0 64 64 0zm192-64c-35.3 0-64 28.7-64 64l64 0 0-64zM320 352c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80z" />
    </Icon>
);

export default MoneyFromBracket;
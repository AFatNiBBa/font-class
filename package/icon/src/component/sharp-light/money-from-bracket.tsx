
import { Icon } from "../../index";

/**
 * A component that renders the `money-from-bracket` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-from-bracket?s=sharp-light money-from-bracket}
 * @preview ![money-from-bracket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/money-from-bracket.svg)
 */
const MoneyFromBracket: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L16 0 624 0l16 0 0 16 0 160 0 16-32 0 0-16 0-144L32 32l0 144 0 16L0 192l0-16L0 16 0 0zM512 96l0 16 0 384 0 16-16 0-352 0-16 0 0-16 0-384 0-16 32 0 0 16 0 272c53 0 96 43 96 96l128 0c0-53 43-96 96-96l0-272 0-16 32 0zM224 480c0-35.3-28.7-64-64-64l0 64 64 0zm256 0l0-64c-35.3 0-64 28.7-64 64l64 0zM320 208c-47 0-80 31.3-80 64s33 64 80 64s80-31.3 80-64s-33-64-80-64zm112 64c0 55.6-53 96-112 96s-112-40.4-112-96s53-96 112-96s112 40.4 112 96z" />
    </Icon>
);

export default MoneyFromBracket;
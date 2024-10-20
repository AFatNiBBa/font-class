
import { Icon } from "../../index";

/**
 * A component that renders the `money-bills-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bills-simple?s=thin money-bills-simple}
 * @preview ![money-bills-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/money-bills-simple.svg)
 */
const MoneyBillsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 48c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-416 0c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l416 0zM160 32c-35.3 0-64 28.7-64 64l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32zM64 128c-35.3 0-64 28.7-64 64L0 416c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l0-16zm224 80a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm176 0a96 96 0 1 0 -192 0 96 96 0 1 0 192 0z" />
    </Icon>
);

export default MoneyBillsSimple;
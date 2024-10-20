
import { Icon } from "../../index";

/**
 * A component that renders the `money-bill-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/money-bill-simple?s=thin money-bill-simple}
 * @preview ![money-bill-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/money-bill-simple.svg)
 */
const MoneyBillSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M64 80c-26.5 0-48 21.5-48 48l0 256c0 26.5 21.5 48 48 48l448 0c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48L64 80zM0 128C0 92.7 28.7 64 64 64l448 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM368 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-176 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </Icon>
);

export default MoneyBillSimple;
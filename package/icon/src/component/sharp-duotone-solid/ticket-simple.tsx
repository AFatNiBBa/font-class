
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=sharp-duotone-solid ticket-simple}
 * @preview ![ticket-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ticket-simple.svg)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l576 0 0 144c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 144L0 448 0 304c26.5 0 48-21.5 48-48s-21.5-48-48-48L0 64z" />
    </Icon>
);

export default TicketSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=sharp-regular ticket-simple}
 * @preview ![ticket-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ticket-simple.svg)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 112L0 64l48 0 480 0 48 0 0 48 0 48 0 48c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 48 0 48 0 48-48 0L48 448 0 448l0-48 0-48 0-48c26.5 0 48-21.5 48-48s-21.5-48-48-48l0-48 0-48zm48 60.8c28.7 16.6 48 47.6 48 83.2s-19.3 66.6-48 83.2L48 400l480 0 0-60.8c-28.7-16.6-48-47.6-48-83.2s19.3-66.6 48-83.2l0-60.8L48 112l0 60.8z" />
    </Icon>
);

export default TicketSimple;
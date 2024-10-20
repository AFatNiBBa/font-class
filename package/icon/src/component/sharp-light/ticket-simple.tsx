
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=sharp-light ticket-simple}
 * @preview ![ticket-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ticket-simple.svg)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96L0 64l32 0 512 0 32 0 0 32 0 80 0 32c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 32 0 80 0 32-32 0L32 448 0 448l0-32 0-80 0-32c26.5 0 48-21.5 48-48s-21.5-48-48-48l0-32L0 96zm32 86.7C60.3 195 80 223.2 80 256s-19.7 61-48 73.3L32 416l512 0 0-86.7c-28.3-12.3-48-40.5-48-73.3s19.7-61 48-73.3L544 96 32 96l0 86.7z" />
    </Icon>
);

export default TicketSimple;
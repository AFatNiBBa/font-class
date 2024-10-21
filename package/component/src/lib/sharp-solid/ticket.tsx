
import { Icon } from "../../index";

/**
 * A component that renders the `ticket` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=sharp-solid ticket}
 * @preview ![ticket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ticket.svg)
 */
const Ticket: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 64L0 64 0 208c26.5 0 48 21.5 48 48s-21.5 48-48 48L0 448l576 0 0-144c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-144zM128 160l0 192 320 0 0-192-320 0zM96 128l32 0 320 0 32 0 0 32 0 192 0 32-32 0-320 0-32 0 0-32 0-192 0-32z" />
    </Icon>
);

export default Ticket;
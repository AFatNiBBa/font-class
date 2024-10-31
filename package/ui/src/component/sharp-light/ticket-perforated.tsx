
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-perforated` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-perforated?s=sharp-light ticket-perforated}
 * @preview ![ticket-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ticket-perforated.svg)
 */
const TicketPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 64L0 96 0 416l0 32 32 0 576 0 32 0 0-32 0-80 0-32-16 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l16 0 0-32 0-80 0-32-32 0L32 64 0 64zM608 416L32 416 32 96l576 0 0 81.6c-36.5 7.4-64 39.7-64 78.4s27.5 71 64 78.4l0 81.6zM480 160a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default TicketPerforated;
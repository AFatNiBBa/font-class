
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=sharp-solid tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 32L96 32l0 128c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 128 544 0 0-128c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-128zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default TicketsSimple;
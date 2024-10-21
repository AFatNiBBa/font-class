
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=sharp-light tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32l0 32 0 72 0 32c22.1 0 40 17.9 40 40s-17.9 40-40 40l0 32 0 72 0 32 32 0 480 0 32 0 0-32 0-72 0-32c-22.1 0-40-17.9-40-40s17.9-40 40-40l0-32 0-72 0-32-32 0L128 32 96 32zm72 176c0-28.3-16.3-52.7-40-64.5L128 64l480 0 0 79.5c-23.7 11.8-40 36.2-40 64.5s16.3 52.7 40 64.5l0 79.5-480 0 0-79.5c23.7-11.8 40-36.2 40-64.5zM32 112l0-16L0 96l0 16L0 464l0 16 16 0 512 0 16 0 0-32-16 0L32 448l0-336z" />
    </Icon>
);

export default TicketsSimple;
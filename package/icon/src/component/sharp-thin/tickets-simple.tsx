
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=sharp-thin tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 32l0 16 0 96 0 16c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 16 0 96 0 16 16 0 512 0 16 0 0-16 0-96 0-16c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-16 0-96 0-16-16 0L112 32 96 32zm64 176c0-29.8-20.4-54.9-48-62l0-98 512 0 0 98c-27.6 7.1-48 32.2-48 62s20.4 54.9 48 62l0 98-512 0 0-98c27.6-7.1 48-32.2 48-62zM16 96l0-8L0 88l0 8L0 472l0 8 8 0 544 0 8 0 0-16-8 0L16 464 16 96z" />
    </Icon>
);

export default TicketsSimple;
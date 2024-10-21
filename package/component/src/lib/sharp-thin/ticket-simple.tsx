
import { Icon } from "../../index";

/**
 * A component that renders the `ticket-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-simple?s=sharp-thin ticket-simple}
 * @preview ![ticket-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ticket-simple.svg)
 */
const TicketSimple: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 80L0 64l16 0 544 0 16 0 0 16 0 112 0 16c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 16 0 112 0 16-16 0L16 448 0 448l0-16L0 320l0-16c26.5 0 48-21.5 48-48s-21.5-48-48-48l0-16L0 80zM16 194c27.6 7.1 48 32.2 48 62s-20.4 54.9-48 62l0 114 544 0 0-114c-27.6-7.1-48-32.2-48-62s20.4-54.9 48-62l0-114L16 80l0 114z" />
    </Icon>
);

export default TicketSimple;
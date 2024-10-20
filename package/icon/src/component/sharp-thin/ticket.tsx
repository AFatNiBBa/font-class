
import { Icon } from "../../index";

/**
 * A component that renders the `ticket` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket?s=sharp-thin ticket}
 * @preview ![ticket](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ticket.svg)
 */
const Ticket: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 64L0 80 0 192l0 16c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 16L0 432l0 16 16 0 544 0 16 0 0-16 0-112 0-16c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-16 0-112 0-16-16 0L16 64 0 64zM64 256c0-29.8-20.4-54.9-48-62L16 80l544 0 0 114c-27.6 7.1-48 32.2-48 62s20.4 54.9 48 62l0 114L16 432l0-114c27.6-7.1 48-32.2 48-62zm80-80l288 0 0 160-288 0 0-160zm-16-16l0 16 0 160 0 16 16 0 288 0 16 0 0-16 0-160 0-16-16 0-288 0-16 0z" />
    </Icon>
);

export default Ticket;
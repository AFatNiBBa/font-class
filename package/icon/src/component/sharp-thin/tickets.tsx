
import { Icon } from "../../index";

/**
 * A component that renders the `tickets` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets?s=sharp-thin tickets}
 * @preview ![tickets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tickets.svg)
 */
const Tickets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 48l0-16 16 0 512 0 16 0 0 16 0 96 0 16c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 16 0 96 0 16-16 0-512 0-16 0 0-16 0-96 0-16c26.5 0 48-21.5 48-48s-21.5-48-48-48l0-16 0-96zm16 98c27.6 7.1 48 32.2 48 62s-20.4 54.9-48 62l0 98 512 0 0-98c-27.6-7.1-48-32.2-48-62s20.4-54.9 48-62l0-98L112 48l0 98zM16 88l0 8 0 368 536 0 8 0 0 16-8 0L8 480l-8 0 0-8L0 96l0-8 16 0zm208 40l0 160 288 0 0-160-288 0zm-16-16l16 0 288 0 16 0 0 16 0 160 0 16-16 0-288 0-16 0 0-16 0-160 0-16z" />
    </Icon>
);

export default Tickets;
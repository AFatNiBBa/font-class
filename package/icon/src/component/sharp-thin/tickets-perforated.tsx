
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-perforated` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-perforated?s=sharp-thin tickets-perforated}
 * @preview ![tickets-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/tickets-perforated.svg)
 */
const TicketsPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M624 48l0 98c-27.6 7.1-48 32.2-48 62s20.4 54.9 48 62l0 98-512 0 0-320 512 0zm16 96l0-96 0-16-16 0L112 32 96 32l0 16 0 320 0 16 16 0 512 0 16 0 0-16 0-96 0-16c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-16zM496 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM16 96l0-8L0 88l0 8L0 472l0 8 8 0 544 0 8 0 0-16-8 0L16 464 16 96z" />
    </Icon>
);

export default TicketsPerforated;

import { Icon } from "../../index";

/**
 * A component that renders the `tickets-perforated` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-perforated?s=sharp-light tickets-perforated}
 * @preview ![tickets-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/tickets-perforated.svg)
 */
const TicketsPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 64l0 79.5c-23.7 11.8-40 36.2-40 64.5s16.3 52.7 40 64.5l0 79.5-480 0 0-288 480 0zm32 72l0-72 0-32-32 0L128 32 96 32l0 32 0 288 0 32 32 0 480 0 32 0 0-32 0-72 0-32c-22.1 0-40-17.9-40-40s17.9-40 40-40l0-32zm-144-8a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM32 112l0-16L0 96l0 16L0 464l0 16 16 0 512 0 16 0 0-32-16 0L32 448l0-336z" />
    </Icon>
);

export default TicketsPerforated;
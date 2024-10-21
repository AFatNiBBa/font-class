
import { Icon } from "../../index";

/**
 * A component that renders the `tickets-perforated` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-perforated?s=sharp-regular tickets-perforated}
 * @preview ![tickets-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tickets-perforated.svg)
 */
const TicketsPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M592 80l0 54.2c-24.1 15.7-40 42.9-40 73.8s15.9 58.1 40 73.8l0 54.2-448 0 0-256 448 0zm48 40l0-40 0-48-48 0L144 32 96 32l0 48 0 256 0 48 48 0 448 0 48 0 0-48 0-40 0-48c-22.1 0-40-17.9-40-40s17.9-40 40-40l0-48zm-144 8a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default TicketsPerforated;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `ticket-perforated` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-perforated?s=sharp-duotone-solid ticket-perforated}
 * @preview ![ticket-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ticket-perforated.svg)
 */
const TicketPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 64l640 0 0 144c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 144L0 448 0 64zm416 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M416 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-16 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default TicketPerforated;
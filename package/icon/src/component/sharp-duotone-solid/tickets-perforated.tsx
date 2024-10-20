
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tickets-perforated` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-perforated?s=sharp-duotone-solid tickets-perforated}
 * @preview ![tickets-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tickets-perforated.svg)
 */
const TicketsPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l544 0 0 128c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 128L96 384 96 32zm416 80a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312zm496-8a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm0 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-16 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm16 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default TicketsPerforated;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `ticket-perforated` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-perforated?s=duotone ticket-perforated}
 * @preview ![ticket-perforated](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ticket-perforated.svg)
 */
const TicketPerforated: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128C0 92.7 28.7 64 64 64l512 0c35.3 0 64 28.7 64 64l0 48c0 8.8-7.3 15.8-15.8 18c-27.7 7-48.2 32.1-48.2 62s20.5 55 48.2 62c8.6 2.2 15.8 9.1 15.8 18l0 48c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zm416 0a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm0 64a16 16 0 1 0 32 0 16 16 0 1 0 -32 0z" />
        <path d="M416 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm0 64a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-16 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default TicketPerforated;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `tickets-airline` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-airline?s=sharp-duotone-solid tickets-airline}
 * @preview ![tickets-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tickets-airline.svg)
 */
const TicketsAirline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 352 544 0 0-128c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-128L96 32zm96 120l32 0 18.3 32 47.2 0L256 96l48 0 58.7 88 61.3 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-61.3 0L304 320l-48 0 33.5-88-47.2 0L224 264l-32 0 16-56-16-56zm352-40a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm0 64a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312zm241.5 64l-47.2 0L224 152l-32 0 16 56-16 56 32 0 18.3-32 47.2 0L256 320l48 0 58.7-88 61.3 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-61.3 0L304 96l-48 0 33.5 88z" />
    </Icon>
);

export default TicketsAirline;
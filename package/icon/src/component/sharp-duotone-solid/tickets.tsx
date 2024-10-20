
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tickets` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets?s=sharp-duotone-solid tickets}
 * @preview ![tickets](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tickets.svg)
 */
const Tickets: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 128c26.5 0 48 21.5 48 48s-21.5 48-48 48l0 128 544 0 0-128c-26.5 0-48-21.5-48-48s21.5-48 48-48l0-128L96 32zm96 64l32 0 288 0 32 0 0 32 0 160 0 32-32 0-288 0-32 0 0-32 0-160 0-32zm32 32l0 160 288 0 0-160-288 0z" />
        <path d="M48 120l0-24L0 96l0 24L0 456l0 24 24 0 496 0 24 0 0-48-24 0L48 432l0-312zm176 8l288 0 0 160-288 0 0-160zM192 96l0 32 0 160 0 32 32 0 288 0 32 0 0-32 0-160 0-32-32 0L224 96l-32 0z" />
    </Icon>
);

export default Tickets;
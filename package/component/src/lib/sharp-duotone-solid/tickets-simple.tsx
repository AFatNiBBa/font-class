
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tickets-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tickets-simple?s=sharp-duotone-solid tickets-simple}
 * @preview ![tickets-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tickets-simple.svg)
 */
const TicketsSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l544 0 0 128c-26.5 0-48 21.5-48 48s21.5 48 48 48l0 128L96 384l0-128c26.5 0 48-21.5 48-48s-21.5-48-48-48L96 32z" />
        <path d="M48 96l0 24 0 312 472 0 24 0 0 48-24 0L24 480 0 480l0-24L0 120 0 96l48 0z" />
    </Icon>
);

export default TicketsSimple;

import { Icon } from "../../index";

/**
 * A component that renders the `ticket-airline` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ticket-airline?s=sharp-regular ticket-airline}
 * @preview ![ticket-airline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/ticket-airline.svg)
 */
const TicketAirline: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 112L0 64l48 0 544 0 48 0 0 48 0 48 0 48-24 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l24 0 0 48 0 48 0 48-48 0L48 448 0 448l0-48L0 112zM48 400l544 0 0-51c-41.4-10.7-72-48.2-72-93s30.6-82.3 72-93l0-51L48 112l0 288zM432 144a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-16 80a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm16 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM186.7 224L160 144l56 0 46.7 80 40.3 0c16.1 0 31.5 6.4 42.8 17.7c7.9 7.9 7.9 20.7 0 28.5C334.4 281.6 319 288 302.9 288l-40.3 0L216 368l-56 0 26.7-80L144 288l-24 32-32 0 16-64L88 192l32 0 24 32 42.7 0z" />
    </Icon>
);

export default TicketAirline;
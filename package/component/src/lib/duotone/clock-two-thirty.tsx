
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-two-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two-thirty?s=duotone clock-two-thirty}
 * @preview ![clock-two-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-two-thirty.svg)
 */
const ClockTwoThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm232 0c0-8 4-15.5 10.7-20l96-64c4.1-2.7 8.7-4 13.3-4c7.8 0 15.4 3.8 20 10.7c2.7 4.1 4 8.7 4 13.3c0 7.8-3.8 15.4-10.7 20c-28.4 19-56.9 37.9-85.3 56.9c0 41.1 0 82.1 0 123.3c0 .7 0 1.5-.1 2.3s-.2 1.6-.4 2.4c-.3 1.6-.8 3.1-1.4 4.5c-1.2 2.9-3 5.5-5.1 7.6c-4.3 4.3-10.3 7-17 7c-13.3 0-24-10.7-24-24c0-45.3 0-90.7 0-136z" />
        <path d="M256 416c-13.3 0-24-10.7-24-24l0-136c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8 280 392c0 13.3-10.7 24-24 24z" />
    </Icon>
);

export default ClockTwoThirty;
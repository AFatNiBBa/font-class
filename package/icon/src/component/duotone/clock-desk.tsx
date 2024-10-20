
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=duotone clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M448 224A224 224 0 1 1 0 224a224 224 0 1 1 448 0zM200 120l0 104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 0-94.1c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        <path d="M248 120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l48 48c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-41-41 0-94.1zM448 224c0 123.7-100.3 224-224 224S0 347.7 0 224L0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-240z" />
    </Icon>
);

export default ClockDesk;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-desk` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-desk?s=sharp-duotone-solid clock-desk}
 * @preview ![clock-desk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clock-desk.svg)
 */
const ClockDesk: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224a224 224 0 1 0 448 0A224 224 0 1 0 0 224zM200 96l48 0 0 24 0 94.1 41 41 17 17L272 305.9l-17-17-48-48-7-7 0-9.9 0-104 0-24z" />
        <path d="M248 120l0-24-48 0 0 24 0 104 0 9.9 7 7 48 48 17 17L305.9 272l-17-17-41-41 0-94.1zM448 224c0 123.7-100.3 224-224 224S0 347.7 0 224L0 512l448 0 0-288z" />
    </Icon>
);

export default ClockDesk;
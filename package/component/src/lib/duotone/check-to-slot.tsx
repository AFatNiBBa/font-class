
import { Icon, generic } from "../../index";

/**
 * A component that renders the `check-to-slot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=duotone check-to-slot}
 * @preview ![check-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/check-to-slot.svg)
 */
const CheckToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 80l0 208 0 80 0 32 384 0 0-32 0-80 0-208c0-26.5-21.5-48-48-48L144 32c-26.5 0-48 21.5-48 48zm87 111c9.4-9.4 24.6-9.4 33.9 0l47 47L375 127c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c9.4 9.4 9.4 24.6 0 33.9L281 289c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9z" />
        <path d="M409 161L281 289c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L375 127c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM48 288l48 0 0 80-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l416 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0-80 48 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default CheckToSlot;
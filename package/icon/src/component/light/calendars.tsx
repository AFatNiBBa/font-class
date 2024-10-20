
import { Icon } from "../../index";

/**
 * A component that renders the `calendars` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=light calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 0c8.8 0 16 7.2 16 16l0 48 160 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 32 0c35.3 0 64 28.7 64 64l0 64 0 160c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-160 0-64c0-35.3 28.7-64 64-64l32 0 0-48c0-8.8 7.2-16 16-16zM160 96c-17.7 0-32 14.3-32 32l0 32 352 0 0-32c0-17.7-14.3-32-32-32L160 96zm320 96l-352 0 0 160c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-160zM32 208l0 176c0 53 43 96 96 96l240 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-240 0C57.3 512 0 454.7 0 384L0 208c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default Calendars;

import { Icon } from "../../index";

/**
 * A component that renders the `calendars` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=sharp-light calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0l0 16 0 48 160 0 0-48 0-16 32 0 0 16 0 48 64 0 32 0 0 32 0 96 0 192 0 32-32 0-352 0-32 0 0-32 0-192 0-96 0-32 32 0 64 0 0-48 0-16 32 0zM128 96l0 64 352 0 0-64L128 96zm352 96l-352 0 0 192 352 0 0-192zM32 208l0 272 336 0 16 0 0 32-16 0L16 512 0 512l0-16L0 208l0-16 32 0 0 16z" />
    </Icon>
);

export default Calendars;
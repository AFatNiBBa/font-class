
import { Icon } from "../../index";

/**
 * A component that renders the `calendars` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendars?s=sharp-regular calendars}
 * @preview ![calendars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/calendars.svg)
 */
const Calendars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 0l0 24 0 40 112 0 0-40 0-24 48 0 0 24 0 40 104 0 0 64 0 48 0 16 0 176 0 48-48 0-320 0-48 0 0-48 0-176 0-16 0-48 0-64 104 0 0-40 0-24 48 0zM144 192l0 176 320 0 0-176-320 0zm-96-8l0 280 344 0 24 0 0 48-24 0L24 512 0 512l0-24L0 184l0-24 48 0 0 24z" />
    </Icon>
);

export default Calendars;
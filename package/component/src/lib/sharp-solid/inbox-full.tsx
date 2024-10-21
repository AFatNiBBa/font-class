
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=sharp-solid inbox-full}
 * @preview ![inbox-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/inbox-full.svg)
 */
const InboxFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M71 32l25 0 320 0 25 0L447 56.2l64 256 1 3.8 0 3.9 0 128 0 32-32 0L32 480 0 480l0-32L0 320l0-3.9 1-3.8 64-256L71 32zm50 64L73 288l71 0 32 64 160 0 32-64 71 0L391 96 121 96zm55 48l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zm-32 80l224 0 16 0 0 32-16 0-224 0-16 0 0-32 16 0z" />
    </Icon>
);

export default InboxFull;
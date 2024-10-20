
import { Icon } from "../../index";

/**
 * A component that renders the `tablet-screen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-screen?s=sharp-regular tablet-screen}
 * @preview ![tablet-screen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tablet-screen.svg)
 */
const TabletScreen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 464l352 0 0-96L48 368l0 96zm0-144l352 0 0-272L48 48l0 272zM0 0L48 0 400 0l48 0 0 48 0 416 0 48-48 0L48 512 0 512l0-48L0 48 0 0zM192 400l64 0 16 0 0 32-16 0-64 0-16 0 0-32 16 0z" />
    </Icon>
);

export default TabletScreen;
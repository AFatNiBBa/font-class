
import { Icon } from "../../index";

/**
 * A component that renders the `network-wired` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/network-wired?s=sharp-regular network-wired}
 * @preview ![network-wired](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/network-wired.svg)
 */
const NetworkWired: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M400 48l0 96-160 0 0-96 160 0zM240 0L192 0l0 48 0 96 0 48 48 0 56 0 0 40L24 232 0 232l0 48 24 0 112 0 0 40-56 0-48 0 0 48 0 96 0 48 48 0 160 0 48 0 0-48 0-96 0-48-48 0-56 0 0-40 272 0 0 40-56 0-48 0 0 48 0 96 0 48 48 0 160 0 48 0 0-48 0-96 0-48-48 0-56 0 0-40 112 0 24 0 0-48-24 0-272 0 0-40 56 0 48 0 0-48 0-96 0-48L400 0 240 0zM80 368l160 0 0 96L80 464l0-96zm480 0l0 96-160 0 0-96 160 0z" />
    </Icon>
);

export default NetworkWired;
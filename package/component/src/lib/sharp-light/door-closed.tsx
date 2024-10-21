
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=sharp-light door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M448 32l0 448-320 0 0-448 320 0zm32 448l0-448 0-32L448 0 128 0 96 0l0 32 0 448-80 0L0 480l0 32 16 0 80 0 32 0 320 0 32 0 80 0 16 0 0-32-16 0-80 0zM408 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default DoorClosed;
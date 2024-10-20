
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=sharp-thin door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 16l0 480-352 0 0-480 352 0zM96 16l0 480L8 496l-8 0 0 16 8 0 88 0 16 0 352 0 16 0 88 0 8 0 0-16-8 0-88 0 0-480 0-16L464 0 112 0 96 0l0 16zM408 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80z" />
    </Icon>
);

export default DoorClosed;
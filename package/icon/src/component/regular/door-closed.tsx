
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=regular door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 48c8.8 0 16 7.2 16 16l0 400-288 0 0-400c0-8.8 7.2-16 16-16l256 0zm64 416l0-400c0-35.3-28.7-64-64-64L160 0C124.7 0 96 28.7 96 64l0 400-72 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 48 0 288 0 48 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-72 0zM368 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default DoorClosed;
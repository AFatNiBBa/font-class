
import { Icon } from "../../index";

/**
 * A component that renders the `door-closed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/door-closed?s=thin door-closed}
 * @preview ![door-closed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/door-closed.svg)
 */
const DoorClosed: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M416 16c26.5 0 48 21.5 48 48l0 432-352 0 0-432c0-26.5 21.5-48 48-48l256 0zM96 64l0 432L8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 16 0 352 0 16 0 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-88 0 0-432c0-35.3-28.7-64-64-64L160 0C124.7 0 96 28.7 96 64zM408 256a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm-24-40a40 40 0 1 0 0 80 40 40 0 1 0 0-80z" />
    </Icon>
);

export default DoorClosed;
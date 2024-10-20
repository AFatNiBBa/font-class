
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=light rectangle-wide}
 * @preview ![rectangle-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rectangle-wide.svg)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 96c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32L64 416c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l512 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64z" />
    </Icon>
);

export default RectangleWide;

import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-wide` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-wide?s=regular rectangle-wide}
 * @preview ![rectangle-wide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rectangle-wide.svg)
 */
const RectangleWide: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M576 112c8.8 0 16 7.2 16 16l0 256c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l512 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l512 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64z" />
    </Icon>
);

export default RectangleWide;
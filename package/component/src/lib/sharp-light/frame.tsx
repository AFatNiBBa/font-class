
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=sharp-light frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 128l0-32-64 0 0-64-32 0 0 64L96 96l0-64L64 32l0 64L0 96l0 32 64 0 0 256L0 384l0 32 64 0 0 64 32 0 0-64 256 0 0 64 32 0 0-64 64 0 0-32-64 0 0-256 64 0zM96 384l0-256 256 0 0 256L96 384z" />
    </Icon>
);

export default Frame;
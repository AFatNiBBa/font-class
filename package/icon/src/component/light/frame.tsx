
import { Icon } from "../../index";

/**
 * A component that renders the `frame` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frame?s=light frame}
 * @preview ![frame](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/frame.svg)
 */
const Frame: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 112c0-8.8-7.2-16-16-16l-48 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L96 96l0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 256-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 256 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0 0-256 48 0c8.8 0 16-7.2 16-16zM96 384l0-256 256 0 0 256L96 384z" />
    </Icon>
);

export default Frame;
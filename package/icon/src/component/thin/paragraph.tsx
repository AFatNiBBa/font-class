
import { Icon } from "../../index";

/**
 * A component that renders the `paragraph` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph?s=thin paragraph}
 * @preview ![paragraph](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/paragraph.svg)
 */
const Paragraph: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 176C32 96.5 96.5 32 176 32l72 0 8 0 176 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-64 0 0 424c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-424-80 0 0 424c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-152-80 0C96.5 320 32 255.5 32 176zM256 304l0-256-8 0-72 0C105.3 48 48 105.3 48 176s57.3 128 128 128l80 0z" />
    </Icon>
);

export default Paragraph;
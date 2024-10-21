
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter-line?s=sharp-solid highlighter-line}
 * @preview ![highlighter-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/highlighter-line.svg)
 */
const HighlighterLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M231.1 231.1L448.3 82.8l13 13L312.9 312.9l-81.8-81.8zM128 224l0 96s0 0 0 0L80 368l96 96 48-48 96 0L544 88 456 0 128 224zM70 403.3L4.6 468.7l-4.7 4.7 0 6.7 .1 16L.1 512 16 512l79.9 0 6.6 0 4.7-4.7 33.4-33.4L70 403.3zM248 464l-24 0 0 48 24 0 304 0 24 0 0-48-24 0-304 0z" />
    </Icon>
);

export default HighlighterLine;
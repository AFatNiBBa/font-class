
import { Icon } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=thin border-outer}
 * @preview ![border-outer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/border-outer.svg)
 */
const BorderOuter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 80a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm-80 80a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm80 16a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm112-16a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zM224 368a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
    </Icon>
);

export default BorderOuter;
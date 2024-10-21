
import { Icon } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=thin border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 456c0 4.4 3.6 8 8 8s8-3.6 8-8L16 88c0-22.1 17.9-40 40-40l368 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L56 32C25.1 32 0 57.1 0 88L0 456zm128-24a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm192 0a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm-96 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm192-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm0 64a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm0-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default BorderTopLeft;

import { Icon } from "../../index";

/**
 * A component that renders the `border-top-left` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-top-left?s=sharp-thin border-top-left}
 * @preview ![border-top-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/border-top-left.svg)
 */
const BorderTopLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 456l0 8 16 0 0-8L16 48l408 0 8 0 0-16-8 0L8 32 0 32l0 8L0 456zm112-24l0 32 32 0 0-32-32 0zm192 0l0 32 32 0 0-32-32 0zm-96 32l32 0 0-32-32 0 0 32zm192-32l0 32 32 0 0-32-32 0zm0-160l32 0 0-32-32 0 0 32zm0 64l0 32 32 0 0-32-32 0zm0-160l32 0 0-32-32 0 0 32z" />
    </Icon>
);

export default BorderTopLeft;
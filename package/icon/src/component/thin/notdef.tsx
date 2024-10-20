
import { Icon } from "../../index";

/**
 * A component that renders the `notdef` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/notdef?s=thin notdef}
 * @preview ![notdef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/notdef.svg)
 */
const Notdef: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 16c-1.9 0-3.7 .3-5.4 .9L192 242.5 357.4 16.9c-1.7-.6-3.5-.9-5.4-.9L32 16zM367.8 29.7L201.9 256 367.8 482.3c.1-.7 .2-1.5 .2-2.3l0-448c0-.8-.1-1.5-.2-2.3zM182.1 256L16.2 29.7c-.1 .7-.2 1.5-.2 2.3l0 448c0 .8 .1 1.5 .2 2.3L182.1 256zM26.6 495.1c1.7 .6 3.5 .9 5.4 .9l320 0c1.9 0 3.7-.3 5.4-.9L192 269.5 26.6 495.1zM0 32C0 14.3 14.3 0 32 0L352 0c17.7 0 32 14.3 32 32l0 448c0 17.7-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32L0 32z" />
    </Icon>
);

export default Notdef;
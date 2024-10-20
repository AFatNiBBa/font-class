
import { Icon } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=sharp-light apostrophe}
 * @preview ![apostrophe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/apostrophe.svg)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M80 352c61.9 0 112-50.1 112-112l0-16 0-32 0-64 0-64 0-32-32 0L32 32 0 32 0 64 0 192l0 32 32 0 128 0 0 16c0 44.2-35.8 80-80 80l-16 0 0 32 16 0zm80-160L32 192 32 64l128 0 0 64 0 64z" />
    </Icon>
);

export default Apostrophe;
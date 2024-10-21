
import { Icon } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=sharp-thin apostrophe}
 * @preview ![apostrophe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/apostrophe.svg)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M80 352c61.9 0 112-50.1 112-112l0-16 0-16 0-72 0-88 0-16-16 0L16 32 0 32 0 48 0 208l0 16 16 0 160 0 0 16c0 53-43 96-96 96l-8 0-8 0 0 16 8 0 8 0zm96-144L16 208 16 48l160 0 0 88 0 72z" />
    </Icon>
);

export default Apostrophe;
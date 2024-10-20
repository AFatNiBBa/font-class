
import { Icon } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=sharp-regular apostrophe}
 * @preview ![apostrophe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/apostrophe.svg)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M72 352c66.3 0 120-53.7 120-120l0-8 0-48 0-48 0-48 0-48-48 0L48 32 0 32 0 80l0 96 0 48 48 0 96 0 0 8c0 39.8-32.2 72-72 72l-16 0-24 0 0 48 24 0 16 0zm72-176l-96 0 0-96 96 0 0 48 0 48z" />
    </Icon>
);

export default Apostrophe;
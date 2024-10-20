
import { Icon } from "../../index";

/**
 * A component that renders the `greater-than-equal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/greater-than-equal?s=sharp-regular greater-than-equal}
 * @preview ![greater-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/greater-than-equal.svg)
 */
const GreaterThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400.4 169.5L32 32.3l0 51.2L323.2 192 32 300.5l0 51.2L400.4 214.5l15.6-5.8 0-33.3-15.6-5.8zM424 432L24 432 0 432l0 48 24 0 400 0 24 0 0-48-24 0z" />
    </Icon>
);

export default GreaterThanEqual;
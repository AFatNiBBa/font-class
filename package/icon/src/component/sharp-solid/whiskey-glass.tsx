
import { Icon } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=sharp-solid whiskey-glass}
 * @preview ![whiskey-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/whiskey-glass.svg)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M92.1 224L73.8 96l364.4 0L419.9 224 92.1 224zM64 480l384 0L502.9 96 512 32l-64.6 0L64.6 32 0 32 9.1 96 64 480z" />
    </Icon>
);

export default WhiskeyGlass;
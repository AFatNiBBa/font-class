
import { Icon } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=sharp-light whiskey-glass}
 * @preview ![whiskey-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/whiskey-glass.svg)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M68.9 288l374.2 0L420.2 448 91.8 448 68.9 288zm-4.6-32L36.9 64l438.2 0L447.7 256 64.3 256zM64 480l384 0L507.4 64 512 32l-32.3 0L32.3 32 0 32 4.6 64 64 480z" />
    </Icon>
);

export default WhiskeyGlass;
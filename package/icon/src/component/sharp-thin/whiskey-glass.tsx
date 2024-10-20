
import { Icon } from "../../index";

/**
 * A component that renders the `whiskey-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whiskey-glass?s=sharp-thin whiskey-glass}
 * @preview ![whiskey-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/whiskey-glass.svg)
 */
const WhiskeyGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M52.7 288l406.5 0L434.1 464 77.9 464 52.7 288zm-2.3-16L18.4 48l475.1 0-32 224L50.4 272zM64 480l384 0L509.7 48 512 32l-16.2 0L16.2 32 0 32 2.3 48 64 480z" />
    </Icon>
);

export default WhiskeyGlass;
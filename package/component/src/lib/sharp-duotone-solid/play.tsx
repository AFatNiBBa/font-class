
import { Icon } from "../../index";

/**
 * A component that renders the `play` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/play?s=sharp-duotone-solid play}
 * @preview ![play](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/play.svg)
 */
const Play: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 256L0 32V480L384 256z" />
    </Icon>
);

export default Play;
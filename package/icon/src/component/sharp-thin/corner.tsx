
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=sharp-thin corner}
 * @preview ![corner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/corner.svg)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 176l8 0 432 0 8 0 0 8 0 192 0 8-16 0 0-8 0-184L8 192l-8 0 0-16z" />
    </Icon>
);

export default Corner;
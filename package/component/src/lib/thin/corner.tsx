
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=thin corner}
 * @preview ![corner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/corner.svg)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 184c0-4.4 3.6-8 8-8l408 0c17.7 0 32 14.3 32 32l0 168c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-168c0-8.8-7.2-16-16-16L8 192c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Corner;
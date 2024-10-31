
import { Icon } from "../../index";

/**
 * A component that renders the `y-combinator` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/y-combinator?s=brands y-combinator}
 * @preview ![y-combinator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/y-combinator.svg)
 */
const YCombinator: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32v448H0V32h448zM236 287.5L313.5 142h-32.7L235 233c-4.7 9.3-9 18.3-12.8 26.8L210 233l-45.2-91h-35l76.7 143.8v94.5H236v-92.8z" />
    </Icon>
);

export default YCombinator;
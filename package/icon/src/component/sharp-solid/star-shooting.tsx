
import { Icon } from "../../index";

/**
 * A component that renders the `star-shooting` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-shooting?s=sharp-solid star-shooting}
 * @preview ![star-shooting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/star-shooting.svg)
 */
const StarShooting: typeof Icon = x => (
    <Icon {...x}>
        <path d="M297 57l17-17L280 6.1 263 23 231 55l-17 17L248 105.9l17-17 32-32zM489 249l17-17L472 198.1l-17 17-32 32-17 17L440 297.9l17-17 32-32zm17-209L472 6.1 455 23 327 151l-17 17L344 201.9l17-17L489 57l17-17zM253.3 265.1L193.5 144 133.7 265.1 0 284.6l96.7 94.3L73.9 512l119.6-62.9L313 512 290.2 378.9l96.7-94.3L253.3 265.1z" />
    </Icon>
);

export default StarShooting;
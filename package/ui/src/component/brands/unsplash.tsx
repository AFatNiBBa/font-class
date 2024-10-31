
import { Icon } from "../../index";

/**
 * A component that renders the `unsplash` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unsplash?s=brands unsplash}
 * @preview ![unsplash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/unsplash.svg)
 */
const Unsplash: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448,230.17V480H0V230.17H141.13V355.09H306.87V230.17ZM306.87,32H141.13V156.91H306.87Z" />
    </Icon>
);

export default Unsplash;
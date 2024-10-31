
import { Icon } from "../../index";

/**
 * A component that renders the `microsoft` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microsoft?s=brands microsoft}
 * @preview ![microsoft](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/microsoft.svg)
 */
const Microsoft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
    </Icon>
);

export default Microsoft;
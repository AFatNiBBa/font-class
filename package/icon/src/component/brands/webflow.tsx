
import { Icon } from "../../index";

/**
 * A component that renders the `webflow` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/webflow?s=brands webflow}
 * @preview ![webflow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/webflow.svg)
 */
const Webflow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 64L435.8 463.2H244l85.5-165.5h-3.8C255.1 389.3 149.9 449.5 0 463.2V300.1s95.9-5.7 152.3-64.9H0V64H171.1V204.8l3.8 0L244.9 64H374.3V203.9l3.8 0L450.7 64H640z" />
    </Icon>
);

export default Webflow;
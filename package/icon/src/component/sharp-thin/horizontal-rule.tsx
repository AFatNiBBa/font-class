
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=sharp-thin horizontal-rule}
 * @preview ![horizontal-rule](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/horizontal-rule.svg)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 248l8 0 624 0 8 0 0 16-8 0L8 264l-8 0 0-16z" />
    </Icon>
);

export default HorizontalRule;
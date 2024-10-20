
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=thin horizontal-rule}
 * @preview ![horizontal-rule](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/horizontal-rule.svg)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 256c0-4.4 3.6-8 8-8l624 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 264c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default HorizontalRule;

import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=solid horizontal-rule}
 * @preview ![horizontal-rule](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/horizontal-rule.svg)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 256c0-17.7 14.3-32 32-32l576 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default HorizontalRule;
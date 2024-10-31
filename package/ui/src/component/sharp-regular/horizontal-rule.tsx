
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=sharp-regular horizontal-rule}
 * @preview ![horizontal-rule](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/horizontal-rule.svg)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 232l24 0 592 0 24 0 0 48-24 0L24 280 0 280l0-48z" />
    </Icon>
);

export default HorizontalRule;

import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=sharp-light horizontal-rule}
 * @preview ![horizontal-rule](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/horizontal-rule.svg)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 240l16 0 608 0 16 0 0 32-16 0L16 272 0 272l0-32z" />
    </Icon>
);

export default HorizontalRule;
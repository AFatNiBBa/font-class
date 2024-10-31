
import { Icon } from "../../index";

/**
 * A component that renders the `horizontal-rule` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/horizontal-rule?s=sharp-solid horizontal-rule}
 * @preview ![horizontal-rule](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/horizontal-rule.svg)
 */
const HorizontalRule: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 224l32 0 576 0 32 0 0 64-32 0L32 288 0 288l0-64z" />
    </Icon>
);

export default HorizontalRule;
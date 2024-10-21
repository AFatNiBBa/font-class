
import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=sharp-solid angle-down}
 * @preview ![angle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/angle-down.svg)
 */
const AngleDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 397.3l22.6-22.6 160-160L429.3 192 384 146.7l-22.6 22.6L224 306.7 86.6 169.4 64 146.7 18.7 192l22.6 22.6 160 160L224 397.3z" />
    </Icon>
);

export default AngleDown;
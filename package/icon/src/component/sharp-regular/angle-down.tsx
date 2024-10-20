
import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=sharp-regular angle-down}
 * @preview ![angle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angle-down.svg)
 */
const AngleDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 385.9l17-17L401 209l17-17L384 158.1l-17 17-143 143L81 175l-17-17L30.1 192l17 17L207 369l17 17z" />
    </Icon>
);

export default AngleDown;
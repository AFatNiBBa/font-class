
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=sharp-regular corner}
 * @preview ![corner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/corner.svg)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 160l24 0 400 0 24 0 0 24 0 176 0 24-48 0 0-24 0-152L24 208 0 208l0-48z" />
    </Icon>
);

export default Corner;
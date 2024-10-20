
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=sharp-light corner}
 * @preview ![corner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/corner.svg)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 160l16 0 416 0 16 0 0 16 0 192 0 16-32 0 0-16 0-176L16 192 0 192l0-32z" />
    </Icon>
);

export default Corner;
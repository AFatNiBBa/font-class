
import { Icon } from "../../index";

/**
 * A component that renders the `corner` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=light corner}
 * @preview ![corner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/corner.svg)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 176c0-8.8 7.2-16 16-16l384 0c26.5 0 48 21.5 48 48l0 160c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-160c0-8.8-7.2-16-16-16L16 192c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Corner;
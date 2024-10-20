
import { Icon } from "../../index";

/**
 * A component that renders the `angle-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-right?s=light angle-right}
 * @preview ![angle-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/angle-right.svg)
 */
const AngleRight: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M267.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256 84.7 107.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l160 160z" />
    </Icon>
);

export default AngleRight;
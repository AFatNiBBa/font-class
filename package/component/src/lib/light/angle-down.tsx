
import { Icon } from "../../index";

/**
 * A component that renders the `angle-down` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-down?s=light angle-down}
 * @preview ![angle-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/angle-down.svg)
 */
const AngleDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M212.7 363.3c6.2 6.2 16.4 6.2 22.6 0l160-160c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 329.4 75.3 180.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l160 160z" />
    </Icon>
);

export default AngleDown;
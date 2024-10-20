
import { Icon } from "../../index";

/**
 * A component that renders the `angle-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=light angle-up}
 * @preview ![angle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/angle-up.svg)
 */
const AngleUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M212.7 148.7c6.2-6.2 16.4-6.2 22.6 0l160 160c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 182.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160z" />
    </Icon>
);

export default AngleUp;
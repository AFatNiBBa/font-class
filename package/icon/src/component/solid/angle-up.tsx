
import { Icon } from "../../index";

/**
 * A component that renders the `angle-up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=solid angle-up}
 * @preview ![angle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/angle-up.svg)
 */
const AngleUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
    </Icon>
);

export default AngleUp;
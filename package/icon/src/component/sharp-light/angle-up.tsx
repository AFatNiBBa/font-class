
import { Icon } from "../../index";

/**
 * A component that renders the `angle-up` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=sharp-light angle-up}
 * @preview ![angle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/angle-up.svg)
 */
const AngleUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 137.4l11.3 11.3 160 160L406.6 320 384 342.6l-11.3-11.3L224 182.6 75.3 331.3 64 342.6 41.4 320l11.3-11.3 160-160L224 137.4z" />
    </Icon>
);

export default AngleUp;
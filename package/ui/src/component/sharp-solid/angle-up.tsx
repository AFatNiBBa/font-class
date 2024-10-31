
import { Icon } from "../../index";

/**
 * A component that renders the `angle-up` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=sharp-solid angle-up}
 * @preview ![angle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/angle-up.svg)
 */
const AngleUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 114.7l22.6 22.6 160 160L429.3 320 384 365.3l-22.6-22.6L224 205.3 86.6 342.6 64 365.3 18.7 320l22.6-22.6 160-160L224 114.7z" />
    </Icon>
);

export default AngleUp;
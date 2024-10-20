
import { Icon } from "../../index";

/**
 * A component that renders the `angle-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=sharp-thin angle-up}
 * @preview ![angle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angle-up.svg)
 */
const AngleUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 140.7l5.7 5.7 176 176 5.7 5.7L400 339.3l-5.7-5.7L224 163.3 53.7 333.7 48 339.3 36.7 328l5.7-5.7 176-176 5.7-5.7z" />
    </Icon>
);

export default AngleUp;
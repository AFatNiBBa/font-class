
import { Icon } from "../../index";

/**
 * A component that renders the `angle-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle-up?s=sharp-regular angle-up}
 * @preview ![angle-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/angle-up.svg)
 */
const AngleUp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 126.1l17 17L401 303l17 17L384 353.9l-17-17-143-143L81 337l-17 17L30.1 320l17-17L207 143l17-17z" />
    </Icon>
);

export default AngleUp;
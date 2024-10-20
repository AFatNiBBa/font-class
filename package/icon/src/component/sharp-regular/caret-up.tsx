
import { Icon } from "../../index";

/**
 * A component that renders the `caret-up` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-up?s=sharp-regular caret-up}
 * @preview ![caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/caret-up.svg)
 */
const CaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 320L0 320l0-48L160 128 320 272l0 48-48 0L48 320zm200.2-48L160 192.6 71.8 272l176.5 0z" />
    </Icon>
);

export default CaretUp;
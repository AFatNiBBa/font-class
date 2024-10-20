
import { Icon } from "../../index";

/**
 * A component that renders the `landmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark?s=sharp-solid landmark}
 * @preview ![landmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/landmark.svg)
 */
const Landmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 144l0 48 512 0 0-48L256 0 0 144zm128 80l-64 0 0 192L0 464l0 48 512 0 0-48-64-48 0-192-64 0 0 192-40 0 0-192-64 0 0 192-48 0 0-192-64 0 0 192-40 0 0-192z" />
    </Icon>
);

export default Landmark;
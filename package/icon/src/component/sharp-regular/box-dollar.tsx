
import { Icon } from "../../index";

/**
 * A component that renders the `box-dollar` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-dollar?s=sharp-regular box-dollar}
 * @preview ![box-dollar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/box-dollar.svg)
 */
const BoxDollar: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M59.6 160L95.2 80 200 80l0 80L59.6 160zM248 160l0-80 104.8 0 35.6 80L248 160zm152 48l0 224L48 432l0-224 352 0zM384 32L64 32 0 176 0 432l0 48 48 0 352 0 48 0 0-48 0-256L384 32z" />
    </Icon>
);

export default BoxDollar;
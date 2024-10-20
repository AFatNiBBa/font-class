
import { Icon } from "../../index";

/**
 * A component that renders the `border-all` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-all?s=sharp-regular border-all}
 * @preview ![border-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/border-all.svg)
 */
const BorderAll: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 152-152 0 0-152 152 0zm0 200l0 152-152 0 0-152 152 0zM200 232L48 232 48 80l152 0 0 152zM48 280l152 0 0 152L48 432l0-152zM48 32L0 32 0 80 0 432l0 48 48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32z" />
    </Icon>
);

export default BorderAll;
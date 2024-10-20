
import { Icon } from "../../index";

/**
 * A component that renders the `clone` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clone?s=sharp-regular clone}
 * @preview ![clone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clone.svg)
 */
const Clone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 464l256 0 0-80 48 0 0 80 0 48-48 0L48 512 0 512l0-48L0 208l0-48 48 0 80 0 0 48-80 0 0 256zM208 304l256 0 0-256L208 48l0 256zm-48 48l0-48 0-256 0-48 48 0L464 0l48 0 0 48 0 256 0 48-48 0-256 0-48 0z" />
    </Icon>
);

export default Clone;

import { Icon } from "../../index";

/**
 * A component that renders the `box-check` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-check?s=sharp-regular box-check}
 * @preview ![box-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/box-check.svg)
 */
const BoxCheck: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M200 160l0-80L95.2 80 59.6 160 200 160zm188.4 0L352.8 80 248 80l0 80 140.4 0zM48 208l0 224 352 0 0-224L48 208zM64 32l320 0 64 144 0 256 0 48-48 0L48 480 0 480l0-48L0 176 64 32zM337 265L209 393l-17 17-17-17-64-64-17-17L128 278.1l17 17 47 47L303 231l17-17L353.9 248l-17 17z" />
    </Icon>
);

export default BoxCheck;

import { Icon } from "../../index";

/**
 * A component that renders the `xmark` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark?s=sharp-light xmark}
 * @preview ![xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/xmark.svg)
 */
const Xmark: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 233.4L59.5 100.9 36.9 123.5 169.4 256 36.9 388.5l22.6 22.6L192 278.6 324.5 411.1l22.6-22.6L214.6 256 347.1 123.5l-22.6-22.6L192 233.4z" />
    </Icon>
);

export default Xmark;
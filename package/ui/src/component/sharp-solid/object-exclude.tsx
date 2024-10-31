
import { Icon } from "../../index";

/**
 * A component that renders the `object-exclude` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/object-exclude?s=sharp-solid object-exclude}
 * @preview ![object-exclude](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/object-exclude.svg)
 */
const ObjectExclude: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L352 0l0 160 160 0 0 352-352 0 0-160L0 352 0 0zM320 192l-128 0 0 128 128 0 0-128z" />
    </Icon>
);

export default ObjectExclude;
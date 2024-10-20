
import { Icon } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=sharp-light accent-grave}
 * @preview ![accent-grave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/accent-grave.svg)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 77.8L144.6 192l9.2 0L125.2 32 64 32l0 45.8zM152 0l34.3 192 5.7 32-32.5 0L128 224 32 88l0-56L32 0 64 0l88 0z" />
    </Icon>
);

export default AccentGrave;
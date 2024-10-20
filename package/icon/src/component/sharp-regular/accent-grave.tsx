
import { Icon } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=sharp-regular accent-grave}
 * @preview ![accent-grave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/accent-grave.svg)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M80 74.9l45.2 76.8L110.4 48 80 48l0 26.9zM152 0l25.1 176 6.9 48-48.5 0L112 224 32 88l0-40L32 0 80 0l72 0z" />
    </Icon>
);

export default AccentGrave;
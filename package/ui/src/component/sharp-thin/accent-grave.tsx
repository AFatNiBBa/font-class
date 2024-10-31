
import { Icon } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=sharp-thin accent-grave}
 * @preview ![accent-grave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/accent-grave.svg)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M48 75.2L136.6 208l28.3 0L130.6 16 48 16l0 59.2zM144 0l37.1 208 2.9 16-16.3 0L128 224 32 80l0-64L32 0 48 0l96 0z" />
    </Icon>
);

export default AccentGrave;

import { Icon } from "../../index";

/**
 * A component that renders the `flutter` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flutter?s=brands flutter}
 * @preview ![flutter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/flutter.svg)
 */
const Flutter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M429.5 236.3L291.7 374.1 429.5 512H272l-59.1-59.1-78.8-78.8L272 236.3H429.5zM272 0L16 256l78.8 78.8L429.5 0H272z" />
    </Icon>
);

export default Flutter;
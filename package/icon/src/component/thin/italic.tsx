
import { Icon } from "../../index";

/**
 * A component that renders the `italic` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/italic?s=thin italic}
 * @preview ![italic](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/italic.svg)
 */
const Italic: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M128 40c0-4.4 3.6-8 8-8l240 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-90.6 0L115.9 464 248 464c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l90.6 0L268.1 48 136 48c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Italic;
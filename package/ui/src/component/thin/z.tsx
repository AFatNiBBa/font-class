
import { Icon } from "../../index";

/**
 * A component that renders the `z` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=thin z}
 * @preview ![z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/z.svg)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8l368 0c3.1 0 6 1.8 7.3 4.6s.8 6.2-1.2 8.5L25.3 464 376 464c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 480c-3.1 0-6-1.8-7.3-4.6s-.9-6.2 1.2-8.5L358.7 48 8 48c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Z;
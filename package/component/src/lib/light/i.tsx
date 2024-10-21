
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=light i}
 * @preview ![i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/i.svg)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16l128 0 0 384L16 448c-8.8 0-16 7.2-16 16s7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0 0-384 128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L160 32 16 32z" />
    </Icon>
);

export default I;
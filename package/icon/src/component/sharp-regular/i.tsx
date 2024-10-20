
import { Icon } from "../../index";

/**
 * A component that renders the `i` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i?s=sharp-regular i}
 * @preview ![i](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/i.svg)
 */
const I: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 32L0 32 0 80l24 0 112 0 0 352L24 432 0 432l0 48 24 0 272 0 24 0 0-48-24 0-112 0 0-352 112 0 24 0 0-48-24 0L160 32 24 32z" />
    </Icon>
);

export default I;
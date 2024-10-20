
import { Icon } from "../../index";

/**
 * A component that renders the `tags` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=sharp-solid tags}
 * @preview ![tags](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tags.svg)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.2 189.3l7 7 0 9.9 0 99.5 0 9.9-7 7L337 481 303 447 454.2 295.8l0-79.6L303 65 337 31 495.2 189.3zM0 256L0 32l224 0L416 224l0 64L224 480 0 256zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Tags;
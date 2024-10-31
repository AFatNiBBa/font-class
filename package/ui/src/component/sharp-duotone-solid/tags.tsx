
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tags` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tags?s=sharp-duotone-solid tags}
 * @preview ![tags](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tags.svg)
 */
const Tags: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M303 65L454.2 216.2l0 79.6L303 447 337 481 495.2 322.7l7-7 0-9.9 0-99.5 0-9.9-7-7L337 31 303 65z" />
        <path d="M0 32L0 256 224 480 416 288l0-64L224 32 0 32zm112 80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Tags;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `forward-fast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forward-fast?s=sharp-duotone-solid forward-fast}
 * @preview ![forward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/forward-fast.svg)
 */
const ForwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M448 64l64 0 0 32 0 320 0 32-64 0 0-32 0-136 0-48 0-136 0-32z" />
        <path d="M448 280L224 448l0-168L0 448 0 64 224 232l0-168L448 232l0 48z" />
    </Icon>
);

export default ForwardFast;
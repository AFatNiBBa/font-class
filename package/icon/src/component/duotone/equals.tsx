
import { Icon, generic } from "../../index";

/**
 * A component that renders the `equals` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/equals?s=duotone equals}
 * @preview ![equals](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/equals.svg)
 */
const Equals: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 128zm0 192c-17.7 0-32 14.3-32 32s14.3 32 32 32l352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 320z" />
    </Icon>
);

export default Equals;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `corner` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/corner?s=duotone corner}
 * @preview ![corner](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/corner.svg)
 */
const Corner: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192c0-17.7 14.3-32 32-32l352 0c35.3 0 64 28.7 64 64l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128L32 224c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Corner;
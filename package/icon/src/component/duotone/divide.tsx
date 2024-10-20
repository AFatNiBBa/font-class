
import { Icon, generic } from "../../index";

/**
 * A component that renders the `divide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=duotone divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 256c0 17.7 14.3 32 32 32l352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 224c-17.7 0-32 14.3-32 32z" />
        <path d="M224 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0 320a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Divide;
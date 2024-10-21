
import { Icon, generic } from "../../index";

/**
 * A component that renders the `divide` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/divide?s=sharp-duotone-solid divide}
 * @preview ![divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/divide.svg)
 */
const Divide: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M16 224l0 64 32 0 352 0 32 0 0-64-32 0L48 224l-32 0z" />
        <path d="M272 48l-96 0 0 96 96 0 0-96zm0 320l-96 0 0 96 96 0 0-96z" />
    </Icon>
);

export default Divide;
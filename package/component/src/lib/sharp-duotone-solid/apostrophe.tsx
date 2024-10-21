
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apostrophe` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apostrophe?s=sharp-duotone-solid apostrophe}
 * @preview ![apostrophe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/apostrophe.svg)
 */
const Apostrophe: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path class={generic.secondary} d="M72 352c66.3 0 120-53.7 120-120l0-8 0-96 0-96L0 32 0 224l128 0 0 8c0 30.9-25.1 56-56 56l-8 0-32 0 0 64 32 0 8 0z" />
    </Icon>
);

export default Apostrophe;
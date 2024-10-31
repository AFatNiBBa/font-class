
import { Icon, generic } from "../../index";

/**
 * A component that renders the `outdent` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outdent?s=sharp-duotone-solid outdent}
 * @preview ![outdent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/outdent.svg)
 */
const Outdent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96l448 0 0-64L0 32zM0 416l0 64 448 0 0-64L0 416zM192 160l0 64 256 0 0-64-256 0zm0 128l0 64 256 0 0-64-256 0z" />
        <path d="M0 256l128 96V160L0 256z" />
    </Icon>
);

export default Outdent;
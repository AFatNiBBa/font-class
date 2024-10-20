
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dumbbell` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumbbell?s=sharp-duotone-solid dumbbell}
 * @preview ![dumbbell](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dumbbell.svg)
 */
const Dumbbell: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 0-64L0 224zm192 0l0 64 256 0 0-64-256 0zm416 0l0 64 32 0 0-64-32 0z" />
        <path d="M192 32L96 32l0 96-64 0 0 256 64 0 0 96 96 0 0-448zm256 0l0 448 96 0 0-96 64 0 0-256-64 0 0-96-96 0z" />
    </Icon>
);

export default Dumbbell;
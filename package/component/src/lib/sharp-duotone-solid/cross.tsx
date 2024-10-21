
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cross` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=sharp-duotone-solid cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 128L0 256l96 0 32 0 128 0 32 0 96 0 0-128-128 0L256 0 128 0l0 128L0 128zM128 288l0 224 128 0 0-224-128 0z" />
        <path d="M128 256h128v32H128v-32z" />
    </Icon>
);

export default Cross;
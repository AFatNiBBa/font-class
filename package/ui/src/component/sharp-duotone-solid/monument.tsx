
import { Icon, generic } from "../../index";

/**
 * A component that renders the `monument` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=sharp-duotone-solid monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 448l32 0 20 0 280 0 20 0 32 0 0 64-32 0L32 512 0 512l0-64z" />
        <path d="M96 96L192 0l96 96 44 352L52 448 96 96zM256 272l-128 0 0 48 128 0 0-48z" />
    </Icon>
);

export default Monument;
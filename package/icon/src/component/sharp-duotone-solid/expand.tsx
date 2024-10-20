
import { Icon, generic } from "../../index";

/**
 * A component that renders the `expand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/expand?s=sharp-duotone-solid expand}
 * @preview ![expand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/expand.svg)
 */
const Expand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 320l64 0 0 32 0 64 64 0 32 0 0 64-32 0-96 0L0 480l0-32 0-96 0-32zM288 32l32 0 96 0 32 0 0 32 0 96 0 32-64 0 0-32 0-64-64 0-32 0 0-64z" />
        <path d="M0 32l32 0 96 0 32 0 0 64-32 0L64 96l0 64 0 32L0 192l0-32L0 64 0 32zM448 320l0 32 0 96 0 32-32 0-96 0-32 0 0-64 32 0 64 0 0-64 0-32 64 0z" />
    </Icon>
);

export default Expand;
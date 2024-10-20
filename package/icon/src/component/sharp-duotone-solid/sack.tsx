
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sack` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sack?s=sharp-duotone-solid sack}
 * @preview ![sack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sack.svg)
 */
const Sack: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 416l0 96 512 0 0-96c0-165.1-122.3-243.3-179-279.6c-4.8-3.1-9.2-5.9-13-8.4l-128 0c-3.8 2.5-8.1 5.3-13 8.4C122.3 172.7 0 250.9 0 416zM128 0l64 96 128 0L384 0 128 0z" />
        <path d="M176 96l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
    </Icon>
);

export default Sack;
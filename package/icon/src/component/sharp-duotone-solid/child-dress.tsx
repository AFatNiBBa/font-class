
import { Icon, generic } from "../../index";

/**
 * A component that renders the `child-dress` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-dress?s=sharp-duotone-solid child-dress}
 * @preview ![child-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/child-dress.svg)
 */
const ChildDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 64a64 64 0 1 0 128 0A64 64 0 1 0 96 64z" />
        <path d="M116.9 160l-16 0-9.6 12.8-72.1 96L0 294.4l51.2 38.4 19.2-25.6 15.4-20.4L48 400l40 0 0 80 0 32 64 0 0-32 0-80 16 0 0 80 0 32 64 0 0-32 0-80 40 0L234.3 286.8l15.3 20.4 19.2 25.6L320 294.4l-19.2-25.6-72.1-96L219.1 160l-16 0-86.2 0z" />
    </Icon>
);

export default ChildDress;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `swords` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swords?s=sharp-duotone-solid swords}
 * @preview ![swords](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/swords.svg)
 */
const Swords: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L16 96 336 416l80-80L96 16 0 0zM96 336l80 80 57.4-57.4-80-80L96 336zM278.6 153.4l80 80L496 96 512 0 416 16 278.6 153.4z" />
        <path d="M48 512l56-56 72 24 32-32L64 304 32 336l24 72L0 464l48 48zm416 0l48-48-56-56 24-72-32-32L304 448l32 32 72-24 56 56z" />
    </Icon>
);

export default Swords;
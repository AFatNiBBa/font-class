
import { Icon, generic } from "../../index";

/**
 * A component that renders the `computer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/computer?s=duotone computer}
 * @preview ![computer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/computer.svg)
 */
const Computer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M480 80l0 352c0 26.5 21.5 48 48 48l64 0c26.5 0 48-21.5 48-48l0-352c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48zm48 32c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16zm64 192a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M64 96l320 0 0 224L64 320 64 96zM48 32C21.5 32 0 53.5 0 80L0 336c0 26.5 21.5 48 48 48l133.3 0-10.7 32L96 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-74.7 0-10.7-32L400 384c26.5 0 48-21.5 48-48l0-256c0-26.5-21.5-48-48-48L48 32z" />
    </Icon>
);

export default Computer;
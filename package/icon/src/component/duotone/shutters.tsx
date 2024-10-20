
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shutters` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shutters?s=duotone shutters}
 * @preview ![shutters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shutters.svg)
 */
const Shutters: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 203.4C0 214.8 9.2 224 20.6 224l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 128 24 128 1.1 196.8c-.7 2.1-1.1 4.3-1.1 6.5zm0 128C0 342.8 9.2 352 20.6 352l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 256 24 256 1.1 324.8c-.7 2.1-1.1 4.3-1.1 6.5zm0 128C0 470.8 9.2 480 20.6 480l470.7 0c11.4 0 20.6-9.2 20.6-20.6c0-2.2-.4-4.4-1.1-6.5L488 384 24 384 1.1 452.8c-.7 2.1-1.1 4.3-1.1 6.5z" />
        <path d="M0 64C0 46.3 14.3 32 32 32l448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64z" />
    </Icon>
);

export default Shutters;
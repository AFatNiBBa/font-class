
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vihara` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vihara?s=sharp-duotone-solid vihara}
 * @preview ![vihara](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vihara.svg)
 */
const Vihara: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 448l64 0 0 64-64 0 0-64zM96 288l64 0 0 64-64 0 0-64zm64-160l64 0 0 64-64 0 0-64zM288 448l64 0 0 64-64 0 0-64zM416 128l64 0 0 64-64 0 0-64zm64 160l64 0 0 64-64 0 0-64zm32 160l64 0 0 64-64 0 0-64z" />
        <path d="M320 0s-96 80-176 80l-16 0 0 48 24 0 144 0 24 0 24 0 144 0 24 0 0-48-16 0C416 80 320 0 320 0zM138.7 208c-27.7 20.8-61.4 32-96 32L32 240l0 48 576 0 0-48-10.7 0c-34.6 0-68.3-11.2-96-32L480 192l-320 0-21.3 16zM96 352L57.6 380.8C41 393.3 20.8 400 0 400l0 48 640 0 0-48c-20.8 0-41-6.7-57.6-19.2L544 352 96 352z" />
    </Icon>
);

export default Vihara;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `tv` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tv?s=sharp-duotone-solid tv}
 * @preview ![tv](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tv.svg)
 */
const Tv: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L64 0 576 0l64 0 0 64 0 288 0 64-64 0L64 416 0 416l0-64L0 64 0 0zM64 64l0 288 512 0 0-288L64 64zM96 448l32 0 384 0 32 0 0 64-32 0-384 0-32 0 0-64z" />
        <path d="M64 64H576V352H64V64z" />
    </Icon>
);

export default Tv;
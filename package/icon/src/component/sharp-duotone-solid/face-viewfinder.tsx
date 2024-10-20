
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-viewfinder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-viewfinder?s=sharp-duotone-solid face-viewfinder}
 * @preview ![face-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-viewfinder.svg)
 */
const FaceViewfinder: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L24 0 136 0l24 0 0 48-24 0L48 48l0 88 0 24L0 160l0-24L0 24 0 0zM0 352l48 0 0 24 0 88 88 0 24 0 0 48-24 0L24 512 0 512l0-24L0 376l0-24zM352 0l24 0L488 0l24 0 0 24 0 112 0 24-48 0 0-24 0-88-88 0-24 0 0-48zm0 464l24 0 88 0 0-88 0-24 48 0 0 24 0 112 0 24-24 0-112 0-24 0 0-48z" />
        <path d="M256 416a160 160 0 1 0 0-320 160 160 0 1 0 0 320zM200 192a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm88 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM256 320c25 0 47.5-10.4 63.5-27.1l23.1 22.2C320.8 337.8 290 352 256 352s-64.8-14.2-86.6-36.9l23.1-22.2C208.5 309.6 231 320 256 320z" />
    </Icon>
);

export default FaceViewfinder;
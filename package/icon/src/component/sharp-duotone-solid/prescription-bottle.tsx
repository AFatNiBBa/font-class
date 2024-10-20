
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription-bottle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=sharp-duotone-solid prescription-bottle}
 * @preview ![prescription-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/prescription-bottle.svg)
 */
const PrescriptionBottle: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 96l320 0 0 416L32 512l0-96 112 0 16 0 0-32-16 0L32 384l0-64 112 0 16 0 0-32-16 0L32 288l0-64 112 0 16 0 0-32-16 0L32 192l0-96z" />
        <path d="M384 0L0 0 0 96l384 0 0-96zM144 192L32 192l0 32 112 0 16 0 0-32-16 0zm0 96L32 288l0 32 112 0 16 0 0-32-16 0zm0 96L32 384l0 32 112 0 16 0 0-32-16 0z" />
    </Icon>
);

export default PrescriptionBottle;
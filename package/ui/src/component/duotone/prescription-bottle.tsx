
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription-bottle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle?s=duotone prescription-bottle}
 * @preview ![prescription-bottle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/prescription-bottle.svg)
 */
const PrescriptionBottle: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 96l320 0 0 352c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-32 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 384l0-64 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 288l0-64 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 192l0-96z" />
        <path d="M32 0C14.3 0 0 14.3 0 32L0 64C0 81.7 14.3 96 32 96l320 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 0zM144 192L32 192l0 32 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 96L32 288l0 32 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16zm0 96L32 384l0 32 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16z" />
    </Icon>
);

export default PrescriptionBottle;
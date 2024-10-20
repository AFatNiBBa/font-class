
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gopuram` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gopuram?s=sharp-duotone-solid gopuram}
 * @preview ![gopuram](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gopuram.svg)
 */
const Gopuram: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 352l0 160 32 0 0-160-32 0zm32-128l0 128 32 0 0-128-32 0zm32-96l0 96 32 0 0-96-32 0zm160 0l0 96 32 0 0-96-32 0zm32 96l0 128 32 0 0-128-32 0zm32 128l0 160 32 0 0-160-32 0z" />
        <path d="M144 0l0 24 0 8 40 0 0-8 0-24 48 0 0 24 0 8 48 0 0-8 0-24 48 0 0 24 0 8 40 0 0-8 0-24 48 0 0 24 0 8 0 32 0 24 0 40 32 0 0 96 32 0 0 128 32 0 0 160-96 0 0-160-32 0 0-128-32 0 0-96-32 0 0 96 32 0 0 128 32 0 0 160-80 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48-80 0 0-160 32 0 0-128 32 0 0-96-32 0 0 96-32 0 0 128-32 0 0 160L0 512 0 352l32 0 0-128 32 0 0-96 32 0 0-40 0-24 0-32 0-8L96 0l48 0zM256 272c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-32-80l0 32 64 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
    </Icon>
);

export default Gopuram;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `gopuram` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gopuram?s=duotone gopuram}
 * @preview ![gopuram](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/gopuram.svg)
 */
const Gopuram: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96 352l0 160 32 0 0-160-32 0zm32-128l0 128 32 0 0-128-32 0zm32-96l0 96 32 0 0-96-32 0zm160 0l0 96 32 0 0-96-32 0zm32 96l0 128 32 0 0-128-32 0zm32 128l0 160 32 0 0-160-32 0z" />
        <path d="M120 0c13.3 0 24 10.7 24 24l0 8 40 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 48 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 40 0 0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8 0 32 0 64c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32l0 96c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-64 0 0-160-32 0 0-128-32 0 0-96-32 0 0 96 32 0 0 128 32 0 0 160-80 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 48-80 0 0-160 32 0 0-128 32 0 0-96-32 0 0 96-32 0 0 128-32 0 0 160-64 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l0-96c0-17.7 14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l0-64 0-32 0-8c0-13.3 10.7-24 24-24zM256 272c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-32-80l0 32 64 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
    </Icon>
);

export default Gopuram;
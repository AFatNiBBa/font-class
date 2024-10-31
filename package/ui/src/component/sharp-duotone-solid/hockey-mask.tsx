
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hockey-mask` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hockey-mask?s=sharp-duotone-solid hockey-mask}
 * @preview ![hockey-mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hockey-mask.svg)
 */
const HockeyMask: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 240C0 432 48 512 224 512s224-80 224-272L448 0 224 0 0 0zM64 176l128 0 0 32c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-32zM184 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm16 240a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 64a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 64a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm48-320a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm48 192a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 64a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0 64a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM256 176l128 0 0 32c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-32zm56-96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M136 80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM152 320a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm0 64a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-104a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM288 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM248 384a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm24 40a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default HockeyMask;
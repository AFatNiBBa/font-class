
import { Icon, generic } from "../../index";

/**
 * A component that renders the `building-memo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-memo?s=sharp-duotone-solid building-memo}
 * @preview ![building-memo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/building-memo.svg)
 */
const BuildingMemo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 0L384 0l0 64-96 0 0 32-32 0 0 64 32 0 0 64-32 0 0 64 32 0 0 224-48 0 0-128-96 0 0 128L0 512 0 0zM64 96l0 64 64 0 0-64L64 96zm0 128l0 64 64 0 0-64-64 0zM160 96l0 64 64 0 0-64-64 0zm0 128l0 64 64 0 0-64-64 0z" />
        <path d="M320 96l320 0 0 416-320 0 0-416zM424 208a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM400 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 72a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56-208l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0zm-16 96l0 32 16 0 96 0 16 0 0-32-16 0-96 0-16 0zm16 96l-16 0 0 32 16 0 96 0 16 0 0-32-16 0-96 0z" />
    </Icon>
);

export default BuildingMemo;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `id-card-clip` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=sharp-duotone-solid id-card-clip}
 * @preview ![id-card-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/id-card-clip.svg)
 */
const IdCardClip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 64l224 0 0 64-32 0 0 32 32 0 128 0 32 0 0-32-32 0 0-64 224 0 0 448L0 512 0 64zM176 448l224 0-32-64-160 0-32 64zm48-160a64 64 0 1 0 128 0 64 64 0 1 0 -128 0z" />
        <path d="M352 0L224 0l0 128 128 0L352 0zm0 288a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0-32 64 224 0-32-64z" />
    </Icon>
);

export default IdCardClip;
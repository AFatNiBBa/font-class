
import { Icon } from "../../index";

/**
 * A component that renders the `id-card-clip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=sharp-solid id-card-clip}
 * @preview ![id-card-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/id-card-clip.svg)
 */
const IdCardClip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 0l0 128-128 0L224 0 352 0zM0 64l192 0 0 96 192 0 0-96 192 0 0 448L0 512 0 64zM176 448l224 0-32-64-160 0-32 64zm112-96a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default IdCardClip;
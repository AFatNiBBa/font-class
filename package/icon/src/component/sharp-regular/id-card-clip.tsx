
import { Icon } from "../../index";

/**
 * A component that renders the `id-card-clip` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/id-card-clip?s=sharp-regular id-card-clip}
 * @preview ![id-card-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/id-card-clip.svg)
 */
const IdCardClip: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M352 0L224 0l0 128 128 0L352 0zM192 64L48 64 0 64l0 48L0 464l0 48 48 0 480 0 48 0 0-48 0-352 0-48-48 0L384 64l0 48 144 0 0 352L48 464l0-352 144 0 0-48zm96 240a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM176 432l224 0-32-96-160 0-32 96z" />
    </Icon>
);

export default IdCardClip;
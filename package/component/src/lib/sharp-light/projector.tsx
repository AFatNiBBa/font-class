
import { Icon } from "../../index";

/**
 * A component that renders the `projector` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=sharp-light projector}
 * @preview ![projector](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/projector.svg)
 */
const Projector: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 16l0-16L400 0l0 16 0 96 0 16 32 0 0-16 0-96zM267.3 36.7L256 25.4 233.4 48l11.3 11.3 64 64L320 134.6 342.6 112l-11.3-11.3-64-64zm320 22.6L598.6 48 576 25.4 564.7 36.7l-64 64L489.4 112 512 134.6l11.3-11.3 64-64zM288 320a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm288 0c0-36-11.9-69.3-32-96l64 0 0 192-32 0-32 0c20.1-26.7 32-60 32-96zm0 128l32 0 32 0 0-32 0-192 0-32-32 0-96 0c-26.7-20.1-60-32-96-32s-69.3 11.9-96 32L32 192 0 192l0 32L0 416l0 32 32 0 32 0 0 48 0 16 32 0 0-16 0-48 224 0c26.7 20.1 60 32 96 32c37.3 0 71.6-12.7 98.8-34.1c-.9 .7-1.8 1.4-2.8 2.1l32 0 0 48 0 16 32 0 0-16 0-48zM96 416l-32 0-32 0 0-192 256 0c-20.1 26.7-32 60-32 96s11.9 69.3 32 96L96 416zm24-96a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Projector;
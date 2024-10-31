
import { Icon, generic } from "../../index";

/**
 * A component that renders the `walkie-talkie` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/walkie-talkie?s=sharp-duotone-solid walkie-talkie}
 * @preview ![walkie-talkie](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/walkie-talkie.svg)
 */
const WalkieTalkie: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 96l64 0 48 0 48 0 0-32 64 0 0 32 32 0 0-32 64 0 0 32 64 0 0 224-32 32 0 160L32 512l0-160L0 320 0 96zm96 64l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0zm0 64l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0zm0 64l0 32 16 0 160 0 16 0 0-32-16 0-160 0-16 0z" />
        <path d="M112 24l0-24L64 0l0 24 0 48 0 24 48 0 0-24 0-48zm0 136l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0zm0 64l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0zm0 64l-16 0 0 32 16 0 160 0 16 0 0-32-16 0-160 0z" />
    </Icon>
);

export default WalkieTalkie;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=sharp-duotone-solid sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64l0 64 32 0 32 0 0 352 0 32 64 0 0-32 0-352 352 0 32 0 0-64-32 0L128 64l0-32 0-32L64 0l0 32 0 32L32 64 0 64z" />
        <path d="M480 160l-320 0 0 224 320 0 0-224z" />
    </Icon>
);

export default SignHanging;
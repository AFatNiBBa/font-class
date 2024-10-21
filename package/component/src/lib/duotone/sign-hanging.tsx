
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=duotone sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96c0 17.7 14.3 32 32 32l32 0 0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352 352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L128 64l0-32c0-17.7-14.3-32-32-32S64 14.3 64 32l0 32L32 64C14.3 64 0 78.3 0 96z" />
        <path d="M192 160c-17.7 0-32 14.3-32 32l0 160c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-160c0-17.7-14.3-32-32-32l-256 0z" />
    </Icon>
);

export default SignHanging;
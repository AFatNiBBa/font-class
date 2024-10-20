
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=sharp-light sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 0l0 16 0 48 400 0 16 0 0 32-16 0L96 96l0 400 0 16-32 0 0-16L64 96 16 96 0 96 0 64l16 0 48 0 0-48L64 0 96 0zm64 160l0 192 288 0 0-192-288 0zm-32-32l32 0 288 0 32 0 0 32 0 192 0 32-32 0-288 0-32 0 0-32 0-192 0-32z" />
    </Icon>
);

export default SignHanging;
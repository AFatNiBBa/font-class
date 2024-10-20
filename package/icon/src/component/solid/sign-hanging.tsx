
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=solid sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 0c17.7 0 32 14.3 32 32l0 32 352 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-352 0 0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352-32 0C14.3 128 0 113.7 0 96S14.3 64 32 64l32 0 0-32C64 14.3 78.3 0 96 0zm96 160l256 0c17.7 0 32 14.3 32 32l0 160c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-160c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default SignHanging;
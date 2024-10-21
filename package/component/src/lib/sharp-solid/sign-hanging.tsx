
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=sharp-solid sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 0l0 32 0 32 352 0 32 0 0 64-32 0-352 0 0 352 0 32-64 0 0-32 0-352-32 0L0 128 0 64l32 0 32 0 0-32L64 0l64 0zM480 160l0 224-320 0 0-224 320 0z" />
    </Icon>
);

export default SignHanging;
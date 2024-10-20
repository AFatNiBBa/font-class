
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=sharp-regular sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 0l0 24 0 40 376 0 24 0 0 48-24 0-376 0 0 376 0 24-48 0 0-24 0-376-40 0L0 112 0 64l24 0 40 0 0-40L64 0l48 0zm80 192l0 144 240 0 0-144-240 0zm-48-48l48 0 240 0 48 0 0 48 0 144 0 48-48 0-240 0-48 0 0-48 0-144 0-48z" />
    </Icon>
);

export default SignHanging;

import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=sharp-thin sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 0l0 8 0 56 424 0 8 0 0 16-8 0L80 80l0 424 0 8-16 0 0-8L64 80 8 80 0 80 0 64l8 0 56 0L64 8l0-8L80 0zm64 144l0 224 320 0 0-224-320 0zm-16-16l16 0 320 0 16 0 0 16 0 224 0 16-16 0-320 0-16 0 0-16 0-224 0-16z" />
    </Icon>
);

export default SignHanging;

import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=thin sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M72 0c4.4 0 8 3.6 8 8l0 56 424 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L80 80l0 424c0 4.4-3.6 8-8 8s-8-3.6-8-8L64 80 8 80c-4.4 0-8-3.6-8-8s3.6-8 8-8l56 0L64 8c0-4.4 3.6-8 8-8zm88 144c-8.8 0-16 7.2-16 16l0 192c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-192c0-8.8-7.2-16-16-16l-288 0zm-32 16c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-192z" />
    </Icon>
);

export default SignHanging;
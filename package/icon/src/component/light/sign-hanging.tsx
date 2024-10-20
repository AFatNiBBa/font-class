
import { Icon } from "../../index";

/**
 * A component that renders the `sign-hanging` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-hanging?s=light sign-hanging}
 * @preview ![sign-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sign-hanging.svg)
 */
const SignHanging: typeof Icon = x => (
    <Icon {...x}>
        <path d="M80 0c8.8 0 16 7.2 16 16l0 48 400 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 96l0 400c0 8.8-7.2 16-16 16s-16-7.2-16-16L64 96 16 96C7.2 96 0 88.8 0 80s7.2-16 16-16l48 0 0-48C64 7.2 71.2 0 80 0zm80 160l0 192 288 0 0-192-288 0zm-32 0c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-192z" />
    </Icon>
);

export default SignHanging;
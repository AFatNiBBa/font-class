
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=sharp-duotone-solid code-pull-request}
 * @preview ![code-pull-request](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/code-pull-request.svg)
 */
const CodePullRequest: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M48 160l8 0 48 0 8 0 0 192-8 0-48 0-8 0 0-192zM192 96L288 0l32 0 0 64 16 0c70.7 0 128 57.3 128 128l0 160-8 0-48 0-8 0 0-160c0-35.3-28.7-64-64-64l-16 0 0 64-32 0L192 96z" />
        <path d="M104 56l0 48-48 0 0-48 48 0zM56 0L0 0 0 56l0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56L104 0 56 0zm48 408l0 48-48 0 0-48 48 0zM56 352L0 352l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0zm352 56l48 0 0 48-48 0 0-48zm-56-56l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0-56 0z" />
    </Icon>
);

export default CodePullRequest;
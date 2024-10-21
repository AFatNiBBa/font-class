
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-branch` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-branch?s=sharp-duotone-solid code-branch}
 * @preview ![code-branch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/code-branch.svg)
 */
const CodeBranch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 160l8 0 48 0 8 0 0 81.1c18.8-10.9 40.7-17.1 64-17.1l96 0c35.3 0 64-28.7 64-64l8 0 48 0 8 0c0 70.7-57.3 128-128 128l-96 0c-35.3 0-64 28.7-64 64l-8 0-48 0-8 0 0-192z" />
        <path d="M104 56l0 48-48 0 0-48 48 0zM56 0L0 0 0 56l0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56L104 0 56 0zM392 56l0 48-48 0 0-48 48 0zM344 0L288 0l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56L392 0 344 0zM56 408l48 0 0 48-48 0 0-48zM0 352l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0L0 352z" />
    </Icon>
);

export default CodeBranch;
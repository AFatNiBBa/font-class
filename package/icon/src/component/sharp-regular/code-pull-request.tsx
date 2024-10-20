
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=sharp-regular code-pull-request}
 * @preview ![code-pull-request](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/code-pull-request.svg)
 */
const CodePullRequest: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 48L48 48l0 64 64 0 0-64zM48 0l64 0 48 0 0 48 0 64 0 48-48 0-8 0 0 192 8 0 48 0 0 48 0 64 0 48-48 0-64 0L0 512l0-48 0-64 0-48 48 0 8 0 0-192-8 0L0 160l0-48L0 48 0 0 48 0zm0 400l0 64 64 0 0-64-64 0zm352 0l0 64 64 0 0-64-64 0zm-48-48l48 0 8 0 0-160c0-39.8-32.2-72-72-72l-16 0 0 72-32 0L192 96 288 0l32 0 0 72 16 0c66.3 0 120 53.7 120 120l0 160 8 0 48 0 0 48 0 64 0 48-48 0-64 0-48 0 0-48 0-64 0-48z" />
    </Icon>
);

export default CodePullRequest;
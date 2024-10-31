
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-pull-request-draft` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request-draft?s=sharp-duotone-solid code-pull-request-draft}
 * @preview ![code-pull-request-draft](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/code-pull-request-draft.svg)
 */
const CodePullRequestDraft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 160l8 0 48 0 8 0 0 192-8 0-48 0-8 0 0-192zM320 32l96 0 0 96-96 0 0-96zm0 160l96 0 0 96-96 0 0-96z" />
        <path d="M104 56l0 48-48 0 0-48 48 0zM56 0L0 0 0 56l0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56L104 0 56 0zm48 408l0 48-48 0 0-48 48 0zM56 352L0 352l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0zm288 56l48 0 0 48-48 0 0-48zm-56-56l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0-56 0z" />
    </Icon>
);

export default CodePullRequestDraft;
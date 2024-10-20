
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-pull-request-draft` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request-draft?s=duotone code-pull-request-draft}
 * @preview ![code-pull-request-draft](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/code-pull-request-draft.svg)
 */
const CodePullRequestDraft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 153.3c4.9 2.1 10.1 3.8 15.4 4.9c2.7 .6 5.4 1 8.2 1.3c1.4 .1 2.8 .3 4.2 .3c1.4 .1 2.8 .1 4.2 .1c11.4 0 22.2-2.4 32-6.7l0 205.3c-4.9-2.1-10.1-3.8-15.4-4.9c-2.7-.6-5.4-1-8.2-1.3c-1.4-.1-2.8-.3-4.2-.3s-2.8-.1-4.2-.1c-11.4 0-22.2 2.4-32 6.7l0-205.3zM416 80a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm0 160a48 48 0 1 1 -96 0 48 48 0 1 1 96 0z" />
        <path d="M80 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104A80 80 0 1 0 80 0a80 80 0 1 0 0 160zm0 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 104a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm264-80a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0z" />
    </Icon>
);

export default CodePullRequestDraft;
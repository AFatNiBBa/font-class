
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=sharp-duotone-solid code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224l0 64 32 0 144 0 0-64L32 224 0 224zm464 0l0 64 144 0 32 0 0-64-32 0-144 0z" />
        <path d="M384 192l0 128-128 0 0-128 128 0zM256 112l-80 0 0 80 0 128 0 80 80 0 128 0 80 0 0-80 0-128 0-80-80 0-128 0z" />
    </Icon>
);

export default CodeCommit;
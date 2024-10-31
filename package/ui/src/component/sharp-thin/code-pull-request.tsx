
import { Icon } from "../../index";

/**
 * A component that renders the `code-pull-request` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-pull-request?s=sharp-thin code-pull-request}
 * @preview ![code-pull-request](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/code-pull-request.svg)
 */
const CodePullRequest: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 16l0 96-96 0 0-96 96 0zM32 0L16 0l0 16 0 96 0 16 16 0 40 0 0 256-40 0-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-40 0 0-256 40 0 16 0 0-16 0-96 0-16L128 0 32 0zM306.6 10.1l-88 80L212.1 96l6.5 5.9 88 80 10.8-11.8L244.7 104l91.3 0c48.6 0 88 39.4 88 88l0 192-40 0-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-40 0 0-192c0-57.4-46.6-104-104-104l-91.3 0 72.7-66.1L306.6 10.1zM32 400l96 0 0 96-96 0 0-96zm352 0l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default CodePullRequest;
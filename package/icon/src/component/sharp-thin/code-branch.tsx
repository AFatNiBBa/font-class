
import { Icon } from "../../index";

/**
 * A component that renders the `code-branch` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-branch?s=sharp-thin code-branch}
 * @preview ![code-branch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/code-branch.svg)
 */
const CodeBranch: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 16l0 96-96 0 0-96 96 0zM32 0L16 0l0 16 0 96 0 16 16 0 40 0 0 224 0 16 0 16-40 0-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-40 0 0-16 0-16c0-48.6 39.4-88 88-88l96 0c57.4 0 104-46.6 104-104l0-32 40 0 16 0 0-16 0-96 0-16L416 0 320 0 304 0l0 16 0 96 0 16 16 0 40 0 0 32c0 48.6-39.4 88-88 88l-96 0c-37.1 0-69.6 19.4-88 48.5L88 128l40 0 16 0 0-16 0-96 0-16L128 0 32 0zM320 16l96 0 0 96-96 0 0-96zM32 400l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default CodeBranch;
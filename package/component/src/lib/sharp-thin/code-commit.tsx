
import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=sharp-thin code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 160l0 88 0 16 0 88-192 0 0-192 192 0zm16 88l0-88 0-16-16 0-192 0-16 0 0 16 0 88-8 0L8 248l-8 0 0 16 8 0 192 0 8 0 0 88 0 16 16 0 192 0 16 0 0-16 0-88 200 0 8 0 0-16-8 0-200 0z" />
    </Icon>
);

export default CodeCommit;

import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=sharp-regular code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 160l0 192 192 0 0-192-192 0zm-48-48l48 0 192 0 48 0 0 48 0 72 152 0 24 0 0 48-24 0-152 0 0 72 0 48-48 0-192 0-48 0 0-48 0-72L24 280 0 280l0-48 24 0 152 0 0-72 0-48z" />
    </Icon>
);

export default CodeCommit;
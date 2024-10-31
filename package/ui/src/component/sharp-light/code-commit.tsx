
import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=sharp-light code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 160l0 80 0 32 0 80 192 0 0-80 0-32 0-80-192 0zm-32 80l0-80 0-32 32 0 192 0 32 0 0 32 0 80 176 0 16 0 0 32-16 0-176 0 0 80 0 32-32 0-192 0-32 0 0-32 0-80L16 272 0 272l0-32 16 0 176 0z" />
    </Icon>
);

export default CodeCommit;
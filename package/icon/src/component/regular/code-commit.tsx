
import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=regular code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zm158.2-88c-11.6 77-78 136-158.2 136s-146.6-59-158.2-136L24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l137.8 0c11.6-77 78-136 158.2-136s146.6 59 158.2 136L616 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-137.8 0z" />
    </Icon>
);

export default CodeCommit;
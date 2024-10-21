
import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=sharp-solid code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M256 192l0 128 128 0 0-128-128 0zm-80-80l80 0 128 0 80 0 0 80 0 32 144 0 32 0 0 64-32 0-144 0 0 32 0 80-80 0-128 0-80 0 0-80 0-32L32 288 0 288l0-64 32 0 144 0 0-32 0-80z" />
    </Icon>
);

export default CodeCommit;
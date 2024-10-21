
import { Icon } from "../../index";

/**
 * A component that renders the `code-commit` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-commit?s=light code-commit}
 * @preview ![code-commit](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/code-commit.svg)
 */
const CodeCommit: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192zm127-80c-7.9 63.1-61.7 112-127 112s-119.1-48.9-127-112L16 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l177 0c7.9-63.1 61.7-112 127-112s119.1 48.9 127 112l177 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-177 0z" />
    </Icon>
);

export default CodeCommit;
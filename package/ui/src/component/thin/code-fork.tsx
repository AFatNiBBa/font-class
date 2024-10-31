
import { Icon } from "../../index";

/**
 * A component that renders the `code-fork` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=thin code-fork}
 * @preview ![code-fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code-fork.svg)
 */
const CodeFork: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm64-48c0 32.6-24.4 59.6-56 63.5L72 192c0 30.9 25.1 56 56 56l192 0c30.9 0 56-25.1 56-56l0-64.5c-31.6-3.9-56-30.9-56-63.5c0-35.3 28.7-64 64-64s64 28.7 64 64c0 32.6-24.4 59.6-56 63.5l0 64.5c0 39.8-32.2 72-72 72l-88 0 0 120-8 0-8 0 0-120-88 0c-39.8 0-72-32.2-72-72l0-64.5C24.4 123.6 0 96.6 0 64C0 28.7 28.7 0 64 0s64 28.7 64 64zm96 448a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM384 112a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM272 448a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default CodeFork;
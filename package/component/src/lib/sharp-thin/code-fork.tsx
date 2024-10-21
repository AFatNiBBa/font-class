
import { Icon } from "../../index";

/**
 * A component that renders the `code-fork` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=sharp-thin code-fork}
 * @preview ![code-fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/code-fork.svg)
 */
const CodeFork: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 16l0 96-96 0 0-96 96 0zM16 0L0 0 0 16l0 96 0 16 16 0 40 0 0 64c0 39.8 32.2 72 72 72l88 0 0 120-40 0-16 0 0 16 0 96 0 16 16 0 96 0 16 0 0-16 0-96 0-16-16 0-40 0 0-120 88 0c39.8 0 72-32.2 72-72l0-64 40 0 16 0 0-16 0-96 0-16L432 0 336 0 320 0l0 16 0 96 0 16 16 0 40 0 0 64c0 30.9-25.1 56-56 56l-192 0c-30.9 0-56-25.1-56-56l0-64 40 0 16 0 0-16 0-96 0-16L112 0 16 0zM272 400l0 96-96 0 0-96 96 0zM336 16l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default CodeFork;
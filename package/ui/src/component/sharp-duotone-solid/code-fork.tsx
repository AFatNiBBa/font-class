
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-fork` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-fork?s=sharp-duotone-solid code-fork}
 * @preview ![code-fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/code-fork.svg)
 */
const CodeFork: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 160l8 0 48 0 8 0 0 32c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-32 8 0 48 0 8 0 0 32c0 53-43 96-96 96l-48 0 0 64-8 0-48 0-8 0 0-64-48 0c-53 0-96-43-96-96l0-32z" />
        <path d="M104 56l0 48-48 0 0-48 48 0zM56 0L0 0 0 56l0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56L104 0 56 0zM392 56l0 48-48 0 0-48 48 0zM344 0L288 0l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56L392 0 344 0zM200 408l48 0 0 48-48 0 0-48zm-56-56l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0-56 0z" />
    </Icon>
);

export default CodeFork;
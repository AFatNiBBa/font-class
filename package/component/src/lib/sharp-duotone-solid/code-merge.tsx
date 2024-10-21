
import { Icon, generic } from "../../index";

/**
 * A component that renders the `code-merge` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=sharp-duotone-solid code-merge}
 * @preview ![code-merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/code-merge.svg)
 */
const CodeMerge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M48 160l8 0 48 0 9.3 0c7.6 45.4 47.1 80 94.7 80l80 0 0 8 0 48 0 8-80 0c-36 0-69.3-11.9-96-32l0 80-8 0-48 0-8 0 0-192z" />
        <path d="M104 56l0 48-48 0 0-48 48 0zM56 0L0 0 0 56l0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56L104 0 56 0zm48 408l0 48-48 0 0-48 48 0zM56 352L0 352l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0zM344 248l48 0 0 48-48 0 0-48zm-56-56l0 56 0 48 0 56 56 0 48 0 56 0 0-56 0-48 0-56-56 0-48 0-56 0z" />
    </Icon>
);

export default CodeMerge;

import { Icon } from "../../index";

/**
 * A component that renders the `code-merge` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/code-merge?s=thin code-merge}
 * @preview ![code-merge](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/code-merge.svg)
 */
const CodeMerge: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M80 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm8 111.5c31.6-3.9 56-30.9 56-63.5c0-35.3-28.7-64-64-64S16 28.7 16 64c0 32.6 24.4 59.6 56 63.5L72 144l0 240.5c-31.6 3.9-56 30.9-56 63.5c0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5l0-176.4c22.9 42.8 68 71.9 120 71.9l112.5 0c3.9 31.6 30.9 56 63.5 56c35.3 0 64-28.7 64-64s-28.7-64-64-64c-32.6 0-59.6 24.4-63.5 56L208 264c-66.3 0-120-53.7-120-120l0-16.5zM80 400a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM336 272a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
    </Icon>
);

export default CodeMerge;
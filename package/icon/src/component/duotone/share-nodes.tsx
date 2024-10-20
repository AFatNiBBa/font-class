
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share-nodes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-nodes?s=duotone share-nodes}
 * @preview ![share-nodes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/share-nodes.svg)
 */
const ShareNodes: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M162.6 186.9c15.4 14.9 25.9 34.9 28.6 57.2l94.1-47c-15.4-14.9-25.9-34.9-28.6-57.2l-94.1 47zm0 138.2l94.1 47c2.8-22.4 13.2-42.4 28.6-57.2l-94.1-47c-2.8 22.4-13.2 42.4-28.6 57.2z" />
        <path d="M256 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM0 256a96 96 0 1 1 192 0A96 96 0 1 1 0 256zm352 32a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default ShareNodes;
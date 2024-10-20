
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-list?s=sharp-duotone-solid clipboard-list}
 * @preview ![clipboard-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clipboard-list.svg)
 */
const ClipboardList: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l80 0 0 72 0 24 112 0 88 0 24 0 0-24 0-48 0-24 80 0 0 448L0 512 0 64zM72 272a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm0 96a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm88-112l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0zm0 96l0 32 16 0 128 0 16 0 0-32-16 0-128 0-16 0z" />
        <path d="M270.4 64L304 64l0 96-112 0L80 160l0-96 33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64zM216 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm0 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default ClipboardList;
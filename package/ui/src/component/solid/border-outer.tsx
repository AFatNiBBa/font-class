
import { Icon } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=solid border-outer}
 * @preview ![border-outer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/border-outer.svg)
 */
const BorderOuter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 96l0 320 320 0 0-320L64 96zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm224 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-64 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm128-32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM224 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default BorderOuter;
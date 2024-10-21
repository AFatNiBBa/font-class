
import { Icon } from "../../index";

/**
 * A component that renders the `pen-clip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-clip?s=sharp-solid pen-clip}
 * @preview ![pen-clip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/pen-clip.svg)
 */
const PenClip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 128l-72.4 72.4-128-128L384 0 512 128zM224 30.1l17 17L417 223l-1 1-33 33L160 480 0 512 32 352 255 129l-31-31-95 95-17 17L78.1 176l17-17L207 47l17-17z" />
    </Icon>
);

export default PenClip;
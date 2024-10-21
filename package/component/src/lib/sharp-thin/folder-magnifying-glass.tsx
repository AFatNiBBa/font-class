
import { Icon } from "../../index";

/**
 * A component that renders the `folder-magnifying-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/folder-magnifying-glass?s=sharp-thin folder-magnifying-glass}
 * @preview ![folder-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/folder-magnifying-glass.svg)
 */
const FolderMagnifyingGlass: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32l48 64 224 0 16 0 0 16 0 352 0 16-16 0L16 480 0 480l0-16L0 48 0 32l16 0 208 0zm48 80l-8 0-4.8-6.4L216 48 16 48l0 416 480 0 0-352-224 0zM240 352c19.2 0 36.8-6.7 50.5-18l-.2-.2 11.3-11.3 .2 .2C313.2 308.9 320 291.2 320 272c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80zm0 16c-53 0-96-43-96-96s43-96 96-96s96 43 96 96c0 23.7-8.6 45.3-22.8 62.1l44.4 44.4 5.7 5.7L352 395.5l-5.7-5.7-44.4-44.4C285.2 359.5 263.6 368 240 368z" />
    </Icon>
);

export default FolderMagnifyingGlass;
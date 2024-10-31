
import { Icon } from "../../index";

/**
 * A component that renders the `right-from-line` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-from-line?s=sharp-solid right-from-line}
 * @preview ![right-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right-from-line.svg)
 */
const RightFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 96L448 256 288 416l-32 0 0-96L96 320l0-128 160 0 0-96 32 0zM64 96l0 320 0 32L0 448l0-32L0 96 0 64l64 0 0 32z" />
    </Icon>
);

export default RightFromLine;
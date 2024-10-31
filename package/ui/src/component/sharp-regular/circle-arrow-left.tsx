
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-left` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-left?s=sharp-regular circle-arrow-left}
 * @preview ![circle-arrow-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-arrow-left.svg)
 */
const CircleArrowLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM119 239l-17 17 17 17 88 88 17 17L257.9 344l-17-17-47-47L376 280l24 0 0-48-24 0-182.1 0 47-47 17-17L224 134.1l-17 17-88 88z" />
    </Icon>
);

export default CircleArrowLeft;
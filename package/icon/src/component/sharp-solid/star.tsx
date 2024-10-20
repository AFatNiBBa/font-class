
import { Icon } from "../../index";

/**
 * A component that renders the `star` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star?s=sharp-solid star}
 * @preview ![star](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/star.svg)
 */
const Star: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288.1 0l86.5 164 182.7 31.6L428 328.5 454.4 512 288.1 430.2 121.7 512l26.4-183.5L18.9 195.6 201.5 164 288.1 0z" />
    </Icon>
);

export default Star;
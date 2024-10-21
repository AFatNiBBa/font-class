
import { Icon } from "../../index";

/**
 * A component that renders the `align-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-right?s=sharp-regular align-right}
 * @preview ![align-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/align-right.svg)
 */
const AlignRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M424 40l24 0 0 48-24 0L184 88l-24 0 0-48 24 0 240 0zm0 128l24 0 0 48-24 0L24 216 0 216l0-48 24 0 400 0zm24 128l0 48-24 0-240 0-24 0 0-48 24 0 240 0 24 0zM424 424l24 0 0 48-24 0L24 472 0 472l0-48 24 0 400 0z" />
    </Icon>
);

export default AlignRight;
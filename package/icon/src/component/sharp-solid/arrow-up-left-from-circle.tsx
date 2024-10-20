
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left-from-circle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left-from-circle?s=sharp-solid arrow-up-left-from-circle}
 * @preview ![arrow-up-left-from-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrow-up-left-from-circle.svg)
 */
const ArrowUpLeftFromCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L0 0 0 32 0 192l0 32 64 0 0-32 0-82.7L297.4 342.6 320 365.3 365.3 320l-22.6-22.6L109.3 64 192 64l32 0 0-64L192 0 32 0zM288 128c88.4 0 160 71.6 160 160s-71.6 160-160 160s-160-71.6-160-160l-64 0c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64l0 64z" />
    </Icon>
);

export default ArrowUpLeftFromCircle;
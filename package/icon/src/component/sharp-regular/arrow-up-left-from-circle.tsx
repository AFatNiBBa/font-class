
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-left-from-circle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-left-from-circle?s=sharp-regular arrow-up-left-from-circle}
 * @preview ![arrow-up-left-from-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-up-left-from-circle.svg)
 */
const ArrowUpLeftFromCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 0L0 0 0 24 0 184l0 24 48 0 0-24L48 81.9 295 329l17 17L345.9 312l-17-17L81.9 48 184 48l24 0 0-48L184 0 24 0zM288 112c97.2 0 176 78.8 176 176s-78.8 176-176 176s-176-78.8-176-176l-48 0c0 123.7 100.3 224 224 224s224-100.3 224-224S411.7 64 288 64l0 48z" />
    </Icon>
);

export default ArrowUpLeftFromCircle;
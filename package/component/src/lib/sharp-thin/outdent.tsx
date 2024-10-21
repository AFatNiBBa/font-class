
import { Icon } from "../../index";

/**
 * A component that renders the `outdent` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outdent?s=sharp-thin outdent}
 * @preview ![outdent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/outdent.svg)
 */
const Outdent: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56L0 72l8 0 432 0 8 0 0-16-8 0L8 56 0 56zM192 184l0 16 8 0 240 0 8 0 0-16-8 0-240 0-8 0zm8 128l-8 0 0 16 8 0 240 0 8 0 0-16-8 0-240 0zM0 440l0 16 8 0 432 0 8 0 0-16-8 0L8 440l-8 0zM13.3 246L0 256l13.3 10L112 340l16 12 0-20 0-152 0-20-16 12L13.3 246zM112 192l0 128L26.7 256 112 192z" />
    </Icon>
);

export default Outdent;
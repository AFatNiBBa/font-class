
import { Icon } from "../../index";

/**
 * A component that renders the `align-center` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=sharp-thin align-center}
 * @preview ![align-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/align-center.svg)
 */
const AlignCenter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M104 56l-8 0 0 16 8 0 240 0 8 0 0-16-8 0L104 56zM8 184l-8 0 0 16 8 0 432 0 8 0 0-16-8 0L8 184zM96 312l0 16 8 0 240 0 8 0 0-16-8 0-240 0-8 0zM8 440l-8 0 0 16 8 0 432 0 8 0 0-16-8 0L8 440z" />
    </Icon>
);

export default AlignCenter;
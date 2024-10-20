
import { Icon } from "../../index";

/**
 * A component that renders the `align-center` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/align-center?s=sharp-light align-center}
 * @preview ![align-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/align-center.svg)
 */
const AlignCenter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 48L96 48l0 32 16 0 224 0 16 0 0-32-16 0L112 48zM16 176L0 176l0 32 16 0 416 0 16 0 0-32-16 0L16 176zM96 304l0 32 16 0 224 0 16 0 0-32-16 0-224 0-16 0zM16 432L0 432l0 32 16 0 416 0 16 0 0-32-16 0L16 432z" />
    </Icon>
);

export default AlignCenter;
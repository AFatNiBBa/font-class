
import { Icon } from "../../index";

/**
 * A component that renders the `bring-forward` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bring-forward?s=regular bring-forward}
 * @preview ![bring-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/bring-forward.svg)
 */
const BringForward: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 464l224 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16l-64 0 0-48 64 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-224 0c-35.3 0-64-28.7-64-64l0-64 48 0 0 64c0 8.8 7.2 16 16 16zm64-112L64 352c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L288 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64z" />
    </Icon>
);

export default BringForward;
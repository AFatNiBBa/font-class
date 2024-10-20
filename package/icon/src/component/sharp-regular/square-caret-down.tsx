
import { Icon } from "../../index";

/**
 * A component that renders the `square-caret-down` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-caret-down?s=sharp-regular square-caret-down}
 * @preview ![square-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/square-caret-down.svg)
 */
const SquareCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 432L48 80l352 0 0 352L48 432zM0 480l48 0 352 0 48 0 0-48 0-352 0-48-48 0L48 32 0 32 0 80 0 432l0 48zM96 224L224 352 352 224l0-32L96 192l0 32z" />
    </Icon>
);

export default SquareCaretDown;
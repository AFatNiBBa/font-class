
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-dot` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-dot?s=sharp-thin envelope-dot}
 * @preview ![envelope-dot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/envelope-dot.svg)
 */
const EnvelopeDot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M464 64a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm112 0A64 64 0 1 0 448 64a64 64 0 1 0 128 0zM512 176l0-16c-5.5 0-10.8-.5-16-1.3l0 8.9-240 165L16 167.6 16 80l401.3 0c-.9-5.2-1.3-10.5-1.3-16L16 64 0 64 0 80l0 96L0 432l0 16 16 0 480 0 16 0 0-16 0-256zm-16 11l0 245L16 432l0-245L256 352 496 187z" />
    </Icon>
);

export default EnvelopeDot;
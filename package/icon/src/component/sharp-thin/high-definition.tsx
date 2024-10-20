
import { Icon } from "../../index";

/**
 * A component that renders the `high-definition` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/high-definition?s=sharp-thin high-definition}
 * @preview ![high-definition](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/high-definition.svg)
 */
const HighDefinition: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 416L16 464 16 48l544 0zM16 32L0 32 0 48 0 464l0 16 16 0 544 0 16 0 0-16 0-416 0-16-16 0L16 32zM320 160l0 8 0 176 0 8 8 0 56 0c53 0 96-43 96-96s-43-96-96-96l-56 0-8 0zm64 16c44.2 0 80 35.8 80 80s-35.8 80-80 80l-48 0 0-160 48 0zm-256-8l0-8-16 0 0 8 0 88 0 88 0 8 16 0 0-8 0-80 128 0 0 80 0 8 16 0 0-8 0-88 0-88 0-8-16 0 0 8 0 80-128 0 0-80z" />
    </Icon>
);

export default HighDefinition;
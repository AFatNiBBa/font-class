
import { Icon } from "../../index";

/**
 * A component that renders the `high-definition` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/high-definition?s=sharp-light high-definition}
 * @preview ![high-definition](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/high-definition.svg)
 */
const HighDefinition: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 384L32 448 32 64l512 0zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32zM320 160l0 16 0 160 0 16 16 0 48 0c53 0 96-43 96-96s-43-96-96-96l-48 0-16 0zm64 32c35.3 0 64 28.7 64 64s-28.7 64-64 64l-32 0 0-128 32 0zM144 176l0-16-32 0 0 16 0 80 0 80 0 16 32 0 0-16 0-64 96 0 0 64 0 16 32 0 0-16 0-80 0-80 0-16-32 0 0 16 0 64-96 0 0-64z" />
    </Icon>
);

export default HighDefinition;
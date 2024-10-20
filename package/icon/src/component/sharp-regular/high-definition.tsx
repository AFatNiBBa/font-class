
import { Icon } from "../../index";

/**
 * A component that renders the `high-definition` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/high-definition?s=sharp-regular high-definition}
 * @preview ![high-definition](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/high-definition.svg)
 */
const HighDefinition: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80l0 352L48 432 48 80l480 0zM48 32L0 32 0 80 0 432l0 48 48 0 480 0 48 0 0-48 0-352 0-48-48 0L48 32zM304 160l0 24 0 144 0 24 24 0 56 0c53 0 96-43 96-96s-43-96-96-96l-56 0-24 0zm80 48c26.5 0 48 21.5 48 48s-21.5 48-48 48l-32 0 0-96 32 0zM160 184l0-24-48 0 0 24 0 72 0 72 0 24 48 0 0-24 0-48 64 0 0 48 0 24 48 0 0-24 0-72 0-72 0-24-48 0 0 24 0 48-64 0 0-48z" />
    </Icon>
);

export default HighDefinition;
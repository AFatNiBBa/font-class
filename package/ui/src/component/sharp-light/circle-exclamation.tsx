
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation?s=sharp-light circle-exclamation}
 * @preview ![circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-exclamation.svg)
 */
const CircleExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm16-384l-32 0 0 16 0 128 0 16 32 0 0-16 0-128 0-16zM232 368l48 0 0-48-48 0 0 48z" />
    </Icon>
);

export default CircleExclamation;
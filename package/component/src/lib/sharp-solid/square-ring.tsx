
import { Icon } from "../../index";

/**
 * A component that renders the `square-ring` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-ring?s=sharp-solid square-ring}
 * @preview ![square-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/square-ring.svg)
 */
const SquareRing: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM128 256a96 96 0 1 0 192 0 96 96 0 1 0 -192 0zm96 160a160 160 0 1 1 0-320 160 160 0 1 1 0 320z" />
    </Icon>
);

export default SquareRing;
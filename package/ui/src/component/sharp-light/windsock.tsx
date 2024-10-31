
import { Icon } from "../../index";

/**
 * A component that renders the `windsock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/windsock?s=sharp-light windsock}
 * @preview ![windsock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/windsock.svg)
 */
const Windsock: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0l0 16 0 112 64 0 0-47.4L96 48l32 6.2L512 128l0 160L128 361.8 96 368l0-32.6L96 288l-64 0 0 208 0 16L0 512l0-16L0 272 0 144 0 16 0 0 32 0zm0 160l0 96 64 0 0-96-64 0zm96 169.3l96-18.5 0-205.6L128 86.7l0 41.3 0 32 0 96 0 32 0 41.3zm128-24.6L384 280 384 136 256 111.4l0 193.3zM416 142.1l0 131.8 64-12.3 0-107.1-64-12.3z" />
    </Icon>
);

export default Windsock;
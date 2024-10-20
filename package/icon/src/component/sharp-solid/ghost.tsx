
import { Icon } from "../../index";

/**
 * A component that renders the `ghost` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ghost?s=sharp-solid ghost}
 * @preview ![ghost](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ghost.svg)
 */
const Ghost: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 448L0 480 0 192C0 86 86 0 192 0S384 86 384 192l0 288-48-32-72 64-72-64-72 64L48 448zM160 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Ghost;
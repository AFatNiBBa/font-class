
import { Icon } from "../../index";

/**
 * A component that renders the `block-brick` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick?s=sharp-solid block-brick}
 * @preview ![block-brick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/block-brick.svg)
 */
const BlockBrick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 32l0 80 256 0 0-80L96 32zM64 112l0-80L0 32l0 80 64 0zM0 144l0 96 208 0 0-96L0 144zM0 368l64 0 0-96L0 272l0 96zm0 32l0 80 208 0 0-80L0 400zm240 0l0 80 208 0 0-80-208 0zm208-32l0-96-64 0 0 96 64 0zm-96 0l0-96L96 272l0 96 256 0zm96-224l-208 0 0 96 208 0 0-96zm0-32l0-80-64 0 0 80 64 0z" />
    </Icon>
);

export default BlockBrick;
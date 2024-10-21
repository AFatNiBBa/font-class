
import { Icon } from "../../index";

/**
 * A component that renders the `block-brick` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block-brick?s=sharp-thin block-brick}
 * @preview ![block-brick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/block-brick.svg)
 */
const BlockBrick: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 48l0 80 88 0 16 0 88 0 0-80L128 48zm-16 80l0-80L16 48l0 80 96 0zM16 144l0 104 200 0 0-104L16 144zm0 224l96 0 0-104-96 0 0 104zm0 16l0 80 200 0 0-80-88 0-16 0-96 0zm112-16l192 0 0-104-192 0 0 104zm208 0l96 0 0-104-96 0 0 104zm96 16l-96 0-16 0-88 0 0 80 200 0 0-80zm0-240l-200 0 0 104 200 0 0-104zm0-16l0-80-96 0 0 80 96 0zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default BlockBrick;

import { Icon } from "../../index";

/**
 * A component that renders the `diagram-successor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-successor?s=sharp-solid diagram-successor}
 * @preview ![diagram-successor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/diagram-successor.svg)
 */
const DiagramSuccessor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 288L0 288 0 480l512 0 0-192zM64 160l0-64 144 0 16 0 0 64L64 160zm224 0l0-64 96 0 0 32-64 0 0 32 96 96 96-96 0-32-64 0 0-64 0-32-32 0L288 32l-64 0-16 0L64 32 0 32 0 96l0 64 0 64 64 0 160 0 64 0 0-64z" />
    </Icon>
);

export default DiagramSuccessor;
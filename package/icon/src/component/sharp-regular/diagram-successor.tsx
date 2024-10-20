
import { Icon } from "../../index";

/**
 * A component that renders the `diagram-successor` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-successor?s=sharp-regular diagram-successor}
 * @preview ![diagram-successor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diagram-successor.svg)
 */
const DiagramSuccessor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M369 119l-17-17L318.1 136l17 17 64 64 17 17 17-17 64-64 17-17L480 102.1l-17 17-23 23L440 56l0-24-24 0L288 32l-48 0-32 0L48 32 0 32 0 80l0 96 0 48 48 0 192 0 48 0 0-48 0-96 104 0 0 62.1-23-23zM512 288L0 288 0 480l512 0 0-192zM240 176L48 176l0-96 160 0 32 0 0 96z" />
    </Icon>
);

export default DiagramSuccessor;
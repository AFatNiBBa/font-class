
import { Icon } from "../../index";

/**
 * A component that renders the `memo-pad` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/memo-pad?s=sharp-solid memo-pad}
 * @preview ![memo-pad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/memo-pad.svg)
 */
const MemoPad: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 0L0 96l448 0 0-96L0 0zM0 128L0 512l448 0 0-384L0 128zm96 80l16 0 224 0 16 0 0 32-16 0-224 0-16 0 0-32zm0 96l16 0 224 0 16 0 0 32-16 0-224 0-16 0 0-32zm0 96l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32z" />
    </Icon>
);

export default MemoPad;
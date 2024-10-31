
import { Icon } from "../../index";

/**
 * A component that renders the `ellipsis` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ellipsis?s=sharp-solid ellipsis}
 * @preview ![ellipsis](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/ellipsis.svg)
 */
const Ellipsis: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 304l0-96 96 0 0 96-96 0zm160 0l0-96 96 0 0 96-96 0zm160-96l96 0 0 96-96 0 0-96z" />
    </Icon>
);

export default Ellipsis;
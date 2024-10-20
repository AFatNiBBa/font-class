
import { Icon } from "../../index";

/**
 * A component that renders the `paragraph` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph?s=sharp-light paragraph}
 * @preview ![paragraph](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/paragraph.svg)
 */
const Paragraph: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 192c0-88.4 71.6-160 160-160l64 0 176 0 16 0 0 32-16 0-48 0 0 400 0 16-32 0 0-16 0-400-64 0 0 400 0 16-32 0 0-16 0-112-64 0c-88.4 0-160-71.6-160-160zM256 320l0-256-64 0C121.3 64 64 121.3 64 192s57.3 128 128 128l64 0z" />
    </Icon>
);

export default Paragraph;
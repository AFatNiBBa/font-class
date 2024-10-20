
import { Icon } from "../../index";

/**
 * A component that renders the `paragraph` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph?s=regular paragraph}
 * @preview ![paragraph](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/paragraph.svg)
 */
const Paragraph: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 192c0-88.4 71.6-160 160-160l64 0 168 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0 0 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-376-48 0 0 376c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104-48 0c-88.4 0-160-71.6-160-160zM240 304l0-224-48 0C130.1 80 80 130.1 80 192s50.1 112 112 112l48 0z" />
    </Icon>
);

export default Paragraph;

import { Icon } from "../../index";

/**
 * A component that renders the `paragraph` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph?s=sharp-solid paragraph}
 * @preview ![paragraph](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/paragraph.svg)
 */
const Paragraph: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M192 32l64 0 160 0 32 0 0 64-32 0-32 0 0 352 0 32-64 0 0-32 0-352-32 0 0 352 0 32-64 0 0-32 0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z" />
    </Icon>
);

export default Paragraph;
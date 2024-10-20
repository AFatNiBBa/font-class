
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paragraph` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paragraph?s=duotone paragraph}
 * @preview ![paragraph](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/paragraph.svg)
 */
const Paragraph: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M320 96l0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352-64 0z" />
        <path d="M192 32l64 0 160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L288 96l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-32 0c-88.4 0-160-71.6-160-160s71.6-160 160-160z" />
    </Icon>
);

export default Paragraph;
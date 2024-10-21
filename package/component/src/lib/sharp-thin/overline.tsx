
import { Icon } from "../../index";

/**
 * A component that renders the `overline` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/overline?s=sharp-thin overline}
 * @preview ![overline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/overline.svg)
 */
const Overline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 48l432 0 8 0 0-16-8 0L8 32 0 32 0 48l8 0zm216 80c-88.4 0-160 71.6-160 160l0 32c0 88.4 71.6 160 160 160s160-71.6 160-160l0-32c0-88.4-71.6-160-160-160zM80 288c0-79.5 64.5-144 144-144s144 64.5 144 144l0 32c0 79.5-64.5 144-144 144s-144-64.5-144-144l0-32z" />
    </Icon>
);

export default Overline;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can?s=sharp-duotone-solid trash-can}
 * @preview ![trash-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-can.svg)
 */
const TrashCan: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 96l0 416 384 0 0-416L32 96zm80 64l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16zm96 0l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16zm96 0l32 0 0 16 0 224 0 16-32 0 0-16 0-224 0-16z" />
        <path d="M304 0L144 0 128 32 0 32 0 96l448 0 0-64L320 32 304 0z" />
    </Icon>
);

export default TrashCan;
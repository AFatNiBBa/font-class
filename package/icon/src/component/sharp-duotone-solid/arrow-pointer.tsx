
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-pointer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-pointer?s=sharp-duotone-solid arrow-pointer}
 * @preview ![arrow-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-pointer.svg)
 */
const ArrowPointer: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M125.1 346.6c7.3-8.9 14.6-17.7 21.8-26.6l36.4 0 47.9 102.2 13.6 29-57.9 27.2-13.6-29L125.1 346.6z" />
        <path d="M0 46.9L32 32 319.9 278l.1 42H146.9L29 463.8 0 432V46.9z" />
    </Icon>
);

export default ArrowPointer;
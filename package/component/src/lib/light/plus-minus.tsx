
import { Icon } from "../../index";

/**
 * A component that renders the `plus-minus` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plus-minus?s=light plus-minus}
 * @preview ![plus-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/plus-minus.svg)
 */
const PlusMinus: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M176 208l0 144c0 8.8 7.2 16 16 16s16-7.2 16-16l0-144 144 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-144 0 0-144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 144L32 176c-8.8 0-16 7.2-16 16s7.2 16 16 16l144 0zM16 464c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L32 448c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default PlusMinus;
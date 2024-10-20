
import { Icon } from "../../index";

/**
 * A component that renders the `z` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=sharp-solid z}
 * @preview ![z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/z.svg)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M384 32l0 43.6-7.4 8.9L100.3 416 352 416l32 0 0 64-32 0L32 480 0 480l0-43.6 7.4-8.9L283.7 96 32 96 0 96 0 32l32 0 320 0 32 0z" />
    </Icon>
);

export default Z;
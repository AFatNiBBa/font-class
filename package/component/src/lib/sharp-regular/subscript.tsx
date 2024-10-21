
import { Icon } from "../../index";

/**
 * A component that renders the `subscript` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/subscript?s=sharp-regular subscript}
 * @preview ![subscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/subscript.svg)
 */
const Subscript: typeof Icon = x => (
    <Icon {...x}>
        <path d="M24 64L0 64l0 48 24 0 27.2 0 96 144-96 144L24 400 0 400l0 48 24 0 40 0 12.8 0L84 437.3l92-138 92 138 7.1 10.7 12.8 0 40 0 24 0 0-48-24 0-27.2 0-96-144 96-144 27.2 0 24 0 0-48-24 0-40 0-12.8 0L268 74.7l-92 138L84 74.7 76.8 64 64 64 24 64zM408 288l-24 0 0 48 24 0 16 0 0 128-16 0-24 0 0 48 24 0 16 0 48 0 16 0 24 0 0-48-24 0-16 0 0-152 0-24-24 0-40 0z" />
    </Icon>
);

export default Subscript;
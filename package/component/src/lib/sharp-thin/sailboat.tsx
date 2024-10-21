
import { Icon } from "../../index";

/**
 * A component that renders the `sailboat` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sailboat?s=sharp-thin sailboat}
 * @preview ![sailboat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sailboat.svg)
 */
const Sailboat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 352l-16 0 0-16 0-309.8L256 0l16 20.7L515.6 336 528 352l-20.2 0L272 352zm223.4-16L272 46.9 272 336l223.4 0zM20 384l536 0 20 0-12 16L480 512 96 512 12 400 0 384l20 0zm12 16l72 96 368 0 72-96L32 400zm192-48l-16 0L66.8 352 48 352l9.8-16L208 90.2 224 64l0 30.7L224 336l0 16zM208 120.9L76.5 336 208 336l0-215.1z" />
    </Icon>
);

export default Sailboat;
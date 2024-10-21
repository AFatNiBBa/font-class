
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shirt` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt?s=sharp-duotone-solid shirt}
 * @preview ![shirt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shirt.svg)
 */
const Shirt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 144L88 256l72-58.9L160 512l320 0 0-314.9L552 256l88-112L464 0 432 0c0 61.9-50.1 112-112 112S208 61.9 208 0L176 0 0 144z" />
        <path d="M208 0c0 61.9 50.1 112 112 112s112-50.1 112-112L400 0c0 44.2-35.8 80-80 80s-80-35.8-80-80L208 0z" />
    </Icon>
);

export default Shirt;
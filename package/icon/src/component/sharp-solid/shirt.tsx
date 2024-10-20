
import { Icon } from "../../index";

/**
 * A component that renders the `shirt` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt?s=sharp-solid shirt}
 * @preview ![shirt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shirt.svg)
 */
const Shirt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M225.3 0L176 0 0 144 88 256l72-58.9L160 512l320 0 0-314.9L552 256l88-112L464 0 414.7 0c-7.6 45.4-47.1 80-94.7 80s-87.1-34.6-94.7-80z" />
    </Icon>
);

export default Shirt;
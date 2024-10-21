
import { Icon } from "../../index";

/**
 * A component that renders the `z` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/z?s=regular z}
 * @preview ![z](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/z.svg)
 */
const Z: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 56C0 42.7 10.7 32 24 32l336 0c9.3 0 17.8 5.4 21.8 13.9s2.6 18.4-3.4 25.6L75.5 432 360 432c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 480c-9.3 0-17.8-5.4-21.8-13.9s-2.6-18.4 3.4-25.6L308.5 80 24 80C10.7 80 0 69.3 0 56z" />
    </Icon>
);

export default Z;

import { Icon, generic } from "../../index";

/**
 * A component that renders the `fork` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fork?s=sharp-duotone-solid fork}
 * @preview ![fork](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fork.svg)
 */
const Fork: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M240 155.3c0 19.4 6.4 38.1 18 53.4c2.4 3.2 5.1 6.3 8 9.1c9.4 9.4 18.8 18.8 28.2 28.2c2.9 2.9 5.9 5.5 9.1 8c15.3 11.6 34 18 53.4 18c31.8 0 61.1-17 76.8-44.6L504 104 488 88 384 192l-16-16L464 64 448 48 336 144l-16-16L424 24 408 8 284.6 78.5C257 94.3 240 123.6 240 155.3z" />
        <path d="M258 208.8c2.4 3.2 5.1 6.3 8 9.1l28.2 28.2c2.9 2.9 5.9 5.5 9.1 8L70.6 486.6 48 509.3 2.7 464l22.6-22.6L258 208.8z" />
    </Icon>
);

export default Fork;
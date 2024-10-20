
import { Icon } from "../../index";

/**
 * A component that renders the `angles-up-down` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angles-up-down?s=sharp-thin angles-up-down}
 * @preview ![angles-up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/angles-up-down.svg)
 */
const AnglesUpDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M229.1 486.2l176-144 6.2-5.1-10.1-12.4-6.2 5.1L224 469.7 53.1 329.8l-6.2-5.1L36.7 337.1l6.2 5.1 176 144 5.1 4.1 5.1-4.1zm0-460.4L224 21.7l-5.1 4.1-176 144-6.2 5.1 10.1 12.4 6.2-5.1L224 42.3 394.9 182.2l6.2 5.1 10.1-12.4-6.2-5.1-176-144z" />
    </Icon>
);

export default AnglesUpDown;
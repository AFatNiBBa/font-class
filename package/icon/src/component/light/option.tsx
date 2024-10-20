
import { Icon } from "../../index";

/**
 * A component that renders the `option` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/option?s=light option}
 * @preview ![option](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/option.svg)
 */
const Option: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M178 107.7c-6.1-7.4-15.2-11.7-24.8-11.7L16 96C7.2 96 0 88.8 0 80s7.2-16 16-16l137.3 0c19.2 0 37.4 8.6 49.5 23.5L462 404.3c6.1 7.4 15.2 11.7 24.8 11.7L624 416c8.8 0 16 7.2 16 16s-7.2 16-16 16l-137.3 0c-19.2 0-37.4-8.6-49.5-23.5L178 107.7zM624 64c8.8 0 16 7.2 16 16s-7.2 16-16 16L432 96c-8.8 0-16-7.2-16-16s7.2-16 16-16l192 0z" />
    </Icon>
);

export default Option;
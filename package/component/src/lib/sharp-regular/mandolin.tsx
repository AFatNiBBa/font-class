
import { Icon } from "../../index";

/**
 * A component that renders the `mandolin` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mandolin?s=sharp-regular mandolin}
 * @preview ![mandolin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mandolin.svg)
 */
const Mandolin: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 0L368 48l-31 93.1-49 49C206.9 187.4 0 194.5 0 336c0 97.2 78.8 176 176 176c141.5 0 148.6-206.9 145.9-287.9l49-49L464 144l48-80L448 0zM168.3 245.3c24.5-4.3 49.3-6.3 71.6-7.1l-51.5 51.5c-4-1.1-8.1-1.6-12.4-1.6c-26.5 0-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48c0-4.3-.6-8.5-1.6-12.4l51.5-51.5c-.8 22.3-2.8 47.1-7.1 71.6c-6.5 36.9-17.3 68.6-32.8 90.1c-14 19.3-31.3 30.2-57.9 30.2c-70.7 0-128-57.3-128-128c0-26.6 10.9-43.9 30.2-57.9c21.5-15.6 53.2-26.4 90.1-32.8z" />
    </Icon>
);

export default Mandolin;
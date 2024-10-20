
import { Icon } from "../../index";

/**
 * A component that renders the `trademark` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trademark?s=sharp-regular trademark}
 * @preview ![trademark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/trademark.svg)
 */
const Trademark: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 96l24 0 208 0 24 0 0 48-24 0-80 0 0 248 0 24-48 0 0-24 0-248-80 0L0 144 0 96zm288 24l0-24 36.2 0 7.2 9.8L464 287.3 596.6 105.8l7.2-9.8L640 96l0 24 0 272 0 24-48 0 0-24 0-198.5L483.4 342.2 464 368.7l-19.4-26.5L336 193.5 336 392l0 24-48 0 0-24 0-272z" />
    </Icon>
);

export default Trademark;
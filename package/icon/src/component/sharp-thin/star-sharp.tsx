
import { Icon } from "../../index";

/**
 * A component that renders the `star-sharp` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-sharp?s=sharp-thin star-sharp}
 * @preview ![star-sharp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/star-sharp.svg)
 */
const StarSharp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M351.6 195.6L296.5 25.9 288.1 0l-8.4 25.9L224.5 195.6l-178.4 0-27.2 0 22 16L185.2 316.4 130.1 486.1 121.7 512l22-16L288.1 391.1 432.4 496l22 16L446 486.1 390.9 316.4 535.2 211.6l22-16-27.2 0-178.4 0zm156.4 16L381.5 303.5l-9.4 6.8 3.6 11.1L424 470.1 297.5 378.2l-9.4-6.8-9.4 6.8L152.1 470.1l48.3-148.7 3.6-11.1-9.4-6.8L68.1 211.6l156.4 0 11.6 0 3.6-11.1L288.1 51.8l48.3 148.7 3.6 11.1 11.6 0 156.4 0z" />
    </Icon>
);

export default StarSharp;
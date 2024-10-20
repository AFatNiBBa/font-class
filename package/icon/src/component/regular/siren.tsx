
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=regular siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M345.6 304l48.4 0L375 152.1C371 120 343.8 96 311.5 96l-175 0C104.2 96 77 120 73 152.1L54 304l48.4 0 18.2-146c1-8 7.8-14 15.9-14l175 0c8.1 0 14.9 6 15.9 14l18.2 146zm-165.5 0l11.8-94c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9l-12.2 98 32.2 0zM48 384l352 0 0 48L48 432l0-48zM0 384l0 48c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-48c0-26.5-21.5-48-48-48L48 336c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default Siren;
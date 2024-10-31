
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=thin siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M375 152.1L396 320l-16.1 0L359.1 154c-3-24-23.4-42-47.6-42l-175 0c-24.2 0-44.6 18-47.6 42L68.1 320 52 320 73 152.1C77 120 104.2 96 136.5 96l175 0c32.3 0 59.5 24 63.5 56.1zM143.9 168.7L125 320l-16.1 0 19.2-153.3c.5-4.4 4.5-7.5 8.9-6.9s7.5 4.5 6.9 8.9zM48 368c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l352 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L48 368zM0 400c0-26.5 21.5-48 48-48l352 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-32z" />
    </Icon>
);

export default Siren;
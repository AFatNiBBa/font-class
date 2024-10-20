
import { Icon } from "../../index";

/**
 * A component that renders the `siren` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/siren?s=light siren}
 * @preview ![siren](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/siren.svg)
 */
const Siren: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M363.8 320l32.2 0L375 152.1C371 120 343.8 96 311.5 96l-175 0C104.2 96 77 120 73 152.1L52 320l32.2 0 20.5-164c2-16 15.6-28 31.8-28l175 0c16.1 0 29.8 12 31.8 28l20.5 164zm-185.6 0l13.8-110c1.1-8.8-5.1-16.8-13.9-17.9s-16.8 5.1-17.9 13.9L145.9 320l32.2 0zM48 384l352 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16L48 448c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM0 400l0 32c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-32c0-26.5-21.5-48-48-48L48 352c-26.5 0-48 21.5-48 48z" />
    </Icon>
);

export default Siren;
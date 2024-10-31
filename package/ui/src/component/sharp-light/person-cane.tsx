
import { Icon } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=sharp-light person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M200 56a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm80 0A56 56 0 1 0 168 56a56 56 0 1 0 112 0zM124.9 128l-9.6 0-4.5 8.5-76.9 144 28.2 15.1L112 202.2 112 496l0 16 32 0 0-16 0-144 64 0 0 144 0 16 32 0 0-16 0-312.1 83.8 98.5 24.4-20.7-108.9-128-4.8-5.6-7.4 0-102.2 0zM208 160l0 160-64 0 0-160 64 0zM368 352c8.8 0 16 7.2 16 16l0 128 0 16 32 0 0-16 0-128c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 8 0 16 32 0 0-16 0-8c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default PersonCane;
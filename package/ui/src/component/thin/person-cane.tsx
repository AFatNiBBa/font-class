
import { Icon } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=thin person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M184 56a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm96 0A56 56 0 1 0 168 56a56 56 0 1 0 112 0zM136 248c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 232c0 17.7 14.3 32 32 32s32-14.3 32-32l0-120c0-4.4 3.6-8 8-8s8 3.6 8 8l0 120c0 17.7 14.3 32 32 32s32-14.3 32-32l0-232c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 232c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-120c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 120c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-232zm224 88c13.3 0 24 10.7 24 24l0 144c0 4.4 3.6 8 8 8s8-3.6 8-8l0-144c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 16c0 4.4 3.6 8 8 8s8-3.6 8-8l0-16c0-13.3 10.7-24 24-24zM122.7 175.7c9.3-19.4 28.9-31.7 50.4-31.7l43.6 0c18.8 0 36.3 9.4 46.7 25l81.9 123.4c2.4 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1L276.7 160.2c-13.3-20.1-35.9-32.2-60-32.2l-43.6 0c-27.6 0-52.8 15.8-64.8 40.7L40.8 308.5c-1.9 4-.3 8.8 3.7 10.7s8.8 .3 10.7-3.7l67.5-139.8z" />
    </Icon>
);

export default PersonCane;
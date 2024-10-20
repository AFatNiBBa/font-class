
import { Icon } from "../../index";

/**
 * A component that renders the `person-sledding` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-sledding?s=solid person-sledding}
 * @preview ![person-sledding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/person-sledding.svg)
 */
const PersonSledding: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM35.1 226.7c-11.8-6.1-26.3-1.5-32.4 10.2s-1.5 26.3 10.2 32.4L396.4 468.4c27.3 14.2 59.7 14.4 87.2 .7l15.2-7.6c11.9-5.9 16.7-20.3 10.7-32.2s-20.3-16.7-32.2-10.7l-15.2 7.6c-13.7 6.9-29.9 6.7-43.6-.3l-41.7-21.6c4.5-5.5 7.2-12.5 7.2-20.2l0-80c0-26.5-21.5-48-48-48l-34.7 0L361 196.3c25.2-25.2 7.4-68.3-28.3-68.3L160 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l84 0-59.2 40.3c-23.6 16.1-26 44.8-13.8 64.9L35.1 226.7zM320 320l0 54.6L214.7 320 320 320z" />
    </Icon>
);

export default PersonSledding;
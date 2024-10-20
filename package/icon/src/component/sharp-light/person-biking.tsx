
import { Icon } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=sharp-light person-biking}
 * @preview ![person-biking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-biking.svg)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M392 32a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 80A56 56 0 1 0 392 0a56 56 0 1 0 0 112zM224 384A96 96 0 1 1 32 384a96 96 0 1 1 192 0zM128 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM608 384a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM512 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM330.7 124.1l-10.4-9.4-10.7 9.1-80.4 68.9c-23.9 20.5-21.9 58.1 4 76L320 328.4l0 87.6 0 16 32 0 0-16 0-96 0-8.4-6.9-4.8-93.7-64.4c-8.7-6-9.3-18.5-1.3-25.3l69.7-59.8 69.6 62.6 4.6 4.1 6.1 0 80 0 16 0 0-32-16 0-73.9 0-75.4-67.9z" />
    </Icon>
);

export default PersonBiking;